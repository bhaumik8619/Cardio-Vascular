import React from 'react';
import { AlertTriangle, CheckCircle2, ShieldAlert, Heart, Printer, Stethoscope, ChevronRight, Activity } from 'lucide-react';
import RiskMeter from './RiskMeter';

export default function ResultCard({ result }) {
  if (!result) {
    return (
      <div className="glass-card result-card" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '450px' }}>
        <Heart size={48} color="#64748b" style={{ opacity: 0.5, marginBottom: '16px' }} />
        <h3 style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Awaiting Patient Data</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748b', maxWidth: '300px', marginTop: '8px' }}>
          Enter clinical parameters on the left or select a sample preset to calculate risk probability.
        </p>
      </div>
    );
  }

  const isHighRisk = result.prediction === 1;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="glass-card result-card">
      {/* Risk Banner */}
      <div className={`result-banner ${isHighRisk ? 'danger' : 'success'}`}>
        <div className="banner-icon">
          {isHighRisk ? <ShieldAlert size={26} /> : <CheckCircle2 size={26} />}
        </div>
        <div className="banner-text">
          <h3>{result.risk_label}</h3>
          <p>
            {isHighRisk
              ? 'Model detected elevated indicators associated with cardiovascular risk.'
              : 'Clinical parameters indicate low cardiovascular risk probability.'}
          </p>
        </div>
      </div>

      {/* Radial Risk Meter */}
      <RiskMeter probability={result.risk_probability} isHighRisk={isHighRisk} />

      {/* Metrics Breakdown Grid */}
      <div className="metrics-grid">
        <div className="metric-box">
          <div className="metric-label">Body Mass Index (BMI)</div>
          <div className="metric-val">{result.metrics.bmi} <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>kg/m²</span></div>
          <div className="metric-sub">{result.metrics.bmi_category}</div>
        </div>

        <div className="metric-box">
          <div className="metric-label">Blood Pressure Status</div>
          <div className="metric-val" style={{ fontSize: '0.95rem' }}>{result.metrics.bp_category}</div>
          <div className="metric-sub">Mean Art: {result.metrics.mean_arterial_pressure} mmHg</div>
        </div>
      </div>

      {/* Risk Factors */}
      {result.risk_factors && result.risk_factors.length > 0 && (
        <div className="details-section">
          <h4>
            <AlertTriangle size={15} color="#ef4444" /> Identified Risk Factors
          </h4>
          <div className="factor-tags">
            {result.risk_factors.map((factor, idx) => (
              <span key={idx} className="factor-tag">
                {factor}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      {result.recommendations && result.recommendations.length > 0 && (
        <div className="details-section">
          <h4>
            <Stethoscope size={15} color="#38bdf8" /> Clinical Recommendations
          </h4>
          <ul className="recommendations-list">
            {result.recommendations.map((rec, idx) => (
              <li key={idx}>
                <ChevronRight size={14} />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={handlePrint} className="print-btn" type="button">
        <Printer size={18} /> Print Clinical Health Summary
      </button>
    </div>
  );
}
