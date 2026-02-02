'use client';

import { useState, memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Countries with good work-life balance (Western & Central Europe, Canada, Japan)
// Using country names as they appear in the world-atlas data
const westernEuropeCountries = new Set([
  'France',
  'Spain',
  'Portugal',
  'Belgium',
  'Netherlands',
  'Luxembourg',
  'United Kingdom',
  'Ireland',
  'Monaco',
  'Andorra',
]);

const centralEuropeCountries = new Set([
  'Germany',
  'Austria',
  'Switzerland',
  'Czechia',
  'Czech Republic',
  'Poland',
  'Hungary',
  'Slovakia',
  'Slovenia',
  'Liechtenstein',
]);

const otherBalancedCountries = new Set([
  'Canada',
  'Japan',
]);

const isBalancedCountry = (countryName: string): boolean => {
  return (
    westernEuropeCountries.has(countryName) ||
    centralEuropeCountries.has(countryName) ||
    otherBalancedCountries.has(countryName)
  );
};

interface RegionInfo {
  name: string;
  balance: 'balanced' | 'imbalanced';
  description: string;
}

const getRegionInfo = (countryName: string): RegionInfo => {
  if (westernEuropeCountries.has(countryName)) {
    return {
      name: 'Western Europe',
      balance: 'balanced',
      description: 'Strong work-life balance policies and employee protections',
    };
  } else if (centralEuropeCountries.has(countryName)) {
    return {
      name: 'Central Europe',
      balance: 'balanced',
      description: 'Good workplace regulations and cultural emphasis on personal time',
    };
  } else if (countryName === 'Canada') {
    return {
      name: 'Canada',
      balance: 'balanced',
      description: 'Strong labor laws and cultural value on work-life balance',
    };
  } else if (countryName === 'Japan') {
    return {
      name: 'Japan',
      balance: 'balanced',
      description: 'Evolving workplace culture with increasing focus on work-life balance',
    };
  }

  return {
    name: 'Other Regions',
    balance: 'imbalanced',
    description: 'Work-life imbalance more common in this region',
  };
};

const balanceColors = {
  balanced: '#4a8c4a',
  imbalanced: '#d97706',
};

const balanceLabels = {
  balanced: 'Work-Life Balance Sensitive',
  imbalanced: 'Work-Life Imbalance',
};

function WorldMap() {
  const [tooltipContent, setTooltipContent] = useState<{
    name: string;
    info: RegionInfo;
  } | null>(null);

  return (
    <div className="w-full">
      <div className="relative bg-[#e8f4fc] rounded-xl overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 130,
            center: [10, 30],
          }}
          style={{
            width: '100%',
            height: 'auto',
          }}
        >
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name || '';
                  const isBalanced = isBalancedCountry(countryName);

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const info = getRegionInfo(countryName);
                        setTooltipContent({
                          name: countryName || 'Unknown',
                          info,
                        });
                      }}
                      onMouseLeave={() => {
                        setTooltipContent(null);
                      }}
                      style={{
                        default: {
                          fill: isBalanced ? balanceColors.balanced : balanceColors.imbalanced,
                          stroke: '#fff',
                          strokeWidth: 0.5,
                          outline: 'none',
                        },
                        hover: {
                          fill: isBalanced ? '#3d7a3d' : '#c2690a',
                          stroke: '#fff',
                          strokeWidth: 0.75,
                          outline: 'none',
                          cursor: 'pointer',
                        },
                        pressed: {
                          fill: isBalanced ? '#2d5a2d' : '#a85a08',
                          stroke: '#fff',
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {/* Tooltip */}
        {tooltipContent && (
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 border border-sage-200 animate-in fade-in duration-200">
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: balanceColors[tooltipContent.info.balance] }}
              />
              <h4 className="font-semibold text-sage-800">{tooltipContent.name}</h4>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${balanceColors[tooltipContent.info.balance]}20`,
                  color: balanceColors[tooltipContent.info.balance],
                }}
              >
                {balanceLabels[tooltipContent.info.balance]}
              </span>
            </div>
            <p className="text-sm text-sage-600">{tooltipContent.info.description}</p>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6">
        {Object.entries(balanceLabels).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded"
              style={{ backgroundColor: balanceColors[key as keyof typeof balanceColors] }}
            />
            <span className="text-sm text-sage-600">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-sage-500 mt-3">
        Hover over countries to learn more. Scroll to zoom, drag to pan.
      </p>
    </div>
  );
}

export default memo(WorldMap);
