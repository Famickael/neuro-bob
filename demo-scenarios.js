/* Neuro Bob+ — conversations de démonstration, écrites à l'avance.
 * Aucune IA n'est utilisée et rien n'est envoyé : app.js rejoue ces échanges dans la vue « S'entraîner avec Bob ».
 * `thirdParty: true` : l'utilisateur décrit une personne absente. Les réponses de Bob appliquent alors l'option B
 * (faits → mécanismes → contexte → actions) et ne citent aucun trouble : tests/editorial.test.mjs le vérifie.
 * `links` : fiches de la Bibliothèque (identifiants de editorial.js) proposées sous la réponse.
 * Contenus de démonstration, non validés par des experts ni par des personnes concernées.
 */
export const demoScenarios = [
  {
    id: "manager-tiers",
    title: "Un collègue interrompt et peine à prioriser",
    persona: "Une manager",
    summary: "Bob part des faits et des mécanismes possibles, sans poser d'étiquette sur un collègue absent.",
    thirdParty: true,
    turns: [
      {
        user: "Un collaborateur de mon équipe coupe souvent la parole en réunion. Il commence beaucoup de dossiers, mais les plus urgents prennent du retard. Comment l'expliquer ?",
        bob: "Merci pour ces précisions. Je vous propose de partir de ce que vous observez, sans conclure sur la personne.\n\nLes faits\n• Il prend la parole avant que les autres aient terminé.\n• Plusieurs dossiers sont ouverts, et les urgents prennent du retard.\nDire « il n'écoute pas » ou « il s'en moque » serait déjà une interprétation.\n\nMécanismes possibles\n• Inhibition : retenir une idée pendant que l'autre parle demande un effort.\n• Mémoire de travail : on parle vite par crainte d'oublier.\n• Planification : sans critère explicite, tout peut sembler aussi urgent.\n\nCes fonctions varient chez chacun de nous, selon la fatigue, le stress ou la charge.\n\nVoulez-vous regarder le contexte, puis ce que vous pouvez tester ?",
        links: [{ id: "fonctions-executives", label: "Les fonctions exécutives expliquées simplement" }]
      },
      {
        user: "Oui. Mais franchement, il est TDAH, non ?",
        bob: "Je ne répondrai pas à cette question. Voici pourquoi.\n\n• Ni vous ni moi ne pouvons le savoir. Un comportement au travail ne permet pas d'identifier un trouble : seul un professionnel de santé peut le faire, à la demande de la personne.\n• Les mêmes faits ont beaucoup d'explications possibles.\n• Une étiquette posée sur un collègue absent oriente le regard et peut lui nuire. Sa santé lui appartient.\n\nCe que je peux faire à la place : examiner le contexte avec vous.\n• Les priorités sont-elles écrites et classées, ou données à l'oral ?\n• Reçoit-il des demandes de plusieurs personnes ?\n• La réunion a-t-elle un ordre du jour et des tours de parole ?\n• La charge ou les délais ont-ils changé récemment ?\n\nVous n'avez pas besoin d'un diagnostic pour agir. Ces éléments suffisent.",
        links: [{ id: "module-3-manager", label: "Manager sans étiqueter" }]
      },
      {
        user: "Les priorités sont surtout données à l'oral, et il reçoit des demandes de trois personnes. Que puis-je essayer ?",
        bob: "Voici trois actions à tester pendant deux à trois semaines.\n\n1. Des priorités écrites : une liste courte, classée, avec une échéance par dossier. Un seul canal pour les nouvelles demandes.\n\n2. Un cadre de réunion : ordre du jour envoyé avant, tours de parole, et un endroit où noter les idées qui viennent pendant que les autres parlent. Ces règles valent pour toute l'équipe.\n\n3. Le dialogue : « J'ai remarqué que les dossiers urgents prenaient du retard. Qu'est-ce qui vous aiderait à y voir plus clair ? » Partez des faits, puis écoutez.\n\nFaites ensuite le point avec lui : qu'est-ce qui a aidé, que faut-il ajuster ?\n\nS'il choisit un jour de vous parler de sa santé, ce sera sa décision. La mission handicap et le médecin du travail pourront alors l'accompagner.",
        links: [
          { id: "manager-priorites", label: "Un collaborateur interrompt et peine à prioriser" },
          { id: "consignes-ecrites", label: "Des consignes claires et écrites" }
        ]
      }
    ]
  },
  {
    id: "decoder-codes",
    title: "Décoder « on verra » et « ce serait bien si… »",
    persona: "Une collaboratrice neuroatypique",
    summary: "Bob explique les sens possibles et propose des questions pour clarifier, sans ériger ces codes en norme.",
    turns: [
      {
        user: "J'ai proposé une nouvelle organisation des dossiers à ma responsable. Elle a répondu « on verra ». Je prends les mots au pied de la lettre : est-ce un oui, un non, ou autre chose ?",
        bob: "Votre question est légitime : « on verra » ne dit pas ce que la personne pense. La phrase est ambiguë pour tout le monde.\n\nSens possibles\n• Une vraie incertitude : elle n'a pas encore l'information ou le temps pour décider.\n• Un report : ce n'est pas la priorité du moment.\n• Un refus poli : certaines personnes évitent de dire « non » directement.\n\nLes mots seuls ne permettent pas de trancher. Le plus fiable est de demander.\n\nQuestions de clarification\n• « Pour être sûre de bien comprendre : est-ce un oui, un non, ou pas encore décidé ? »\n• « Quand puis-je revenir vers vous à ce sujet ? »\n• « De quoi auriez-vous besoin pour décider ? »",
        links: [{ id: "codes-neurotypiques", label: "Ce que peut vouloir dire « on verra »" }]
      },
      {
        user: "Et quand elle dit « ce serait bien si le compte rendu partait avant vendredi » ? C'est une suggestion ou une demande ?",
        bob: "Dans beaucoup d'équipes, « ce serait bien si… » est une demande formulée avec douceur, surtout quand elle vient d'une responsable. Ce n'est pourtant pas une règle : parfois, c'est une simple idée.\n\nIndices utiles\n• Qui parle : une responsable ou un collègue ?\n• Y a-t-il une date ou un livrable précis ? Ici, « avant vendredi » suggère plutôt une attente réelle.\n\nPour lever le doute\n• « Je le note comme une priorité pour vendredi, c'est bien cela ? »\n• « Si je dois choisir, je le fais passer avant mon dossier en cours ? »",
        links: [{ id: "ce-serait-bien", label: "« Ce serait bien si… » : suggestion ou demande ?" }]
      },
      {
        user: "Est-ce que je dois apprendre à parler comme ça, moi aussi ?",
        bob: "Non. Ces formulations indirectes sont une habitude, pas une norme à imiter. Les comprendre vous donne des repères ; vous restez libre de votre façon de communiquer.\n\nLa clarté est l'affaire des deux côtés.\n• Vous pouvez dire : « Les consignes directes m'aident. Vous pouvez me dire les choses simplement. »\n• Votre responsable peut préciser ses demandes : quoi, pour quand, avec quelle priorité.\n\nUne communication explicite profite à toute l'équipe, pas seulement à vous.\n\nSi cela vous est utile, je peux vous aider à préparer cette phrase pour votre prochain échange.",
        links: [{ id: "module-2-codes", label: "Décoder les codes implicites au travail" }]
      }
    ]
  },
  {
    id: "amenagement-consignes",
    title: "Demander des consignes écrites sans parler de sa santé",
    persona: "Un collaborateur",
    summary: "Une formulation centrée sur le travail, puis le circuit : manager, mission handicap, médecin du travail.",
    turns: [
      {
        user: "Je retiens mal les consignes données à l'oral. J'aimerais les recevoir par écrit, mais je ne veux pas parler de ma santé à mon manager. Comment le demander ?",
        bob: "Vous pouvez le demander sans rien dire de votre santé. Un besoin de travail n'a pas à être justifié par une information médicale.\n\nLe principe : décrire le besoin, son effet sur le travail, et proposer un essai.\n\nFormulation possible\n« Pour être fiable sur mes dossiers, j'ai besoin que les consignes me soient confirmées par écrit : ce qui est attendu, pour quand, et avec quelle priorité. Pouvons-nous essayer pendant un mois, puis faire le point ? »\n\nPour faciliter la mise en place\n• Proposez un format simple : trois lignes par e-mail ou dans l'outil de l'équipe.\n• Offrez de rédiger vous-même le récapitulatif après un échange oral. Votre manager n'a plus qu'à le valider.",
        links: [
          { id: "consignes-ecrites", label: "Des consignes claires et écrites" },
          { id: "amenagement-travail", label: "Demander un aménagement sans tout raconter" }
        ]
      },
      {
        user: "Et s'il refuse, ou si cela ne suffit pas ?",
        bob: "Plusieurs interlocuteurs existent. Vous choisissez à qui vous parlez, et de quoi.\n\n• Votre manager : pour les ajustements d'organisation du quotidien. Aucune information médicale n'est nécessaire.\n• La mission handicap : pour vous informer sur les aménagements possibles et être accompagné. Ce que vous lui confiez n'est pas transmis à votre manager sans votre accord.\n• Le médecin du travail : il est tenu au secret médical. Il peut proposer un aménagement à l'employeur, qui reçoit des préconisations, pas un diagnostic. Vous pouvez demander un rendez-vous vous-même.\n\nBon à savoir : la reconnaissance de la qualité de travailleur handicapé (RQTH) est une démarche personnelle et volontaire. Elle n'est jamais une obligation.\n\nCe sont des repères généraux. Pour votre situation précise, ces interlocuteurs restent les bons.",
        links: [{ id: "rqth-mission-handicap", label: "RQTH, mission handicap, médecin du travail : qui fait quoi ?" }]
      }
    ]
  },
  {
    id: "reunion-inclusive",
    title: "Préparer une réunion d'équipe inclusive",
    persona: "Une cheffe de projet",
    summary: "Agir sur le cadre de la réunion plutôt que demander à chacun comment il fonctionne.",
    thirdParty: true,
    turns: [
      {
        user: "J'anime lundi une réunion d'équipe d'une heure, à huit personnes. Comment la rendre plus inclusive, sans demander à chacun comment il fonctionne ?",
        bob: "C'est une bonne approche : agir sur le cadre profite à tout le monde et n'oblige personne à se dévoiler.\n\nAvant\n• Envoyez l'ordre du jour et les documents deux jours avant.\n• Précisez pour chaque point ce qui est attendu : information, avis ou décision.\n\nPendant\n• Annoncez les règles : tours de parole, une personne à la fois.\n• Offrez plusieurs façons de contribuer : à l'oral, par écrit dans un document partagé, ou après la réunion.\n• Limitez le bruit et les conversations parallèles.\n\nAprès\n• Envoyez un relevé écrit : décisions, responsables, échéances.",
        links: [{ id: "reunions-inclusives", label: "Organiser des réunions inclusives" }]
      },
      {
        user: "Une personne de l'équipe ne prend jamais la parole. Je l'interroge directement ?",
        bob: "Plutôt non, en tout cas pas par surprise. Être interrogé devant tout le monde peut mettre en difficulté.\n\nLe silence a de nombreuses raisons : besoin de temps pour réfléchir, sujet éloigné de son travail, groupe intimidant, ou simplement rien à ajouter. Rien ne permet de dire laquelle vaut ici.\n\nCe que vous pouvez essayer\n• Prévenir : « Lundi, j'aimerais votre avis sur le point 3. »\n• Laisser deux minutes de réflexion écrite avant un tour de table, avec le droit de passer.\n• Proposer de contribuer par écrit, avant ou après.\n• Demander en tête-à-tête : « Quelle façon de contribuer vous convient le mieux ? »\n\nObservez ensuite ce qui change, et ajustez avec l'équipe. Ce qui aide l'un peut gêner l'autre.",
        links: [{ id: "module-5-equipe", label: "Atelier d'équipe : mieux travailler ensemble" }]
      }
    ]
  }
];
