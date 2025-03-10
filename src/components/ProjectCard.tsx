
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  reversed?: boolean;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  codeUrl,
  reversed = false,
  index,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for card hover
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (x - centerX) / 20;
    const moveY = (y - centerY) / 20;
    
    setPosition({ x: moveX, y: moveY });
  };
  
  const resetPosition = () => {
    setPosition({ x: 0, y: 0 });
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  const colorVariants = [
    'from-neon-cyan to-neon-blue',
    'from-neon-magenta to-neon-purple',
    'from-neon-yellow to-neon-cyan',
    'from-neon-blue to-neon-purple',
  ];
  
  const colorVariant = colorVariants[index % colorVariants.length];
  
  return (
    <div
      ref={cardRef}
      className={cn(
        "flex flex-col lg:flex-row items-center gap-8 relative transition-all duration-700 ease-out",
        reversed && "lg:flex-row-reverse",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
    >
      {/* Image section */}
      <div 
        className="w-full lg:w-1/2"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          resetPosition();
        }}
      >
        <div className="relative rounded-lg overflow-hidden group neon-border">
          <div 
            className="relative transition-transform duration-300 ease-out"
            style={{
              transform: isHovered ? `perspective(1000px) rotateX(${position.y}deg) rotateY(${-position.x}deg) scale3d(1.02, 1.02, 1.02)` : 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-space/80 z-10"></div>
            <img 
              src={imageUrl || '/placeholder.svg'} 
              alt={title} 
              className="w-full h-60 md:h-72 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            
            {/* Overlay elements */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-space/50 backdrop-blur-sm transition-opacity duration-300 z-20 flex items-center justify-center">
              <div className="flex gap-4">
                {demoUrl && (
                  <a 
                    href={demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-neon-cyan/20 border border-neon-cyan/40 rounded-md text-white hover:bg-neon-cyan/30 transition-colors duration-300 clickable"
                  >
                    View Demo
                  </a>
                )}
                {codeUrl && (
                  <a 
                    href={codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 border border-white/30 rounded-md text-white hover:bg-white/20 transition-colors duration-300 clickable"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="w-full lg:w-1/2">
        <div className={`${!reversed ? 'lg:pl-8' : 'lg:pr-8'}`}>
          <div className="mb-3">
            <span className={`inline-block h-1 w-10 bg-gradient-to-r ${colorVariant} rounded-full mb-2`}></span>
            <h3 className="text-2xl font-light">{title}</h3>
          </div>
          
          <p className="text-white/70 mb-4">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-3 py-1 rounded-full bg-space-light border border-white/10 text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Immersive Data Visualization",
      description: "A 3D visualization platform that transforms complex datasets into interactive, explorable environments using Three.js and D3.",
      tags: ["React", "Three.js", "D3.js", "WebGL", "Node.js"],
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "AI-Powered Code Assistant",
      description: "A machine learning tool that assists developers by analyzing code patterns and suggesting improvements and optimizations.",
      tags: ["Python", "TensorFlow", "NLP", "REST API", "React"],
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Blockchain Explorer",
      description: "A comprehensive tool for visualizing and exploring blockchain data with real-time updates and detailed transaction analysis.",
      tags: ["TypeScript", "Web3.js", "Next.js", "GraphQL", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Smart Home Automation",
      description: "An IoT platform that connects and controls smart home devices through an intuitive interface with advanced automation rules.",
      tags: ["IoT", "React Native", "Node.js", "MQTT", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
      demoUrl: "#",
      codeUrl: "#",
    },
  ];
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-lines bg-[length:40px_40px] opacity-5"></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest mb-2 text-neon-cyan">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-light">Featured Projects</h3>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              {...project}
              reversed={index % 2 !== 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
