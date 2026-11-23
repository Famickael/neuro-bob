import { editorialArticles, editorialCategories } from "./editorial.js";

/* Neuro Bob+ — application sans dépendance.
 * Les messages ne sont jamais sauvegardés ; seuls les réglages d'affichage peuvent l'être (localStorage).
 * Adresses : #accueil, #bibliotheque, #bibliotheque/<rubrique>, #fiche/<id>, #parcours, #bob, #apropos.
 */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const titles = { accueil:"Accueil", bibliotheque:"Bibliothèque", parcours:"Parcours", bob:"S'entraîner avec Bob", apropos:"Cadre d'usage" };
const welcome = "Bonjour, je suis Bob. Décrivez une situation de travail ou posez une question : je vous propose des explications possibles et des pistes à tester.";
const categoryIcons = { neurodiversites:"i-brain", neurocognition:"i-layers", comportements:"i-bubbles", travail:"i-briefcase", sensibilisation:"i-target" };
const featuredIds = ["manager-priorites", "codes-neurotypiques", "module-1-bases"];
const mobileQuery = window.matchMedia("(max-width: 980px)");
let view = "accueil";
let chatMode = "demo";
let orientation = "general";
let pending = false;
let messages = [];
let libraryCategory = "tous";
let currentArticle = null;
// Modules ouverts pendant cette visite : mémoire de session uniquement, rien n'est transmis.
const seenModules = new Set();
try { for (const id of JSON.parse(sessionStorage.getItem("nb-modules-seen") || "[]")) seenModules.add(id); } catch {}
const moduleList = () => editorialArticles.filter(a => a.category === "sensibilisation");
const shortModuleTitle = m => m.title.replace(/^Module \d+ — /, "");

const normalize = value => value.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
function node(tag, text, cls) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (typeof text === "string") el.textContent = text;
  return el;
}
function icon(id) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
  svg.setAttribute("aria-hidden","true");
  const use = document.createElementNS("http://www.w3.org/2000/svg","use");
  use.setAttribute("href","#"+id);
  svg.append(use);
  return svg;
}
const reduceMotion = () => document.documentElement.classList.contains("reduce-motion") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ───────── Navigation ───────── */
function setHash(hash, push) {
  if (location.hash === hash) return;
  if (push) history.pushState(null, "", hash); else history.replaceState(null, "", hash);
}
function navigate(next, { focus = true, push = true } = {}) {
  if (!titles[next]) next = "accueil";
  view = next;
  $$(".page").forEach(section => { section.hidden = section.dataset.page !== next; });
  $$(".nav-button").forEach(button => {
    const active = button.dataset.view === next;
    button.classList.toggle("is-current", active);
    if (active) button.setAttribute("aria-current","page"); else button.removeAttribute("aria-current");
  });
  document.title = titles[next] + " — Neuro Bob+";
  if (next === "bibliotheque") setHash("#bibliotheque" + (libraryCategory !== "tous" ? "/" + libraryCategory : ""), push);
  else setHash("#" + next, push);
  closeMenu(false);
  window.scrollTo({ top:0, behavior: reduceMotion() ? "instant" : "smooth" });
  if (focus) $("[data-page='" + next + "'] h1")?.focus({ preventScroll:true });
}
function openLibrary(category, options) {
  libraryCategory = editorialCategories.some(c => c.id === category) ? category : "tous";
  renderLibrary();
  navigate("bibliotheque", options);
}
function routeFromHash() {
  const [first, second] = location.hash.slice(1).split("/");
  if (first === "fiche" && second) {
    if (!view || $("[data-page='" + view + "']").hidden) navigate("bibliotheque", { focus:false, push:false });
    openEditorial(decodeURIComponent(second), false);
    return;
  }
  if ($("#editorial-dialog").open) $("#editorial-dialog").close();
  if (first === "bibliotheque") { openLibrary(second || "tous", { focus:false, push:false }); return; }
  navigate(titles[first] ? first : "accueil", { focus:false, push:false });
}

/* ───────── Menu mobile ───────── */
function syncSidebar() {
  const sidebar = $("#sidebar");
  sidebar.inert = mobileQuery.matches && !sidebar.classList.contains("is-open");
}
function openMenu() {
  $("#sidebar").classList.add("is-open");
  $("#mobile-menu").setAttribute("aria-expanded","true");
  $("#mobile-menu").setAttribute("aria-label","Fermer le menu");
  $("#mobile-backdrop").hidden = false;
  syncSidebar();
  $(".nav-button.is-current")?.focus();
}
function closeMenu(returnFocus = true) {
  const wasOpen = $("#sidebar").classList.contains("is-open");
  $("#sidebar").classList.remove("is-open");
  $("#mobile-menu").setAttribute("aria-expanded","false");
  $("#mobile-menu").setAttribute("aria-label","Ouvrir le menu");
  $("#mobile-backdrop").hidden = true;
  syncSidebar();
  if (wasOpen && returnFocus) $("#mobile-menu").focus();
}

/* ───────── Conversation ───────── */
function draftQuestion(text) {
  navigate("bob", { focus:false });
  $("#chat-input").value = text;
  $("#chat-input").focus();
}
function setOrientation(value) {
  orientation = value;
  $$(".topic-chip").forEach(chip => {
    const on = chip.dataset.orientation === value;
    chip.classList.toggle("is-selected", on);
    chip.setAttribute("aria-pressed", String(on));
  });
}
function switchMode(mode) {
  if (mode === chatMode) return;
  chatMode = mode;
  messages = [];
  drawWelcome();
  $("#select-demo").classList.toggle("is-selected", mode==="demo");
  $("#select-claude").classList.toggle("is-selected", mode==="claude");
  $("#select-demo").setAttribute("aria-pressed", String(mode==="demo"));
  $("#select-claude").setAttribute("aria-pressed", String(mode==="claude"));
  $("#claude-disclosure").hidden = mode!=="claude";
  $("#demo-disclosure").hidden = mode!=="demo";
  $("#claude-consent").checked = false;
  $("#chat-mode-label").textContent = mode==="demo" ? "Mode démonstration" : "IA en ligne — accord requis avant l'envoi";
  $("#chat-input").focus();
}
function makeMessage(role, text, simulated = false) {
  const item = node("div", null, "message message-" + (role==="assistant" ? "bot" : "user"));
  const inner = node("div", null, "message-inner");
  if (role === "assistant") {
    const avatar = node("img", null, "message-avatar");
    avatar.src = "./assets/characters/trim/bob-avatar.png"; avatar.alt = ""; avatar.width = 32; avatar.height = 32;
    item.append(avatar);
  }
  inner.append(node("span", role==="assistant" ? "Bob" : "Vous", "message-author"), node("div", text, "message-bubble"));
  if (role === "assistant") {
    const meta = node("div", null, "message-meta");
    if (simulated) meta.append(node("span", "Exemple local, sans génération IA"));
    if ("speechSynthesis" in window) {
      const listen = node("button", null, "listen-button");
      listen.type = "button";
      listen.append(icon("i-volume"), document.createTextNode("Écouter"));
      listen.addEventListener("click", () => speak(text));
      meta.append(listen);
    }
    inner.append(meta);
  }
  item.append(inner);
  return item;
}
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "fr-FR"; msg.rate = .92;
  window.speechSynthesis.speak(msg);
}
function drawWelcome() { $("#chat-stream").replaceChildren(makeMessage("assistant", welcome, false)); }
function addMessage(role, text, simulated = false) {
  const stream = $("#chat-stream");
  stream.append(makeMessage(role, text, simulated));
  stream.scrollTop = stream.scrollHeight;
}
function demoAnswer(question) {
  const q=normalize(question);
  // Exemples scénarisés, non générés par une IA : montrer la profondeur visée, sans expertise individuelle.
  // Priorité absolue : un message de détresse ne doit jamais recevoir une réponse générique.
  if (/(me faire du mal|me tuer|suicid|envie d.en finir|plus envie de vivre|me suicider|mettre fin a mes jours|je veux mourir|scarif)/.test(q))
    return "Ce que vous écrivez est important et je ne veux pas y répondre par un simple conseil.\n\nSi vous êtes en danger maintenant, appelez le 15 (SAMU) ou le 112.\n\nEn France, le 3114 (numéro national de prévention du suicide) répond gratuitement, 24 h/24 et 7 j/7, que ce soit pour vous ou pour un proche.\n\nVous pouvez aussi contacter le médecin du travail, votre médecin traitant ou une personne de confiance.\n\nNeuro Bob+ est un outil de sensibilisation : il ne peut pas vous accompagner dans une situation de crise, mais ces interlocuteurs le peuvent.";
  if (/(manager|responsable|collaborateur|collegue)/.test(q) && /(interrupt|prioris|changemen|comportement)/.test(q))
    return "Dans ce type de situation, il est utile de distinguer le comportement observé de son interprétation.\n\n1. Mécanismes possibles : la priorisation et le contrôle des impulsions mobilisent notamment des fonctions exécutives. Des difficultés dans ces domaines peuvent apparaître dans plusieurs situations, liées ou non à un trouble du neurodéveloppement ; elles ne sont spécifiques à aucun profil, et rien ici ne permet de dire de quoi il s'agit pour cette personne.\n\n2. Autres explications : surcharge, consignes contradictoires, manque de clarté des priorités, stress, rythme de réunion ou contexte relationnel.\n\n3. Que tester ? Clarifiez les priorités par écrit, annoncez les changements suffisamment tôt lorsque c'est possible, instaurez un cadre de prise de parole et demandez ce qui facilite le travail de la personne.\n\nSi le collaborateur vous a lui-même parlé d'un TND et souhaite échanger à ce sujet, vous pouvez approfondir les connaissances correspondantes sans réduire tous ses comportements au diagnostic.\n\nPour approfondir, consultez « Un collaborateur interrompt et peine à prioriser » dans la Bibliothèque. Réponse d'exemple, préparée à l'avance ; elle ne constitue pas une analyse clinique.";
  if (/je suis neurotypique/.test(q))
    return "Vous pouvez tout à fait chercher à comprendre la neurodiversité, y compris comme collègue ou manager.\n\nSelon la situation, Bob peut vous expliquer les fonctions cognitives en jeu (attention, mémoire de travail, planification, inhibition, sensorialité), les variations individuelles et les mécanismes possibles dans certains TND.\n\nPour une réponse utile, décrivez un comportement ou une difficulté concrète : ce qui se passe, dans quel contexte et quelles conséquences vous observez. Nous examinerons les hypothèses neurocognitives ET les explications organisationnelles, puis des ajustements possibles.\n\nLa Bibliothèque propose déjà des fiches TDAH, DYS, autisme et des cas RH (contenus encore à valider).";
  if (/je suis neuroatypique/.test(q))
    return "Je peux vous aider à comprendre des fonctions cognitives, à décoder des codes neurotypiques et à identifier des stratégies utiles selon vos besoins, sans chercher à vous faire rentrer dans une norme.\n\nPar exemple, lorsque quelqu'un dit « on verra », il peut exprimer une réelle incertitude, garder une porte ouverte ou éviter un refus direct. La meilleure manière d'en connaître le sens reste de demander une précision.\n\nVous pouvez aussi explorer une situation de travail, préparer une formulation ou consulter les fiches de la Bibliothèque. Cette réponse est une démonstration scénarisée.";
  if (/sous.entendu|implicite|neurotypique|codes sociaux|convention|dire oui/.test(q))
    return "Il n'existe pas un seul « comportement neurotypique », mais certaines habitudes sociales reposent sur l'implicite.\n\nExemple : « Ce serait bien de finir ça rapidement » peut être une suggestion ou une demande prioritaire selon le contexte.\n\nQuelques pistes :\n• Demander : « Tu souhaites que je le traite avant quelle date ? »\n• Reformuler le sens compris avant d'agir.\n• Expliquer que les consignes directes vous aident, sans devoir vous justifier.\n\nL'objectif n'est pas de deviner les intentions, mais de rendre les attentes explicites ensemble.";
  if (/reunion|am[eé]nagement|concentration|interruption|planning|priorit/.test(q))
    return "Une piste est de modifier le cadre plutôt que de supposer les besoins d'une personne.\n\nPour une réunion, on peut par exemple :\n• envoyer le sujet et les objectifs à l'avance ;\n• alterner échange oral et contributions écrites ;\n• annoncer les changements de programme ;\n• vérifier les décisions et les délais à la fin.\n\nCes ajustements sont à tester avec les personnes concernées : ce qui aide l'une peut gêner une autre.";
  if (/diagnostic|demande|besoin|d[eé]voiler|r[eé]v[eé]ler/.test(q))
    return "On peut commencer par une difficulté concrète plutôt que par une information médicale.\n\nExemple de formulation : « Pour travailler efficacement, j'ai besoin de consignes écrites et d'échéances explicites. Peut-on essayer cette organisation pendant deux semaines et faire le point ? »\n\nCela ne remplace pas les démarches RH ou de santé au travail éventuellement nécessaires pour certains aménagements, mais permet d'ouvrir une discussion respectueuse.";
  if (/malentendu|feedback|conflit|communication|autis|dys|tdah|neuroatypique/.test(q))
    return "Une bonne première étape consiste à décrire ce qui s'est passé sans conclure sur le fonctionnement de l'autre.\n\nVous pourriez essayer :\n• « Voici ce que j'ai compris. Est-ce bien ce que tu voulais dire ? »\n• « Quelle façon de communiquer serait la plus claire pour nous deux ? »\n• « Sur quoi pouvons-nous nous mettre d'accord pour la prochaine fois ? »\n\nUn comportement isolé ne permet pas d'inférer un diagnostic. Une personne reste toujours plus complexe qu'une catégorie.";
  return "Dans Neuro Bob+, l'idée est d'examiner une situation sans juger ni diagnostiquer les personnes.\n\nTrois questions peuvent aider :\n• Quel fait concret ou quel échange pose difficulté ?\n• Quelles interprétations différentes sont possibles ?\n• Quelle clarification ou quel ajustement pourrait convenir aux personnes concernées ?\n\nCette réponse est un exemple préparé à l'avance. Avec l'IA en ligne, Bob répond à votre situation précise.";
}
async function submitQuestion() {
  if (pending) return;
  const input = $("#chat-input");
  const question = input.value.trim();
  if (!question) { input.focus(); return; }
  if (chatMode === "claude" && !$("#claude-consent").checked) {
    $("#claude-consent").focus();
    $("#chat-mode-label").textContent = "Cochez votre accord avant l'envoi.";
    return;
  }
  input.value = "";
  messages.push({ role:"user", content:question });
  addMessage("user", question);
  pending = true;
  $("#chat-send").disabled = true;
  if (chatMode === "demo") {
    const reply = demoAnswer(question);
    messages.push({ role:"assistant", content:reply });
    addMessage("assistant", reply, true);
    pending = false;
    $("#chat-send").disabled = false;
    input.focus();
    return;
  }
  const stream = $("#chat-stream");
  const waiting = makeMessage("assistant", "Bob réfléchit à votre question…");
  stream.append(waiting); stream.scrollTop = stream.scrollHeight;
  try {
    const response = await fetch("/api/chat", {
      method:"POST", headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({ messages:messages.slice(-12), mode:orientation })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Le service ne répond pas.");
    const reply = typeof data.reply === "string" ? data.reply.trim() : "";
    if (!reply) throw new Error("Aucune réponse reçue.");
    messages.push({ role:"assistant", content:reply });
    waiting.remove();
    addMessage("assistant", reply);
  } catch (error) {
    waiting.remove();
    // Ne pas garder dans l'historique distant un message resté sans réponse.
    messages.pop();
    addMessage("assistant", "Le service d'IA ne répond pas (" + (error.message || "erreur inconnue") + ").\n\nVous pouvez réessayer ou repasser en mode démonstration.");
    input.value = question;
  } finally {
    pending = false;
    $("#chat-send").disabled = false;
    input.focus();
  }
}

/* ───────── Réglages d'affichage ───────── */
function loadSettings() {
  try {
    const json = JSON.parse(localStorage.getItem("neuro-bob-display") || "{}");
    return { large:!!json.large, contrast:!!json.contrast, motion:!!json.motion, simple:!!json.simple };
  } catch { return { large:false, contrast:false, motion:false, simple:false }; }
}
function applySettings() {
  const controls = { large:$("#setting-large").checked, contrast:$("#setting-contrast").checked, motion:$("#setting-motion").checked, simple:$("#setting-simple").checked };
  const root = document.documentElement;
  root.classList.toggle("text-large", controls.large);
  root.classList.toggle("high-contrast", controls.contrast);
  root.classList.toggle("reduce-motion", controls.motion);
  root.classList.toggle("simple-mode", controls.simple);
  try { localStorage.setItem("neuro-bob-display", JSON.stringify(controls)); } catch {}
}

/* ───────── Bibliothèque ───────── */
function statusLabel(article) {
  if (article.sources.length) return "Sources citées · relecture en cours";
  return article.status === "demo" ? "Exemple de langage · relecture en cours" : "Sources à compléter · relecture en cours";
}
function articleCard(article) {
  const b = node("button", null, "card library-card");
  b.type = "button";
  b.dataset.category = article.category;
  const head = node("span", null, "library-card-head");
  const ic = node("span", null, "card-icon"); ic.append(icon(categoryIcons[article.category] || "i-book"));
  head.append(ic, node("span", article.format + " · " + article.readingMinutes + " min", "library-meta"));
  const more = node("span", "Lire la fiche", "card-link"); more.append(icon("i-arrow"));
  b.append(head, node("strong", article.title), node("span", article.abstract, "card-text"), node("span", statusLabel(article), "library-status"), more);
  b.addEventListener("click", () => openEditorial(article.id));
  return b;
}
function renderLibrary() {
  const filters = $("#library-filters");
  const grid = $("#library-grid");
  if (!filters || !grid) return;
  filters.replaceChildren();
  for (const category of editorialCategories) {
    const b = node("button", category.label, "filter-pill" + (libraryCategory === category.id ? " is-selected" : ""));
    b.type = "button";
    b.dataset.category = category.id;
    const total = category.id === "tous" ? editorialArticles.length : editorialArticles.filter(a => a.category === category.id).length;
    b.append(node("span", String(total), "pill-count"));
    b.setAttribute("aria-pressed", String(libraryCategory === category.id));
    b.addEventListener("click", () => {
      libraryCategory = category.id;
      renderLibrary();
      setHash("#bibliotheque" + (category.id !== "tous" ? "/" + category.id : ""), false);
    });
    filters.append(b);
  }
  const search = normalize($("#library-search")?.value?.trim() || "");
  grid.replaceChildren();
  const filtered = editorialArticles.filter(a => {
    const matchCategory = libraryCategory === "tous" || a.category === libraryCategory;
    const all = normalize([a.title, a.abstract, a.format, ...a.sections.map(s => s.title + " " + s.text)].join(" "));
    return matchCategory && (!search || all.includes(search));
  });
  $("#library-count").textContent = filtered.length ? filtered.length + " fiche" + (filtered.length > 1 ? "s" : "") : "";
  if (!filtered.length) {
    grid.append(node("p", "Aucune fiche ne correspond à cette recherche. Essayez un autre mot, ou demandez à Bob.", "no-results"));
    return;
  }
  for (const article of filtered) grid.append(articleCard(article));
}
function renderFeatured() {
  const grid = $("#featured-grid");
  grid.replaceChildren(...featuredIds.map(id => editorialArticles.find(a => a.id === id)).filter(Boolean).map(articleCard));
}
function renderParcours() {
  const list = $("#parcours-list");
  const modules = moduleList();
  list.replaceChildren(...modules.map((m, index) => {
    const done = seenModules.has(m.id);
    const li = node("li", null, "parcours-step" + (done ? " is-done" : ""));
    const number = node("span", done ? null : String(index + 1), "step-number");
    if (done) number.append(icon("i-check"));
    number.setAttribute("aria-hidden", "true");
    li.append(number);
    const body = node("div", null, "step-body");
    const title = shortModuleTitle(m);
    body.append(node("h2", title), node("p", m.abstract, "card-text"), node("p", m.readingMinutes + " min · " + m.sections.map(s => s.title).join(" · "), "library-meta"));
    if (done) body.append(node("p", "Module ouvert pendant cette visite", "step-done"));
    const open = node("button", "Ouvrir le module", "quiet-button");
    open.type = "button";
    open.addEventListener("click", () => openEditorial(m.id));
    li.append(body, open);
    return li;
  }));
}
/* Accueil : panneau « Votre parcours » et compteurs, calculés depuis editorial.js */
function renderJourney() {
  const modules = moduleList();
  const done = modules.filter(m => seenModules.has(m.id)).length;
  $("#journey-status").textContent = done
    ? done + " module" + (done > 1 ? "s" : "") + " ouvert" + (done > 1 ? "s" : "") + " sur " + modules.length
    : modules.length + " modules, de 15 à 45 minutes";
  $("#journey-fill").style.width = (modules.length ? Math.round(done / modules.length * 100) : 0) + "%";
  $("#journey-list").replaceChildren(...modules.map((m, index) => {
    const li = document.createElement("li");
    const seen = seenModules.has(m.id);
    const b = node("button", null, "journey-item" + (seen ? " is-done" : ""));
    b.type = "button";
    b.dataset.article = m.id;
    const num = node("span", seen ? null : String(index + 1), "journey-num");
    num.setAttribute("aria-hidden", "true");
    if (seen) num.append(icon("i-check"));
    b.append(num, node("span", shortModuleTitle(m)));
    if (seen) b.append(node("span", " (ouvert)", "sr-only"));
    li.append(b);
    return li;
  }));
}
function renderCounts() {
  for (const el of $$("[data-count]")) {
    const n = editorialArticles.filter(a => a.category === el.dataset.count).length;
    const unit = el.dataset.unit || "fiche";
    el.textContent = n + " " + unit + (n > 1 ? "s" : "");
  }
}
function markModuleSeen(a) {
  if (a.category !== "sensibilisation" || seenModules.has(a.id)) return;
  seenModules.add(a.id);
  try { sessionStorage.setItem("nb-modules-seen", JSON.stringify([...seenModules])); } catch {}
  renderJourney();
  renderParcours();
}
function openEditorial(id, push = false) {
  const a = editorialArticles.find(item => item.id === id);
  if (!a) return;
  currentArticle = a;
  markModuleSeen(a);
  $("#editorial-title").textContent = a.title;
  $("#editorial-type").textContent = a.format + " · " + a.readingMinutes + " min";
  $("#editorial-abstract").textContent = a.abstract;
  $("#editorial-status").textContent = a.status === "demo"
    ? "Fiche documentée, en cours de relecture par des experts et des personnes concernées."
    : "Information générale, en cours de relecture par des experts et des personnes concernées.";
  const sections = $("#editorial-sections"); sections.replaceChildren();
  for (const item of a.sections) {
    const section = document.createElement("section");
    section.append(node("h3", item.title), node("p", item.text));
    sections.append(section);
  }
  const sources = $("#editorial-sources-list"); sources.replaceChildren();
  if (!a.sources.length) {
    sources.append(node("p", a.status === "demo"
      ? "Cette fiche illustre des usages de langage ; aucune source académique particulière n'est revendiquée."
      : "Sources à compléter lors de la relecture (institutions de santé, recherche, associations de personnes concernées)."));
  } else {
    for (const src of a.sources) {
      const entry = node("div", null, "editorial-source");
      const link = node("a", src.name + " (" + src.date + ")");
      link.href = src.url; link.target = "_blank"; link.rel = "noopener noreferrer";
      link.append(icon("i-external"));
      entry.append(link, node("p", "Limite : " + src.limitation));
      sources.append(entry);
    }
  }
  setHash("#fiche/" + a.id, push);
  const dialog = $("#editorial-dialog");
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
function closeEditorial() {
  const dialog = $("#editorial-dialog");
  if (dialog.open) dialog.close();
}

/* ───────── Initialisation ───────── */
function initialize() {
  // GitHub Pages est un hébergement statique : ne pas promettre une IA qui ne peut pas répondre.
  if (window.location.hostname.endsWith(".github.io")) {
    const onlineButton = $("#select-claude");
    onlineButton.disabled = true;
    onlineButton.setAttribute("aria-disabled", "true");
    onlineButton.textContent = "IA en ligne (indisponible ici)";
    $("#demo-disclosure").textContent =
      "Cette démonstration utilise des réponses scénarisées, pas une IA générative. L'IA en ligne nécessite un serveur sécurisé, absent de cette version.";
  }
  const preferences = loadSettings();
  $("#setting-large").checked = preferences.large;
  $("#setting-contrast").checked = preferences.contrast;
  $("#setting-motion").checked = preferences.motion;
  $("#setting-simple").checked = preferences.simple;
  applySettings();
  drawWelcome();
  renderLibrary();
  renderFeatured();
  renderParcours();
  renderJourney();
  renderCounts();

  $("#library-search").addEventListener("input", renderLibrary);
  const editorialDialog = $("#editorial-dialog");
  $("#editorial-close").addEventListener("click", closeEditorial);
  editorialDialog.addEventListener("close", () => { if (location.hash.startsWith("#fiche/")) setHash(view === "bibliotheque" && libraryCategory !== "tous" ? "#bibliotheque/" + libraryCategory : "#" + view, false); });
  editorialDialog.addEventListener("click", event => { if (event.target === editorialDialog) closeEditorial(); });
  $("#editorial-ask").addEventListener("click", () => {
    if (!currentArticle) return;
    const text = currentArticle.prompt;
    closeEditorial();
    draftQuestion(text);
  });
  $("#editorial-copy").addEventListener("click", async () => {
    const button = $("#editorial-copy");
    try { await navigator.clipboard.writeText(location.href); button.textContent = "Lien copié"; }
    catch { button.textContent = "Copie impossible"; }
    setTimeout(() => { button.textContent = "Copier le lien"; }, 2000);
  });

  document.addEventListener("click", event => {
    const article = event.target.closest("[data-article]");
    if (article) { openEditorial(article.dataset.article); return; }
    const library = event.target.closest("[data-library]");
    if (library) { openLibrary(library.dataset.library); return; }
    const nav = event.target.closest("[data-view]");
    if (nav) { navigate(nav.dataset.view); return; }
    const prompt = event.target.closest("[data-prompt]");
    if (prompt) draftQuestion(prompt.dataset.prompt);
  });
  $("#quick-form").addEventListener("submit", event => {
    event.preventDefault();
    const value = $("#quick-question").value.trim();
    if (!value) return;
    $("#quick-question").value = "";
    draftQuestion(value);
    submitQuestion();
  });
  $("#chat-form").addEventListener("submit", event => { event.preventDefault(); submitQuestion(); });
  $("#chat-input").addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey && !event.isComposing) { event.preventDefault(); submitQuestion(); }
  });
  $("#reset-chat").addEventListener("click", () => {
    if (pending) return;
    messages = []; drawWelcome(); $("#chat-input").value = ""; $("#chat-input").focus();
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  });
  $("#select-demo").addEventListener("click", () => { if (!pending) switchMode("demo"); });
  $("#select-claude").addEventListener("click", () => { if (!pending) switchMode("claude"); });
  $$(".topic-chip").forEach(chip => chip.addEventListener("click", () => setOrientation(chip.dataset.orientation)));

  $("#mobile-menu").addEventListener("click", () => $("#sidebar").classList.contains("is-open") ? closeMenu() : openMenu());
  $("#close-menu").addEventListener("click", () => closeMenu());
  $("#mobile-backdrop").addEventListener("click", () => closeMenu());
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && $("#sidebar").classList.contains("is-open")) closeMenu();
  });
  mobileQuery.addEventListener("change", syncSidebar);
  syncSidebar();

  const settings = $("#settings-dialog");
  $("#open-settings").addEventListener("click", () => { $("#settings-status").textContent = ""; settings.showModal(); });
  $("#close-settings").addEventListener("click", () => settings.close());
  $("#save-settings").addEventListener("click", () => { applySettings(); settings.close(); });
  $("#reset-settings").addEventListener("click", () => {
    $$(".settings-row input").forEach(box => { box.checked = false; });
    applySettings();
    $("#settings-status").textContent = "Réglages réinitialisés.";
  });
  $$(".settings-row input").forEach(input => input.addEventListener("change", applySettings));
  settings.addEventListener("click", event => { if (event.target === settings) settings.close(); });

  window.addEventListener("popstate", routeFromHash);
  window.addEventListener("beforeunload", () => { if ("speechSynthesis" in window) window.speechSynthesis.cancel(); });
  if (location.hash) routeFromHash();
  else history.replaceState(null, "", "#accueil");
}
initialize();
