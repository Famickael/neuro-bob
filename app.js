/* Neuro Bob+ — application de démonstration sans dépendance.
 * Les messages ne sont pas sauvegardés ; seuls les réglages visuels peuvent l'être.
 */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const titles = { accueil:"Accueil", discuter:"Discuter", explorer:"Explorer", ressources:"Ressources", apropos:"À propos" };
const welcome = "Bonjour ! Je suis là pour explorer avec vous différentes façons de penser, ressentir et communiquer. Quelle question avez-vous en tête ?";
let view = "accueil";
let chatMode = "demo";
let orientation = "general";
let pending = false;
let messages = [];

const topics = [
  {
    title:"Comprendre les codes neurotypiques",
    tag:"decodage", label:"Comprendre l'autre", icon:"💬",
    summary:"Sous-entendus, usages sociaux, attentes implicites : des conventions à rendre explicites.",
    description:"Dans certains contextes, les conversations reposent sur des messages indirects ou des habitudes partagées. Ces codes sont variables : aucune personne neurotypique ne se comporte exactement comme une autre.",
    points:["Demander à expliciter ce qui est attendu plutôt que de deviner.","Vérifier le sens d'une consigne : « Quand vous dites bientôt, quelle échéance avez-vous en tête ? »","Privilégier une reformulation simple et ouverte, sans présumer de l'intention de l'autre."],
    question:"Peux-tu m'aider à décoder les attentes implicites et certains comportements neurotypiques au travail ?"
  },
  {
    title:"Découvrir les fonctionnements neuroatypiques",
    tag:"decodage", label:"Comprendre l'autre", icon:"🧠",
    summary:"Explorer les différences sans réduire une personne à un diagnostic ou un stéréotype.",
    description:"Les expériences des personnes neuroatypiques sont diverses et dépendent des individus et des environnements. Cette rubrique aide à poser de meilleures questions sur les besoins concrets, sans interpréter des comportements comme des indices de diagnostic.",
    points:["Parler d'une situation observable plutôt que d'attribuer une étiquette.","Demander à la personne ce qui l'aide, si elle souhaite en parler.","Examiner les obstacles dans l'environnement, les consignes et les échanges."],
    question:"Comment mieux comprendre les fonctionnements neuroatypiques sans faire de suppositions sur une personne ?"
  },
  {
    title:"Troubles DYS : premiers repères",
    tag:"reperes", label:"Repères", icon:"📚",
    summary:"Des termes et des besoins à documenter, sans automatiser l'évaluation individuelle.",
    description:"La diapositive d'atelier mentionne explicitement une expertise attendue autour des troubles DYS. Pour le futur produit, il faudra définir les domaines couverts et faire vérifier les contenus par des spécialistes.",
    points:["Clarifier les termes utilisés et la diversité des situations vécues.","Privilégier l'accessibilité des documents, des consignes et des formats.","Éviter de déduire un trouble à partir d'une difficulté ponctuelle."],
    question:"Quels sont les premiers repères pour mieux comprendre les troubles DYS et adapter des consignes ?"
  },
  {
    title:"TDAH : parler des besoins",
    tag:"reperes", label:"Repères", icon:"⚡",
    summary:"Concentration, organisation, interruptions : explorer les situations plutôt qu'étiqueter.",
    description:"L'atelier a soulevé la question du périmètre et du TDAH. Cette fiche sert à ouvrir la discussion sur des contextes de travail et les adaptations possibles ; elle ne constitue pas un avis de santé.",
    points:["Décrire l'obstacle précis : fréquence des interruptions, échéances, bruit, priorités.","Expérimenter des consignes écrites, des priorités visibles ou des temps sans interruption.","Vérifier ensemble l'utilité des ajustements au lieu de les imposer."],
    question:"Comment améliorer l'organisation et la clarté des consignes sans présumer d'un TDAH ?"
  },
  {
    title:"Autisme : communiquer sans présupposés",
    tag:"reperes", label:"Repères", icon:"🌈",
    summary:"Explorer des formes de communication et des besoins qui diffèrent d'une personne à l'autre.",
    description:"Une interaction réussie ne dépend pas d'un style de communication unique. Il est utile de clarifier les messages, de rendre les attentes prévisibles et d'écouter les préférences exprimées.",
    points:["Préférer des consignes explicites et non ambiguës lorsque cela aide.","Demander si un échange oral, écrit ou préparé convient mieux.","Ne pas assimiler une différence d'expression à un manque d'intérêt ou de compétence."],
    question:"Comment communiquer plus clairement avec une personne autiste, sans stéréotypes ?"
  },
  {
    title:"Réunions et aménagements",
    tag:"travail", label:"Au travail", icon:"🗓️",
    summary:"Préparer des réunions accessibles à plusieurs manières de participer.",
    description:"Un cadre plus clair profite à de nombreuses personnes, quels que soient leurs profils. Les ajustements se choisissent avec les participants, selon le contexte.",
    points:["Diffuser l'ordre du jour et les documents en amont.","Rendre les objectifs, durées et tours de parole explicites.","Proposer plusieurs façons de contribuer : écrit, oral, avant ou après la réunion."],
    question:"Comment rendre une réunion accessible à différents besoins et modes de communication ?"
  },
  {
    title:"Malentendus et feedback",
    tag:"travail", label:"Au travail", icon:"🤝",
    summary:"Démêler les intentions, les faits et les interprétations dans une relation.",
    description:"Une remarque peut être comprise très différemment selon le contexte. Plutôt que de juger une personne, le dialogue peut partir des faits et des attentes concrètes.",
    points:["Reprendre la situation avec des mots descriptifs et sans accusation.","Demander : « Comment as-tu compris ce message ? »","Convenir d'une formulation ou d'une pratique qui évite le même malentendu."],
    question:"Comment apaiser un malentendu entre collègues ayant des styles de communication différents ?"
  },
  {
    title:"Exprimer un besoin sans diagnostic",
    tag:"travail", label:"Au travail", icon:"🗣️",
    summary:"Parler d'un obstacle et d'une solution sans devoir exposer sa santé.",
    description:"Une demande d'ajustement peut commencer par décrire une difficulté pratique et une proposition d'essai. Les obligations et procédures éventuelles de l'employeur dépendent du cadre applicable.",
    points:["Formuler une situation concrète et son impact sur le travail.","Proposer un ajustement observable à tester dans le temps.","Choisir librement les informations personnelles que l'on souhaite partager, dans les limites des démarches nécessaires."],
    question:"Peux-tu m'aider à formuler une demande d'aménagement au travail sans révéler mon diagnostic ?"
  },
  {
    title:"Sensibiliser une équipe",
    tag:"travail", label:"Au travail", icon:"🌱",
    summary:"Installer un dialogue réciproque et éviter la catégorisation des collègues.",
    description:"L'atelier évoque le rôle de la direction et des RH pour faire connaître l'outil. Une sensibilisation utile parle de situations, de droits et de pratiques collectives, pas de diagnostics supposés.",
    points:["Présenter l'outil comme un espace de questions pour tous les profils.","Illustrer les deux sens de la compréhension avec des situations concrètes.","Associer les personnes concernées à la conception et à l'évaluation."],
    question:"Comment présenter un outil sur la neurodiversité à tous les collaborateurs sans stigmatiser ?"
  }
];
const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();

function navigate(next, focus = true) {
  if (!titles[next]) return;
  view = next;
  $$(".page").forEach(section => { section.hidden = section.dataset.page !== next; });
  $$(".nav-button").forEach(button => {
    const active = button.dataset.view === next;
    button.classList.toggle("is-current", active);
    if (active) button.setAttribute("aria-current","page");
    else button.removeAttribute("aria-current");
  });
  $("#page-label").textContent = titles[next];
  document.title = titles[next] + " — Neuro Bob+";
  closeMenu();
  window.scrollTo({ top:0, behavior: document.documentElement.classList.contains("reduce-motion") ? "instant" : "smooth" });
  if (focus) $("#main-content").focus({preventScroll:true});
}
function openMenu() {
  $("#sidebar").classList.add("is-open");
  $("#mobile-menu").setAttribute("aria-expanded","true");
  $("#mobile-backdrop").hidden = false;
}
function closeMenu() {
  $("#sidebar").classList.remove("is-open");
  $("#mobile-menu").setAttribute("aria-expanded","false");
  $("#mobile-backdrop").hidden = true;
}
function draftQuestion(text, chosenOrientation) {
  if (chosenOrientation) setOrientation(chosenOrientation);
  navigate("discuter",false);
  $("#chat-input").value = text;
  $("#chat-input").focus();
}
function setOrientation(value) {
  orientation = value;
  $$(".topic-chip").forEach(chip => {
    const on = chip.dataset.orientation === value;
    chip.classList.toggle("is-selected",on);
    chip.setAttribute("aria-pressed",String(on));
  });
}
function switchMode(mode) {
  if (mode === chatMode) return;
  chatMode = mode;
  messages = [];
  drawWelcome();
  $("#select-demo").classList.toggle("is-selected",mode==="demo");
  $("#select-claude").classList.toggle("is-selected",mode==="claude");
  $("#select-demo").setAttribute("aria-pressed",String(mode==="demo"));
  $("#select-claude").setAttribute("aria-pressed",String(mode==="claude"));
  $("#claude-disclosure").hidden = mode!=="claude";
  $("#demo-disclosure").hidden = mode!=="demo";
  $("#claude-consent").checked = false;
  $("#chat-mode-label").textContent = mode==="demo" ? "Mode démonstration" : "Mode Claude — consentement nécessaire";
  $("#chat-input").focus();
}
function makeMessage(role, text, simulated = false) {
  const item = document.createElement("div");
  item.className = "message message-" + (role==="assistant" ? "bot" : "user");
  const avatar = document.createElement("div");
  avatar.className = "message-avatar";
  avatar.textContent = role==="assistant" ? "✳" : "●";
  avatar.setAttribute("aria-hidden","true");
  const inner = document.createElement("div"); inner.className = "message-inner";
  const who = document.createElement("span"); who.className="message-author";
  who.textContent = role==="assistant" ? "Neuro Bob+" : "Vous";
  const bubble = document.createElement("div"); bubble.className="message-bubble"; bubble.textContent=text;
  inner.append(who,bubble);
  if (role==="assistant") {
    const meta=document.createElement("div"); meta.className="message-meta";
    if (simulated) { const flag=document.createElement("span"); flag.textContent="Exemple local, sans génération IA"; meta.append(flag); }
    if ("speechSynthesis" in window) {
      const listen=document.createElement("button");
      listen.className="listen-button";
      listen.type="button";
      listen.setAttribute("aria-label","Écouter la réponse");
      const icon=document.createElementNS("http://www.w3.org/2000/svg","svg"); const use=document.createElementNS("http://www.w3.org/2000/svg","use");
      use.setAttribute("href","#i-volume"); icon.append(use); listen.append(icon,document.createTextNode(" Écouter"));
      listen.addEventListener("click",()=>speak(text));
      meta.append(listen);
    }
    inner.append(meta);
  }
  item.append(avatar,inner);
  return item;
}
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const msg=new SpeechSynthesisUtterance(text);
  msg.lang="fr-FR";
  msg.rate=.92;
  window.speechSynthesis.speak(msg);
}
function drawWelcome() {
  const stream=$("#chat-stream");
  stream.replaceChildren(makeMessage("assistant",welcome,false));
}
function addMessage(role,text,simulated=false) {
  const stream=$("#chat-stream");
  stream.append(makeMessage(role,text,simulated));
  stream.scrollTop=stream.scrollHeight;
}
function demoAnswer(question) {
  const q=normalize(question);
  if (/sous.entendu|implicite|neurotypique|codes sociaux|convention|dire oui/.test(q))
    return "Il n'existe pas un seul « comportement neurotypique », mais certaines habitudes sociales reposent sur l'implicite.\n\nExemple : « Ce serait bien de finir ça rapidement » peut être une suggestion ou une demande prioritaire selon le contexte.\n\nQuelques pistes :\n• Demander : « Tu souhaites que je le traite avant quelle date ? »\n• Reformuler le sens compris avant d'agir.\n• Expliquer que les consignes directes vous aident, sans devoir vous justifier.\n\nL'objectif n'est pas de deviner les intentions, mais de rendre les attentes explicites ensemble.";
  if (/reunion|am[eé]nagement|concentration|interruption|planning|priorit/.test(q))
    return "Une piste est de modifier le cadre plutôt que de supposer les besoins d'une personne.\n\nPour une réunion, on peut par exemple :\n• envoyer le sujet et les objectifs à l'avance ;\n• alterner échange oral et contributions écrites ;\n• annoncer les changements de programme ;\n• vérifier les décisions et les délais à la fin.\n\nCes ajustements sont à tester avec les personnes concernées : ce qui aide l'une peut gêner une autre.";
  if (/diagnostic|demande|besoin|d[eé]voiler|r[eé]v[eé]ler/.test(q))
    return "On peut commencer par une difficulté concrète plutôt que par une information médicale.\n\nExemple de formulation : « Pour travailler efficacement, j'ai besoin de consignes écrites et d'échéances explicites. Peut-on essayer cette organisation pendant deux semaines et faire le point ? »\n\nCela ne remplace pas les démarches RH ou de santé au travail éventuellement nécessaires pour certains aménagements, mais permet d'ouvrir une discussion respectueuse.";
  if (/malentendu|feedback|conflit|communication|autis|dys|tdah|neuroatypique/.test(q))
    return "Une bonne première étape consiste à décrire ce qui s'est passé sans conclure sur le fonctionnement de l'autre.\n\nVous pourriez essayer :\n• « Voici ce que j'ai compris. Est-ce bien ce que tu voulais dire ? »\n• « Quelle façon de communiquer serait la plus claire pour nous deux ? »\n• « Sur quoi pouvons-nous nous mettre d'accord pour la prochaine fois ? »\n\nUn comportement isolé ne permet pas d'inférer un diagnostic. Une personne reste toujours plus complexe qu'une catégorie.";
  return "Merci pour cette question. Dans Neuro Bob+, l'idée est d'examiner une situation sans juger ni diagnostiquer les personnes.\n\nTrois questions peuvent aider :\n• Quel fait concret ou quel échange pose difficulté ?\n• Quelles interprétations différentes sont possibles ?\n• Quelle clarification ou quel ajustement pourrait convenir aux personnes concernées ?\n\nPour le prototype, cette réponse est un exemple scénarisé. En mode Claude, vous pourrez obtenir une réponse générée selon votre situation.";
}
async function submitQuestion() {
  if (pending) return;
  const input=$("#chat-input");
  const question=input.value.trim();
  if (!question) { input.focus(); return; }
  if (chatMode==="claude" && !$("#claude-consent").checked) {
    $("#claude-consent").focus();
    const warn=$("#chat-mode-label");
    warn.textContent="Cochez votre accord avant l'envoi.";
    return;
  }
  input.value="";
  messages.push({role:"user",content:question});
  addMessage("user",question);
  pending=true;
  $("#chat-send").disabled=true;
  if (chatMode==="demo") {
    const reply=demoAnswer(question);
    messages.push({role:"assistant",content:reply});
    addMessage("assistant",reply,true);
    pending=false;
    $("#chat-send").disabled=false;
    input.focus();
    return;
  }
  const stream=$("#chat-stream");
  const waiting=makeMessage("assistant","Bob réfléchit à votre question…");
  waiting.id="chat-waiting"; stream.append(waiting); stream.scrollTop=stream.scrollHeight;
  try {
    const response=await fetch("/api/chat",{
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify({messages:messages.slice(-12),mode:orientation})
    });
    const data=await response.json();
    if (!response.ok) throw new Error(data.error||"Le service ne répond pas.");
    const reply=typeof data.reply==="string" ? data.reply.trim() : "";
    if (!reply) throw new Error("Aucune réponse reçue.");
    messages.push({role:"assistant",content:reply});
    waiting.remove();
    addMessage("assistant",reply);
  } catch(error) {
    waiting.remove();
    // Ne pas laisser le message en historique distant tant qu'il n'a pas reçu de réponse.
    messages.pop();
    addMessage("assistant","Je n'ai pas réussi à joindre Claude : " + (error.message||"erreur inconnue") + "\n\nVous pouvez réessayer ou revenir au mode démonstration.");
    input.value=question;
  } finally {
    pending=false;
    $("#chat-send").disabled=false;
    input.focus();
  }
}
let activeFilter="tout";
function renderTopics() {
  const query=normalize($("#explore-search").value.trim());
  const grid=$("#resource-grid");
  grid.replaceChildren();
  const displayed=topics.map((topic,index)=>({...topic,index})).filter(topic=>{
    if (activeFilter!=="tout" && topic.tag!==activeFilter) return false;
    const haystack=normalize(topic.title+" "+topic.summary+" "+topic.label+" "+topic.description);
    return !query || haystack.includes(query);
  });
  if (!displayed.length) {
    const empty=document.createElement("p"); empty.className="no-results"; empty.textContent="Aucun sujet ne correspond à votre recherche. Essayez un autre mot-clé."; grid.append(empty); return;
  }
  for (const topic of displayed) {
    const button=document.createElement("button");button.type="button"; button.className="resource-tile";
    const emoji=document.createElement("span");emoji.className="tile-emoji";emoji.textContent=topic.icon;
    const tag=document.createElement("span");tag.className="tile-label";tag.textContent=topic.label;
    const title=document.createElement("strong");title.textContent=topic.title;
    const summary=document.createElement("small");summary.textContent=topic.summary;
    const cta=document.createElement("span");cta.className="tile-cta";cta.textContent="Découvrir la fiche →";
    button.append(emoji,tag,title,summary,cta);
    button.addEventListener("click",()=>openTopic(topic.index));
    grid.append(button);
  }
}
let selectedTopic=null;
function openTopic(index) {
  const topic=topics[index]; if(!topic)return;
  selectedTopic=topic;
  $("#topic-title").textContent=topic.title;
  $("#topic-tag").textContent=topic.label;
  $("#topic-description").textContent=topic.description;
  const list=$("#topic-points");list.replaceChildren();
  topic.points.forEach(point=>{const li=document.createElement("li");li.textContent=point;list.append(li);});
  $("#topic-dialog").showModal();
}
function loadSettings() {
  try {
    const json=JSON.parse(localStorage.getItem("neuro-bob-display")||"{}");
    return {large:!!json.large,contrast:!!json.contrast,motion:!!json.motion,simple:!!json.simple};
  } catch { return {large:false,contrast:false,motion:false,simple:false}; }
}
function applySettings() {
  const controls={large:$("#setting-large").checked,contrast:$("#setting-contrast").checked,motion:$("#setting-motion").checked,simple:$("#setting-simple").checked};
  document.documentElement.classList.toggle("text-large",controls.large);
  document.documentElement.classList.toggle("high-contrast",controls.contrast);
  document.documentElement.classList.toggle("reduce-motion",controls.motion);
  document.documentElement.classList.toggle("simple-mode",controls.simple);
  try { localStorage.setItem("neuro-bob-display",JSON.stringify(controls)); } catch {}
}
function initialize() {
  const preferences=loadSettings();
  $("#setting-large").checked=preferences.large;
  $("#setting-contrast").checked=preferences.contrast;
  $("#setting-motion").checked=preferences.motion;
  $("#setting-simple").checked=preferences.simple;
  applySettings();
  renderTopics();
  document.addEventListener("click",event=>{
    const settingsLink=event.target.closest("[data-open-settings]");
    if(settingsLink) { $("#settings-dialog").showModal(); return; }
    const nav=event.target.closest("[data-view]");
    if(nav) { navigate(nav.dataset.view);return; }
    const prompt=event.target.closest("[data-prompt]");
    if(prompt) { draftQuestion(prompt.dataset.prompt);return; }
    const perspective=event.target.closest("[data-topic]");
    if(perspective) {
      const typique=perspective.dataset.topic==="typiques";
      draftQuestion(
        typique
          ? "J'aimerais mieux comprendre les codes, attentes implicites et comportements neurotypiques : peux-tu me donner des exemples concrets ?"
          : "J'aimerais mieux comprendre les différentes façons de fonctionner des personnes neuroatypiques, sans stéréotypes : par où commencer ?",
        typique ? "comportements neurotypiques" : "fonctionnements neuroatypiques"
      );
    }
  });
  $("#quick-form").addEventListener("submit",event=>{
    event.preventDefault();
    const value=$("#quick-question").value.trim();
    if(value){draftQuestion(value);$("#quick-question").value="";}
  });
  $("#chat-form").addEventListener("submit",event=>{event.preventDefault();submitQuestion();});
  $("#chat-input").addEventListener("keydown",event=>{
    if(event.key==="Enter"&&!event.shiftKey&&!event.isComposing){
      event.preventDefault();submitQuestion();
    }
  });
  $("#reset-chat").addEventListener("click",()=>{
    if(pending)return;
    messages=[];drawWelcome();$("#chat-input").value="";$("#chat-input").focus();
    if("speechSynthesis" in window)window.speechSynthesis.cancel();
  });
  $("#select-demo").addEventListener("click",()=>{if(!pending)switchMode("demo");});
  $("#select-claude").addEventListener("click",()=>{if(!pending)switchMode("claude");});
  $$(".topic-chip").forEach(chip=>chip.addEventListener("click",()=>setOrientation(chip.dataset.orientation)));
  $("#explore-search").addEventListener("input",renderTopics);
  $$(".filter-pill").forEach(button=>button.addEventListener("click",()=>{
    activeFilter=button.dataset.filter;
    $$(".filter-pill").forEach(chip=>{
      const on=chip===button;chip.classList.toggle("is-selected",on);chip.setAttribute("aria-pressed",String(on));
    });
    renderTopics();
  }));
  $("#mobile-menu").addEventListener("click",()=>$("#sidebar").classList.contains("is-open")?closeMenu():openMenu());
  $("#mobile-backdrop").addEventListener("click",closeMenu);
  const settings=$("#settings-dialog");
  $("#open-settings").addEventListener("click",()=>settings.showModal());
  $("#open-settings-side").addEventListener("click",()=>{closeMenu();settings.showModal();});
  $("#close-settings").addEventListener("click",()=>settings.close());
  $("#save-settings").addEventListener("click",()=>{applySettings();settings.close();});
  $("#reset-settings").addEventListener("click",()=>{
    $$(".settings-row input").forEach(box=>box.checked=false);
    applySettings();
  });
  $$(".settings-row input").forEach(input=>input.addEventListener("change",applySettings));
  $("#close-topic").addEventListener("click",()=>$("#topic-dialog").close());
  $("#ask-topic").addEventListener("click",()=>{
    if(!selectedTopic)return;
    $("#topic-dialog").close();draftQuestion(selectedTopic.question);
  });
  for(const dialog of [settings,$("#topic-dialog")]){
    dialog.addEventListener("click",event=>{
      if(event.target===dialog)dialog.close();
    });
  }
  window.addEventListener("beforeunload",()=>{if("speechSynthesis" in window)window.speechSynthesis.cancel();});
  if(location.hash) {
    const next=location.hash.slice(1);
    if(titles[next])navigate(next,false);
  }
}
initialize();