import React from 'react';
import { Zap, LineChart, ShieldCheck, Brain } from 'lucide-react';

const features = [
  {
    title: 'Instant Predictions',
    icon: Zap,
    accent: '#38bdf8',
    desc: 'Get a cardiovascular risk score in seconds, no medical jargon required.',
  },
  {
    title: 'Clinical Insights',
    icon: LineChart,
    accent: '#818cf8',
    desc: 'BMI, blood-pressure staging, and personalized lifestyle recommendations.',
  },
  {
    title: 'Trained on Real Data',
    icon: Brain,
    accent: '#f59e0b',
    desc: 'Random Forest model trained on 70,000+ real clinical patient records.',
  },
  {
    title: 'Free & Secure',
    icon: ShieldCheck,
    accent: '#10b981',
    desc: 'Served over HTTPS with no sign-up, no tracking, and no hidden costs.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="section-heading">
        <span className="eyebrow">What you get</span>
        <h2>Why Choose CardioPredict?</h2>
        <p className="section-sub">A lightweight, transparent tool built to make risk screening approachable.</p>
      </div>
      <div className="feature-grid">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.title} className="feature-card glass-card">
              <div className="feature-icon" style={{ '--accent': f.accent }}>
                <Icon size={22} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
