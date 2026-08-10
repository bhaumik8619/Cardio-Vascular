import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import Navbar from './components/Navbar';
import PresetSelector from './components/PresetSelector';
import ResultCard from './components/ResultCard';
import CardioForm from './components/CardioForm';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const API_URL = (import.meta.env.VITE_API_URL || 'https://cardio-vascular-backend.onrender.com').replace(/\/+$/, '');

export default function LandingPage() {
  const [formData, setFormData] = useState({
    age: 45,
    gender: 2,
    height: 170,
    weight: 75,
    ap_hi: 120,
    ap_lo: 80,
    cholesterol: 1,
    gluc: 1,
    smoke: 0,
    alco: 0,
    active: 1,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backendOnline, setBackendOnline] = useState(false);

  useEffect(() => {
    fetch(API_URL + '/api/health')
      .then((res) => {
        if (res.ok) {
          setBackendOnline(true);
        }
      })
      .catch((err) => {
        console.error('Backend health check failed:', err);
      });
  }, []);

  const handleChange = (name, val) => {
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handlePreset = (values) => {
    setFormData(values);
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(API_URL + '/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      }
    } catch (err) {
      console.error('Prediction request error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-page">
      <Navbar backendOnline={backendOnline} />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <section id="prediction-form" className="form-section">
        <PresetSelector onSelectPreset={handlePreset} handlePreset={handlePreset} />
        <div className="dashboard-grid">
          <CardioForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
          />
          <ResultCard result={result} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
