import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import PresetSelector from './components/PresetSelector';
import CardioForm from './components/CardioForm';
import ResultCard from './components/ResultCard';
import { AlertCircle } from 'lucide-react';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const DEFAULT_FORM_DATA = {
  age: 45,
  gender: 2,
  height: 168,
  weight: 72,
  ap_hi: 120,
  ap_lo: 80,
  cholesterol: 1,
  gluc: 1,
  smoke: 0,
  alco: 0,
  active: 1,
};

export default function App() {
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backendOnline, setBackendOnline] = useState(false);
  const [error, setError] = useState(null);

  // Healthcheck backend connection
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/health`);
        if (res.ok) {
          const data = await res.json();
          setBackendOnline(data.model_loaded);
        } else {
          setBackendOnline(false);
        }
      } catch (err) {
        setBackendOnline(false);
      }
    };
    checkHealth();
    const interval = setInterval(checkHealth, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelectPreset = (presetValues) => {
    setFormData(presetValues);
    submitPrediction(presetValues);
  };

  const submitPrediction = async (dataToSubmit) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/api/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || 'Prediction failed.');
      }

      const resData = await response.json();
      setResult(resData);
    } catch (err) {
      console.error('Error predicting:', err);
      setError(err.message || 'Failed to communicate with backend server.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPrediction(formData);
  };

  return (
    <div className="app-container">
      <Navbar backendOnline={backendOnline} />

      <PresetSelector onSelectPreset={handleSelectPreset} />

      {error && (
        <div className="glass-card" style={{ padding: '16px', marginBottom: '24px', borderColor: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AlertCircle color="#ef4444" size={20} />
          <span style={{ color: '#fca5a5', fontSize: '0.9rem' }}>{error}</span>
        </div>
      )}

      <main className="dashboard-grid">
        <CardioForm
          formData={formData}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          loading={loading}
        />

        <ResultCard result={result} />
      </main>
    </div>
  );
}
