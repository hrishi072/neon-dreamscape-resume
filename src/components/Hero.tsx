
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = containerRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) * 0.01;
      const moveY = (y - centerY) * 0.01;
      
      const elements = containerRef.current.querySelectorAll('.parallax');
      elements.forEach((element) => {
        const speedX = Number(element.getAttribute('data-speed-x') || 1);
        const speedY = Number(element.getAttribute('data-speed-y') || 1);
        
        const el = element as HTMLElement;
        el.style.transform = `translate(${moveX * speedX}px, ${moveY * speedY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      ref={containerRef}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-glowing-dots bg-[length:30px_30px] opacity-10"></div>
      <div className="absolute inset-0 bg-grid-lines bg-[length:40px_40px] opacity-5"></div>
      
      {/* Circular decorative elements */}
      <div 
        className="absolute top-1/4 left-1/5 w-40 h-40 rounded-full bg-neon-cyan/5 blur-xl parallax"
        data-speed-x="1.5"
        data-speed-y="1"
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/5 w-60 h-60 rounded-full bg-neon-magenta/5 blur-xl parallax"
        data-speed-x="-1"
        data-speed-y="-1.5"
      ></div>
      
      <div className="container px-4 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-4">
            <span className="text-sm uppercase tracking-widest px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan animate-fade-in">
              Software Engineer
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 tracking-wide leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="block">Creating Digital</span>
            <span className="bg-clip-text text-transparent bg-cyberpunk-gradient relative">
              Experiences
              <span className="absolute inset-0 bg-cyberpunk-gradient opacity-20 blur-xl"></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I craft elegant solutions to complex problems using cutting-edge technologies.
            Specializing in immersive web experiences and robust software architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a 
              href="#projects" 
              className="parallax clickable relative overflow-hidden group px-8 py-3 bg-space-light border border-neon-cyan/30 rounded-lg transition-all duration-300 hover:border-neon-cyan hover:shadow-neon-cyan"
              data-speed-x="0.5"
              data-speed-y="0.5"
            >
              <span className="relative z-10 font-medium tracking-wider">VIEW MY WORK</span>
              <span className="absolute inset-0 bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors duration-300"></span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyberpunk-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
            
            <a 
              href="#contact" 
              className="parallax clickable relative overflow-hidden group px-8 py-3 bg-transparent border border-white/30 rounded-lg transition-all duration-300 hover:border-white/70"
              data-speed-x="-0.5"
              data-speed-y="-0.5"
            >
              <span className="relative z-10 font-medium tracking-wider">GET IN TOUCH</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="flex flex-col items-center text-white/50 hover:text-white/80 transition-colors duration-300 clickable">
              <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
