import React from "react";
import "./LandingPage.css";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import CardioForm from "./components/CardioForm";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <section id="prediction-form" className="form-section">
        <CardioForm />
      </section>
      <Footer />
    </div>
  );
}
