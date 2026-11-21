## Direction artistique impérative

La référence graphique du propriétaire du projet est **`design/reference-interface-validee.jpg`**. Avant de redessiner l'accueil, comparez-le à cette image : sidebar bleue, robot 3D clair au centre, colonne droite « Ma mission / Outils pratiques / Nos engagements », cinq cartes pastel, boutons de thèmes, trois cartes finales. Le propriétaire a demandé une restitution nettement plus fidèle que le premier prototype.

Les **12 personnages séparés** se trouvent dans `assets/characters/*.png` (512×512, fonds transparents), décrits par `assets/characters/manifest.json`. Utilisez-les plutôt que de redessiner arbitrairement un autre robot. L'animation de concept est `assets/neuro-bob-idee.gif`.

Dans le workflow Pages, toujours publier le dossier complet `assets/`, sinon les illustrations manqueront malgré leur présence sur GitHub. Le mode Claude ne peut pas fonctionner sur GitHub Pages sans backend.

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
- Respecter les libellés, la structure et la direction artistique de la maquette, tout en améliorant ses défauts.

## À tester avant publication
- Navigation complète clavier, lecteurs d'écran, contrastes, zoom et réduction des animations.
- Mode démonstration, mode Claude avec clé serveur, erreur réseau, absence de consentement.
- Absence de requête réseau API Claude en mode démo.
- Limitation des requêtes, protection contre l'abus et maîtrise des coûts en production.
- Fiabilité, biais et sources des réponses ; tests avec personnes concernées.
