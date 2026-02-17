# 🚀 Portfolio CV - Jad Razek

Un **portfolio web professionnel** moderne et interactif, spécialisé en **Systèmes & Réseaux**.

## 📋 Caractéristiques

✨ **Design moderne** avec thème sombre (dark mode)
- Interface futuriste avec animations fluides
- Écran de Terminal d'intro au démarrage
- Responsive design (mobile-friendly)
- Micro-interactions et effets hover

🎯 **Sections principales**
- **Header** : Présentation personnelle avec badges de statut
- **Compétences techniques** : 6 domaines de spécialisation
- **Projets** : Galerie des projets déployés avec tags technologiques

⚡ **Technos utilisées**
- HTML5 / CSS3 / JavaScript Vanilla
- TailwindCSS (CDN)
- Font Awesome Icons
- JetBrains Mono Font

## 📁 Structure du projet

```
Portfolio/
├── index.html          # Page principale
├── styles.css          # Styles personnalisés
├── app.js             # Logique JavaScript
├── web.js             # Composant React original
├── CV-Jad Razek.pdf   # Curriculum Vitae
└── README.md          # Ce fichier
```

## 🚀 Getting Started

### Option 1: Ouvrir directement dans le navigateur
```bash
# Clic droit sur index.html → Ouvrir avec le navigateur
```

### Option 2: Lancer un serveur local

**Avec Python 3:**
```bash
python -m http.server 8000
# Ouvrez: http://localhost:8000
```

**Avec Python 2:**
```bash
python -m SimpleHTTPServer 8000
# Ouvrez: http://localhost:8000
```

**Avec Node.js (http-server):**
```bash
npx http-server
# Ouvrez: http://localhost:8080
```

**Avec VS Code - Live Server:**
- Installez l'extension "Live Server"
- Clic droit sur index.html → "Open with Live Server"

## 🎨 Personnalisation

### Ajouter vos liens de réseaux sociaux
Éditez `index.html` et remplacez les URLs:
```html
<a href="https://github.com/VotreUsername" target="_blank" rel="noopener">GitHub</a>
<a href="https://linkedin.com/in/VotreProfile" target="_blank" rel="noopener">LinkedIn</a>
<a href="mailto:votre@email.com">Email</a>
```

### Modifier les compétences
Dans `index.html`, éditez la section "COMPÉTENCES TECHNIQUES":
```html
<div class="skill-card p-6 ...">
    <!-- Modifiez le titre, l'icône et la description -->
</div>
```

### Ajouter/Modifier les projets
Dans `app.js`, éditez l'array `projects`:
```javascript
const projects = [
    {
        title: "Mon Projet",
        desc: "Description du projet",
        tags: ["Tech1", "Tech2"],
        color: "teal",
        icon: "fa-code"
    }
];
```

## 🎯 Sections modifiables

### Header principal (`index.html`)
```html
<h1>Nom_Utilisateur<span class="text-teal-500">_</span></h1>
<p>Votre description personnelle</p>
<p class="text-sm text-slate-500 mt-4 font-mono">
    🔧 Vos technologies
</p>
```

### Ajouter des projets (`app.js`)
Ajoutez des objets dans le tableau `projects`:
- `title`: Nom du projet
- `desc`: Description courte
- `tags`: Technologies utilisées (array)
- `color`: Couleur du gradient (teal, cyan, orange, slate)
- `icon`: Classe Font Awesome (ex: fa-code, fa-server, etc.)

### Personnaliser les couleurs
Les couleurs principales sont dans `styles.css` et `index.html`:
- **Teal/Cyan**: Couleur primaire
- **Slate**: Arrière-plan sombre
- Vous pouvez changer les classes Tailwind (ex: teal-500 → cyan-500)

## 📱 Responsive Design

Le site est entièrement responsive:
- 📱 Mobile: < 640px
- 📱 Tablette: 640px - 1024px
- 💻 Desktop: > 1024px

Les breakpoints Tailwind utilisés: `md:` et `lg:`

## 🔍 SEO & Performance

- Meta tags pour SEO
- Structure HTML sémantique
- Polices optimisées (Google Fonts)
- Icons CDN (Font Awesome)
- Pas de build tool requis

## 🎬 Animations

- **Terminal intro**: Au chargement de la page
- **Fade in**: Sur les éléments visibles au scroll
- **Hover effects**: Sur les cartes et liens
- **Cursor glow**: Suivre la souris (non-touch)

## 🔗 Ressources utilisées

- [TailwindCSS Documentation](https://tailwindcss.com)
- [Font Awesome Icons](https://fontawesome.com)
- [Google Fonts](https://fonts.google.com)
- [Can I Use](https://caniuse.com)

## 📝 Fichiers clés

| Fichier | Description |
|---------|------------|
| `index.html` | Structure HTML principale |
| `styles.css` | Styles personnalisés et animations |
| `app.js` | Logique JavaScript (animations, projets) |
| `web.js` | Composant React original |

## 🐛 Troubleshooting

### Les styles ne chargent pas?
- Vérifiez la connexion internet (TailwindCSS CDN)
- Vérifiez que les fichiers sont dans le même répertoire

### Les icônes ne s'affichent pas?
- Font Awesome CDN non accessible
- Remplacez par des emojis ou autre librairie d'icônes

### Animations saccadées?
- Cela peut être normal sur certains navigateurs anciens
- Utilisez Firefox ou Chrome récent pour le meilleur rendu

## 📄 Licences & Crédits

- **TailwindCSS**: MIT
- **Font Awesome**: CC BY 4.0 + SIL OFL 1.1
- **Google Fonts**: Open source

## ✉️ Support

Pour modifier ou améliorer ce portfolio, consultez:
- Documentation TailwindCSS
- MDN Web Docs
- GitHub Issues

---

**Version**: 1.0.0  
**Créé**: 2026  
**Auteur**: Jad Razek