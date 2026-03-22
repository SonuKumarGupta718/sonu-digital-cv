import React from 'react';
import { Code, Server, Database, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['C++', 'JavaScript', 'Java', 'Python', 'C']
    },
    {
      title: 'Frameworks',
      icon: <Server size={24} />,
      skills: ['Spring Boot', 'React', 'Hibernate', 'Material UI']
    },
    {
      title: 'Core Subjects',
      icon: <Database size={24} />,
      skills: ['Data Structures', 'DBMS', 'Operating Systems']
    },
    {
      title: 'Tools & Others',
      icon: <Wrench size={24} />,
      skills: ['Git', 'MySQL', 'Power BI', 'Figma', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="reveal">
      <div className="container">
        <h2 className="section-title">
          <span>My Arsenal</span>
          Skills & Technologies
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass" style={{
              padding: '2rem',
              borderRadius: '1.5rem',
              transition: 'var(--transition)',
              cursor: 'default'
            }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-5px)'}
               onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ color: 'var(--accent-blue)' }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{category.title}</h3>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {category.skills.map((skill, i) => (
                  <span key={i} style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '2rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
