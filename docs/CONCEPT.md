# Neuro Bob+ — Concept et cadrage fonctionnel

> Version de travail 0.1 — 20 novembre 2026. Document de transmission pour l'équipe, les développeurs, Codex et les autres IA.
>
> **Statut des informations** : distinction explicite entre **source atelier** (deux photographies fournies dans la conversation), **précision utilisateur** (échanges suivants), **proposition de conception** (hypothèse à valider) et **point non arbitré**.

## 1. Vision

**Neuro Bob+ est un agent IA spécialisé dans les questions de neurodiversité et la compréhension réciproque des fonctionnements neurotypiques et neuroatypiques.** Il doit répondre à tout le monde, indépendamment de son profil, et permettre de poser librement une question sans devoir déclarer un diagnostic.

Il combine deux capacités complémentaires :

1. **Converser** : expliquer, aider à décoder des comportements et situations, formuler des questions et préparer des échanges sensibles.
2. **Accéder à des contenus** : définitions, repères, ressources, exemples, méthodes, solutions concrètes et bonnes pratiques, avec validation éditoriale à construire.

L'ambition n'est ni de diagnostiquer, ni de « normaliser » les profils, ni de demander un effort d'adaptation unilatéral. Elle est de soutenir **la compréhension mutuelle**, la communication et l'inclusion, notamment dans les organisations.

### Deux portes d'entrée symétriques — précision apportée après les ateliers

- **Comprendre les fonctionnements neuroatypiques** : un collègue, un manager, un proche ou une personne concernée peut explorer les besoins et les différences de fonctionnement.
- **Comprendre les codes et comportements neurotypiques** : une personne neuroatypique peut demander des explications sur l'implicite social, les attentes, les interactions, les routines professionnelles ou les conventions de communication.

Cette seconde perspective doit être au premier plan, **pas cachée dans un sous-menu**, et sans essentialiser les personnes. Les deux entrées sont ouvertes à toutes et tous : elles ne présument pas de l'identité de l'utilisateur.

## 2. Retranscription des éléments apportés

### Photographie 1 — diapositive « Neuro Bob + »

La diapositive présente Bob comme « un spécialiste des questions de neurodivergences », capable de répondre « à tout le monde : personnes neurotypiques et neuroatypiques ».

La zone d'idéation, sous le titre « Avoir un agent IA adapté sur le sujet : avoir une IA neurodivergent augmentée », propose :
- accompagner les neurodivergents pour leur intégration ;
- permettre aux personnes non neurodivergentes, ou non concernées, de détecter ou non des comportements neurodivergents et de trouver des solutions pour manager, travailler avec, etc. ;
- offrir « un espace d'accueil anonyme où tu peux poser des questions ».

**Note de cadrage** : la mention « détecter des comportements » vient de l'atelier, mais ne doit **pas** devenir une fonctionnalité de diagnostic ou d'étiquetage de collègues : privilégier l'observation des situations, la compréhension de besoins et la recherche d'aménagements, sans inférence sur les diagnostics.

### Photographie 2 — « Phase 3 : Prototypage » / « Questions à la suite de la phrase présentée en groupe »

**Questions soulevées :**
- « Pour le TDAH j'ai du mal à le concevoir, ou allez-vous cibler certains troubles ? »
- Comment sensibiliser les personnes non concernées par l'IA ou la neurodiversité ? Comment partager l'outil avec les collaborateurs et les inciter à l'utiliser ?
- S'agit-il d'un agent avec qui converser ou d'un agent qui aide l'utilisateur neuroatypique ?
- « Interne ou externe ? »
- Un agent IA sur la neurodiversité ou un outil d'IA pour aider les personnes neuroatypiques à travailler ?

**Réponses et propositions notées sur la diapositive :**
- l'agent a vocation à être expert de « tous les troubles DYS » et à permettre aux salariés avec ou sans neurodivergence de l'utiliser ; l'expertise doit être intégrée à l'agent ;
- prévoir des modes d'accessibilité : réduction des sollicitations, respect du « RG2A » (notation relevée sur la photo ; **référence officielle à vérifier : RGAA**), doublage vocal pour limiter la lecture, modes adaptés aux besoins, tout en gardant un agent universel ;
- l'IA est utilisée pour la **conversation**, mais l'outil comporte également du **contenu organisé** pour traiter les situations difficiles dont l'utilisateur n'ose pas forcément parler ;
- si le projet est porté par une entreprise, direction et RH doivent être associées à sa communication ;
- rendre l'accès facile et offrir un espace pour celles et ceux qui se posent des questions mais ne veulent pas en parler.

**Ambiguïté explicite** : la diapositive oscille entre « tous les troubles DYS » et une vocation plus large. Le périmètre éditorial, les profils couverts et les limites des réponses spécialisées restent à valider.

## 3. Orientations actées au fil de la conversation

1. Nom retenu pour le prototype : **Neuro Bob+**.
2. Design exploré : bleu foncé, indigo, bleu clair, accents jaunes et verts ; robot amical blanc, écran facial sombre, yeux cyan, emblème de cerveau ; interface accueillante et non médicale.
3. Application orientée **questions/réponses**, mais également exploration par thèmes et outils.
4. L'utilisateur a explicitement demandé que les **comportements neurotypiques soient expliqués aux personnes neuroatypiques**, au même niveau que l'inverse.
5. Une planche de mascottes puis un GIF de Neuro Bob+ ont été produits comme explorations graphiques ; leurs fichiers ne constituent pas un design system ni des assets de production validés.
6. Première implémentation prévue sur le dépôt GitHub **Famickael/ia-neuroatypique**, renommé ensuite en **Famickael/neuro-bob** (le produit garde le nom « Neuro Bob+ ») ; futur branchement à l'API Anthropic.

## 4. Publics et situations d'usage

Le public est **ouvert** et ne doit pas se limiter à un diagnostic ou au seul TDAH :
- salariés neuroatypiques, neurotypiques ou en questionnement ;
- managers et équipes projet ;
- équipes RH, inclusion, QVCT et communication ;
- collaborateurs souhaitant comprendre une interaction sans désigner ni stigmatiser un tiers ;
- éventuellement publics externes et partenaires (**non arbitré**).

### Exemples de requêtes

- « Pourquoi certaines personnes utilisent-elles beaucoup de sous-entendus au travail ? »
- « Je prends les consignes au pied de la lettre : comment demander des clarifications ? »
- « Comment présenter une modification de planning sans mettre quelqu'un en difficulté ? »
- « Comment parler de mes besoins au travail sans révéler un diagnostic ? »
- « Comment adapter une réunion pour accueillir des besoins variés ? »
- « Comment expliquer les conventions implicites d'une conversation ? »
- « Je suis manager : comment éviter les suppositions sur le fonctionnement d'une personne ? »

## 5. Expérience cible et règles UX

### Accueil
- introduction claire de la mission et robot mascotte ;
- question libre accessible immédiatement ;
- **deux portes d'entrée symétriques** neuroatypiques / neurotypiques ;
- exemples concrets cliquables, accompagnement au travail, médiation et ressources ;
- absence d'obligation de s'identifier à un profil.

### Conversation
- échanges simples, ton clair, bienveillant et non infantilisant ;
- reformulation et clarification possibles ;
- réponses nuancées, hypothèses explicitement distinguées des certitudes ;
- mise en situation et pistes d'aménagements sans diagnostics ni catégorisation forcée ;
- renvoi vers des ressources vérifiables lorsqu'elles existent ;
- transparence sur l'utilisation éventuelle d'un fournisseur d'IA externe ;
- invitation à consulter un professionnel approprié lorsque nécessaire.

### Accessibilité — objectifs, non certification
- navigation clavier, focus visible, HTML sémantique, contrastes à contrôler ;
- lecture à voix haute optionnelle, texte agrandi, réduction des animations/sollicitations ;
- interface simplifiée, langage clair, réponses courtes à la demande ;
- tester avec des personnes aux besoins variés et auditer contre le **RGAA**, plutôt que déclarer une conformité non vérifiée.

### Confidentialité
- prototype ouvert sans compte ;
- ne jamais demander de diagnostic ni de donnée de santé pour accéder aux réponses ;
- pas d'enregistrement de conversations dans le MVP ;
- seules les préférences d'affichage peuvent être conservées localement ;
- **si la connexion à Anthropic est activée, des textes sont transmis au fournisseur** : informer l'utilisateur, obtenir son choix éclairé et vérifier les conditions applicables avant déploiement en entreprise.
- « anonyme » dans le pitch **ne signifie pas** anonymat technique ou juridique garanti (logs d'hébergement, IP, sous-traitants, etc.).

## 6. Structure fonctionnelle du prototype

- **Accueil** : promesse, points d'entrée et suggestions.
- **Discuter** : messagerie en mode démonstration local ou Claude côté serveur.
- **Explorer** : sujets, fiches pédagogiques de départ et situations professionnelles.
- **Ressources** : liens vers les orientations produit, bonnes pratiques et avertissements.
- **Accessibilité** : réglages visibles et disponibles sur toutes les pages.
- **À propos** : périmètre, confidentialité, limites de l'outil.

## 7. Limites du MVP

Ce prototype **n'est pas** :
- un outil médical de dépistage ou diagnostic ;
- une évaluation du profil des salariés ;
- une preuve de fiabilité clinique ou scientifique ;
- un outil certifié conforme RGAA, RGPD ou règlement européen sur l'IA ;
- une base de connaissances spécialisée validée par un comité expert.

Les fiches et réponses de démonstration servent à tester le **parcours UX**. Elles nécessitent un travail documentaire, une validation par experts, des tests utilisateurs et une gouvernance de contenu avant tout usage sensible.

## 8. Questions ouvertes à trancher

1. Périmètre : « tous les DYS » ou neurodiversité au sens large ? Quels sujets traiter/écarter ?
2. Produit interne entreprise, externe, hybride, marque blanche ?
3. Qui valide les ressources, les réponses de référence et les cas complexes ?
4. Quelle politique de données (stockage, logs, conservation, fournisseur, DPA, hébergement, accès, DPIA si applicable) ?
5. Quelle identité graphique finale et quels droits d'utilisation pour le robot ?
6. Comment mesurer l'utilité, la compréhension mutuelle et les effets sur l'inclusion sans mesurer les personnes ?
7. Quelle gouvernance RH/communication et quel accompagnement au déploiement ?
8. Quelles exigences concrètes d'accessibilité auditer avant la mise en service ?

## 9. Critères d'acceptation de la V1

- les deux perspectives neurotypiques/neuroatypiques sont **visibles sans défilement long** sur ordinateur et accessibles sur mobile ;
- le parcours fonctionne sans clé API grâce au mode démo, explicitement signalé ;
- une connexion Anthropic peut être ajoutée **uniquement côté serveur** ;
- aucun secret n'est commité dans Git ;
- le chat n'émet aucun appel vers Anthropic sans choix explicite de l'utilisateur ;
- les réglages d'affichage, la navigation et les démonstrations sont utilisables ;
- les textes évitent les généralisations, les diagnostics et les promesses de conformité ;
- les prochaines IA disposent d'une documentation de reprise et d'une liste de décisions à arbitrer.
