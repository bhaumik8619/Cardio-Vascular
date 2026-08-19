import React from 'react';
import { HeartPulse, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const scrollTo = (href) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-brand-title">
            <HeartPulse size={20} color="#38bdf8" />
            <span>CardioPredict AI</span>
          </div>
          <p>
            A machine-learning powered cardiovascular risk screening tool, built as an academic
            full-stack ML project.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <button onClick={() => scrollTo('#features')}>Features</button>
          <button onClick={() => scrollTo('#insights')}>Insights</button>
          <button onClick={() => scrollTo('#prediction-form')}>Assessment</button>
          <button onClick={() => scrollTo('#about')}>About</button>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a href="https://github.com/bhaumik8619" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bhaumik-vaishnani-78b33930a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CardioPredict AI. Built for educational purposes — not a substitute for medical advice.</p>
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
