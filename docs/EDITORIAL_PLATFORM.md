# Neuro Bob+ — Architecture de la plateforme éditoriale

**Statut :** proposition de structure V1 — 21 novembre 2026

## 1. Une plateforme autonome

La bibliothèque n'est ni une annexe du chatbot ni une simple liste de liens. Elle doit exister sans compte et sans IA, avec des contenus consultables, recherchables et mis à jour.

### Taxonomie proposée

| Univers | Exemples | Fonction |
| --- | --- | --- |
| Comprendre les TND | TDAH, autisme, troubles DYS, différences d'attention, fonctions cognitives | Construire des repères spécialisés |
| Comprendre les comportements | inhibition, anticipation, communication, sensorialité, fonctions exécutives, codes sociaux | Expliquer sans conclure à un diagnostic |
| Comprendre le travail | consignes, réunions, feedback, changements, surcharge, coopération | Relier mécanismes et pratiques RH |
| Agir ensemble | aménagements, entretien, préparation de dialogues, outil pour managers | Décider, essayer, ajuster |
| Approfondir | dossier scientifique, sources, témoignages, recherches et débats | Aller au-delà de la réponse courte |

Les catégories éditoriales ne sont pas des catégories de personnes. Le classement d'une ressource peut être multiple.

### Formats

- **Fiche repère :** définition, mécanismes connus, variantes, idées reçues, sources ;
- **Décryptage :** comportement ou situation, hypothèses multiples, explications neurocognitives plausibles, causes alternatives ;
- **Cas professionnel :** observation, facteurs possibles, leviers RH, formulation d'échange, confidentialité ;
- **Article long :** analyse et limites des recherches ;
- **Parcours :** série de ressources courtes organisées par objectif ;
- **Audio/vidéo :** transcriptions et alternatives accessibles obligatoires avant publication ;
- **Témoignage :** contexte personnel et témoignage situé, sans généralisation.

## 2. Cycle éditorial

1. Proposer un sujet et définir le public ou l'intention.
2. Rassembler des références primaires ou institutionnelles appropriées au contexte.
3. Rédiger avec séparation explicite entre faits / hypothèses / conseils.
4. Faire relire le contenu scientifique par une personne compétente.
5. Faire relire la formulation et l'utilité par les publics concernés.
6. Vérifier la conformité des sources et les liens.
7. Publier avec un statut éditorial visible, date de dernière revue et référent.
8. Programmer une révision ou retrait en cas d'obsolescence.

### Statuts

- **Démonstration** : contenu illustratif non validé scientifiquement, affiché comme tel.
- **En rédaction** : non publiable en production.
- **À relire** : sources réunies mais validation éditoriale insuffisante.
- **Vérifié** : sources, relecture et date de revue enregistrées.
- **À actualiser** : données à revérifier.
- **Retiré** : ne plus afficher ni citer dans le chat.

Pour le prototype actuel, **toutes les notices sont au statut démonstration documentée**, même lorsque la référence externe est réelle. La présence d'une URL n'est pas un visa scientifique.

## 3. Modèle de données recommandé

Chaque objet :
- \`id\`, \`slug\`, \`title\`, \`abstract\`, \`format\`, \`topics\`, \`intentions\`;
- \`audience\` (cible d'usage ; sans inférer de santé) ;
- \`key_points\` (énoncés concis), \`hypotheses\` (interprétations contextualisées), \`actions\` (pistes) ;
- \`claims\` (faits et sources qui les étayent) ;
- \`sources\` avec \`name\`, \`year\`, \`url\`, \`relevance\`, \`limitations\`;
- \`editorial_status\`, \`reviewed_at\`, \`reviewer\`, \`next_review_due\`;
- \`related_content_ids\`, \`chat_entry_prompt\`;
- \`accessibility\` (alt, transcription, lecture, etc. selon format).

**Contrat de confiance :** le chatbot ne peut présenter une source comme « citée » que s'il possède une référence réellement associée au fait. Une suggestion ou un scénario n'est pas une preuve scientifique.

## 4. Règles de qualité

- Ne pas affirmer « tel comportement est neurologique » simplement parce qu'un trouble peut parfois s'y associer.
- Pour une réponse managériale, les hypothèses **doivent inclure le contexte de travail** et ne pas transformer un salarié en objet de diagnostic.
- Conserver des ressources de **décodage des codes neurotypiques**, avec exemples concrets et sans essentialisation.
- Ne pas demander un diagnostic ou une identité pour ouvrir la bibliothèque.
- Ne pas supposer qu'une personne ayant choisi « je suis neurotypique » souhaite une réponse simpliste ; cette entrée signifie un besoin d'accompagnement, pas une permission de profiler.
- Chaque vidéo doit disposer d'une alternative textuelle ; chaque outil interactif doit fonctionner au clavier et sans animation.
- Les contenus relatifs à des soins ou à des recommandations cliniques doivent être sourcés pour la tranche d'âge et le pays visés.

## 5. Première série éditoriale pour la démonstration

1. **Comprendre ce qu'est un TDAH**, fiche de repère avec sources HAS et indication des limites de transfert enfant/adulte ;
2. **Fonctions exécutives, priorisation et interruptions**, décryptage de mécanismes possibles et facteurs de contexte ;
3. **Réagir à un changement de planning**, cas managérial sans diagnostic ;
4. **Décoder les formulations indirectes**, comprendre des conventions neurotypiques sans les considérer universelles ;
5. **Troubles DYS : repères essentiels**, fiche reposant sur la terminologie TSLA de la HAS ;
6. **Adapter le travail sans demander de diagnostic**, cas RH avec CNIL et Service-Public.

Les six premières fiches restent affichées comme **contenus de démonstration** tant que le comité éditorial n'a pas validé les textes.

## 6. Critères de recette

- Bibliothèque navigable depuis la barre de navigation principale.
- Recherche et filtres par **thème/format/intention**, pas par diagnostic utilisateur.
- Chaque notice présente : statut éditorial, résumé, explication détaillée, ressources, source et date lorsque disponibles.
- Un utilisateur peut lire l'article **sans solliciter une API externe**.
- Depuis un contenu, possibilité de « poser une question à Bob », sans envoyer l'article au fournisseur externe à l'insu de l'utilisateur.
- Les parcours peuvent être adaptés par choix explicite de l'utilisateur, sans mécanisme de profilage caché.

## 7. Proposition du 22 novembre 2026 — liens directs par fiche

Une première proposition technique permet de partager une fiche via une URL du type `?article=manager-priorites`, sans compte ni appel IA. Un lien « Lien direct vers cette fiche » est présent dans la fenêtre de lecture ; ouvrir ce lien dans un nouvel onglet mène à la Bibliothèque avec la fiche affichée. Un identifiant inconnu ne doit ni planter l'application ni ouvrir une fiche arbitraire.

**Valeur :** diffuser des ressources dans un intranet, une formation ou un parcours de sensibilisation, sans obliger les salariés à ouvrir une conversation.

**Limites / arbitrages pour Claude :**
- Ce sont des URL de démonstration, **pas** des URL de production ni des garanties de pérennité. La future instance interne en marque blanche devra gérer son domaine et ses droits d'accès.
- L'URL contient uniquement l'identifiant public de la fiche, jamais de donnée de santé, d'identité ni de conversation.
- Le prototype utilise une fenêtre modale ; évaluer ultérieurement une vraie page dédiée pour le référencement interne, le retour navigateur, les ancres de section et l'accessibilité.
- Les tests ajoutés sont des vérifications de structure du code ; un test de navigation réel, au clavier et au lecteur d'écran, reste nécessaire.
- Aucun contenu n'est promu au statut « vérifié » par cette modification.
