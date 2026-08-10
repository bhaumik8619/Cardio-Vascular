import React from 'react';
import { Zap, Sparkles } from 'lucide-react';

const PRESETS = [
  {
    id: 'healthy',
    title: 'Healthy Adult (Low Risk)',
    desc: 'Age 32, Normal BP (115/75), Normal Chol/Gluc, Active',
    values: {
      age: 32,
      gender: 2,
      height: 175,
      weight: 70,
      ap_hi: 115,
      ap_lo: 75,
      cholesterol: 1,
      gluc: 1,
      smoke: 0,
      alco: 0,
      active: 1,
    },
  },
  {
    id: 'moderate',
    title: 'Moderate BP Risk',
    desc: 'Age 52, Elevated BP (138/88), Above Normal Chol, Overweight',
    values: {
      age: 52,
      gender: 1,
      height: 162,
      weight: 76,
      ap_hi: 138,
      ap_lo: 88,
      cholesterol: 2,
      gluc: 1,
      smoke: 0,
      alco: 0,
      active: 1,
    },
  },
  {
    id: 'high',
    title: 'High Clinical Risk',
    desc: 'Age 64, Stage 2 BP (165/98), High Chol & Gluc, Smoker',
    values: {
      age: 64,
      gender: 2,
      height: 170,
      weight: 88,
      ap_hi: 165,
      ap_lo: 98,
      cholesterol: 3,
      gluc: 2,
      smoke: 1,
      alco: 1,
      active: 0,
    },
  },
];

export default function PresetSelector({ onSelectPreset, handlePreset }) {
  const onSelect = onSelectPreset || handlePreset;
  return (
    <div className="presets-container">
      <div className="presets-header">
        <Sparkles size={16} color="#38bdf8" />
        <span>Quick Test Sample Presets</span>
      </div>
      <div className="presets-grid">
        {PRESETS.map((preset) => (
          <button
            key={preset.id}
            className="preset-btn"
            onClick={() => onSelect && onSelect(preset.values)}
            type="button"
          >
            <div>
              <div className="preset-title">{preset.title}</div>
              <div className="preset-desc">{preset.desc}</div>
            </div>
            <Zap size={16} color="#38bdf8" />
          </button>
        ))}
      </div>
    </div>
  );
}
