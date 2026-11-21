## DÉCISIONS DU PORTEUR — après la revue critique (21 novembre 2026, les plus récentes)

Lire **`docs/DECISIONS_PORTEUR_2026-11-21.md`** avant tout le reste. En résumé :
- **outil interne d'entreprise** : l'entreprise paie et possède Neuro Bob+ ; publics = ses collaborateurs ; finalité = **sensibilisation / formation / entraînement**, jamais évaluation, dépistage ou décision RH ;
- **cas d'un tiers (option B)** : faits → mécanismes → contexte → actions ; **ne pas nommer de trouble** à propos d'une personne absente (sauf diagnostic partagé par elle) ;
- **Bibliothèque d'abord**, en **maquette** : beaucoup d'ébauches (`status: "ebauche"`) acceptées ; l'objectif est de montrer fonctionnalités et positionnement ;
- **périmètre** : toutes les neurodivergences, dont tous les DYS.
La revue complète est dans `docs/REVUE_CRITIQUE_ET_RECOMMANDATIONS.md` (analyse d'IA, non validée).

## ORIENTATION V3 — décision produit la plus récente (21 novembre 2026)

**Lire d'abord :**
1. `docs/PRODUCT_DEFINITION_V3.md` — plateforme de contenus ET agent IA, explications neurocognitives, profils facultatifs, cas manager avec ou sans diagnostic connu ;
2. `docs/EDITORIAL_PLATFORM.md` — architecture des fiches, articles, sources, statuts et validations ;
3. `docs/CONCEPT.md` — observations de l'atelier ;
4. `docs/PRODUCT_ROADMAP.md`, `docs/EVALUATION_PLAN.md` et `docs/AI_BEHAVIOR_POLICY.md` — plan, tests et limites.

**Ne pas interpréter la V2 comme une interdiction d'expliquer les comportements ou de formuler des hypothèses neurocognitives.** Bob doit répondre utilement et directement aux questions sur un collaborateur, en présentant les mécanismes plausibles (et les autres causes) sans inférer un diagnostic, une émotion ou une aptitude personnelle.

La **Bibliothèque est une composante centrale**, et non un catalogue secondaire : `editorial.js` contient les fiches de démonstration, chaque article doit fournir son statut, ses sources, leurs limites et des possibilités d'approfondissement. `index.html`, `app.js` et la publication GitHub Pages doivent conserver cette page.

Ne pas figer le design. Ne pas exposer de clé. Ne pas lancer Codex, Claude ou un fournisseur facturé sans nouvelle autorisation explicite. Lors d'une continuation autonome, privilégier les modifications documentaires et les corrections réversibles ; ne pas prétendre qu'une conception a été validée par des experts ou des utilisateurs.

## PRIORITÉ PRODUIT — décision du porteur du projet, 21 novembre 2026

**Ne pas figer l'interface sur une ancienne image.** Le propriétaire du projet privilégie maintenant les objectifs, la valeur utilisateur, la compréhension réciproque, la fiabilité des contenus, l'inclusion et l'évaluation. Les choix UI/UX peuvent évoluer, y compris sensiblement, lorsqu'ils sont argumentés par les besoins et les tests.

Ordre de lecture avant de proposer des tâches :
1. `docs/CONCEPT.md` — traces des ateliers et éléments vraiment exprimés ;
2. `docs/PRODUCT_VISION_V2.md` — nouvelle hypothèse de valeur et parcours ;
3. `docs/AI_BEHAVIOR_POLICY.md` — limites et réponse attendue de Bob ;
4. `docs/EVALUATION_PLAN.md` — tests utilisateurs et cas critiques ;
5. `docs/PRODUCT_ROADMAP.md` — priorités, critères et risques ;
6. `docs/REPRISE_CODEX.md` — contexte technique.

La maquette `design/reference-interface-validee.jpg`, les douze PNG dans `assets/characters/` et le GIF sont des **références disponibles**, pas un contrat graphique impératif. Prioriser l'utilisation réelle plutôt que la fidélité pixel à pixel.

Les autres assistants ne doivent pas lancer des agents indépendants, déclencher des appels payants à des API ou consommer des quotas Codex/Claude sur la seule base de cette documentation ; les lancements restent à autoriser par le porteur. Les revues multi-expertises dans ChatGPT sont des perspectives analytiques, pas cinq agents autonomes.

# AGENTS.md — règles de reprise du projet Neuro Bob+

## Contexte prioritaire
- Lisez **docs/CONCEPT.md** en premier. Les deux photos d'atelier y sont restituées, avec leurs ambiguïtés.
- Lisez **docs/REPRISE_CODEX.md** pour l'état et les prochaines tâches.
- Gardez la porte d'entrée « décoder les codes neurotypiques » **aussi visible** que « comprendre les fonctionnements neuroatypiques ».
- Ne transformez pas les questions d'atelier (« détecter des comportements ») en un outil d'inférence de diagnostic d'un tiers.

## Exigences
- Interface en **français**, accessible, responsive, bienveillante sans être infantilisante.
- Pas de stéréotype ni de catégorisation des personnes. Ne pas imposer aux profils neuroatypiques de s'adapter seuls.
- Ne pas présenter le prototype comme un outil médical, une expertise validée ou un service certifié RGAA/RGPD.
- Préserver un **mode démo sans réseau** distinguable du mode IA réel.
- **Aucune clé dans le frontend ni dans les commits.** Les appels à Anthropic passent par `api/chat.js`.
- Les messages restent éphémères tant que la politique de données n'a pas été arbitrée.
- Avant d'ajouter du stockage ou un service externe, documenter les données, le consentement, le traitement et les risques.
- Pour les prochaines fonctionnalités, proposer les tests, les critères d'acceptation, les décisions à prendre.
- Prioriser les objectifs utilisateurs et la compréhension mutuelle ; conserver les assets utiles, sans imposer la composition de la maquette antérieure.

## À tester avant publication
- Navigation complète clavier, lecteurs d'écran, contrastes, zoom et réduction des animations.
- Mode démonstration, mode Claude avec clé serveur, erreur réseau, absence de consentement.
- Absence de requête réseau API Claude en mode démo.
- Limitation des requêtes, protection contre l'abus et maîtrise des coûts en production.
- Fiabilité, biais et sources des réponses ; tests avec personnes concernées.
