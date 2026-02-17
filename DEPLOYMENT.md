# 🚀 Guide de Déploiement & Personnalisation

## Étape 1 : Personnaliser vos informations

### Dans `index.html`:

#### Section Header
```html
<!-- Changer le nom -->
<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-slate-100">
    Jad<span class="text-teal-500">_</span><br/>
    Razek.
</h1>

<!-- Changer la description -->
<p class="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-sans">
    Étudiant en <strong>BUT 3 Informatique</strong><br/>
    Parcours Systèmes & Réseaux
</p>

<!-- Ajouter vos tech highlights -->
<p class="text-sm text-slate-500 mt-4 font-mono">
    🔧 Cisco | Linux | Virtualisation | Python | Sécurité
</p>
```

#### Réseaux sociaux
```html
<!-- Remplacer les URLs -->
<a href="https://github.com/VotreUsername" target="_blank" rel="noopener" class="p-3 ...">
    <i class="fab fa-github text-xl"></i>
</a>
<a href="https://linkedin.com/in/VotreProfile" target="_blank" rel="noopener" class="p-3 ...">
    <i class="fab fa-linkedin text-xl"></i>
</a>
<a href="mailto:votre@email.com" class="p-3 ...">
    <i class="fas fa-envelope text-xl"></i>
</a>
```

### Dans `app.js`:

#### Personnaliser les projets
```javascript
const projects = [
    {
        title: "Mon Projet",
        desc: "Une brève description du projet",
        tags: ["Tech1", "Tech2", "Tech3"],
        color: "teal",  // teal, cyan, orange, ou slate
        icon: "fa-code" // Voir Font Awesome icons
    },
    // Ajouter autant de projets que vous voulez
];
```

#### Icons disponibles (Font Awesome)
```
fa-code           - Code/Programmation
fa-server         - Serveur
fa-shield-alt     - Sécurité
fa-network-wired  - Réseau
fa-users          - Utilisateurs/Équipe
fa-rocket         - Lancement/Projet
fa-cogs           - Configuration/Admin
fa-database       - Base de données
fa-cloud          - Cloud
fa-lock           - Sécurité
```

Voir: https://fontawesome.com/icons

## Étape 2 : Ajouter plus de compétences

Dans `index.html`, éditez la section "COMPÉTENCES TECHNIQUES":

```html
<div class="skill-card p-6 rounded-sm bg-slate-900/40 border border-slate-800/60 hover:border-teal-500/30 transition-colors group">
    <div class="flex items-center gap-3 mb-4 text-teal-500 group-hover:text-teal-400">
        <div class="p-2 rounded-sm bg-teal-950/30 border border-teal-900/50">
            <i class="fas fa-ICON text-lg"></i>
        </div>
        <h3 class="font-bold text-slate-200" style="font-family: 'JetBrains Mono', monospace;">
            Titre Compétence
        </h3>
    </div>
    <p class="text-sm text-slate-400 leading-relaxed" style="font-family: 'JetBrains Mono', monospace; font-size: 13px;">
        Description détaillée des compétences
    </p>
</div>
```

## Étape 3 : Changer les couleurs

Les couleurs principales se trouvent dans `styles.css` et `index.html`:

### Palette actuelle:
- **Primaire**: Teal (#14b8a6)
- **Accent**: Cyan (#06b6d4)
- **Fond**: Slate-950 (#030712)

### Pour changer:
1. Remplacer `teal-*` par `cyan-*`, `blue-*`, `emerald-*`, etc.
2. Remplacer `cyan-*` par d'autres couleurs Tailwind
3. Voir: https://tailwindcss.com/docs/colors

## Étape 4 : Ajouter du contenu supplémentaire

### Ajouter une section "À Propos"
```html
<section class="mb-24">
    <div class="flex items-center gap-4 mb-10">
        <h2 class="text-2xl font-bold text-slate-100" style="font-family: 'JetBrains Mono', monospace;">
            <span class="text-teal-500 mr-2">03.</span>À PROPOS
        </h2>
        <div class="h-px bg-slate-800 flex-grow"></div>
    </div>
    
    <div class="p-6 rounded-sm bg-slate-900/40 border border-slate-800/60">
        <p class="text-slate-300 leading-relaxed mb-4">
            Votre texte ici...
        </p>
    </div>
</section>
```

### Ajouter une section "Contact"
```html
<section class="mb-24">
    <h2 class="text-2xl font-bold text-slate-100 mb-6">Contactez-moi</h2>
    <p class="text-slate-400 mb-4">
        Vous avez un projet intéressant ? N'hésitez pas à me contacter !
    </p>
    <form class="space-y-4 max-w-md">
        <input type="text" placeholder="Votre nom" class="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-sm text-slate-200">
        <input type="email" placeholder="Votre email" class="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-sm text-slate-200">
        <textarea placeholder="Votre message" class="w-full px-4 py-2 bg-slate-900 border border-slate-800 rounded-sm text-slate-200" rows="4"></textarea>
        <button type="submit" class="px-6 py-2 bg-teal-600 hover:bg-teal-700 rounded-sm text-white font-mono transition-colors">
            ENVOYER
        </button>
    </form>
</section>
```

## Étape 5 : Déployer votre portfolio

### Option 1: Netlify (RECOMMANDÉ - Gratuit)
1. Allez sur https://netlify.com
2. Créez un compte (GitHub/Email)
3. Connectez votre repo GitHub
4. Déploiement automatique !

### Option 2: Vercel
1. Allez sur https://vercel.com
2. Connectez votre GitHub
3. Importez votre project
4. Déployé en 1 clic !

### Option 3: GitHub Pages
1. Créez un repo `votreusername.github.io`
2. Poussez les fichiers
3. Votre site est live sur: `https://votreusername.github.io`

### Option 4: Hébergement traditionnnel (OVH, 1and1, etc.)
1. Achetez un domaine et hébergement
2. Téléchargez les fichiers via FTP
3. Configurez les DNS

## Télécharger les commandes Git

```bash
# Initialiser le repo
git init
git add .
git commit -m "Initial commit: Portfolio CV"

# Ajouter le remote
git remote add origin https://github.com/votreusername/portfolio.git

# Pousser
git branch -M main
git push -u origin main
```

## Checklist avant déploiement

- [ ] Noms et infos personnelles mises à jour
- [ ] Liens vers GitHub/LinkedIn corrects
- [ ] Email de contact correct
- [ ] Projets et compétences à jour
- [ ] Pas d'erreurs console (F12)
- [ ] Mobile responsive testé (F12 → Device Toggle)
- [ ] Tous les liens fonctionnent
- [ ] Images chargent correctement
- [ ] SEO meta tags personnalisés

## Optimisations supplémentaires

### Ajouter Google Analytics
```html
<!-- Avant </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Ajouter un formulaire de contact (Formspree)
1. Allez sur https://formspree.io
2. Créez un nouveau formulaire
3. Remplacez l'action du form

## Support & Ressources

- **Tailwind Colors**: https://tailwindcss.com/docs/colors
- **Font Awesome Icons**: https://fontawesome.com/icons
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com

---

**Besoin d'aide ?** Consultez le README.md ou la documentation Tailwind