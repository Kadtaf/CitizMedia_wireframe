
# Citiz Media – Prototype Wireframe de la Page d’Accueil

Ce projet est un prototype HTML/CSS/JS de la **page d’accueil du site web Cityz Media**, dans le cadre de la conception d’une solution digitale destinée à permettre aux TPE/PME de réserver en ligne des espaces publicitaires physiques (panneaux).

---

## 🧭 Objectif

Ce prototype vise à :

- Reproduire le **wireframe fonctionnel** de la future homepage.
- Proposer une **expérience utilisateur intuitive** et responsive.
- Intégrer une **section de filtrage avancée** avec calcul dynamique du prix selon les critères métier (durée, surface, saison, emplacement, date de début de la compagne).
- Servir de base pour une future intégration dynamique avec backend/API.

---

## 🧱 Structure du projet

```
citiz-wireframe/
├── index.html         # Structure HTML principale
├── css/
│   └── style.css      # Feuille de style principale
├── js/
│   └── scrypt.js      # Script JavaScript pour menu mobile et calcul dynamique
└── asset/
      └──logo_Citiz.webp # Logo de la marque situé dans le header
      └── Citiz_logo.webp  # Logo de la marque situé dans le footer
```

---

## 🚀 Fonctionnalités intégrées

- ✅ Header responsive avec menu burger
- ✅ Boutons stylisés avec hover personnalisé
- ✅ Hero banner avec CTA directs
- ✅ Section "Comment ça marche ?" avec icônes et étapes
- ✅ **Section de recherche intelligente** avec :
  - Sélecteur de durée (1 semaine à 1 an)
  - Sélecteur de surface standardisée (2, 4, 6, 8m²)
  - Sélecteur de début de la compagne via un calendrier
  - Ville ou code postal
  - 💰 **Calcul automatique du prix estimé**
- ✅ Section avantages, témoignages, galerie, et footer complet avec lien réseaux sociaux.
- ✅ Responsive mobile & tablette

---

## ⚙️ Technologies utilisées

- HTML5 / CSS3 / JavaScript ES6
- [Font Awesome](https://fontawesome.com) pour les icônes
- Aucune dépendance externe JS pour l’instant (vanilla)

---

## 📦 Installation

1. Clone ou télécharge ce dépôt :
```bash
git clone https://github.com/Kadtaf/CitizMedia_wireframe
```

2. Ouvre le fichier `index.html` dans ton navigateur :
```bash
cd citiz-wireframe
open index.html
```

> Aucun serveur n’est nécessaire pour l’instant, tout est en **frontend statique**.

---

## 📌 Instructions futures (à prévoir)

- Intégration de l’API pour la carte interactive avec emplacements disponibles.
- Liaison des filtres à une base de données réelle.
- Ajout du tunnel de commande et des fonctionnalités utilisateur (authentification, compte client, paiement).
- Séparation du JS métier (prix, filtres) dans un module réutilisable.
- Accessibilité (ARIA) et optimisation SEO.

---

## 👤 Auteur

Projet réalisé, dans le cadre de la conception de la solution digitale **Cityz Media** – Bloc 3.

---

## 📄 Licence

Ce projet est à usage pédagogique.  
© 2025 – Tous droits réservés.
