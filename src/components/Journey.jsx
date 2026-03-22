import React from 'react';
import { Briefcase, Award, Star } from 'lucide-react';

export default function Journey() {
  return (
    <section id="experience" className="reveal">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 className="section-title">
          <span>My Path</span>
          Journey & Achievements
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Experience */}
          <div className="glass" style={{ padding: '2rem', borderRadius: '1rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1rem', left: '2rem', background: 'var(--accent-blue)', padding: '1rem', borderRadius: '50%', boxShadow: '0 4px 20px rgba(59, 130, 246, 0.5)' }}>
              <Briefcase size={24} color="white" />
            </div>
            <div style={{ marginLeft: '1rem', marginTop: '1rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                Dec 2025 – Feb 2026
              </span>
              <h3 style={{ fontSize: '1.4rem', margin: '0.5rem 0' }}>Data Science & ML Intern</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                Worked extensively on data preprocessing, complex visualizations, and building robust Machine Learning models to derive actionable insights and predictive analytics.
              </p>
            </div>
          </div>

          {/* Certifications & Achievements Grouping */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
            
            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Award size={24} color="var(--accent-purple)" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Certifications</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ color: 'var(--text-secondary)' }}>&bull; Image Processing (LPU)</li>
                <li style={{ color: 'var(--text-secondary)' }}>&bull; Image Compression (Infosys Springboard)</li>
                <li style={{ color: 'var(--text-secondary)' }}>&bull; Video Compression (Infosys Springboard)</li>
              </ul>
            </div>

            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Star size={24} color="#eab308" />
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Achievements</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ color: 'var(--text-secondary)' }}>
                  &bull; <strong>4-star</strong> Problem Solving on HackerRank
                </li>
                <li style={{ color: 'var(--text-secondary)' }}>
                  &bull; Active Competitive Programmer
                </li>
                <li style={{ color: 'var(--text-secondary)' }}>
                 &bull; Volunteer at Shatakshi Educational and Welfare Trust
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
