import React from 'react';
import { HeartPulse, ShieldCheck, Wifi, WifiOff } from 'lucide-react';

export default function Navbar({ backendOnline }) {
  return (
    <header className="glass-card navbar">
      <div className="brand">
        <div className="brand-icon">
          <HeartPulse size={26} />
        </div>
        <div className="brand-text">
          <h1>CardioPredict AI</h1>
          <p>Machine Learning Cardiovascular Disease Risk Assessment</p>
        </div>
      </div>
      <div className="status-badge">
        <div className={`dot ${backendOnline ? 'online' : 'offline'}`}></div>
        <span>{backendOnline ? 'AI Model Online' : 'Connecting to Server...'}</span>
        {backendOnline ? <Wifi size={14} color="#10b981" /> : <WifiOff size={14} color="#ef4444" />}
      </div>
    </header>
  );
}
