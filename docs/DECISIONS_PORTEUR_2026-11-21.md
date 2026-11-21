# Neuro Bob+ — Décisions du porteur (21 novembre 2026, après la revue critique)

**Statut :** décisions du porteur du projet, prises en réponse à [REVUE_CRITIQUE_ET_RECOMMANDATIONS.md](REVUE_CRITIQUE_ET_RECOMMANDATIONS.md). Elles **prévalent** sur les points contraires de [PRODUCT_DEFINITION_V3.md](PRODUCT_DEFINITION_V3.md) et des documents antérieurs.

## 1. Positionnement : outil interne d'entreprise, de sensibilisation

- **Payeur et propriétaire :** une entreprise. Neuro Bob+ **appartient à l'entreprise** qui le déploie ; il s'intègre à sa politique d'inclusion et à ses dispositifs existants (mission handicap, RH, médecin du travail).
- **Publics :** les **collaborateurs internes** de cette entreprise : personnes concernées ou non, collègues, managers, équipes RH.
- **Finalité :** **sensibilisation, formation et entraînement**. Neuro Bob+ est un outil d'apprentissage, pas un outil de décision RH, d'évaluation de salariés ou de dépistage.
- Dans la maquette, le nom de l'entreprise apparaît sous la forme `[Votre entreprise]` (marque blanche à personnaliser).

## 2. Cas « un manager décrit un collaborateur » : option B, mécanismes d'abord

Retenu dans un cadre d'**entraînement / sensibilisation** :
1. partir des **faits observables** (distinguer faits et interprétations) ;
2. présenter les **mécanismes possibles** (attention, inhibition, mémoire de travail, planification, sensorialité, communication implicite) ;
3. présenter les **causes contextuelles et organisationnelles** ;
4. proposer des **actions de management à tester** et le **dialogue avec la personne** ;
5. **ne pas nommer de trouble** à propos d'une personne absente, ni suggérer qu'elle pourrait en avoir un.

Exceptions : question générale sur un trouble, utilisateur qui parle de lui-même, ou personne concernée qui a **elle-même** partagé son diagnostic et souhaite en parler.

Cette règle remplace l'exemple de style de PRODUCT_DEFINITION_V3 §3 (« Dans le TDAH, on décrit notamment… ») pour les situations portant sur un tiers. Elle est appliquée dans `api/chat.js` (prompt système) et dans la réponse de démonstration correspondante de `app.js`.

## 3. Bibliothèque d'abord, en maquette

- La **Bibliothèque est prioritaire** sur l'agent.
- Objectif immédiat : une **maquette de fonctionnalités et de positionnement**, volontairement **moins aboutie** que d'autres projets. Beaucoup de contenus peuvent être **superficiels ou de simples ébauches** (sommaire prévu, sans texte rédigé).
- Chaque contenu porte un statut : `demo` (fiche documentée avec sources, non validée) ou `ebauche` (sommaire seulement, aucune source revendiquée). L'interface distingue visuellement les deux.
- Rubriques : Parcours de sensibilisation, Neurodivergences A–Z, Neurocognition, Décoder les codes, Travail & RH.

## 4. Validation des contenus

Pas d'arbitrage à ce stade (aucune réponse nécessaire pour la maquette). Les ébauches indiquent qu'une rédaction, un sourçage et une relecture (experts et personnes concernées) restent à faire avant diffusion.

## 5. Périmètre : toutes les neurodivergences

Le périmètre couvre **toutes les neurodivergences**, dont **l'ensemble des troubles DYS** (dyslexie, dysorthographie, dysgraphie, dyscalculie, dyspraxie/TDC, dysphasie/TDL), le TDAH, l'autisme, le HPI (présenté comme n'étant pas un trouble du neurodéveloppement), le syndrome de Gilles de la Tourette et les tics, le trouble du développement intellectuel, et les situations de cumul.

## Corrections appliquées en même temps

- **Mode démo :** un message de détresse (ex. « je vais me faire du mal ») reçoit désormais une orientation d'urgence (15, 112, 3114, médecin du travail) au lieu de la réponse générique.
- **API :** le champ `mode` envoyé par le navigateur est filtré par une liste fermée avant d'entrer dans le prompt système.

## Ce qui reste ouvert

Rédaction et validation des contenus, gouvernance des données dans l'entreprise cliente (AIPD, information des salariés, instances représentatives), hébergement, personnalisation de la marque blanche, intégration aux outils internes (SSO, intranet), mesure d'impact de la sensibilisation.
