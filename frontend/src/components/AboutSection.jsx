import React from "react";

export default function AboutSection() {
  return (
    <section className="about">
      <h2>Our Technology</h2>
      <p>
        CardioPredict uses a Random Forest classifier trained on a publicly‑available cardiovascular dataset. The model evaluates age, gender, height, weight, blood pressure, cholesterol, glucose, smoking, alcohol intake and activity level to give a probability of high cardiovascular risk together with actionable lifestyle advice.
      </p>
      <a
        href="https://github.com/bhaumik8619/Cardio-Vascular"
        target="_blank"
        rel="noopener noreferrer"
        className="link-btn"
      >
        View Source on GitHub
      </a>
    </section>
  );
}
