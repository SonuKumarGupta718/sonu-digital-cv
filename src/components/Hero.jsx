import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container">
        <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--accent-blue)', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '2px', marginBottom: '1rem', textTransform: 'uppercase' }}>
            Hello, I am
          </h2>
          
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', marginBottom: '1rem', lineHeight: 1.1 }}>
            Sonu Kumar <span className="gradient-text">Gupta</span>
          </h1>
          
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--text-secondary)', fontWeight: 400, marginBottom: '2rem' }}>
            Full Stack Developer | Data Science Enthusiast | Problem Solver
          </h3>
          
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem auto', lineHeight: 1.8 }}>
            Passionate about building scalable web applications and solving real-world problems using data and modern technologies.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            {/* Resume link will go here if provided, keeping it as secondary button */}
            <a href="/General cvvvvvv.pdf" download="General cvvvvvv.pdf" target="_blank" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
               <Download size={20} /> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
