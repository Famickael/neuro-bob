# Neuro Bob+ 🤖

**Une plateforme de contenus et un agent IA dédiés à la neurodiversité, aux explications neurocognitives et à la compréhension réciproque.**

> Dépôt GitHub : [Famickael/neuro-bob](https://github.com/Famickael/neuro-bob) (anciennement `ia-neuroatypique`).

Neuro Bob+ est une **maquette interactive** d'agent IA sur la neurodiversité, les comportements et les situations professionnelles. Le projet est issu d'un atelier de prototypage dont les observations et questions sont documentées dans [docs/CONCEPT.md](docs/CONCEPT.md).

> **V0.2 — Prototype d'expérimentation, pas service de production.**
> L'interface et le mode démonstration fonctionnent sans clé. Le mode Claude nécessite une configuration serveur et des contrôles supplémentaires avant une mise à disposition publique.

## Nouveau cadrage produit — 21 novembre 2026

La dernière orientation du porteur est décrite dans [**PRODUCT_DEFINITION_V3.md**](docs/PRODUCT_DEFINITION_V3.md) et [**EDITORIAL_PLATFORM.md**](docs/EDITORIAL_PLATFORM.md). Elle **remplace** la restriction excessive de la V2 à de simples conseils de communication.

- **Une plateforme éditoriale autonome :** Bibliothèque avec six contenus illustratifs (TDAH, autisme, DYS, conventions neurotypiques, cas de management et aménagements).
- **Un agent explicatif :** il formule des hypothèses neurocognitives et contextuelles sans diagnostiquer ; il répond directement aux managers y compris quand un TND n'est pas connu.
- **Trois entrées facultatives :** « je suis neurotypique », « je suis neuroatypique », « je préfère explorer librement ». Aucune classification ni diagnostic n'en découle.
- **Précautions proportionnées :** ne pas noyer les réponses dans les avertissements, sans abaisser les garde-fous sur les données de tiers.
- **Navigation :** une Bibliothèque consultable sans connexion à un fournisseur d'IA et une section « Outils & ressources » distincte.
- **Statut des articles :** démonstration documentée, non validée par un comité scientifique.

Le site GitHub Pages reste statique. Le mode Claude exige un backend indépendant et une analyse de sécurité/confidentialité avant toute ouverture publique.

## Direction produit — revue du 21 novembre 2026

**Le produit prime désormais sur la reproduction d'une interface.** Neuro Bob+ doit aider à comprendre, expliciter et ajuster des situations de communication et de collaboration, **dans les deux sens**, sans profilage ni diagnostic.

Documents de travail (propositions à valider, pas résultats de cinq agents autonomes) :
- [Vision produit V2](docs/PRODUCT_VISION_V2.md) — proposition de valeur, quatre parcours et hypothèses.
- [Politique de comportement IA](docs/AI_BEHAVIOR_POLICY.md) — réponse de Bob, sources, limites et sécurité.
- [Recherche et évaluation](docs/EVALUATION_PLAN.md) — étude exploratoire et seize tests critiques.
- [Feuille de route produit](docs/PRODUCT_ROADMAP.md) — priorités basées sur l'utilité, pas sur l'esthétique.

## Design et assets de la démonstration (références évolutives)

- **Référence visuelle historique, non contraignante** : [dernière maquette présentée](design/reference-interface-validee.jpg).
- **12 poses individuelles** : [assets/characters](assets/characters/), 12 PNG de 512 × 512 px avec véritable fond transparent. Les intitulés et usages sont dans [manifest.json](assets/characters/manifest.json).
- **GIF animé** : [Neuro Bob+ trouve une idée](assets/neuro-bob-idee.gif).
- **Galerie intégrée** : ouvrir « Ressources » dans la démonstration pour parcourir et télécharger chaque pose.

La page d'accueil est un tableau de bord d'outils : navigation bleue, zone de bienvenue avec Neuro Bob+ et champ de question, deux portes d'entrée de poids égal, cartes d'outils pastel (une couleur par rubrique, reprise dans la Bibliothèque), puces par neurodivergence et colonne de panneaux (« Votre parcours », « Outils pratiques », « Nos engagements », « Besoin d'aide ? »). Il n'y a ni fil d'Ariane, ni pied de page, ni rappel de marque blanche dans l'interface. Les compteurs de fiches sont calculés depuis `editorial.js` ; la progression du parcours (modules ouverts) n'est gardée qu'en `sessionStorage`, le temps de la visite, et n'est transmise nulle part.

**Déploiement GitHub Pages** : le workflow `.github/workflows/deploy-pages.yml` copie le site, tout le répertoire `assets/` et `design/` afin que les images ne soient pas absentes du site publié. L'API Anthropic reste indisponible sur Pages seul : utiliser une fonction serveur séparée pour le mode Claude.

## Pourquoi ce projet ?

L'enjeu n'est pas seulement d'aider les personnes neurotypiques à comprendre les fonctionnements neuroatypiques. **Les personnes neuroatypiques doivent pouvoir, elles aussi, explorer et décoder les codes, comportements et conventions neurotypiques**, sans stigmatisation et sans obligation de déclarer un profil.

La maquette met donc en avant deux portes d'entrée de poids égal, utilisables par toute personne.

## Ce qui est déjà disponible

- **Cinq vues, une destination par entrée de menu :** Accueil, Bibliothèque, Parcours, S'entraîner avec Bob, Cadre d'usage. Chaque vue et chaque fiche a une adresse partageable (`#bibliotheque/travail`, `#fiche/dyslexie`…), et le bouton Retour du navigateur fonctionne.
- **Bibliothèque :** 38 fiches (toutes les neurodivergences, dont tous les DYS ; mécanismes cognitifs ; codes implicites ; travail et RH ; modules de sensibilisation), avec statut de relecture et sources.
- **Parcours :** 5 modules de sensibilisation ordonnés, dont un kit d'atelier d'équipe.
- **S'entraîner avec Bob :** mises en situation, mode démonstration local (réponses préparées, aucune requête réseau) et mode IA en ligne avec consentement.
- **Cadre d'usage :** pour qui, ce que l'outil n'est pas, règle sur les tiers, interlocuteurs internes, ressources externes, confidentialité.
- **Affichage :** texte agrandi, contraste renforcé, animations réduites, interface apaisée ; lecture vocale facultative.
- **Animation d'ouverture** (2,4 s, une fois par session, passable au clavier ou au clic, désactivée en mouvement réduit).
- Direction artistique et audit UX : [AUDIT_DA_2026-11-22.md](docs/AUDIT_DA_2026-11-22.md), [AUDIT_UX_2026-11-22.md](docs/AUDIT_UX_2026-11-22.md) (analyses produites par IA).

## Démarrage

**Mode démonstration :** ouvrir `index.html` avec un navigateur moderne, ou démarrer un serveur de fichiers statiques :

~~~bash
python3 -m http.server 8080
~~~

Puis ouvrir http://localhost:8080 .

Les parcours, les fiches et le chat de démonstration ne nécessitent aucune API externe.

**Bob avec votre abonnement Claude, depuis GitHub (Codespaces, rien à installer) :**

1. Sur la page du dépôt GitHub : bouton vert **Code** → onglet **Codespaces** → **Create codespace**. Patienter une à deux minutes.
2. Dans le terminal en bas de l'écran, taper `claude`, puis suivre la connexion à votre compte Claude. Quitter ensuite avec `/exit`.
3. Taper `npm run bob`. Un onglet « Neuro Bob+ » s'ouvre (sinon : onglet **Ports**, ligne 8787, icône globe).
4. Dans « S'entraîner avec Bob », choisir « IA en ligne » et cocher l'accord.

Le port reste privé : seul votre compte GitHub peut ouvrir la page. Arrêter le Codespace après usage (menu Codespaces → Stop) pour ne pas consommer votre quota gratuit.

**Mode local personnel (avec votre abonnement Claude) :** pour faire tourner Bob pour vous seul, sur votre machine, sans clé API.

1. Installer Claude Code et s'y connecter avec votre compte (`claude`, puis `/login`).
2. Dans le dossier du projet : `npm run bob`, puis ouvrir http://127.0.0.1:8787 .
3. Dans « S'entraîner avec Bob », choisir « IA en ligne » et cocher l'accord.

Le script `scripts/bob-local.mjs` sert le site et transmet chaque question à `claude -p` (aucun outil, aucun serveur MCP, aucune session enregistrée), avec le même prompt système que `api/chat.js`. Il n'écoute que sur 127.0.0.1 : **usage personnel uniquement**, à ne pas exposer sur un réseau ni déployer. Variables facultatives : `BOB_PORT`, `BOB_MODEL` (ex. `claude-sonnet-5-5`), `BOB_CLAUDE_BIN`.

**Mode Claude :** le dépôt est configuré pour l'hébergement sur Vercel (fonction `api/chat.js`).

1. Importer ce dépôt dans un projet Vercel ou exécuter `npx vercel dev` dans le dossier du projet.
2. Ajouter la variable serveur `ANTHROPIC_API_KEY` dans les variables d'environnement de Vercel (ou votre environnement local).
3. Facultatif : personnaliser `ANTHROPIC_MODEL` si nécessaire. Le nom de modèle fourni dans `.env.example` est **à confirmer auprès de la documentation Anthropic au moment de l'intégration**.
4. Sur l'écran **Discuter**, choisir **Claude (en ligne)**, lire l'information sur le transfert des données et cocher l'accord avant d'envoyer.

**Ne jamais placer la clé API dans du HTML, du JS exécuté dans le navigateur ou un commit Git.** La clé ne doit pas être envoyée dans une conversation ou une capture d'écran.

## Architecture

~~~text
index.html            Interface / navigation / vues
styles.css            Design system (tokens), responsive, accessibilité
intro.css, intro.js   Animation d'ouverture (une fois par session)
app.js                Navigation par adresses, bibliothèque, parcours, chat de démonstration
editorial.js          Fiches de la bibliothèque (statut, sections, sources)
demo-scenarios.js     Conversations de démonstration jouées dans la vue Bob (préparées à l'avance, sans IA)
assets/characters/trim/  Poses de la mascotte recadrées + avatar
assets/neuro-bob.svg  Mascotte originale (vectorielle)
assets/favicon.svg    Icône
api/chat.js           Passerelle serveur vers Anthropic Messages API
.env.example          Noms des variables attendues
vercel.json           En-têtes HTTP de base pour Vercel
docs/CONCEPT.md       Concept, lecture des photos, besoins, arbitrages
docs/REPRISE_CODEX.md Guide pour développeurs et IA
AGENTS.md             Instructions opérationnelles pour agents de code
~~~

En mode connecté : **navigateur → `/api/chat` → Anthropic**. La clé reste côté serveur. Aucune base de données n'est utilisée dans cette version.

### Commandes

~~~bash
npm run check
# Vérifie la syntaxe JavaScript, si Node.js est installé.

npx vercel dev
# Lance l'application et la fonction serveur Vercel.
~~~

## Vie privée et sécurité : points importants

- **Le mode démo est local** : les réponses sont *préécrites et scénarisées*, pas générées par un modèle.
- En **mode Claude**, les questions et jusqu'aux 12 derniers messages sont envoyés à Anthropic **avec l'accord explicite** de l'utilisateur.
- **Aucun stockage applicatif volontaire des échanges** dans le MVP ; cela ne préjuge pas de la journalisation technique côté hébergeur/fournisseur.
- « Accueil anonyme » est une **intention de conception** et ne constitue **pas une garantie d'anonymat**.
- Pas de diagnostic, pas de profilage des collaborateurs, pas de dépistage ni d'avis médical individualisé.
- **Avant exposition publique**, ajouter un vrai dispositif anti-abus / rate limiting, une maîtrise des coûts et des quotas, des tests de sécurité, une politique de logs, un examen des traitements de données et une gouvernance documentaire.
- Pas de revendication de conformité **RGAA** ou **RGPD** sans audit et validation.
- Le contenu des fiches est **illustratif** et doit être documenté, sourcé, relu et testé.

## Reprise du projet par Codex ou une autre IA

Lire [AGENTS.md](AGENTS.md), puis [docs/CONCEPT.md](docs/CONCEPT.md) et [docs/REPRISE_CODEX.md](docs/REPRISE_CODEX.md) **avant** de modifier le produit. Ces documents distinguent les notes de l'atelier, les décisions formulées ensuite et les hypothèses ajoutées pour rendre la maquette fonctionnelle.

## État des validations

| Vérification | État |
| --- | --- |
| Dépôt et fichiers présents | Oui |
| Démonstration sans dépendance API | Implémentée, à tester dans le navigateur |
| Syntaxe JS | Vérifiée au moment de la publication |
| Connexion réelle à Anthropic | À tester avec une clé serveur |
| Responsive et lecteurs d'écran | Conçu pour, tests utilisateurs à faire |
| RGAA / RGPD | Non audités |
| Sécurité / anti-abus | Incomplet pour la production |

---

**Intention de départ :** la compréhension mutuelle, pas l'assimilation à une norme unique.
