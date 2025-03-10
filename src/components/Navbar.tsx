
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  label: string;
  href: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, href, isActive }) => {
  return (
    <li>
      <a 
        href={href} 
        className={cn(
          "nav-link px-4 py-2 text-sm tracking-wider transition-all duration-300 clickable",
          isActive 
            ? "text-neon-cyan glow-text" 
            : "text-foreground hover:text-neon-cyan"
        )}
      >
        {label}
      </a>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrolled(position > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
        scrolled 
          ? "backdrop-blur-md bg-space/80 shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 clickable">
          <div className="w-10 h-10 rounded-full bg-cyberpunk-gradient p-[1px]">
            <div className="w-full h-full rounded-full bg-space/70 flex items-center justify-center">
              <span className="text-white font-orbitron font-light">SE</span>
            </div>
          </div>
          <span className="font-orbitron text-xl tracking-widest text-white">
            <span className="text-neon-cyan">DEV</span>FOLIO
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-1">
          <NavItem label="HOME" href="#home" isActive={activeSection === 'home'} />
          <NavItem label="ABOUT" href="#about" isActive={activeSection === 'about'} />
          <NavItem label="SKILLS" href="#skills" isActive={activeSection === 'skills'} />
          <NavItem label="PROJECTS" href="#projects" isActive={activeSection === 'projects'} />
          <NavItem label="CONTACT" href="#contact" isActive={activeSection === 'contact'} />
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col space-y-1.5 z-50 clickable"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={cn(
              "w-6 h-0.5 bg-white transition-transform duration-300",
              mobileMenuOpen && "transform rotate-45 translate-y-2"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-white transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )} 
          />
          <span 
            className={cn(
              "w-6 h-0.5 bg-white transition-transform duration-300",
              mobileMenuOpen && "transform -rotate-45 -translate-y-2"
            )} 
          />
        </button>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-space/90 backdrop-blur-lg flex flex-col justify-center items-center z-40 transition-transform duration-500 ease-in-out",
          mobileMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
        )}>
          <ul className="flex flex-col items-center space-y-6">
            <NavItem label="HOME" href="#home" isActive={activeSection === 'home'} />
            <NavItem label="ABOUT" href="#about" isActive={activeSection === 'about'} />
            <NavItem label="SKILLS" href="#skills" isActive={activeSection === 'skills'} />
            <NavItem label="PROJECTS" href="#projects" isActive={activeSection === 'projects'} />
            <NavItem label="CONTACT" href="#contact" isActive={activeSection === 'contact'} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
