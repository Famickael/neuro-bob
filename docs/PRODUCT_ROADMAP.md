## MISE À JOUR V3 — plate-forme de contenus et explication neurocognitive (21 novembre 2026)

Cette section **prévaut sur les priorités contraires formulées ci-dessous**. Elle prend en compte les corrections du porteur.

**P0 immédiat :** bibliothèque exploitable sans IA, corpus d'articles sourcés à valider, accueil avec chemins facultatifs neurotypique/neuroatypique/libre, démonstration managériale proposant des hypothèses neurocognitives et environnementales, pas de diagnostic inféré.

**P1 :** gouvernance éditoriale (rédacteurs, spécialistes, relecteurs concernés, versions, sources), moteur de recherche documentaire et lien traçable entre réponses de l'IA et sources disponibles ; tests de la pertinence des explications et des limites de leur application.

**P2 :** formats multimédias, parcours pédagogiques, outils RH de compréhension des situations, intégration d'IA sécurisée avec limites de coûts.

Éviter les avertissements génériques répétitifs, **sans abaisser la confidentialité ou la rigueur** selon le profil déclaré par la personne. Conserver les deux directions de compréhension.

Références : [PRODUCT_DEFINITION_V3.md](PRODUCT_DEFINITION_V3.md) et [EDITORIAL_PLATFORM.md](EDITORIAL_PLATFORM.md).

---

# Neuro Bob+ — Feuille de route fondée sur la valeur d'usage

**Version :** 0.1, 21 novembre 2026  
**Propriétaire produit :** porteur du projet (décisions métier)  
**Coordination de la revue :** ChatGPT — cinq perspectives conceptuelles, **pas** cinq agents autonomes  
**Circuit de réalisation envisagé :** Claude/Codex et éventuellement autres agents, uniquement quand le porteur choisit d'en lancer. Claude arbitre les contributions techniques selon l'organisation décrite par le porteur.

## 0. Changement de priorité

**Ancienne instruction à remplacer :** reproduire obligatoirement l'image UI « validée ».  
**Nouvelle instruction du porteur :** l'interface peut évoluer si le produit, ses parcours et son utilité s'améliorent.

Conséquence : les assets et la maquette sont des **ressources**, pas un cahier des charges figé. Le produit doit rester reconnaissable, mais ses décisions de conception doivent être expliquées par un besoin ou un résultat de test.

## 1. Définition de succès

Neuro Bob+ rend une situation **plus intelligible et plus facile à aborder**, sans diagnostic ni assignation identitaire.

Chaque fonctionnalité doit indiquer :
1. le besoin utilisateur auquel elle répond ;
2. la valeur concrète qu'elle apporte ;
3. comment l'équipe peut vérifier cette valeur ;
4. les risques éthiques, de confidentialité ou d'accessibilité ;
5. les éléments qui justifieraient de **ne pas** la réaliser.

L'équipe évalue séparément **la qualité des réponses** et **la qualité de l'interface**.

## 2. P0 — Sécuriser et prouver l'utilité (avant de nouvelles fonctions coûteuses)

### P0-A — Repenser les parcours par intention
**Responsables de revue :** UX + Recherche  
**Mission :** proposer des entrées « comprendre », « décoder l'implicite », « préparer un échange », « adapter un contexte », sans demander de déclarer un neurotype.  
**Critères :** les utilisateurs comprennent au premier abord comment poser leur question ; la perspective atypique → typique reste clairement accessible ; aucun diagnostic demandé par défaut.  
**À ne pas faire :** parcours qui assignent un profil psychologique.

### P0-B — Formaliser les réponses fiables
**Responsables :** Recherche + Critique  
**Mission :** implémenter après validation le contrat [AI_BEHAVIOR_POLICY.md](AI_BEHAVIOR_POLICY.md) et une première base documentaire.  
**Critères :** faits, hypothèses et propositions distincts ; références réelles ; aucun stéréotype bloquant sur le corpus de test.  
**À ne pas faire :** prétendre que la prompt seule garantit une réponse sûre.

### P0-C — Vérifier les 16 cas sensibles
**Responsables :** Critique + Recherche + Développement  
**Mission :** exécuter les cas T01–T16 décrits dans [EVALUATION_PLAN.md](EVALUATION_PLAN.md), consigner réponses réelles et anomalies.  
**Critères :** pas d'étiquetage d'un tiers, pas de profilage RH, pas de fausse source validée, gestion adéquate du danger.  
**À ne pas faire :** publier uniquement un score global sans lire les erreurs.

### P0-D — Éviter les promesses non tenues dans la démo
**Responsables :** UX + Développement  
**Mission :** rendre explicitement indisponible le bouton « Claude en ligne » sur GitHub Pages tant que l'API serveur n'existe pas pour cette URL ; expliquer que le chat local est scénarisé.  
**Critères :** aucun parcours ne laisse croire qu'un chat réel est disponible lorsqu'il ne l'est pas.  
**À ne pas faire :** exposer une clé Anthropic dans le navigateur.

### P0-E — Clarifier la confidentialité et l'usage d'entreprise
**Responsables :** Critique + Développement + référents DPO/juridiques à associer  
**Mission :** déterminer données, destinataires, stockage effectif, logs, responsabilités, conditions d'usage et restrictions en contexte RH.  
**Critères :** information claire et exacte, aucun profilage de tiers, mesures anti-abus prévues avant toute API publique.  
**À ne pas faire :** promettre l'anonymat sans audit.

### P0-F — Première recherche utilisateur
**Responsables :** Recherche + UX + Accessibilité  
**Mission :** tester 4 à 6 parcours auprès de personnes aux expériences et besoins variés selon le protocole exploratoire.  
**Critères :** pouvoir démontrer compréhension, capacité d'agir et confiance ; inventorier les incompréhensions et biais, y compris sur les comportements neurotypiques.  
**À ne pas faire :** transformer un petit pilote en preuve statistique générale.

## 3. P1 — Consolider l'expérience et la connaissance

### P1-A — Base de connaissances sourcée
Champs de validation, dates, limites, citations reliées aux affirmations ; expert chargé de la revue et cycle de révision documentaire.

### P1-B — Outils de situation
- **Décodeur d'implicite** : phrases typiques et significations contextuelles, sans généralisation ;
- **Reformulation** : version courte, diplomatique, explicite ;
- **Préparation de dialogue** : propositions d'ouverture et de clarification ;
- **Checklist d'aménagement** : consignes, réunions, transitions, bruit, rythmes, etc. à choisir avec les personnes.

### P1-C — Accessibilité testée
Navigation clavier, lecteurs d'écran, contrastes, zoom, tailles de texte, réduction des animations, simplicité du langage, lecture vocale facultative. Audit contre la version RGAA applicable ; pas d'auto-déclaration de conformité.

### P1-D — Contrat conversationnel orienté utilisateur
Préférences « court / détaillé » ou « exemple / explication », réversibles et non liées à un diagnostic. Mesurer si l'adaptation aide réellement.

### P1-E — Infrastructure d'IA sérieuse
Fournisseur et version du modèle choisis et testés ; API backend ; protections contre les abus ; budget, monitoring sans données sensibles injustifiées ; gestion des incidents ; politique de conservation et de sous-traitance.

## 4. P2 — Enrichissements conditionnels

- Simulateur de conversation pour s'entraîner à clarifier des échanges, avec scénarios transparents et non stéréotypés.
- Parcours de sensibilisation pour équipes et managers, sans suivi individuel des diagnostics.
- Élargissement documentaire au-delà des situations de travail si les tests et la gouvernance le justifient.
- Adaptation de l'interface sur résultats d'usage, avec mascottes et animations optionnelles.
- Éventuel déploiement interne/externe ou marque blanche, sur décision métier et après examen de la protection des données.

**Ne pas implémenter P2 par simple attrait technologique.**

## 5. Livrables attendus par expertise

| Expertise | Livrable utile | Risque à challenger |
| --- | --- | --- |
| Design & UX | Parcours, prototypes testables, langage clair | Gadgetisation et charge cognitive |
| Accessibilité & Inclusion | Critères, tests avec personnes concernées, écarts à corriger | Adaptations imposées ou insuffisantes |
| Recherche & Psychosociologie | Hypothèses, documentation et protocoles, analyse des malentendus | Stéréotypes, extrapolations scientifiques |
| Développement & Architecture | Exécution fiable, API sûre, tests, qualité du code | Secret côté client, backend sans limites, dette technique |
| Critique & Évaluation | Cas adversariaux, registre des risques, critères go/no-go | Fausse expertise, promesses excessives, biais |
| Porteur de projet | Décisions de périmètre, priorités, contraintes et validation | Dérive du projet hors de sa mission |

## 6. Risques produits majeurs

| Risque | Pourquoi il compte | Contrôle minimal |
| --- | --- | --- |
| **Diagnostic implicite** | Étiquetage de tiers et stigmatisation | Règles explicites, exemples de refus, tests |
| **Assimilation normative** | L'outil apprendrait aux personnes atypiques à « paraître normales » | Compréhension réciproque et alternatives respectueuses |
| **Surconfiance documentaire** | Une IA peut produire une explication convaincante fausse | Corpus contrôlé, références, signalement des limites |
| **Vie privée au travail** | L'utilisateur peut évoquer des données de santé ou celles d'un collègue | Minimisation, pas de collecte non justifiée, examen DPO |
| **Fatigue cognitive** | Animations, densité, faux choix adaptatifs | Contrôles simples et tests d'usage |
| **Mode Claude public** | Requêtes payantes et données sensibles exposées | Backend, quotas d'accès, information, tests |
| **Fausse conformité** | Mauvaise information sur accessibilité et RGPD | Audit réel et communication précise |
| **Scope creep** | Promesse de devenir « expert de tous les troubles » | Progression par situations et contenu validé |

## 7. Séquence de travail proposée

**Itération 1 :** revue produit, parcours, cas tests, message de confidentialité.  
**Itération 2 :** tests utilisateurs avec la démo scénarisée et prototype de réponses, sans API payante.  
**Itération 3 :** ajustements fondés sur les retours, corpus vérifié, accessibilité et gouvernance.  
**Itération 4 :** connexion du modèle en environnement maîtrisé, red-team, éventuel pilote.

Il s'agit d'un **ordre logique**, non d'une promesse de travail automatisé, de délai ou de déploiement futur.

## 8. Décisions bloquantes avant un pilote organisationnel

- Qui porte juridiquement le projet et pour quel public ?
- Une entreprise aurait-elle accès à l'activité individuelle, aux conversations ou à des analyses ? **Par défaut : non.**
- Quel expert valide les informations sensibles ? À quelle cadence ?
- Quels usages de l'IA et sous-traitants sont autorisés dans l'organisation ?
- Comment l'utilisateur peut-il donner un retour, signaler une erreur ou interrompre un échange ?
- Quelle méthode de tests d'accessibilité et d'évaluation de l'utilité est retenue ?

**Référence produit :** [PRODUCT_VISION_V2.md](PRODUCT_VISION_V2.md).  
**Comportement IA :** [AI_BEHAVIOR_POLICY.md](AI_BEHAVIOR_POLICY.md).  
**Tests :** [EVALUATION_PLAN.md](EVALUATION_PLAN.md).

## 9. Consigne d'orchestration et de quotas

La création et la discussion de ces documents ont été menées dans **une conversation ChatGPT** avec des perspectives analytiques, sans lancer cinq agents indépendants. Ces documents ne déclenchent pas, à eux seuls, des sessions Codex/Claude. Les futurs lancements d'agents ou appels API doivent être des choix explicites du porteur du projet, avec leurs propres quotas et coûts.
