import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'IPL Player Statistics Tracker',
      description: 'Full-stack application to track player stats like runs, wickets, and strike rate. Features a dashboard with charts using Recharts and full CRUD operations. Built with a responsive dark mode UI.',
      tags: ['Spring Boot', 'React', 'Recharts', 'MySQL'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Crop Recommendation System',
      description: 'Machine learning model predicting the most suitable crop to grow based on various parameters. Trained on the Agri-Crop-Prediction-India dataset using modern Python tools.',
      tags: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1586771107445-d3afef0a1140?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'UI/UX Marketplace Design',
      description: 'Designed a high-fidelity mobile application prototype focusing on user-friendly navigation and premium design aesthetics.',
      tags: ['Figma', 'UI/UX Design', 'Prototyping'],
      github: '#',
      live: '#',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="projects" className="reveal glass" style={{ margin: '4rem auto', borderRadius: '1.5rem', padding: '5rem 2rem' }}>
      <div className="container">
        <h2 className="section-title">
          <span>My Works</span>
          Featured Projects
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card" style={{
              background: 'var(--bg-secondary)',
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column'
             }} 
            >
              <div className="project-image-container">
                <img src={proj.image} alt={proj.title} className="project-image" />
              </div>
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>{proj.title}</h3>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                  {proj.description}
                </p>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {proj.tags.map((t, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', background: 'rgba(59, 130, 246, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                      {t}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a href={proj.github} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.9rem', opacity: 0.8 }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
                    <Github size={18} /> Code
                  </a>
                  <a href={proj.live} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontSize: '0.9rem', opacity: 0.8 }} onMouseOver={e => e.currentTarget.style.opacity = '1'} onMouseOut={e => e.currentTarget.style.opacity = '0.8'}>
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
