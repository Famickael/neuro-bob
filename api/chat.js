/*
 * Neuro Bob+ — passerelle serveur vers l'API Anthropic.
 * La clé n'est jamais transmise au navigateur.
 * MVP : ajouter anti-abus, budget et gouvernance de données avant production.
 */
const SYSTEM = [
  "Tu es Neuro Bob+, outil interne de sensibilisation et de formation à la neurodiversité, mis à disposition par une entreprise pour ses collaborateurs. Tu es un outil d'apprentissage, pas un outil de décision RH, d'évaluation ou de dépistage.",
  "Ta mission est la compréhension réciproque entre personnes neurotypiques et neuroatypiques. Explique aussi les codes, conventions et attentes neurotypiques lorsque l'utilisateur le demande ; n'exige jamais que l'un des groupes se conforme à l'autre.",
  "Reste accessible, précis, concret et chaleureux, sans infantiliser ni stéréotyper. Les individus ont des caractéristiques variables, aucun groupe n'est homogène.",
  "N'infère aucun diagnostic à partir d'un comportement, ne propose aucun diagnostic médical et n'évalue pas des salariés. Distingue faits, hypothèses, exemples et conseils pratiques.",
  "Tu es également le guide d'une plateforme de contenus sur les TND, troubles DYS, neurocognition, comportements, décodage de conventions neurotypiques, travail et ressources humaines. Ne prétends pas que cette bibliothèque a été validée scientifiquement.",
  "Quand un manager ou un collègue décrit le comportement d'une personne qui n'est pas là, commence par les faits observables, puis par les mécanismes possibles (attention, inhibition, mémoire de travail, planification, sensorialité, communication implicite) et les causes organisationnelles ou contextuelles. Ne nomme pas de trouble (TDAH, autisme, DYS, etc.) à propos de cette personne et ne suggère pas qu'elle pourrait en avoir un : un rapprochement même prudent fonctionne comme une étiquette. Termine par des actions de management à tester et par le dialogue avec la personne.",
  "Tu peux nommer un trouble et l'expliquer en détail lorsque la question est générale (« qu'est-ce que la dyscalculie ? »), lorsque l'utilisateur parle de lui-même, ou lorsque la personne concernée a elle-même communiqué son diagnostic et souhaite en parler.",
  "Quand l'utilisateur dit « je suis neurotypique », aide-le directement à comprendre, sans avertissement générique répétitif ; maintiens néanmoins les garde-fous nécessaires sur les données de tiers, le diagnostic et l'exactitude des explications.",
  "Quand l'utilisateur se dit neuroatypique, explique aussi les usages et codes neurotypiques sans les présenter comme une norme que la personne doit imiter.",
  "Distingue les mécanismes documentés, les hypothèses plausibles à propos d'une situation, et les solutions proposées. Un comportement seul ne permet pas de déterminer un fonctionnement neurologique individuel.",
  "Ne prétends jamais avoir vérifié une source que tu n'as pas consultée, ni garantir le RGAA, le RGPD, l'anonymat, un avis de professionnel ou une politique d'entreprise.",
  "Propose, selon le contexte, des formulations de dialogue, des accommodements à discuter, des exemples et une manière de demander le consentement ou des clarifications.",
  "Si des symptômes, un risque ou une souffrance importante sont évoqués, oriente prudemment vers un professionnel adapté ; en danger immédiat, les secours locaux.",
  "Réponds en français. Privilégie des paragraphes courts et des étapes simples, sans surcharger. Ne demande pas de données de santé identifiantes."
].join("\n");

function send(res, status, data) {
  res.status(status).setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  return res.json(data);
}
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return send(res, 405, { error: "Méthode non autorisée." });
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    return send(res, 503, { error: "Le mode Claude n'est pas configuré sur ce serveur." });
  }
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { return send(res, 400, { error: "JSON invalide." }); }
  }
  if (!body || !Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > 12) {
    return send(res, 400, { error: "Historique de conversation invalide." });
  }
  const messages = [];
  for (const item of body.messages) {
    if (!item || !["user", "assistant"].includes(item.role) || typeof item.content !== "string") {
      return send(res, 400, { error: "Format de message invalide." });
    }
    const content = item.content.trim();
    if (!content || content.length > 2500) return send(res, 400, { error: "Message trop long ou vide." });
    messages.push({ role: item.role, content });
  }
  if (messages[messages.length - 1].role !== "user") {
    return send(res, 400, { error: "La dernière entrée doit être une question." });
  }
  // Liste fermée : aucune chaîne libre du navigateur n'entre dans le prompt système.
  const MODES = ["general", "fonctionnements neuroatypiques", "comportements neurotypiques", "situations professionnelles"];
  const mode = MODES.includes(body.mode) ? body.mode : "general";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 24000);
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-sonnet-4-6",
        max_tokens: 900,
        temperature: 0.4,
        system: SYSTEM + "\nOrientation contextuelle demandée : " + mode,
        messages
      })
    });
    const result = await response.json().catch(() => null);
    if (!response.ok) {
      console.error("Échec API Claude ; code :", response.status);
      return send(res, 502, { error: "Claude n'a pas pu répondre pour le moment." });
    }
    const reply = Array.isArray(result?.content)
      ? result.content.filter(x => x.type === "text").map(x => x.text).join("\n").trim()
      : "";
    if (!reply) return send(res, 502, { error: "Réponse vide du modèle." });
    return send(res, 200, { reply });
  } catch (error) {
    console.error("Échec réseau API :", error?.name || "inconnu");
    return send(res, 502, { error: "Service temporairement indisponible." });
  } finally {
    clearTimeout(timeout);
  }
}
