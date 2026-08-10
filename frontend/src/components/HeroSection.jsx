import React from "react";

export default function HeroSection() {
  const scrollToForm = () => {
    const el = document.getElementById("prediction-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>CardioPredict AI</h1>
        <p>
          Fast, accurate cardiovascular‑risk assessment powered by a machine‑learning model trained on real clinical data.
        </p>
        <button className="cta-btn" onClick={scrollToForm}>Get Started</button>
      </div>
      <div className="hero-bg" />
    </section>
  );
}
