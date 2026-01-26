'use client';

import { useState } from 'react';

interface RegionData {
  name: string;
  risk: 'low' | 'moderate' | 'high' | 'very-high';
  description: string;
}

const regionData: Record<string, RegionData> = {
  'western-europe': { name: 'Western Europe', risk: 'low', description: 'Strong work-life balance policies and employee protections' },
  'northern-europe': { name: 'Northern Europe', risk: 'low', description: 'Excellent workplace wellbeing standards and social support' },
  'eastern-europe': { name: 'Eastern Europe', risk: 'moderate', description: 'Developing workplace regulations, varying by country' },
  'north-america': { name: 'North America', risk: 'high', description: 'High work demands, limited mandatory leave policies' },
  'south-america': { name: 'South America', risk: 'moderate', description: 'Mixed workplace cultures, improving regulations' },
  'east-asia': { name: 'East Asia', risk: 'very-high', description: 'Intense work culture, long hours common (9-9-6)' },
  'south-asia': { name: 'South Asia', risk: 'high', description: 'Growing tech sector with demanding schedules' },
  'southeast-asia': { name: 'Southeast Asia', risk: 'moderate', description: 'Rapidly developing economies, varied workplace cultures' },
  'middle-east': { name: 'Middle East', risk: 'moderate', description: 'Traditional work structures, evolving policies' },
  'africa': { name: 'Africa', risk: 'moderate', description: 'Diverse workplace environments across the continent' },
  'oceania': { name: 'Oceania', risk: 'moderate', description: 'Good work-life balance awareness, competitive markets' },
};

const riskColors = {
  'low': '#6a9f6a',
  'moderate': '#c4a484',
  'high': '#d97706',
  'very-high': '#dc2626',
};

const riskLabels = {
  'low': 'Low Risk',
  'moderate': 'Moderate Risk',
  'high': 'High Risk',
  'very-high': 'Very High Risk',
};

export default function WorldMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const activeRegion = selectedRegion || hoveredRegion;
  const activeData = activeRegion ? regionData[activeRegion] : null;

  return (
    <div className="w-full">
      <div className="relative">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-auto"
          style={{ maxHeight: '400px' }}
        >
          {/* Background */}
          <rect fill="#e8f0e8" width="1000" height="500" rx="8" />

          {/* Simplified world map regions */}
          {/* North America */}
          <path
            d="M 50 80 Q 100 60 180 70 L 250 100 L 280 180 L 260 250 L 180 280 L 100 250 L 60 180 Z"
            fill={hoveredRegion === 'north-america' || selectedRegion === 'north-america' ? riskColors['high'] : '#d97706'}
            opacity={hoveredRegion === 'north-america' || selectedRegion === 'north-america' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('north-america')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'north-america' ? null : 'north-america')}
          />

          {/* South America */}
          <path
            d="M 180 290 L 250 280 L 280 350 L 260 430 L 200 450 L 150 400 L 160 330 Z"
            fill={hoveredRegion === 'south-america' || selectedRegion === 'south-america' ? riskColors['moderate'] : '#c4a484'}
            opacity={hoveredRegion === 'south-america' || selectedRegion === 'south-america' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('south-america')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'south-america' ? null : 'south-america')}
          />

          {/* Western Europe */}
          <path
            d="M 420 100 L 480 90 L 500 130 L 490 180 L 450 200 L 410 180 L 400 140 Z"
            fill={hoveredRegion === 'western-europe' || selectedRegion === 'western-europe' ? riskColors['low'] : '#6a9f6a'}
            opacity={hoveredRegion === 'western-europe' || selectedRegion === 'western-europe' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('western-europe')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'western-europe' ? null : 'western-europe')}
          />

          {/* Northern Europe */}
          <path
            d="M 450 50 L 520 40 L 560 70 L 550 100 L 500 90 L 460 80 Z"
            fill={hoveredRegion === 'northern-europe' || selectedRegion === 'northern-europe' ? riskColors['low'] : '#6a9f6a'}
            opacity={hoveredRegion === 'northern-europe' || selectedRegion === 'northern-europe' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('northern-europe')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'northern-europe' ? null : 'northern-europe')}
          />

          {/* Eastern Europe */}
          <path
            d="M 500 90 L 600 80 L 640 140 L 620 200 L 550 210 L 500 180 L 500 130 Z"
            fill={hoveredRegion === 'eastern-europe' || selectedRegion === 'eastern-europe' ? riskColors['moderate'] : '#c4a484'}
            opacity={hoveredRegion === 'eastern-europe' || selectedRegion === 'eastern-europe' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('eastern-europe')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'eastern-europe' ? null : 'eastern-europe')}
          />

          {/* Africa */}
          <path
            d="M 420 220 L 520 210 L 580 280 L 560 380 L 480 420 L 400 380 L 390 300 Z"
            fill={hoveredRegion === 'africa' || selectedRegion === 'africa' ? riskColors['moderate'] : '#c4a484'}
            opacity={hoveredRegion === 'africa' || selectedRegion === 'africa' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('africa')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'africa' ? null : 'africa')}
          />

          {/* Middle East */}
          <path
            d="M 550 180 L 620 170 L 660 220 L 640 270 L 580 280 L 540 240 Z"
            fill={hoveredRegion === 'middle-east' || selectedRegion === 'middle-east' ? riskColors['moderate'] : '#c4a484'}
            opacity={hoveredRegion === 'middle-east' || selectedRegion === 'middle-east' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('middle-east')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'middle-east' ? null : 'middle-east')}
          />

          {/* South Asia */}
          <path
            d="M 660 220 L 720 200 L 760 260 L 740 320 L 680 330 L 640 290 Z"
            fill={hoveredRegion === 'south-asia' || selectedRegion === 'south-asia' ? riskColors['high'] : '#d97706'}
            opacity={hoveredRegion === 'south-asia' || selectedRegion === 'south-asia' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('south-asia')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'south-asia' ? null : 'south-asia')}
          />

          {/* East Asia */}
          <path
            d="M 720 80 L 820 70 L 880 130 L 860 200 L 780 210 L 720 170 L 700 120 Z"
            fill={hoveredRegion === 'east-asia' || selectedRegion === 'east-asia' ? riskColors['very-high'] : '#dc2626'}
            opacity={hoveredRegion === 'east-asia' || selectedRegion === 'east-asia' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('east-asia')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'east-asia' ? null : 'east-asia')}
          />

          {/* Southeast Asia */}
          <path
            d="M 760 260 L 840 250 L 880 310 L 860 370 L 800 380 L 750 340 Z"
            fill={hoveredRegion === 'southeast-asia' || selectedRegion === 'southeast-asia' ? riskColors['moderate'] : '#c4a484'}
            opacity={hoveredRegion === 'southeast-asia' || selectedRegion === 'southeast-asia' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('southeast-asia')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'southeast-asia' ? null : 'southeast-asia')}
          />

          {/* Oceania */}
          <path
            d="M 820 380 L 900 370 L 950 420 L 920 460 L 850 470 L 810 430 Z"
            fill={hoveredRegion === 'oceania' || selectedRegion === 'oceania' ? riskColors['moderate'] : '#c4a484'}
            opacity={hoveredRegion === 'oceania' || selectedRegion === 'oceania' ? 1 : 0.7}
            stroke="#fff"
            strokeWidth="2"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setHoveredRegion('oceania')}
            onMouseLeave={() => setHoveredRegion(null)}
            onClick={() => setSelectedRegion(selectedRegion === 'oceania' ? null : 'oceania')}
          />

          {/* Region Labels */}
          <text x="165" y="180" className="text-[10px] fill-white font-medium pointer-events-none">NA</text>
          <text x="200" y="370" className="text-[10px] fill-white font-medium pointer-events-none">SA</text>
          <text x="445" y="150" className="text-[10px] fill-white font-medium pointer-events-none">WE</text>
          <text x="500" y="70" className="text-[10px] fill-white font-medium pointer-events-none">NE</text>
          <text x="555" y="150" className="text-[10px] fill-white font-medium pointer-events-none">EE</text>
          <text x="475" y="320" className="text-[10px] fill-white font-medium pointer-events-none">AF</text>
          <text x="590" y="230" className="text-[10px] fill-white font-medium pointer-events-none">ME</text>
          <text x="690" y="280" className="text-[10px] fill-white font-medium pointer-events-none">SA</text>
          <text x="790" y="150" className="text-[10px] fill-white font-medium pointer-events-none">EA</text>
          <text x="810" y="320" className="text-[10px] fill-white font-medium pointer-events-none">SEA</text>
          <text x="870" y="430" className="text-[10px] fill-white font-medium pointer-events-none">OC</text>
        </svg>

        {/* Info Tooltip */}
        {activeData && (
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 border border-sage-200 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: riskColors[activeData.risk] }}
              />
              <h4 className="font-semibold text-sage-800">{activeData.name}</h4>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${riskColors[activeData.risk]}20`,
                  color: riskColors[activeData.risk]
                }}
              >
                {riskLabels[activeData.risk]}
              </span>
            </div>
            <p className="text-sm text-sage-600">{activeData.description}</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {Object.entries(riskLabels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: riskColors[key as keyof typeof riskColors] }}
            />
            <span className="text-xs text-sage-600">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-sage-500 mt-2">Click on a region to learn more</p>
    </div>
  );
}
