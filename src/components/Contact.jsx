import React from 'react';
import { Mail, Github, Linkedin, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="reveal glass" style={{ margin: '4rem auto', borderRadius: '1.5rem', padding: '5rem 2rem' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 className="section-title">
          <span>What's Next?</span>
          Get In Touch
        </h2>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.8 }}>
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
          
          <a href="mailto:sonunir7319@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            <Mail size={20} /> sonunir7319@gmail.com
          </a>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#" className="glass" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', borderRadius: '2rem',
              color: 'var(--text-primary)', transition: 'var(--transition)'
            }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.background = 'var(--glass-bg)'}>
              <Linkedin size={20} color="#0077b5" /> LinkedIn <ArrowUpRight size={16} />
            </a>
            
            <a href="#" className="glass" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', borderRadius: '2rem',
              color: 'var(--text-primary)', transition: 'var(--transition)'
            }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.background = 'var(--glass-bg)'}>
              <Github size={20} /> GitHub <ArrowUpRight size={16} />
            </a>
            
            <a href="tel:+917319731181" className="glass" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem', borderRadius: '2rem',
              color: 'var(--text-primary)', transition: 'var(--transition)'
            }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.background = 'var(--glass-bg)'}>
              <Phone size={20} color="var(--accent-purple)" /> +91-7319731181
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
