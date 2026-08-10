import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} CardioPredict AI</p>
      <a href="https://github.com/bhaumik8619/Cardio-Vascular" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </footer>
  );
}
