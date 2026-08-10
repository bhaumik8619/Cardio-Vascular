import React from "react";

const features = [
  {
    title: "Instant Predictions",
    icon: "⚡",
    desc: "Get a risk score in seconds without any medical jargon."
  },
  {
    title: "Clinical Insights",
    icon: "📊",
    desc: "BMI, blood‑pressure stage, and personalized health recommendations."
  },
  {
    title: "Free & Secure",
    icon: "🔒",
    desc: "Hosted on Render/Vercel with HTTPS and no hidden costs."
  }
];

export default function FeaturesSection() {
  return (
    <section className="features">
      <h2>Why Choose CardioPredict?</h2>
      <div className="feature-grid">
        {features.map((f) => (
          <div key={f.title} className="feature-card glass">
            <div className="icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
