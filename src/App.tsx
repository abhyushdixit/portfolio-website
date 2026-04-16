/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sun, 
  Moon, 
  ArrowRight, 
  Download, 
  Mail, 
  Instagram, 
  Linkedin, 
  X, 
  Menu,
  ChevronLeft, 
  ChevronRight,
  ExternalLink,
  Figma,
  Palette,
  Layers,
  Monitor,
  Layout,
  Github
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---

const PROJECTS = [
  // 🟥 BRANDING
  {
    id: 1,
    title: "Handcrafted Logos",
    category: "Branding",
    images: [
      "/images/projects/branding/brand1.webp",
      "/images/projects/branding/brand2.webp",
      "/images/projects/branding/brand3.webp",
      "/images/projects/branding/brand4.webp",
      "/images/projects/branding/brand5.webp",
      "/images/projects/branding/brand6.webp",
      "/images/projects/branding/brand7.webp",
      "/images/projects/branding/brand8.webp",
      "/images/projects/branding/brand9.webp",
      "/images/projects/branding/brand10.webp",
      "/images/projects/branding/brand11.webp",
      "/images/projects/branding/brand12.webp",
      "/images/projects/branding/brand13.webp",
      "/images/projects/branding/brand14.webp",
      "/images/projects/branding/brand15.webp",
      "/images/projects/branding/brand16.webp",
      "/images/projects/branding/brand17.webp",
      "/images/projects/branding/brand18.webp",
      "/images/projects/branding/brand19.webp",
      "/images/projects/branding/brand20.webp"
    ],
    description: "Complete branding system.",
    featured: true
  },

  // 🟦 SOCIAL MEDIA
  {
    id: 2,
    title: "Eye-catchy Posts",
    category: "Social Media",
    images: [
      "/images/projects/social/social1.webp",
      "/images/projects/social/social2.webp",
      "/images/projects/social/social3.webp",
      "/images/projects/social/social4.webp",
      "/images/projects/social/social5.webp",
      "/images/projects/social/social6.webp",
      "/images/projects/social/social7.webp",
      "/images/projects/social/social8.webp",
      "/images/projects/social/social9.webp",
      "/images/projects/social/social10.webp",
      "/images/projects/social/social11.webp",
      "/images/projects/social/social12.webp",
      "/images/projects/social/social13.webp",
      "/images/projects/social/social14.webp",
      "/images/projects/social/social15.webp",
      "/images/projects/social/social16.webp",
      "/images/projects/social/social17.webp",
      "/images/projects/social/social18.webp",
      "/images/projects/social/social19.webp",
      "/images/projects/social/social20.webp",
      "/images/projects/social/social21.webp",
      "/images/projects/social/social22.webp",
      "/images/projects/social/social23.webp",
      "/images/projects/social/social24.webp",
      "/images/projects/social/social25.webp",
      "/images/projects/social/social26.webp",
      "/images/projects/social/social27.webp",
      "/images/projects/social/social28.webp"
    ],
    description: "Creative social media campaigns.",
    featured: true
  },

  // 🟨 PRINT
  {
    id: 3,
    title: "Printables Design",
    category: "Print",
    images: [
      "/images/projects/print/print1.webp",
      "/images/projects/print/print2.webp",
      "/images/projects/print/print3.webp",
      "/images/projects/print/print4.webp",
      "/images/projects/print/print5.webp",
      "/images/projects/print/print6.webp",
      "/images/projects/print/print7.webp",
      "/images/projects/print/print8.webp"
    ],
    description: "Fresh printable layouts.",
    featured: true
  },

  // 🟪 MERCH
  {
    id: 4,
    title: "Clothing Collection",
    category: "Merch",
    images: [
      "/images/projects/merch/merch1.webp",
      "/images/projects/merch/merch2.webp",
      "/images/projects/merch/merch3.webp",
      "/images/projects/merch/merch4.webp",
      "/images/projects/merch/merch5.webp",
      "/images/projects/merch/merch6.webp",
      "/images/projects/merch/merch7.webp",
      "/images/projects/merch/merch8.webp"
    ],
    description: "Urban clothing graphics.",
    featured: true
  },

  // 🟩 UI/UX
  {
    id: 5,
    title: "Interactive Designs",
    category: "UI/UX",
    images: [
      "/images/projects/ui/ui1.webp",
      "/images/projects/ui/ui2.webp"
    ],
    description: "Modern interfaces.",
    featured: true
  }
];

const SKILLS = [
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "Photoshop", icon: <Palette className="w-5 h-5" /> },
  { name: "AI/ML", icon: <Layers className="w-5 h-5" /> },
  { name: "Web Design", icon: <Monitor className="w-5 h-5" /> },
  { name: "UI/UX", icon: <Layout className="w-5 h-5" /> },
];

const EXPERIENCE = [
  { title: "Experience", value: "2+", description: "Years of Experience" },
  { title: "Projects", value: "10+", description: "Projects Completed" },
];

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-sm md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

interface ProjectCardProps {
  project: typeof PROJECTS[0];
  onClick: () => void;
  key?: React.Key;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <motion.div 
    layoutId={`project-${project.id}`}
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative overflow-hidden rounded-3xl cursor-pointer glass-card"
    onClick={onClick}
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src={project.images[0]} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 backdrop-blur-[2px]">
      <p className="text-accent font-bold text-[10px] uppercase tracking-widest mb-1">{project.category}</p>
      <h3 className="text-white text-xl font-bold tracking-tight">{project.title}</h3>
      <div className="mt-4 flex items-center text-white/70 text-xs font-semibold tracking-wider uppercase">
        <span>View Details</span>
        <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </motion.div>
);

const Lightbox = ({ project, onClose }: { 
  project: typeof PROJECTS[0], 
  onClose: () => void,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % project.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      (prev - 1 + project.images.length) % project.images.length
    );
  };

  return (   // ✅ THIS WAS MISSING
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
      >
        <X className="w-8 h-8" />
      </button>
      
      <button 
        onClick={handlePrevImage}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      
      <button 
        onClick={handleNextImage}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div className="max-w-5xl w-full flex flex-col items-center">
        <motion.img 
          layoutId={`project-${project.id}`}
          src={project.images[currentImageIndex]} 
          alt={project.title} 
          className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
          referrerPolicy="no-referrer"
        />
        <div className="mt-8 text-center text-white">
          <p className="text-accent font-medium mb-2">{project.category}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-white/60 max-w-xl mx-auto">{project.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Pages ---

const HomePage = ({ onNavigateToProjects }: { onNavigateToProjects: () => void }) => {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section id="home" className="min-h-[90vh] flex flex-col justify-center pt-20">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-medium tracking-widest uppercase mb-4"
          >
            Hi, I'm Abhyush Dixit
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-extrabold leading-[0.9] mb-8 tracking-tighter"
          >
            A Creative <br />
            <span className="text-accent glow-text">Graphic Designer</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-muted-foreground mb-12 max-w-md leading-relaxed"
          >
            Specializing in high-performance digital identities and premium visual systems for forward-thinking brands.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-accent text-black rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center group shadow-[0_0_20px_rgba(0,209,255,0.3)]"
            >
              View My Work
            </button>
            <a 
              href="/Abhyush_Resume.pdf" 
              download
              className="px-6 py-3 border border-glass-border bg-glass backdrop-blur-md rounded-xl font-bold text-sm hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section id="about" className="scroll-mt-24">
        <SectionHeading subtitle="Hello! I'm Abhyush, a graphic designer with a passion for bringing bold ideas to life through visual storytelling. I combine my analytical mindset with creativity to build engaging and memorable brand experiences.">
          About Me
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6">Softwares Used</h3>
            <div className="flex flex-wrap gap-4">
              {SKILLS.map((skill) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 px-6 py-3 bg-muted rounded-2xl border border-border"
                >
                  <span className="text-accent">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                My design journey really accelerated on the Plinth Organising Committee, where I developed creative assets to promote science and techn events.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {EXPERIENCE.map((exp) => (
              <motion.div 
                key={exp.title}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-3xl flex flex-col justify-center items-center text-center border-glass-border"
              >
                <span className="text-3xl font-display font-extrabold text-accent mb-1">{exp.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{exp.description}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section id="projects" className="scroll-mt-24">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading>Recent Work</SectionHeading>
          <button 
            onClick={onNavigateToProjects}
            className="mb-12 text-accent font-semibold flex items-center hover:underline"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 4).map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => {}} // Lightbox handled in ProjectsPage or simplified here
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24">
        <div className="glass-card p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Looking for a graphic designer?</h2>
            <p className="text-muted-foreground text-lg">
              I'm currently open for new opportunities. Leave your contact info, and I'll reach out to chat about your next project.
            </p>
          </div>

          <form className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-4">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-muted border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-4">Email address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 bg-muted border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-4">Your Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 bg-muted border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
              />
            </div>
            <button className="w-full py-5 bg-accent text-white rounded-2xl font-bold text-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
              Let's Talk
            </button>
          </form>
        </div>
      </section>

      {/* Footer Punchline */}
      <div className="text-center py-20">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-display font-black tracking-tighter"
        >
          Design it. Build it. <br />
          <span className="text-accent">Make it better.</span>
        </motion.h2>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    setSelectedProject(PROJECTS[(currentIndex + 1) % PROJECTS.length]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    setSelectedProject(PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <SectionHeading subtitle="A complete collection of my creative works across various disciplines.">
        Full Portfolio
      </SectionHeading>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase transition-all border",
              filter === cat 
                ? "bg-accent text-black border-accent shadow-[0_0_15px_rgba(0,209,255,0.2)]" 
                : "bg-glass text-muted-foreground border-glass-border hover:border-accent/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Lightbox 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    root.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME', target: 'home' },
    { id: 'about', label: 'ABOUT', target: 'about' },
    { id: 'projects', label: 'PROJECTS', target: 'projects' },
    { id: 'contact', label: 'CONTACT', target: 'contact' },
  ];

  const socials = [
    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/realabhyush/", label: "Instagram" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/in/abhyush-dixit/", label: "LinkedIn" },
    { icon: <Github className="w-4 h-4" />, href: "https://github.com/abhyushdixit", label: "Github" },
    { icon: <Mail className="w-4 h-4" />, href: "mailto:abhyushdixit@gmail.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-bg text-text transition-colors duration-500 relative overflow-x-hidden">
      <div className="bg-glow" />
      
      <div className="max-w-[1400px] mx-auto p-4 md:p-10 lg:p-12 flex flex-col gap-8 lg:gap-12 min-h-screen">
        
        {/* Header */}
        <header className="sticky top-4 lg:top-12 z-40 glass-card p-4 md:px-10 rounded-[2rem] flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-xl md:text-2xl font-display font-black tracking-tighter text-accent"
            >
              ABHYUSH
            </button>
            
            <nav className="hidden md:flex flex-row gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'projects') {
                      setCurrentPage('projects');
                    } else {
                      setCurrentPage('home');
                      setTimeout(() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' }), 100);
                    }
                  }}
                  className={cn(
                    "flex items-center gap-2 text-xs font-semibold tracking-wider transition-colors",
                    (currentPage === item.id || (currentPage === 'home' && item.id === 'home')) 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {(currentPage === item.id || (currentPage === 'home' && item.id === 'home')) && <span className="nav-dot" />}
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 md:gap-4">
              {socials.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass-card hover:bg-accent/10 transition-all text-muted-foreground hover:text-accent"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <button 
              onClick={toggleTheme}
              className="glass-card p-2 md:p-3 rounded-full text-muted-foreground hover:text-accent transition-all"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 md:w-5 h-5" /> : <Moon className="w-4 h-4 md:w-5 h-5" />}
            </button>

            <button 
              className="md:hidden p-2 glass-card rounded-full text-muted-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 mt-4 glass-card p-6 rounded-[2rem] md:hidden z-50 flex flex-col gap-4"
              >
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (item.id === 'projects') {
                        setCurrentPage('projects');
                      } else {
                        setCurrentPage('home');
                        setTimeout(() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' }), 100);
                      }
                    }}
                    className={cn(
                      "flex items-center gap-3 text-sm font-semibold tracking-wider p-2 rounded-xl transition-colors",
                      (currentPage === item.id || (currentPage === 'home' && item.id === 'home')) 
                        ? "bg-accent/10 text-accent" 
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {(currentPage === item.id || (currentPage === 'home' && item.id === 'home')) && <span className="nav-dot" />}
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col gap-8">
          {/* Top Bar Info */}
          <div className="flex justify-between items-center px-4">
            <div className="text-[10px] tracking-widest text-muted-foreground uppercase">
              Portfolio / {new Date().getFullYear()}
            </div>
          </div>

          <main className="flex-1">
            <AnimatePresence mode="wait">
              {currentPage === 'home' ? (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <HomePage onNavigateToProjects={() => setCurrentPage('projects')} />
                </motion.div>
              ) : (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectsPage />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Footer */}
          <footer className="mt-20 glass-card p-10 md:p-16 rounded-[3rem] flex flex-col gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-2">
                <h3 className="text-3xl font-display font-black tracking-tighter mb-6">
                  ABHYUSH<span className="text-accent">.</span>
                </h3>
                <p className="text-muted-foreground max-w-sm leading-relaxed">
                  A creative designer crafting digital experiences that are minimal, bold, and effective.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-foreground">Navigation</h4>
                <ul className="space-y-4 text-muted-foreground text-sm">
                  <li><button onClick={() => setCurrentPage('home')} className="hover:text-accent transition-colors">Home</button></li>
                  <li><button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="hover:text-accent transition-colors">About</button></li>
                  <li><button onClick={() => setCurrentPage('projects')} className="hover:text-accent transition-colors">Portfolio</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-foreground">Contact</h4>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Email</p>
                    <p className="text-sm font-bold">abhyushdixit@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Socials</p>
                    <div className="flex gap-3">
                      {socials.map((social, idx) => (
                        <a 
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full glass-card hover:bg-accent/10 transition-all text-muted-foreground hover:text-accent"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border/50 flex flex-col items-center gap-4 text-[10px] uppercase tracking-widest text-muted-foreground">
              <p>© {new Date().getFullYear()} Abhyush Dixit. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
