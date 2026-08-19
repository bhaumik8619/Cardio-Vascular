import React from 'react';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

const STATS = [
  { value: '70K+', label: 'Patient Records' },
  { value: '73%', label: 'Model Accuracy' },
  { value: '11', label: 'Clinical Features' },
  { value: '<1s', label: 'Prediction Time' },
];

export default function HeroSection() {
  const scrollToForm = () => {
    const el = document.getElementById('prediction-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-bg" />

      <div className="hero-ecg" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <polyline
            className="ecg-line"
            fill="none"
            points="0,60 120,60 150,60 170,20 190,100 210,10 230,90 250,60 340,60 360,60 380,30 400,60 480,60 500,60 520,20 540,100 560,10 580,90 600,60 690,60 710,60 730,30 750,60 830,60 850,60 870,20 890,100 910,10 930,90 950,60 1040,60 1060,60 1080,30 1100,60 1200,60"
          />
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="pulse-dot" />
          Machine Learning · Clinical Risk Model
        </div>

        <h1>Know Your Heart Risk Before It Becomes a Problem</h1>
        <p>
          CardioPredict AI turns eleven simple clinical inputs into an instant, data-backed cardiovascular
          risk assessment — powered by a Random Forest model trained on real patient outcomes.
        </p>

        <div className="hero-actions">
          <button className="cta-btn" onClick={scrollToForm}>
            Run a Free Assessment <ArrowRight size={18} />
          </button>
          <a
            href="https://github.com/bhaumik8619"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-outline"
          >
            <GithubIcon size={18} /> View on GitHub
          </a>
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-value">{s.value}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
