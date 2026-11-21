## Assets et historique UI/UX (références évolutives)

- **Référence visuelle historique, non obligatoire** : `design/reference-interface-validee.jpg`.
- **12 variantes PNG transparentes** : `assets/characters/01-salut.png` à `12-conversation.png`, avec `manifest.json`.
- **GIF** : `assets/neuro-bob-idee.gif`.
- **État de la page d'accueil actuelle (peut changer)** : cinq grandes actions pastel, robot 3D principal, question libre, thèmes rapides, trois cartes de bas de page et colonne droite de panneaux ; présence visible des comportements neurotypiques.
- **Page Ressources** : galerie de 12 poses téléchargeables.
- Prioriser les besoins et résultats de test. La maquette n'est plus une contrainte pixel à pixel. Ne pas confondre apparence, certification RGAA, sécurité et expertise scientifique.
- Vérifier les chemins après chaque changement de workflow GitHub Pages.

# Guide de reprise — Codex / Claude Code / autres agents

> **Nouvelle priorité :** lire `docs/PRODUCT_VISION_V2.md`, `docs/PRODUCT_ROADMAP.md`, `docs/AI_BEHAVIOR_POLICY.md` et `docs/EVALUATION_PLAN.md`. Les images restent des assets, pas l'objectif final.

## Objectif
Continuer le prototype **Neuro Bob+**, agent IA conversationnel et ressource pédagogique sur la compréhension mutuelle entre comportements neurotypiques et neuroatypiques.

Lire en priorité :
1. docs/CONCEPT.md — sources atelier et décisions ;
2. README.md — installation et architecture ;
3. index.html + styles.css + app.js — interface et logique de démonstration ;
4. api/chat.js — passerelle sécurisée vers Anthropic.

## État initial
- Site statique HTML/CSS/JS sans dépendance de compilation.
- Navigation Accueil / Discuter / Explorer / Ressources / À propos.
- Accès symétriques « comprendre les fonctionnements neuroatypiques » et « comprendre les codes neurotypiques ».
- Discussions de démonstration **simulées localement**, sans IA ; indication explicite à l'écran.
- Option d'envoi à Claude lorsque ANTHROPIC_API_KEY est défini côté serveur et que l'utilisateur choisit le mode connecté.
- Préférences accessibles, stockées localement seulement pour la présentation ; messages en mémoire uniquement.
- Backend Vercel dans api/chat.js. Déploiement et conformité **non validés** à ce stade.

## Tâches prioritaires
P0 — Tester dans un navigateur et sur mobiles réels, corriger les bugs et les contrastes.
P0 — Vérifier l'API Claude sur un déploiement de test avec une clé dans les variables d'environnement Vercel, **jamais dans le dépôt**.
P0 — Prévoir limitation des requêtes, budget API, supervision, protection contre les abus et politique de logs côté serveur.
P0 — Revoir les limites, le consentement et la confidentialité avec un responsable compétent avant production.
P1 — Intégrer une base documentaire sourcée, datée, validée ; définir les règles de réponse et les citations.
P1 — Tester les deux portes d'entrée avec des personnes neurotypiques ET neuroatypiques, corriger les biais.
P1 — Audit RGAA, tests clavier/lecteur d'écran et mesures de préférences d'accessibilité.
P1 — Améliorer la mascotte : animation fluide légère, SVG/Lottie respectant prefers-reduced-motion.
P1 — Définir parcours managers, RH, collaborateurs, et éventuellement externes.
P2 — Formaliser design system, composants, tests automatisés, analytics respectueux de la vie privée.

## Gardes-fous produit
- Ne jamais inférer le diagnostic d'une personne à partir de son comportement.
- Ne pas présenter « neurotypique » ou « neuroatypique » comme un groupe homogène.
- Ne pas présumer qu'un interlocuteur appartient à tel profil.
- Ne pas promettre anonymat complet, conformité réglementaire ni exactitude clinique sans contrôle.
- Pour tout contenu de santé, distinguer information générale et conseil individualisé.
- Ne pas introduire de stockage de messages sans décision de gouvernance explicite.
- Le dispositif vise la compréhension réciproque, pas « l'adaptation des atypiques aux normes ».

## Architecture et API
Frontend → POST /api/chat → API Messages Anthropic.
Requête : JSON { messages: [{role:"user"|"assistant",content:"..."}], mode:"..." }.
Réponse : JSON { reply: "..." } ou { error: "..." }.
L'API est absente lors de l'ouverture directe de index.html ou d'un serveur statique seul : ce n'est pas un bug du mode démonstration.

## Décisions à demander au porteur du projet
- périmètre scientifique et classification des sujets ;
- publics internes/externes ;
- langage de marque et charte graphique définitive ;
- choix de fournisseur/modèle IA et budget ;
- architecture de la base documentaire et workflow de validation ;
- gouvernance des données, conformité et modalités de déploiement.

## Définition de « terminé » pour une future release
Interface testée, contenu revu, scénarios contradictoires évalués, secrets protégés, logs et données gouvernés, tests d'accessibilité effectués, conformité vérifiée, sécurité du backend éprouvée.
