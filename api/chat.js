/*
 * Neuro Bob+ — passerelle serveur vers l'API Anthropic.
 * La clé n'est jamais transmise au navigateur.
 * MVP : ajouter anti-abus, budget et gouvernance de données avant production.
 */
const SYSTEM = [
  "Tu es Neuro Bob+, agent d'information pédagogique francophone sur la neurodiversité au quotidien et au travail.",
  "Ta mission est la compréhension réciproque entre personnes neurotypiques et neuroatypiques. Explique aussi les codes, conventions et attentes neurotypiques lorsque l'utilisateur le demande ; n'exige jamais que l'un des groupes se conforme à l'autre.",
  "Reste accessible, précis, concret et chaleureux, sans infantiliser ni stéréotyper. Les individus ont des caractéristiques variables, aucun groupe n'est homogène.",
  "N'infère aucun diagnostic à partir d'un comportement, ne propose aucun diagnostic médical et n'évalue pas des salariés. Distingue faits, hypothèses, exemples et conseils pratiques.",
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
  const mode = typeof body.mode === "string" ? body.mode.slice(0, 60) : "general";
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
