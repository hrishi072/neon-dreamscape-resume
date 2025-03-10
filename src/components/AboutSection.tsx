
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    
    return () => {
      elementsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-lines bg-[length:40px_40px] opacity-5"></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Abstract Avatar/Visual */}
          <div className="lg:w-5/12 flex justify-center lg:justify-end">
            <div 
              ref={(el) => elementsRef.current[0] = el}
              className="relative w-64 h-64 md:w-80 md:h-80 opacity-0"
            >
              {/* Main circular avatar container */}
              <div className="absolute inset-0 rounded-full overflow-hidden bg-gradient-to-br from-neon-blue to-neon-purple p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-space flex items-center justify-center overflow-hidden">
                  {/* Abstract avatar representation */}
                  <div className="relative w-full h-full">
                    {/* Circular network patterns */}
                    <div className="absolute inset-0 opacity-70">
                      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path 
                          fill="none" 
                          stroke="url(#networkGradient)" 
                          strokeWidth="0.5" 
                          d="M40,90 C40,50 110,30 150,90 C190,150 130,180 70,160 C10,140 40,90 40,90 Z"
                          className="animate-rotation"
                        />
                        <circle cx="100" cy="100" r="40" fill="none" stroke="#00FFFF" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="100" cy="100" r="60" fill="none" stroke="#00FFFF" strokeWidth="0.5" opacity="0.2" />
                        <circle cx="100" cy="100" r="80" fill="none" stroke="#00FFFF" strokeWidth="0.5" opacity="0.1" />
                        
                        {/* Connection points */}
                        <circle cx="60" cy="60" r="3" fill="#00FFFF" />
                        <circle cx="140" cy="60" r="3" fill="#FF00FF" />
                        <circle cx="100" cy="140" r="3" fill="#FFFF00" />
                        <circle cx="60" cy="120" r="2" fill="#00FFFF" />
                        <circle cx="140" cy="120" r="2" fill="#FF00FF" />
                        
                        {/* Connection lines */}
                        <line x1="60" y1="60" x2="140" y2="60" stroke="#00FFFF" strokeWidth="0.5" opacity="0.6" />
                        <line x1="60" y1="60" x2="100" y2="140" stroke="#00FFFF" strokeWidth="0.5" opacity="0.6" />
                        <line x1="140" y1="60" x2="100" y2="140" stroke="#FF00FF" strokeWidth="0.5" opacity="0.6" />
                        <line x1="60" y1="120" x2="140" y2="120" stroke="#FFFF00" strokeWidth="0.5" opacity="0.6" />
                        
                        <defs>
                          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00FFFF" />
                            <stop offset="50%" stopColor="#FF00FF" />
                            <stop offset="100%" stopColor="#FFFF00" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    
                    {/* Central abstract face/form */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-32 rounded-full bg-gradient-to-b from-neon-cyan/30 to-neon-magenta/30 blur-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div 
                className="absolute w-8 h-8 rounded-full bg-neon-cyan/30 backdrop-blur-sm top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{ animationDelay: "0s" }}
              ></div>
              <div 
                className="absolute w-6 h-6 rounded-full bg-neon-magenta/30 backdrop-blur-sm bottom-4 right-0 transform translate-x-1/2 animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div 
                className="absolute w-5 h-5 rounded-full bg-neon-yellow/30 backdrop-blur-sm bottom-0 left-4 transform translate-y-1/2 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-7/12">
            <div 
              ref={(el) => elementsRef.current[1] = el}
              className="text-center lg:text-left opacity-0"
            >
              <h2 className="text-sm uppercase tracking-widest mb-2 text-neon-cyan">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-light mb-6">Software Engineer & Creative Developer</h3>
              
              <div className="space-y-4 text-white/80">
                <p>
                  Welcome to my digital playground. I'm a passionate software engineer with a love for 
                  creating immersive digital experiences that push the boundaries of web technology.
                </p>
                <p>
                  With expertise in modern frameworks and a deep understanding of software architecture, 
                  I build applications that are not only functional but also aesthetically pleasing and 
                  intuitive to use.
                </p>
                <p>
                  My approach combines technical precision with creative vision, allowing me to transform 
                  complex problems into elegant solutions. I'm constantly exploring new technologies and 
                  techniques to enhance my craft.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div 
                  ref={(el) => elementsRef.current[2] = el}
                  className="glass-panel p-6 opacity-0"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <h4 className="text-xl font-medium mb-2 text-white">Frontend Development</h4>
                  <p className="text-white/70">
                    Crafting responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular.
                  </p>
                </div>
                
                <div 
                  ref={(el) => elementsRef.current[3] = el}
                  className="glass-panel p-6 opacity-0"
                  style={{ transitionDelay: "0.2s" }}
                >
                  <h4 className="text-xl font-medium mb-2 text-white">Backend Systems</h4>
                  <p className="text-white/70">
                    Building scalable and efficient server-side applications with Node.js, Python, and cloud technologies.
                  </p>
                </div>
                
                <div 
                  ref={(el) => elementsRef.current[4] = el}
                  className="glass-panel p-6 opacity-0"
                  style={{ transitionDelay: "0.3s" }}
                >
                  <h4 className="text-xl font-medium mb-2 text-white">Creative Coding</h4>
                  <p className="text-white/70">
                    Experimenting with WebGL, Three.js, and generative art to create unique visual experiences.
                  </p>
                </div>
                
                <div 
                  ref={(el) => elementsRef.current[5] = el}
                  className="glass-panel p-6 opacity-0"
                  style={{ transitionDelay: "0.4s" }}
                >
                  <h4 className="text-xl font-medium mb-2 text-white">Problem Solving</h4>
                  <p className="text-white/70">
                    Analyzing complex requirements and designing innovative solutions with clean, maintainable code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
