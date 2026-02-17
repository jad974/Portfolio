# 📝 Exemples de personnalisation

## Comment modifier votre portfolio - Exemples concrets

### 🔴 EXEMPLE 1: Changer votre nom

**Fichier**: `index.html`
**Ligne**: ~60

**Avant:**
```html
<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-slate-100" style="font-family: 'JetBrains Mono', monospace;">
    Jad<span class="text-teal-500">_</span><br/>Razek.
</h1>
```

**Après** (Exemple):
```html
<h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-slate-100" style="font-family: 'JetBrains Mono', monospace;">
    Marie<span class="text-teal-500">_</span><br/>Dupont.
</h1>
```

---

### 🔴 EXEMPLE 2: Ajouter vos liens réseaux

**Fichier**: `index.html`
**Lignes**: ~82-90

**Avant:**
```html
<a href="https://github.com" target="_blank" rel="noopener" class="p-3 bg-slate-900 border border-slate-800 rounded-sm hover:bg-cyan-950 hover:text-cyan-400 hover:border-cyan-900 transition-all duration-300">
    <i class="fab fa-github text-xl"></i>
</a>
<a href="https://linkedin.com" target="_blank" rel="noopener" class="p-3 bg-slate-900 border border-slate-800 rounded-sm hover:bg-cyan-950 hover:text-cyan-400 hover:border-cyan-900 transition-all duration-300">
    <i class="fab fa-linkedin text-xl"></i>
</a>
<a href="mailto:contact@example.com" class="p-3 bg-slate-900 border border-slate-800 rounded-sm hover:bg-cyan-950 hover:text-cyan-400 hover:border-cyan-900 transition-all duration-300">
    <i class="fas fa-envelope text-xl"></i>
</a>
```

**Après** (Exemple - remplacez les URLs):
```html
<a href="https://github.com/marie-dupont" target="_blank" rel="noopener" class="p-3 bg-slate-900 border border-slate-800 rounded-sm hover:bg-cyan-950 hover:text-cyan-400 hover:border-cyan-900 transition-all duration-300">
    <i class="fab fa-github text-xl"></i>
</a>
<a href="https://linkedin.com/in/marie-dupont" target="_blank" rel="noopener" class="p-3 bg-slate-900 border border-slate-800 rounded-sm hover:bg-cyan-950 hover:text-cyan-400 hover:border-cyan-900 transition-all duration-300">
    <i class="fab fa-linkedin text-xl"></i>
</a>
<a href="mailto:marie.dupont@email.com" class="p-3 bg-slate-900 border border-slate-800 rounded-sm hover:bg-cyan-950 hover:text-cyan-400 hover:border-cyan-900 transition-all duration-300">
    <i class="fas fa-envelope text-xl"></i>
</a>
```

---

### 🔴 EXEMPLE 3: Ajouter vos projets

**Fichier**: `app.js`
**Lignes**: ~5-35

**Structure d'un projet:**
```javascript
{
    title: "Nom du Projet",
    desc: "Description courte du projet",
    tags: ["Tech1", "Tech2", "Tech3"],
    color: "teal",  // IMPORTANT: teal, cyan, orange, ou slate
    icon: "fa-code" // Font Awesome icon
}
```

**Exemple complet:**

**Avant** (4 projets par défaut):
```javascript
const projects = [
    {
        title: "SecureNet Monitor",
        desc: "Outil de supervision réseau et détection d'intrusions.",
        tags: ["Python", "Cisco", "SNMP"],
        color: "teal",
        icon: "fa-shield-alt"
    },
    // ... autres projets
];
```

**Après** (Ajouter vos projets):
```javascript
const projects = [
    {
        title: "SecureNet Monitor",
        desc: "Outil de supervision réseau et détection d'intrusions.",
        tags: ["Python", "Cisco", "SNMP"],
        color: "teal",
        icon: "fa-shield-alt"
    },
    {
        title: "Mon Super Projet Web",
        desc: "Un site e-commerce avec React et Node.js",
        tags: ["React", "Node.js", "MongoDB"],
        color: "cyan",
        icon: "fa-globe"
    },
    {
        title: "App Mobile",
        desc: "Application mobile de gestion de tâches",
        tags: ["React Native", "Firebase"],
        color: "orange",
        icon: "fa-mobile-alt"  // Ajoutez une icône pertinente
    },
    // ... autres projets
];
```

---

### 🔴 EXEMPLE 4: Changer les couleurs primaires

**Fichier**: `index.html` et `app.js`

**Chercher/Remplacer:**

1. **Teal → Cyan** (primaire)
   - Avant: `teal-500`, `teal-400`, `teal-950`
   - Après: `cyan-500`, `cyan-400`, `cyan-950`

2. **Cyan → Blue** (accent)
   - Avant: `cyan-500`, `cyan-400`
   - Après: `blue-500`, `blue-400`

**Exemple:**

**Avant:**
```html
<span class="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
```

**Après:**
```html
<span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
```

---

### 🔴 EXEMPLE 5: Ajouter une compétence

**Fichier**: `index.html`
**Section**: COMPÉTENCES TECHNIQUES (~ligne 110-170)

**Template de compétence:**
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
        Description détaillée de vos compétences
    </p>
</div>
```

**Exemple concret:**
```html
<div class="skill-card p-6 rounded-sm bg-slate-900/40 border border-slate-800/60 hover:border-teal-500/30 transition-colors group">
    <div class="flex items-center gap-3 mb-4 text-teal-500 group-hover:text-teal-400">
        <div class="p-2 rounded-sm bg-teal-950/30 border border-teal-900/50">
            <i class="fas fa-database text-lg"></i>
        </div>
        <h3 class="font-bold text-slate-200" style="font-family: 'JetBrains Mono', monospace;">
            Bases de Données
        </h3>
    </div>
    <p class="text-sm text-slate-400 leading-relaxed" style="font-family: 'JetBrains Mono', monospace; font-size: 13px;">
        PostgreSQL, MongoDB, Oracle, Redis, Cassandra
    </p>
</div>
```

---

### 🔴 EXEMPLE 6: Ajouter une description personnelle

**Fichier**: `index.html`
**Ligne**: ~72

**Avant:**
```html
<p class="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-sans">
    Étudiant en <strong>BUT 3 Informatique</strong><br/>
    Parcours Systèmes & Réseaux
</p>
```

**Après:**
```html
<p class="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-sans">
    Passionné par l'<strong>infrastructure IT</strong> et la <strong>sécurité réseau</strong><br/>
    Étudiant en BUT 3 Informatique - Parcours Systèmes & Réseaux<br/>
    <strong>Open to Work 🚀</strong>
</p>
```

---

### 🔴 EXEMPLE 7: Les icônes Font Awesome populaires

| Utilité | Icon | Code |
|---------|------|------|
| Programmation | Code | `fa-code` |
| Serveur | Server | `fa-server` |
| Sécurité | Shield | `fa-shield-alt` |
| Réseau | Network | `fa-network-wired` |
| Terminal | Terminal | `fa-terminal` |
| Base de données | Database | `fa-database` |
| Cloud | Cloud | `fa-cloud` |
| Container | Cube | `fa-cube` |
| Mobile | Mobile | `fa-mobile-alt` |
| Rocket | Rocket | `fa-rocket` |
| Gear | Gear | `fa-cogs` |
| Users | Users | `fa-users` |
| Globe | Globe | `fa-globe` |
| Lock | Lock | `fa-lock` |

**Voir plus**: https://fontawesome.com/icons

---

### 🔴 EXEMPLE 8: Changer la description du site

**Fichier**: `index.html`
**Ligne**: ~12 (Meta tag description)

**Avant:**
```html
<meta name="description" content="Portfolio professionnel de Jad Razek - Étudiant BUT3 Informatique, spécialisé en Systèmes et Réseaux. Découvrez mes projets et compétences techniques.">
```

**Après** (Exemple personnalisé):
```html
<meta name="description" content="Portfolio de Marie Dupont - Développeuse Full Stack passionnée par React et Node.js. Découvrez mes projets web innovants et mes compétences de développement.">
```

---

### 🔴 EXEMPLE 9: Ajouter un section "Contact"

**Fichier**: `index.html`
**Ajouter avant** `</main>`

```html
<!-- CONTACT SECTION -->
<section class="mb-24">
    <div class="flex items-center gap-4 mb-10">
        <h2 class="text-2xl font-bold text-slate-100" style="font-family: 'JetBrains Mono', monospace;">
            <span class="text-teal-500 mr-2">03.</span>CONTACT
        </h2>
        <div class="h-px bg-slate-800 flex-grow"></div>
    </div>
    
    <div class="p-8 rounded-sm bg-slate-900/40 border border-slate-800/60">
        <p class="text-slate-300 mb-6 text-lg">
            Vous avez une proposition intéressante ? <br/>
            <span class="text-teal-400">N'hésitez pas à me contacter !</span>
        </p>
        
        <a href="mailto:votre@email.com" class="inline-block px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-mono font-bold rounded-sm transition-colors">
            📧 ENVOYER UN EMAIL
        </a>
    </div>
</section>
```

---

### 🔴 EXEMPLE 10: Terminal d'intro personnalisé

**Fichier**: `app.js`
**Ligne**: ~13 (Changez le texte)

**Avant:**
```javascript
const fullText = "> Initializing kernel...\n> Loading network modules (Cisco/OSPF)...\n> Mounting filesystems (Linux/VMware)...\n> User: Admin_Root\n> Access granted.";
```

**Après** (Personnalisé):
```javascript
const fullText = "> Welcome to Marie's Portfolio\n> Loading projects...\n> Initializing skills matrix...\n> User: Marie Dupont\n> Portfolio loaded successfully.";
```

---

## 🎯 Checklist de personnalisation

- [ ] Changé nom et prénom
- [ ] Changé description personnelle
- [ ] Ajouté liens GitHub/LinkedIn/Email
- [ ] Ajouté 2-3 projets importants
- [ ] Testé sur mobile
- [ ] Vérifiez les animations
- [ ] Vérifiez les liens externes

---

## 💡 Tips de personnalisation

1. **Soyez bref** - Les descriptions courtes attirent mieux
2. **Soyez spécifique** - "React expert" > "Good with web"
3. **Montrez votre passion** - Votre enthousiasme se voit
4. **Gardez cohérence** - Une seule palette de couleurs
5. **Testez sur mobile** - 60% du trafic vient du mobile

---

**Félicitations ! Votre portfolio est en cours de personnalisation ! 🎉**