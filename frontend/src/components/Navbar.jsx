import React, { useState, useEffect } from 'react';
import { HeartPulse, Wifi, WifiOff, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Insights', href: '#insights' },
  { label: 'Assessment', href: '#prediction-form' },
  { label: 'About', href: '#about' },
];

export default function Navbar({ backendOnline }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar-wrap ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar glass-card">
        <div className="brand">
          <div className="brand-icon">
            <HeartPulse size={24} />
          </div>
          <div className="brand-text">
            <h1>CardioPredict AI</h1>
            <p>ML‑Powered Cardiovascular Risk Assessment</p>
          </div>
        </div>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <button key={link.href} className="nav-link" onClick={() => handleNavClick(link.href)}>
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar-right">
          <div className="status-badge">
            <div className={`dot ${backendOnline ? 'online' : 'offline'}`}></div>
            <span>{backendOnline ? 'Model Online' : 'Connecting…'}</span>
            {backendOnline ? <Wifi size={13} color="#10b981" /> : <WifiOff size={13} color="#ef4444" />}
          </div>

          <div className="social-links">
            <a
              href="https://github.com/bhaumik8619"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhaumik-vaishnani-78b33930a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu glass-card">
          {NAV_LINKS.map((link) => (
            <button key={link.href} className="mobile-nav-link" onClick={() => handleNavClick(link.href)}>
              {link.label}
            </button>
          ))}
          <div className="mobile-social">
            <a href="https://github.com/bhaumik8619" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
              <GithubIcon size={18} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/bhaumik-vaishnani-78b33930a/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
