
import React, { useRef, useEffect } from 'react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
  isVisible?: boolean;
}

const Skill: React.FC<SkillProps> = ({ name, level, color, isVisible }) => {
  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span 
          className="text-xs font-light" 
          style={{ color }}
        >
          {level}%
        </span>
      </div>
      <div className="h-2 bg-space-light rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
          style={{ 
            width: `${level}%`, 
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 10px ${color}50`
          }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number; color: string }[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
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
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={ref}
      className={`glass-panel p-6 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h3 className="text-xl mb-4 font-medium text-white">{title}</h3>
      <div>
        {skills.map((skill, index) => (
          <Skill 
            key={skill.name} 
            name={skill.name} 
            level={skill.level} 
            color={skill.color} 
            isVisible={isVisible} 
          />
        ))}
      </div>
    </div>
  );
};

const TechIcon: React.FC<{ name: string; icon: string; delay: number }> = ({ name, icon, delay }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
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
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={ref}
      className={`flex flex-col items-center transition-all duration-500 ease-out`}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)' 
      }}
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-space-light border border-white/10 mb-2 hover:border-neon-cyan/30 transition-all duration-300 group">
        <span className="text-3xl group-hover:text-neon-cyan transition-colors duration-300">{icon}</span>
      </div>
      <span className="text-xs text-white/70">{name}</span>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-glowing-dots bg-[length:30px_30px] opacity-5"></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest mb-2 text-neon-cyan">My Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-light">Technical Proficiencies</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <SkillCategory 
            title="Frontend Development" 
            skills={[
              { name: "React.js", level: 95, color: "#00FFFF" },
              { name: "TypeScript", level: 90, color: "#0088FF" },
              { name: "Next.js", level: 85, color: "#9B30FF" },
              { name: "CSS/SCSS", level: 92, color: "#FF00FF" },
              { name: "WebGL/Three.js", level: 80, color: "#FFFF00" },
            ]} 
          />
          
          <SkillCategory 
            title="Backend Development" 
            skills={[
              { name: "Node.js", level: 88, color: "#00FFFF" },
              { name: "Python", level: 85, color: "#FFFF00" },
              { name: "GraphQL", level: 80, color: "#FF00FF" },
              { name: "RESTful APIs", level: 90, color: "#0088FF" },
              { name: "Databases", level: 82, color: "#9B30FF" },
            ]} 
          />
          
          <SkillCategory 
            title="Other Skills" 
            skills={[
              { name: "DevOps", level: 75, color: "#00FFFF" },
              { name: "UI/UX Design", level: 85, color: "#FF00FF" },
              { name: "Testing", level: 82, color: "#FFFF00" },
              { name: "Mobile Development", level: 78, color: "#0088FF" },
              { name: "Problem Solving", level: 95, color: "#9B30FF" },
            ]} 
          />
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-xl font-light mb-8">Technologies I Work With</h3>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            <TechIcon name="React" icon="⚛️" delay={0} />
            <TechIcon name="Node.js" icon="🟢" delay={100} />
            <TechIcon name="TypeScript" icon="TS" delay={200} />
            <TechIcon name="Python" icon="🐍" delay={300} />
            <TechIcon name="Three.js" icon="3D" delay={400} />
            <TechIcon name="MongoDB" icon="🍃" delay={500} />
            <TechIcon name="GraphQL" icon="⬢" delay={600} />
            <TechIcon name="Docker" icon="🐳" delay={700} />
            <TechIcon name="AWS" icon="☁️" delay={800} />
            <TechIcon name="Git" icon="⎇" delay={900} />
            <TechIcon name="Next.js" icon="N" delay={1000} />
            <TechIcon name="Redux" icon="🔄" delay={1100} />
            <TechIcon name="PostgreSQL" icon="🐘" delay={1200} />
            <TechIcon name="Sass" icon="💅" delay={1300} />
            <TechIcon name="Firebase" icon="🔥" delay={1400} />
            <TechIcon name="Jest" icon="🃏" delay={1500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
