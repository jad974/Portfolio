import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  ExternalLink, 
  Code2, 
  Database, 
  Cpu, 
  Globe,
  Zap,
  Layout,
  Server,
  Shield,
  Wifi,
  Activity
} from 'lucide-react';

// --- DONNÉES DU PORTFOLIO ---

const projects = [
  {
    title: "SecureNet Monitor",
    desc: "Outil de supervision réseau et détection d'intrusions.",
    tags: ["Python", "Cisco", "SNMP"],
    color: "from-teal-400 to-emerald-600"
  },
  {
    title: "Student Manager",
    desc: "Application de gestion universitaire MVC complète.",
    tags: ["PHP", "MySQL", "Docker"],
    color: "from-cyan-400 to-blue-600"
  },
  {
    title: "Astro Data Process",
    desc: "Traitement d'images FITS et analyse de données astronomiques.",
    tags: ["Python", "Matplotlib", "NumPy"],
    color: "from-orange-400 to-red-600"
  },
  {
    title: "VirtuLab Admin",
    desc: "Scripts d'automatisation pour environnements virtualisés.",
    tags: ["Bash", "VMware", "Linux"],
    color: "from-slate-400 to-gray-600"
  }
];

const skills = [
  { 
    name: "Réseaux & Infra", 
    icon: <Wifi size={20} />, 
    tools: "Cisco (VPN, OSPF, VLAN), IPsec, HSRP, Packet Tracer" 
  },
  { 
    name: "Développement", 
    icon: <Code2 size={20} />, 
    tools: "C, Python (PyQt6), Node.js, PHP, Java, SQL" 
  },
  { 
    name: "Virtualisation", 
    icon: <Server size={20} />, 
    tools: "VMware ESXi, vSphere, Proxmox, Docker, Oracle ILOM" 
  },
  { 
    name: "Cybersécurité", 
    icon: <Shield size={20} />, 
    tools: "Crypto (AES/ECC), JWT, SSH, ACL, Sécurité Web" 
  },
  { 
    name: "SysAdmin Linux", 
    icon: <Terminal size={20} />, 
    tools: "Oracle Linux, Debian, Apache/Nginx, Scripting Bash" 
  },
  { 
    name: "Soft Skills", 
    icon: <Globe size={20} />, 
    tools: "Anglais technique, Travail d'équipe international, Rigueur" 
  },
];

// --- COMPOSANTS ---

// 1. Intro Terminal (Version Cyan/Teal)
const TerminalIntro = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [isExiting, setIsExiting] = useState(false);
  const fullText = "> Initializing kernel...\n> Loading network modules (Cisco/OSPF)...\n> Mounting filesystems (Linux/VMware)...\n> User: Admin_Root\n> Access granted.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => triggerExit(), 800);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const triggerExit = () => {
    setIsExiting(true);
    setTimeout(onComplete, 500);
  };

  return (
    <div 
      className={`fixed inset-0 bg-slate-950 flex items-center justify-center font-mono text-cyan-400 z-50 p-4 transition-opacity duration-500 ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      onClick={triggerExit}
    >
      <div className={`w-full max-w-lg bg-slate-900/90 backdrop-blur-sm p-6 rounded-lg shadow-2xl border border-cyan-500/30 transition-transform duration-500 transform ${isExiting ? 'scale-110' : 'scale-100'}`}>
        <div className="flex gap-2 mb-4 border-b border-slate-700 pb-2">
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-slate-600" />
          <div className="w-3 h-3 rounded-full bg-cyan-500" />
          <span className="ml-2 text-xs text-slate-500">root@portfolio:~</span>
        </div>
        <pre className="whitespace-pre-wrap min-h-[120px] text-sm md:text-base shadow-cyan-500/20 drop-shadow-md leading-relaxed font-mono">
          {text}<span className="animate-pulse bg-cyan-400 text-slate-900 px-1">_</span>
        </pre>
        <p className="mt-4 text-xs text-slate-500 animate-pulse text-center uppercase tracking-widest cursor-pointer">
          [ SYSTEM READY ]
        </p>
      </div>
    </div>
  );
};

// 2. Carte "Vibe" Holographique (Style Technique)
const VibeCard = ({ project }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="relative flex flex-col justify-between overflow-hidden rounded-sm border border-slate-800 bg-slate-900/50 px-6 py-8 shadow-xl group transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/10"
    >
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.1), transparent 40%)`,
        }}
      />
      
      {/* Border Glow */}
      <div 
        className="absolute inset-0 rounded-sm transition-opacity duration-300 pointer-events-none"
        style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
            maskImage: 'linear-gradient(black, black)',
            WebkitMaskImage: 'linear-gradient(black, black)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '1px'
        }}
      >
         <div className="h-full w-full bg-transparent rounded-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center w-10 h-10 rounded-sm bg-gradient-to-br ${project.color} mb-5 shadow-lg`}>
          <Activity size={20} className="text-white" />
        </div>
        
        <h3 className="text-xl font-bold font-mono text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed font-sans border-l-2 border-slate-800 pl-3 group-hover:border-cyan-500/50 transition-colors">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-[10px] uppercase tracking-wider font-mono font-bold rounded-sm bg-slate-800 text-cyan-500 border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Application Principale
export default function App() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleIntroComplete = () => {
    setLoading(false);
    setTimeout(() => setContentVisible(true), 100);
  };

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      {/* Intro Overlay */}
      {loading && <TerminalIntro onComplete={handleIntroComplete} />}

      {/* Main Content */}
      {!loading && (
        <div className={`relative w-full overflow-x-hidden transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Background Gradient Orbs */}
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-teal-900/10 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
            {/* Technical Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" 
                 style={{ 
                   backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)`, 
                   backgroundSize: '40px 40px' 
                 }}>
            </div>
          </div>

          <main className="max-w-6xl mx-auto px-6 pt-20 pb-32">
            
            {/* HEADER */}
            <header className="mb-24 md:mb-32 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 px-3 py-1 rounded-sm bg-teal-950/30 text-teal-400 text-xs font-mono font-medium mb-8 border border-teal-800/50 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                STATUS: ONLINE — OPEN TO WORK
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-slate-100 font-mono">
                Jad<span className="text-teal-500">_</span><br/>
                Razek.
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-2 border-slate-800 pl-6 md:pl-8 ml-1">
                <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-sans">
                  Etudiant en BUT 3 Informatique Parcours Systeme & Reseaux
                </p>
                
                <div className="flex gap-4">
                  {[Github, Linkedin, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-sm hover:bg-cyan-950 hover:text-cyan-400 hover:border-cyan-900 transition-all duration-300">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </header>

            {/* SKILLS SECTION */}
            <section className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl font-bold text-slate-100 font-mono">
                  <span className="text-teal-500 mr-2">01.</span>
                  COMPÉTENCES TECHNIQUES
                </h2>
                <div className="h-px bg-slate-800 flex-grow"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {skills.map((skill, i) => (
                  <div key={i} className="p-6 rounded-sm bg-slate-900/40 border border-slate-800/60 hover:border-teal-500/30 transition-colors group">
                    <div className="flex items-center gap-3 mb-4 text-teal-500 group-hover:text-teal-400">
                      <div className="p-2 rounded-sm bg-teal-950/30 border border-teal-900/50">
                        {skill.icon}
                      </div>
                      <h3 className="font-bold text-slate-200 font-mono tracking-wide">{skill.name}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-mono text-[13px] opacity-80 border-t border-slate-800/50 pt-3">
                      {skill.tools}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS GRID (VIBE CARDS) */}
            <section>
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-4 flex-grow">
                   <h2 className="text-2xl font-bold text-slate-100 font-mono">
                    <span className="text-teal-500 mr-2">02.</span>
                    PROJETS DÉPLOYÉS
                  </h2>
                  <div className="h-px bg-slate-800 w-20"></div>
                </div>
                
                <button className="text-xs font-mono text-cyan-500 hover:text-cyan-400 flex items-center gap-2 border border-cyan-900/30 px-3 py-1 bg-cyan-950/10 rounded-sm transition-colors">
                  VOIR GITHUB <ExternalLink size={12} />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p, i) => (
                  <VibeCard key={i} project={p} />
                ))}
              </div>
            </section>

          </main>

          <footer className="border-t border-slate-900 bg-slate-950 py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-slate-600">
              <p>© 2026. SECURE SYSTEM OPS.</p>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse"></span>
                  SERVER STATUS: OK
                </span>
                <span>LATENCY: 12ms</span>
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}