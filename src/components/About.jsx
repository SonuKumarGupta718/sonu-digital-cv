import React from 'react';
import { User, GraduationCap, Cpu, Layers } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="reveal glass" style={{ margin: '4rem auto', borderRadius: '1.5rem', padding: '4rem 2rem' }}>
      <div className="container">
        <h2 className="section-title">
          <span>Get To Know Me</span>
          About Me
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1.5rem' }}>
              I am a <strong>B.Tech IT student</strong> at Lovely Professional University, focused on building scalable web applications and solving real-world problems using data.
            </p>
            <p>
              I have hands-on experience in full-stack development and data science, with a strong foundation in problem-solving and system design. I enjoy learning new technologies and applying them to create efficient and practical solutions.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
               <div style={{ padding: '0.8rem', background: 'var(--accent-gradient)', borderRadius: '0.75rem', color: 'white' }}>
                 <GraduationCap size={24} />
               </div>
               <div>
                 <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>B.Tech Information Technology</h4>
                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Lovely Professional University<br/>CGPA: 7.71</p>
               </div>
            </div>

            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
               <div style={{ padding: '0.8rem', background: 'rgba(59, 130, 246, 0.2)', color: 'var(--accent-blue)', borderRadius: '0.75rem' }}>
                 <Layers size={24} />
               </div>
               <div>
                 <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Interests</h4>
                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Full Stack Development &bull; Data Science &bull; System Design</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
