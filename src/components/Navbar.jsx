import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: scrolled ? '1rem 0' : '1.5rem 0',
    backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
    transition: 'var(--transition)',
    zIndex: 100
  };

  return (
    <nav style={navStyles}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="gradient-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
          Sonu Kumar Gupta's Digital CV
        </a>
        
        <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}>
          <li><a href="#about" style={{ fontWeight: 500, opacity: 0.8, transition: 'var(--transition)' }} onMouseOver={e=>e.target.style.opacity='1'} onMouseOut={e=>e.target.style.opacity='0.8'}>About</a></li>
          <li><a href="#skills" style={{ fontWeight: 500, opacity: 0.8, transition: 'var(--transition)' }} onMouseOver={e=>e.target.style.opacity='1'} onMouseOut={e=>e.target.style.opacity='0.8'}>Skills</a></li>
          <li><a href="#projects" style={{ fontWeight: 500, opacity: 0.8, transition: 'var(--transition)' }} onMouseOver={e=>e.target.style.opacity='1'} onMouseOut={e=>e.target.style.opacity='0.8'}>Projects</a></li>
          <li><a href="#experience" style={{ fontWeight: 500, opacity: 0.8, transition: 'var(--transition)' }} onMouseOver={e=>e.target.style.opacity='1'} onMouseOut={e=>e.target.style.opacity='0.8'}>Experience</a></li>
          <li>
            <button onClick={toggleTheme} style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', cursor: 'pointer', transition: 'var(--transition)' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </li>
          <li><a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Contact</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="mobile-toggle-btn" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
          <button onClick={toggleTheme} style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', borderRadius: '50%', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', cursor: 'pointer', transition: 'var(--transition)' }}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem', background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 100 }}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', listStyle: 'none', alignItems: 'center', paddingTop: '5rem' }}>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 500 }}>About</a></li>
          <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 500 }}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 500 }}>Projects</a></li>
          <li><a href="#experience" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 500 }}>Experience</a></li>
          <li style={{ marginTop: '1rem' }}><a href="#contact" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
