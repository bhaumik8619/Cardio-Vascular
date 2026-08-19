import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const STACK = ['Python', 'scikit-learn', 'FastAPI', 'React', 'Vite', 'Recharts'];

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="section-heading">
        <span className="eyebrow">Under the hood</span>
        <h2>Our Technology</h2>
      </div>
      <p>
        CardioPredict uses a Random Forest classifier trained on a publicly available cardiovascular
        dataset. The model evaluates age, gender, height, weight, blood pressure, cholesterol, glucose,
        smoking, alcohol intake, and activity level to estimate the probability of elevated cardiovascular
        risk — paired with actionable, easy-to-read lifestyle recommendations.
      </p>

      <div className="stack-chips">
        {STACK.map((tech) => (
          <span key={tech} className="stack-chip">{tech}</span>
        ))}
      </div>

      <div className="about-links">
        <a
          href="https://github.com/bhaumik8619"
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn"
        >
          <GithubIcon size={18} /> View Source on GitHub <ArrowUpRight size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/bhaumik-vaishnani-78b33930a/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn link-btn-outline"
        >
          <LinkedinIcon size={18} /> Connect on LinkedIn <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
