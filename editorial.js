/**
 * Neuro Bob+ — fiches de démonstration éditoriale.
 *
 * Ces textes fournissent un aperçu de la plateforme de contenus.
 * STATUT : démonstration documentée, NON revue par un comité scientifique.
 * Une source réelle ne signifie pas que l'interprétation individuelle est prouvée.
 */
export const editorialArticles = [
  {
    id: "tdah-reperes",
    title: "TDAH : comprendre les mécanismes sans réduire une personne à un symptôme",
    format: "Fiche repère",
    category: "neurocognition",
    icon: "🧠",
    abstract: "Attention, impulsivité, agitation : découvrir les principaux repères et les limites de leur interprétation.",
    readingMinutes: 5,
    sections: [
      { title: "De quoi parle-t-on ?", text: "Le TDAH est un trouble du neurodéveloppement qui peut comporter des manifestations d'inattention, d'hyperactivité et/ou d'impulsivité. L'intensité et l'expression de ces manifestations varient selon les personnes et les situations." },
      { title: "Pourquoi cela compte au travail", text: "La priorisation, la gestion des interruptions ou le passage d'une tâche à l'autre peuvent devenir des sujets de discussion utiles. Toutefois, ces difficultés ne sont pas spécifiques au TDAH : le contexte organisationnel, la fatigue et la charge de travail peuvent aussi intervenir." },
      { title: "Que peut-on faire ?", text: "Pour une situation concrète : clarifier les priorités, rendre les échéances explicites, réduire les interruptions inutiles et vérifier avec la personne ce qui l'aide réellement. Une difficulté observée ne suffit pas à poser un diagnostic." }
    ],
    sources: [
      { name: "Haute Autorité de santé — TDAH, recommandations enfants et adolescents", date: "2024", url: "https://www.has-sante.fr/jcms/p_3302482/fr/trouble-du-neurodeveloppement-/-tdah-diagnostic-et-interventions-therapeutiques-aupres-des-enfants-et-adolescents", limitation: "Cette recommandation concerne les enfants et adolescents ; les implications professionnelles adultes demandent des sources spécifiques." },
      { name: "Haute Autorité de santé — TDAH chez l'adulte, note de cadrage", date: "2021", url: "https://has-sante.fr/jcms/p_3302480/fr/trouble-du-neurodeveloppement/-tdah-reperage-diagnostic-et-prise-en-charge-des-adultes-note-de-cadrage", limitation: "Document de cadrage, et non une validation des conseils de management." }
    ],
    prompt: "Peux-tu m'expliquer en détail comment l'attention et l'inhibition peuvent intervenir dans une situation de travail, avec les limites de ces hypothèses ?"
  },
  {
    id: "manager-priorites",
    title: "Un collaborateur interrompt et peine à prioriser : quelles hypothèses explorer ?",
    format: "Situation RH",
    category: "travail",
    icon: "🤝",
    abstract: "Une analyse managériale concrète, avec des pistes neurocognitives, organisationnelles et relationnelles.",
    readingMinutes: 6,
    sections: [
      { title: "Décrire plutôt qu'interpréter", text: "« Il intervient trois fois avant la fin de la prise de parole » décrit un événement. « Il ne respecte pas les autres » attribue une intention. Commencer par la situation observable aide à éviter les jugements prématurés." },
      { title: "Hypothèses possibles", text: "Plusieurs facteurs peuvent entrer en jeu : gestion de l'impulsivité, difficulté à conserver une idée en mémoire de travail, incertitude sur les priorités ou surcharge. Certaines de ces fonctions sont étudiées dans les TND, mais leur manifestation n'est ni spécifique à un trouble ni suffisante pour identifier un profil. Une réunion peu structurée, des demandes contradictoires ou un stress élevé sont également à explorer." },
      { title: "Des actions de management", text: "Préciser les règles de prise de parole, utiliser des priorités écrites et actualisées, prévoir un espace de questions et demander au collaborateur quelles modalités facilitent son travail. Une démarche d'aménagement doit se construire dans le respect de sa confidentialité." },
      { title: "Et si le TND est connu ?", text: "Si la personne a elle-même évoqué un diagnostic et souhaite en discuter, les connaissances sur ce trouble peuvent aider à comprendre certaines possibilités, sans supposer que tous les comportements en découlent." }
    ],
    sources: [
      { name: "CNIL — Un employeur peut-il connaître les données de santé ?", date: "Consulté en 2026", url: "https://www.cnil.fr/fr/cnil-direct/question/donnees-sur-la-sante-un-employeur-peut-il-les-connaitre", limitation: "Cadre de confidentialité, pas source sur les causes du comportement." },
      { name: "Service-Public — Médecine du travail pour un salarié du secteur privé", date: "Consulté en 2026", url: "https://www.service-public.fr/particuliers/vosdroits/F2211", limitation: "Cadre des acteurs compétents pour les aménagements du travail." }
    ],
    prompt: "Je suis manager. Un collaborateur interrompt souvent, peine à prioriser et réagit aux changements. Quelles hypothèses neurocognitives et organisationnelles puis-je explorer sans présumer de son diagnostic ?"
  },
  {
    id: "codes-neurotypiques",
    title: "Décoder les conventions neurotypiques : ce que peut vouloir dire « on verra »",
    format: "Décryptage",
    category: "comportements",
    icon: "💬",
    abstract: "Une lecture contextualisée du langage indirect, de la politesse et des sous-entendus.",
    readingMinutes: 4,
    sections: [
      { title: "Pourquoi l'implicite existe-t-il ?", text: "Des personnes utilisent des formulations indirectes pour exprimer une incertitude, ménager les relations ou éviter de s'engager trop tôt. Cela varie selon les personnes, les cultures et les contextes ; ce n'est pas une propriété de toutes les personnes neurotypiques." },
      { title: "Plusieurs interprétations possibles", text: "« On verra » peut signifier une décision réellement différée, une hésitation, un refus peu explicite ou une volonté de garder une option ouverte. Bob ne peut pas connaître l'intention véritable de votre interlocuteur." },
      { title: "Comment clarifier sans conflit ?", text: "« Tu préfères qu'on décide vendredi ou que je considère qu'on ne le fait pas pour l'instant ? » est une question concrète et respectueuse. Demander une échéance n'est pas une faute de communication." }
    ],
    sources: [],
    prompt: "Je suis neuroatypique et j'aimerais comprendre le langage indirect : explique les différents sens possibles de « on verra » avec des exemples."
  },
  {
    id: "dys-reperes",
    title: "Troubles DYS : de quoi parle-t-on réellement ?",
    format: "Fiche repère",
    category: "neurocognition",
    icon: "📚",
    abstract: "Comprendre le vocabulaire, les apprentissages et la diversité des difficultés possibles.",
    readingMinutes: 5,
    sections: [
      { title: "Les mots", text: "La Haute Autorité de santé emploie l'expression « troubles spécifiques du langage et des apprentissages » (TSLA), couramment désignés comme « troubles DYS ». Ils ne se résument pas à la dyslexie et doivent être compris selon les fonctions concernées et les besoins concrets." },
      { title: "Des conséquences variables", text: "La lecture, l'écriture, la manipulation de certains nombres ou la coordination peuvent poser des difficultés différentes selon les situations. L'outil ne peut pas déduire le trouble d'une personne de ses fautes d'orthographe ou de sa façon de lire." },
      { title: "Pistes d'accessibilité", text: "Proposer plusieurs formats de consignes, hiérarchiser les informations, lire à voix haute si demandé ou permettre davantage de temps sont des options à discuter et tester, sans imposer un aménagement identique à chacun." }
    ],
    sources: [
      { name: "Haute Autorité de santé — Parcours de santé des enfants avec TSLA", date: "2017", url: "https://www.has-sante.fr/jcms/c_2822893/fr/comment-ameliorer-le-parcours-de-sante-d-un-enfant-avec-troubles-specifiques-du-langage-et-des-apprentissages", limitation: "Source pédiatrique : ne constitue pas à elle seule un protocole RH pour adultes." }
    ],
    prompt: "Peux-tu expliquer les principaux troubles DYS, leurs manifestations possibles et des adaptations utiles, sans réduire les personnes à une étiquette ?"
  },
  {
    id: "amenagement-travail",
    title: "Demander un aménagement de travail sans se sentir obligé de tout raconter",
    format: "Guide pratique",
    category: "travail",
    icon: "🌿",
    abstract: "Parler de besoins concrets, d'organisation et des interlocuteurs compétents.",
    readingMinutes: 5,
    sections: [
      { title: "Commencer par une situation", text: "La personne peut expliquer qu'un mode de travail est difficile et proposer une alternative : consignes écrites, réunions préparées, priorité unique visible, espace calme. Il n'est pas nécessaire de transformer une discussion sur le travail en exploration du dossier médical." },
      { title: "Exemple de formulation", text: "« Les consignes orales rapides sont difficiles à retenir quand plusieurs urgences arrivent. Pourrions-nous essayer un récapitulatif écrit des priorités pendant deux semaines ? »" },
      { title: "Lorsque la situation exige un cadre formel", text: "Le médecin du travail peut notamment proposer des mesures d'aménagement, d'adaptation ou de transformation du poste. Les modalités précises dépendent du contexte et des obligations applicables ; Bob ne remplace pas les professionnels compétents." }
    ],
    sources: [
      { name: "CNIL — Données de santé et employeur", date: "Consulté en 2026", url: "https://www.cnil.fr/fr/cnil-direct/question/donnees-sur-la-sante-un-employeur-peut-il-les-connaitre", limitation: "Précautions concernant les données médicales des salariés." },
      { name: "Service-Public — Médecine du travail pour un salarié du secteur privé", date: "Consulté en 2026", url: "https://www.service-public.fr/particuliers/vosdroits/F2211", limitation: "Le recours au médecin du travail dépend de la situation." }
    ],
    prompt: "Aide-moi à demander des consignes écrites et des aménagements concrets au travail, sans divulguer inutilement des informations de santé."
  },
  {
    id: "autisme-sensorialite",
    title: "Autisme : sensorialité, communication et diversité des expériences",
    format: "Fiche repère",
    category: "neurocognition",
    icon: "🌈",
    abstract: "Découvrir des dimensions possibles de l'autisme et les précautions d'interprétation.",
    readingMinutes: 5,
    sections: [
      { title: "Un ensemble hétérogène", text: "Les manifestations de l'autisme et les besoins d'accompagnement sont variables. Le dossier de l'Inserm décrit plusieurs dimensions et les recherches associées ; aucune manifestation isolée ne suffit à conclure pour une personne." },
      { title: "Dans les échanges professionnels", text: "Les différences de rythme, les attentes implicites ou l'environnement sensoriel peuvent entrer dans certaines situations. Avant de supposer une cause, mieux vaut identifier les faits, demander les préférences d'interaction et examiner l'environnement." },
      { title: "Agir sans stéréotype", text: "Expliquer clairement l'objectif d'une réunion, offrir des possibilités de contribution écrite, anticiper les changements lorsque cela est possible et accepter que les besoins exprimés diffèrent d'une personne à l'autre." }
    ],
    sources: [
      { name: "Inserm — Dossier Autisme", date: "Consulté en 2026", url: "https://www.inserm.fr/dossier/autisme/", limitation: "Dossier général ; ne permet pas d'inférer un diagnostic à partir d'un comportement professionnel." }
    ],
    prompt: "Comment comprendre les dimensions sensorielles et de communication de l'autisme, et que peut-on adapter au travail sans stéréotype ?"
  }
];

export const editorialCategories = [
  { id:"tous", label:"Tous les contenus" },
  { id:"neurocognition", label:"Neurocognition" },
  { id:"comportements", label:"Comportements" },
  { id:"travail", label:"Travail & RH" }
];
