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
    status: "demo",
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
    prompt: "Pouvez-vous m'expliquer en détail comment l'attention et l'inhibition peuvent intervenir dans une situation de travail, avec les limites de ces hypothèses ?"
  },
  {
    id: "manager-priorites",
    title: "Un collaborateur interrompt et peine à prioriser : quelles hypothèses explorer ?",
    status: "demo",
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
    status: "demo",
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
    prompt: "Je suis neuroatypique et j'aimerais comprendre le langage indirect : expliquez les différents sens possibles de « on verra » avec des exemples."
  },
  {
    id: "dys-reperes",
    title: "Troubles DYS : de quoi parle-t-on réellement ?",
    status: "demo",
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
    prompt: "Pouvez-vous expliquer les principaux troubles DYS, leurs manifestations possibles et des adaptations utiles, sans réduire les personnes à une étiquette ?"
  },
  {
    id: "amenagement-travail",
    title: "Demander un aménagement de travail sans se sentir obligé de tout raconter",
    status: "demo",
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
    prompt: "Aidez-moi à demander des consignes écrites et des aménagements concrets au travail, sans divulguer inutilement des informations de santé."
  },
  {
    id: "autisme-sensorialite",
    title: "Autisme : sensorialité, communication et diversité des expériences",
    status: "demo",
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
  },
  ...(()=>{
    // Sources institutionnelles déjà citées dans les fiches documentées (réutilisées, non ajoutées).
    const SRC = {
      tsla: { name: "Haute Autorité de santé — Parcours de santé des enfants avec TSLA", date: "2017", url: "https://www.has-sante.fr/jcms/c_2822893/fr/comment-ameliorer-le-parcours-de-sante-d-un-enfant-avec-troubles-specifiques-du-langage-et-des-apprentissages", limitation: "Recommandation centrée sur l'enfant ; les implications pour l'adulte au travail restent à documenter." },
      tdahAdulte: { name: "Haute Autorité de santé — TDAH chez l'adulte, note de cadrage", date: "2021", url: "https://has-sante.fr/jcms/p_3302480/fr/trouble-du-neurodeveloppement/-tdah-reperage-diagnostic-et-prise-en-charge-des-adultes-note-de-cadrage", limitation: "Document de cadrage ; ne valide pas de pratiques managériales." },
      autisme: { name: "Inserm — Dossier Autisme", date: "Consulté en 2026", url: "https://www.inserm.fr/dossier/autisme/", limitation: "Dossier général ; ne permet pas d'interpréter un comportement individuel." },
      medtravail: { name: "Service-Public — Médecine du travail pour un salarié du secteur privé", date: "Consulté en 2026", url: "https://www.service-public.fr/particuliers/vosdroits/F2211", limitation: "Cadre général ; les modalités dépendent de l'entreprise et de la situation." },
      cnil: { name: "CNIL — Un employeur peut-il connaître les données de santé ?", date: "Consulté en 2026", url: "https://www.cnil.fr/fr/cnil-direct/question/donnees-sur-la-sante-un-employeur-peut-il-les-connaitre", limitation: "Réponse générale ; à compléter par la politique interne et un avis juridique." }
    };
    const R = (id, title, format, category, icon, abstract, readingMinutes, sections, sources = []) => ({
      id, title, format, category, icon, abstract, readingMinutes,
      status: "redige",
      sections: sections.map(([t, text]) => ({ title: t, text })),
      sources,
      prompt: "Pouvez-vous m'en dire plus sur : " + title.replace(/ :.*| —.*/, "") + " ?"
    });
    return [
      // ───── Neurodivergences A–Z ─────
      R("neurodiversite-definition","Neurodiversité, neurotypique, neurodivergent : les mots pour en parler","Fiche repère","neurodiversites","🔤","Un vocabulaire commun pour l'entreprise, précis et sans étiquette.",4,[
        ["Neurodiversité","Le terme désigne la variété naturelle des fonctionnements cérébraux dans une population : façons de percevoir, de se concentrer, d'apprendre, de communiquer. Il décrit un groupe, pas une personne : une équipe est neurodiverse, un individu ne l'est pas."],
        ["Neurotypique, neuroatypique, neurodivergent","« Neurotypique » qualifie un fonctionnement proche de ce qui est statistiquement attendu. « Neuroatypique » et « neurodivergent » désignent un fonctionnement qui s'en écarte de façon durable, diagnostiqué ou non (TDAH, autisme, troubles DYS…). Aucun de ces groupes n'est homogène."],
        ["Les mots à privilégier","Parler de « personne autiste » ou de « personne avec un TDAH » selon la préférence de l'intéressé ; éviter « souffrir de », « atteint de », ou les adjectifs employés comme insultes (« il est un peu autiste »). Dans le doute, demander à la personne quel vocabulaire elle préfère."]
      ]),
      R("dyslexie","Dyslexie : lire autrement","Fiche repère","neurodiversites","📖","Ce que recouvre la dyslexie chez l'adulte et ce qui facilite la lecture au travail.",4,[
        ["De quoi parle-t-on ?","La dyslexie est un trouble durable de l'apprentissage de la lecture, qui touche notamment la reconnaissance des mots écrits. Elle n'a aucun lien avec l'intelligence et persiste à l'âge adulte, souvent compensée au prix d'un effort important."],
        ["Au travail","Lire vite un long document, repérer une information dans un texte dense ou relire ses propres écrits peut demander plus de temps et d'énergie. La fatigue en fin de journée est fréquente."],
        ["Ce qui aide","Documents structurés (titres, listes, phrases courtes), police lisible et taille suffisante, synthèse vocale, versions audio ou résumés, délais de lecture raisonnables avant une réunion. Ces mesures profitent à tous les lecteurs."]
      ],[SRC.tsla]),
      R("dysorthographie","Dysorthographie : l'orthographe ne dit rien des compétences","Fiche repère","neurodiversites","✏️","Distinguer la maîtrise de l'orthographe de la qualité du travail.",3,[
        ["De quoi parle-t-on ?","La dysorthographie est un trouble durable de l'acquisition de l'orthographe, souvent associé à la dyslexie. Les erreurs persistent malgré l'apprentissage et l'attention portée au texte."],
        ["Le risque au travail","Les fautes sont fréquemment interprétées comme de la négligence ou un manque de compétence. Ce jugement est injuste et peut pousser la personne à éviter l'écrit ou à y consacrer un temps disproportionné."],
        ["Bonnes pratiques","Autoriser et équiper en correcteurs orthographiques et grammaticaux, proposer une relecture croisée sans stigmatiser, évaluer un écrit sur son fond. Côté manager : ne jamais commenter publiquement l'orthographe d'un collaborateur."]
      ],[SRC.tsla]),
      R("dysgraphie","Dysgraphie : le geste d'écriture","Fiche repère","neurodiversites","🖊️","Écriture manuscrite, prise de notes et alternatives numériques.",3,[
        ["De quoi parle-t-on ?","La dysgraphie concerne le geste graphique : écrire à la main est lent, fatigant ou peu lisible. Elle est parfois associée à une dyspraxie."],
        ["Situations concernées","Prise de notes en réunion, formulaires papier, tableaux blancs, signatures répétées. L'effort porté sur le geste réduit l'attention disponible pour le contenu."],
        ["Alternatives","Saisie au clavier, dictée vocale, prise de notes partagée, compte rendu diffusé après la réunion, formulaires numériques. L'écrit manuscrit est rarement indispensable."]
      ],[SRC.tsla]),
      R("dyscalculie","Dyscalculie : les nombres et le calcul","Fiche repère","neurodiversites","🔢","Chiffres, tableaux, estimations : comprendre et outiller.",3,[
        ["De quoi parle-t-on ?","La dyscalculie est un trouble durable des apprentissages numériques : représentation des quantités, calcul, mémorisation des faits numériques. Elle ne dit rien des capacités de raisonnement en général."],
        ["Tâches concernées","Calcul mental en réunion, lecture de tableaux chiffrés denses, estimation de durées ou de budgets, recopie de numéros. Les erreurs d'inversion de chiffres sont fréquentes."],
        ["Ce qui aide","Calculatrice et tableurs autorisés sans jugement, graphiques en plus des tableaux, données arrondies quand la précision n'est pas utile, vérification croisée des saisies sensibles."]
      ],[SRC.tsla]),
      R("dyspraxie","Dyspraxie (TDC) : coordination et organisation du geste","Fiche repère","neurodiversites","🤹","Trouble développemental de la coordination : bien plus qu'une « maladresse ».",3,[
        ["De quoi parle-t-on ?","Le trouble développemental de la coordination (TDC), souvent appelé dyspraxie, touche la planification et l'automatisation des gestes. Ce que d'autres font sans y penser demande un contrôle conscient, donc de l'énergie."],
        ["Effets possibles","Fatigue, lenteur sur les tâches manuelles, difficultés d'orientation dans l'espace, d'organisation matérielle ou de mise en page. L'écriture manuscrite peut être coûteuse."],
        ["Aménagements à discuter","Outils numériques, poste ergonomique, temps supplémentaire pour les tâches gestuelles, plans et repères visuels, rangement stable des outils partagés."]
      ],[SRC.tsla]),
      R("dysphasie","Dysphasie (TDL) : le langage oral","Fiche repère","neurodiversites","💬","Trouble développemental du langage : comprendre et se faire comprendre à l'oral.",3,[
        ["De quoi parle-t-on ?","Le trouble développemental du langage (TDL), appelé autrefois dysphasie, affecte durablement l'expression et/ou la compréhension orale. Il n'est lié ni à l'intelligence ni à une surdité."],
        ["Situations sensibles","Réunions rapides, échanges téléphoniques, consignes orales longues, prise de parole improvisée. La personne peut chercher ses mots ou avoir besoin de plus de temps pour comprendre."],
        ["Ce qui aide","Doubler l'oral d'un écrit, laisser du temps de réponse, privilégier messagerie ou e-mail quand c'est possible, reformuler sans infantiliser, partager l'ordre du jour à l'avance."]
      ],[SRC.tsla]),
      R("hpi","Haut potentiel intellectuel (HPI) : ce que l'on sait et ce que l'on ne sait pas","Fiche repère","neurodiversites","✧","Un sujet très médiatisé : démêler connaissances et idées reçues.",4,[
        ["Une définition psychométrique","Le HPI correspond généralement à un score élevé à un test d'intelligence standardisé. Ce n'est pas un trouble du neurodéveloppement ni un diagnostic médical."],
        ["Idées reçues","Les portraits très répandus (hypersensibilité systématique, pensée « en arborescence », souffrance obligatoire) ne sont pas solidement établis par la recherche. Les personnes à haut potentiel sont aussi variées que les autres."],
        ["Au travail","Éviter de prêter des traits à une personne parce qu'elle se dit HPI, ou au contraire de nier ses besoins. Comme toujours : partir de la situation concrète et de ce que la personne exprime."]
      ]),
      R("tourette-tics","Syndrome de Gilles de la Tourette et tics","Fiche repère","neurodiversites","〰️","Comprendre les tics et réagir avec naturel.",3,[
        ["De quoi parle-t-on ?","Les tics sont des mouvements ou des sons involontaires, répétés. Le syndrome de Gilles de la Tourette associe des tics moteurs et vocaux durables. Les tics consistant à prononcer des mots grossiers (coprolalie) sont en réalité minoritaires."],
        ["Ce qui aggrave, ce qui apaise","Le stress, la fatigue ou l'attention portée aux tics peuvent les augmenter. Les réprimer demande un effort important et ne fonctionne qu'un temps."],
        ["Réagir en équipe","Ne pas commenter, ne pas imiter, ne pas finir les phrases. Si la personne le souhaite, convenir avec elle de ce qu'elle veut que l'équipe sache. Un espace calme accessible peut aider."]
      ]),
      R("tdi","Trouble du développement intellectuel : inclusion et emploi","Fiche repère","neurodiversites","🧩","Repères sur l'inclusion professionnelle des personnes avec un trouble du développement intellectuel.",3,[
        ["De quoi parle-t-on ?","Le trouble du développement intellectuel est un trouble du neurodéveloppement qui touche le raisonnement, les apprentissages et l'autonomie dans certaines situations, à des degrés très variables."],
        ["Emploi et accompagnement","De nombreuses personnes travaillent en milieu ordinaire, parfois avec un accompagnement dédié (job coaching, dispositifs d'emploi accompagné). La mission handicap de l'entreprise connaît ces dispositifs."],
        ["Le FALC","Le « facile à lire et à comprendre » est une méthode d'écriture simple et structurée. Les consignes et documents en FALC aident la personne… et beaucoup d'autres collaborateurs."]
      ]),
      R("cumul-profils","Plusieurs particularités à la fois","Fiche repère","neurodiversites","🔗","Les particularités se combinent souvent : chaque situation est singulière.",3,[
        ["Des associations fréquentes","Il est courant qu'une même personne présente plusieurs particularités : TDAH et trouble DYS, autisme et TDAH, plusieurs troubles DYS… On parle de co-occurrence."],
        ["Pourquoi éviter les grilles uniques","Une fiche par trouble aide à comprendre, mais une personne n'est jamais la somme de fiches. Les effets peuvent se renforcer ou se compenser."],
        ["Conséquence pratique","Construire les aménagements à partir des situations de travail vécues par la personne, pas d'une liste associée à un diagnostic."]
      ]),
      // ───── Neurocognition ─────
      R("fonctions-executives","Les fonctions exécutives expliquées simplement","Fiche mécanisme","neurocognition","⚙️","Planifier, inhiber, s'adapter : les « chefs d'orchestre » de l'action.",4,[
        ["Trois fonctions clés","L'inhibition (freiner une réponse automatique ou une distraction), la flexibilité (changer de tâche ou de stratégie) et la mémoire de travail (garder une information en tête pour l'utiliser). S'y ajoutent la planification et l'organisation."],
        ["Au travail","Prioriser une liste d'urgences, reprendre une tâche après une interruption, s'adapter à un changement de programme : tout cela sollicite les fonctions exécutives. Elles varient entre personnes et chez une même personne selon le stress ou la fatigue."],
        ["Ce qui les soulage","Priorités écrites et visibles, interruptions limitées, changements annoncés à l'avance, découpage des tâches longues. Ces pratiques bénéficient à toute l'équipe."]
      ],[SRC.tdahAdulte]),
      R("memoire-travail","Mémoire de travail : le bloc-notes mental","Fiche mécanisme","neurocognition","🗒️","Pourquoi les consignes orales en rafale se perdent, pour tout le monde.",3,[
        ["Définition","La mémoire de travail permet de garder quelques informations en tête le temps de les utiliser : un numéro, trois consignes, l'idée qu'on veut dire en réunion. Sa capacité est limitée chez tous."],
        ["Quand elle sature","Plusieurs consignes orales d'affilée, une interruption au mauvais moment, un environnement bruyant : l'information se perd. Certaines personnes, notamment avec un TDAH ou un trouble DYS, peuvent y être plus sensibles."],
        ["Supports utiles","Consignes écrites, récapitulatif après une réunion, listes de contrôle, outils de prise de notes partagés, droit de dire « je note et je reviens vers toi »."]
      ]),
      R("sensorialite","Sensorialité : bruit, lumière, open space","Fiche mécanisme","neurocognition","🔊","Hyper et hyposensibilités : quand l'environnement devient un sujet de travail.",4,[
        ["Des seuils différents","Chacun perçoit bruit, lumière, odeurs ou contacts avec une sensibilité propre. Certaines personnes, notamment autistes, peuvent être beaucoup plus sensibles (hypersensibilité) ou moins (hyposensibilité) à certains stimuli."],
        ["Effets au travail","Un open space bruyant, un néon qui grésille ou un parfum fort peuvent provoquer fatigue, difficulté à se concentrer, voire surcharge. Ce n'est pas un caprice : le coût est réel."],
        ["Adapter les espaces","Zones calmes réservables, casques antibruit, choix de la place, éclairage réglable, possibilité de télétravail pour les tâches de concentration."]
      ],[SRC.autisme]),
      R("fatigue-cognitive","Charge et fatigue cognitive","Fiche mécanisme","neurocognition","🔋","Ce qui épuise vraiment dans une journée de travail.",3,[
        ["La charge cognitive","C'est la quantité d'effort mental mobilisée à un instant donné. Elle augmente avec les interruptions, l'implicite à décoder, le bruit, les tâches peu automatisées."],
        ["Compenser coûte","Une personne qui compense une particularité (relire trois fois, décoder les sous-entendus, filtrer le bruit) dépense une énergie invisible. La fatigue arrive plus tôt, même si le résultat est le même."],
        ["Leviers","Réunions plus courtes avec pauses, plages sans sollicitations, consignes explicites, alternance des tâches exigeantes et routinières."]
      ]),
      R("masquage","Le masquage (camouflage social)","Fiche mécanisme","neurocognition","🎭","Compenser pour « passer inaperçu » : un effort souvent invisible.",3,[
        ["Définition","Le masquage consiste à dissimuler ou compenser ses particularités pour se conformer aux attentes sociales : imiter des expressions, préparer des phrases toutes faites, réprimer des mouvements. Il est surtout décrit chez des personnes autistes."],
        ["Un coût réel","Masquer en permanence est épuisant et peut favoriser l'anxiété ou l'épuisement. La personne peut sembler « aller très bien » au travail et être à bout le soir."],
        ["Ce qu'une équipe peut faire","Rendre les règles explicites, accepter des façons différentes de participer (écrit, caméra coupée, pauses), ne pas exiger de small talk. Moins il y a de normes implicites, moins le masquage est nécessaire."]
      ],[SRC.autisme]),
      // ───── Décoder les codes ─────
      R("small-talk","Le « small talk » : à quoi sert la conversation légère ?","Décodage","comportements","☕","Machine à café, début de réunion : les fonctions d'un échange en apparence inutile.",3,[
        ["Ce que ça fait","Les échanges légers (météo, week-end) servent souvent à signaler une disponibilité, à créer un climat de confiance ou à faire une transition avant un sujet sérieux. Le contenu compte moins que le geste."],
        ["Les codes habituels","Échanges courts, questions ouvertes simples, réponses brèves ; on évite en général les sujets très personnels. Ces habitudes varient selon les cultures et les équipes."],
        ["Le droit de ne pas participer","Ne pas aimer le small talk n'est pas un défaut. Une phrase comme « Je suis plus à l'aise pour échanger sur un sujet précis » est légitime. Côté équipe : ne pas juger l'engagement de quelqu'un à sa présence à la machine à café."]
      ]),
      R("ce-serait-bien","« Ce serait bien si… » : suggestion ou demande ?","Décodage","comportements","🧭","Les demandes indirectes et comment les clarifier sans malaise.",3,[
        ["Formulations indirectes fréquentes","« Ce serait bien si… », « Tu pourrais peut-être… », « Quand tu auras un moment… » sont souvent de vraies demandes, parfois prioritaires, formulées avec politesse."],
        ["Les indices","Qui parle (un manager, un client), le moment (veille d'échéance), la répétition. Mais les indices restent ambigus : personne ne devrait avoir à deviner."],
        ["Clarifier simplement","« Est-ce une demande pour aujourd'hui ou une idée pour plus tard ? » ou « Tu veux que je le fasse avant le dossier X ? » sont des questions légitimes. Côté émetteur : préciser l'échéance et la priorité."]
      ]),
      R("feedback-implicite","Lire un feedback implicite","Décodage","comportements","📝","« C'est intéressant… » : comprendre les retours enrobés et en demander d'explicites.",3,[
        ["Les retours enrobés","« C'est intéressant », « Il faudrait peut-être creuser » ou un compliment suivi d'un « mais » peuvent exprimer une réserve forte. Cette prudence vise à ménager, mais elle brouille le message."],
        ["Demander un retour concret","« Qu'est-ce que je dois changer en priorité ? » ou « Sur une échelle de 1 à 5, où en est ce livrable ? » obligent à expliciter, sans conflit."],
        ["Côté manager","Donner des retours factuels : ce qui va, ce qui doit changer, pour quand. Un feedback explicite est un service rendu à tous."]
      ]),
      R("emails-codes","Les codes des e-mails professionnels","Décodage","comportements","✉️","Formules, délais, copies : les règles non écrites du courriel.",3,[
        ["Formules","« Bonjour » puis le prénom ou « Madame, Monsieur » selon la relation ; « Cordialement » est neutre, « Bien à vous » un peu plus chaleureux. Les usages varient selon l'entreprise : observer les messages reçus est un bon repère."],
        ["La copie","Mettre quelqu'un en copie signifie souvent « pour information ». Mettre un supérieur en copie peut être perçu comme une pression. La copie cachée est à éviter."],
        ["Délais de réponse","Sauf urgence explicite, un délai de un à deux jours ouvrés est généralement accepté. Si une réponse prend du temps, un « Bien reçu, je reviens vers toi jeudi » rassure."]
      ]),
      R("humour-second-degre","Humour, ironie et second degré au bureau","Décodage","comportements","😏","Repérer le second degré et dire simplement quand on ne l'a pas saisi.",3,[
        ["Les indices de l'ironie","Ton exagéré, contradiction évidente avec la situation, sourire, réaction des autres. Ces indices sont implicites et ne sont pas perçus de la même façon par tous."],
        ["Quand le doute persiste","« Tu es sérieux ou c'est une blague ? » est une question parfaitement acceptable. Mieux vaut demander que d'agir sur un malentendu."],
        ["Côté équipe","Éviter l'humour qui vise une personne ou une particularité, et l'ironie dans les consignes. À l'écrit, le second degré passe encore plus mal."]
      ]),
      // ───── Travail & RH ─────
      R("onboarding-inclusif","Un onboarding inclusif dès le premier jour","Guide pratique","travail","🚪","Accueillir chaque nouvel arrivant avec des repères explicites.",4,[
        ["Avant l'arrivée","Envoyer le programme de la première semaine, le nom du référent, les horaires, le plan des locaux et les informations pratiques (badge, cantine, outils). Demander : « Y a-t-il quelque chose qui faciliterait votre arrivée ? »"],
        ["Le premier jour","Un interlocuteur identifié, un poste prêt, des informations écrites plutôt qu'un flot de présentations orales. Expliciter les codes de l'équipe : horaires réels, canaux de communication, rituels."],
        ["À un mois","Un point d'étonnement : ce qui est clair, ce qui ne l'est pas, ce qui pourrait être ajusté. C'est le bon moment pour proposer, sans insister, les dispositifs de la mission handicap."]
      ]),
      R("reunions-inclusives","Organiser des réunions inclusives","Guide pratique","travail","🗓️","Ordre du jour, tours de parole, contributions écrites : un cadre qui aide tout le monde.",4,[
        ["Avant","Un ordre du jour avec objectifs et durée, envoyé au moins la veille ; les documents à lire ; qui doit préparer quoi."],
        ["Pendant","Règles de prise de parole explicites, tour de table ou contributions écrites (chat, document partagé), pause pour les réunions de plus d'une heure, caméra facultative à distance."],
        ["Après","Un compte rendu court : décisions, actions, responsables, échéances. Il évite les interprétations divergentes et soulage la mémoire de travail de chacun."]
      ]),
      R("entretien-annuel","L'entretien annuel sans malentendus","Guide pratique","travail","🗣️","Préparer, conduire et formaliser un entretien clair pour les deux parties.",3,[
        ["Préparer ensemble","Envoyer la trame et les questions à l'avance, avec des exemples de ce qui est attendu. Laisser au collaborateur le temps de préparer par écrit."],
        ["Pendant l'entretien","Des questions précises plutôt que « Comment ça va ? ». Des retours factuels, avec des exemples. Vérifier la compréhension : « Comment résumerais-tu ce qu'on vient de dire ? »"],
        ["Après","Formaliser par écrit les objectifs, les moyens et les points d'attention. Un objectif implicite n'est pas un objectif."]
      ]),
      R("open-space-teletravail","Open space, flex office et télétravail","Guide pratique","travail","🏢","Organisation des espaces et du travail à distance : options à discuter.",3,[
        ["Les limites de l'open space","Bruit, interruptions, absence de repères fixes en flex office : ces environnements peuvent être particulièrement coûteux pour certaines personnes, et gênants pour beaucoup d'autres."],
        ["Des options","Zones calmes réservables, place attitrée possible sur demande, casques antibruit, règles d'usage (appels en cabine), signalétique claire."],
        ["Le télétravail comme aménagement","Pour les tâches de concentration, le télétravail peut être un aménagement pertinent. Il se discute selon le poste, sans isoler la personne du collectif."]
      ]),
      R("rqth-mission-handicap","RQTH, mission handicap et médecin du travail : qui fait quoi ?","Guide pratique","travail","🤝","Les interlocuteurs internes et externes, et ce que chacun peut savoir.",4,[
        ["La mission handicap","Interlocuteur interne pour les aménagements, l'information et l'accompagnement. Elle respecte la confidentialité : ce qui lui est confié n'est pas transmis au manager sans accord. Contact : [à compléter par l'entreprise]."],
        ["La RQTH","La reconnaissance de la qualité de travailleur handicapé est une démarche personnelle et volontaire. Le salarié n'est pas obligé d'en informer son employeur ; s'il le fait, cela ouvre l'accès à certains dispositifs."],
        ["Le médecin du travail","Il peut proposer des mesures individuelles d'aménagement du poste. Il est soumis au secret médical : l'employeur reçoit des préconisations, pas un diagnostic."]
      ],[SRC.medtravail, SRC.cnil]),
      R("consignes-ecrites","Des consignes claires et écrites","Outil","travail","📋","Un modèle de consigne utilisable par toutes les équipes.",3,[
        ["Le modèle","Objectif (pourquoi) · Livrable attendu (quoi, sous quelle forme) · Échéance (quand) · Priorité (par rapport à quoi) · Ressources et interlocuteur (avec qui)."],
        ["Avant / après","Avant : « Tu peux jeter un œil au dossier Dupont ? » Après : « Peux-tu relire la proposition Dupont et me signaler les erreurs de chiffrage d'ici jeudi midi ? C'est prioritaire sur le reporting. »"],
        ["Vérifier sans infantiliser","Proposer : « Dis-moi si un point n'est pas clair » et accepter les questions sans agacement. Une consigne qui suscite des questions est une consigne qui sera bien exécutée."]
      ]),
      // ───── Parcours de sensibilisation ─────
      R("module-1-bases","Module 1 — Les bases de la neurodiversité","Module de sensibilisation","sensibilisation","1️⃣","15 minutes pour poser un vocabulaire commun et déconstruire les idées reçues.",15,[
        ["Objectifs","Distinguer neurodiversité, neurotypique et neurodivergent ; connaître les principales neurodivergences ; repérer trois idées reçues fréquentes."],
        ["Déroulé","1. Les mots pour en parler (fiche « Neurodiversité ») · 2. Tour d'horizon : TDAH, autisme, troubles DYS, tics, HPI · 3. Quiz vrai/faux · 4. À retenir."],
        ["Quiz (extrait)","« Une personne dyslexique lit forcément mal » → Faux : beaucoup compensent, au prix d'un effort. « On peut repérer un TDAH en observant un collègue » → Faux : un comportement ne suffit jamais à identifier un trouble."]
      ]),
      R("module-2-codes","Module 2 — Décoder les codes implicites au travail","Module de sensibilisation","sensibilisation","2️⃣","Les règles non écrites de l'entreprise, expliquées dans les deux sens.",20,[
        ["Objectifs","Repérer les principales formes d'implicite (demandes indirectes, feedback enrobé, small talk, second degré) et savoir les clarifier ou les éviter."],
        ["Déroulé","1. Pourquoi l'implicite existe · 2. Quatre situations illustrées · 3. Exercice : reformuler une demande implicite en consigne explicite · 4. À retenir."],
        ["Exercice","Reformulez : « Ce serait bien qu'on ait les chiffres pour la réunion. » Proposition : « Peux-tu m'envoyer les chiffres du trimestre avant mardi 10 h pour la réunion ? »"]
      ]),
      R("module-3-manager","Module 3 — Manager sans étiqueter","Module de sensibilisation","sensibilisation","3️⃣","Partir des faits et des mécanismes, jamais d'un diagnostic supposé.",25,[
        ["Objectifs","Distinguer faits, interprétations et hypothèses ; formuler des pistes d'action sans supposer de trouble ; savoir vers qui orienter."],
        ["La méthode en quatre temps","1. Décrire les faits observables · 2. Envisager les mécanismes possibles (attention, organisation, sensorialité, implicite) · 3. Examiner le contexte (charge, consignes, environnement) · 4. Tester des ajustements et en parler avec la personne."],
        ["Ce qu'un manager ne fait pas","Supposer ou suggérer un diagnostic, demander des informations médicales, en parler à l'équipe. En cas de besoin d'aménagement : mission handicap et médecin du travail. Mise en pratique : cas d'entraînement avec Bob."]
      ]),
      R("module-4-amenagements","Module 4 — Du besoin à l'aménagement","Module de sensibilisation","sensibilisation","4️⃣","Exprimer un besoin, construire un aménagement, faire le point.",20,[
        ["Objectifs","Savoir formuler un besoin sans dévoiler son dossier médical ; connaître le circuit dans l'entreprise ; suivre un aménagement dans le temps."],
        ["Formuler un besoin","Partir de la situation : « Les consignes orales rapides sont difficiles à retenir. Pourrions-nous tester un récapitulatif écrit pendant deux semaines ? » Pas besoin de nommer un diagnostic."],
        ["Le circuit","Discussion avec le manager pour les ajustements simples ; mission handicap et médecin du travail pour les aménagements formels ; point de suivi à un mois pour ajuster."]
      ],[SRC.medtravail]),
      R("module-5-equipe","Module 5 — Atelier d'équipe : mieux travailler ensemble","Module de sensibilisation","sensibilisation","5️⃣","Un kit d'animation pour une séquence collective de 45 minutes.",45,[
        ["Déroulé animateur","10 min : chacun indique, anonymement, ce qui l'aide à bien travailler (écrit, oral, calme, échanges…) · 20 min : discussion de trois situations de l'équipe · 15 min : choix de trois règles communes."],
        ["Cartes de situations (exemples)","Une réunion qui déborde sans ordre du jour · Une consigne donnée dans le couloir · Un message ironique mal compris sur la messagerie d'équipe."],
        ["La charte d'équipe","Trois à cinq engagements concrets, par exemple : ordre du jour systématique, consignes importantes par écrit, caméra facultative, pas de réunion avant 9 h 30. À revoir dans trois mois."]
      ])
    ];
  })()
];

export const editorialCategories = [
  { id:"tous", label:"Tous les contenus" },
  { id:"sensibilisation", label:"Parcours de sensibilisation" },
  { id:"neurodiversites", label:"Neurodivergences A–Z" },
  { id:"neurocognition", label:"Neurocognition" },
  { id:"comportements", label:"Décoder les codes" },
  { id:"travail", label:"Travail & RH" }
];
