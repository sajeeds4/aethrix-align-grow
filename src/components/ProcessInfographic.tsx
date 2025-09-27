import React from 'react';

interface ProcessInfographicProps {
  type: 'erp' | 'development' | 'cloud' | 'ai';
  animated?: boolean;
}

export const ProcessInfographic: React.FC<ProcessInfographicProps> = ({ type, animated = true }) => {
  const getProcessSteps = (processType: string) => {
    switch (processType) {
      case 'erp':
        return [
          { title: 'Discovery', color: '#3B82F6', icon: '🔍' },
          { title: 'Planning', color: '#8B5CF6', icon: '📋' },
          { title: 'Configuration', color: '#06B6D4', icon: '⚙️' },
          { title: 'Testing', color: '#10B981', icon: '🧪' },
          { title: 'Deployment', color: '#F59E0B', icon: '🚀' },
          { title: 'Support', color: '#EF4444', icon: '🛠️' }
        ];
      case 'development':
        return [
          { title: 'Research', color: '#3B82F6', icon: '📊' },
          { title: 'Design', color: '#8B5CF6', icon: '🎨' },
          { title: 'Development', color: '#06B6D4', icon: '💻' },
          { title: 'Testing', color: '#10B981', icon: '✅' },
          { title: 'Launch', color: '#F59E0B', icon: '🌟' },
          { title: 'Optimize', color: '#EF4444', icon: '⚡' }
        ];
      case 'cloud':
        return [
          { title: 'Assess', color: '#3B82F6', icon: '📈' },
          { title: 'Strategy', color: '#8B5CF6', icon: '🎯' },
          { title: 'Migrate', color: '#06B6D4', icon: '☁️' },
          { title: 'Secure', color: '#10B981', icon: '🔒' },
          { title: 'Monitor', color: '#F59E0B', icon: '📊' },
          { title: 'Evolve', color: '#EF4444', icon: '🔄' }
        ];
      case 'ai':
        return [
          { title: 'Data Analysis', color: '#3B82F6', icon: '📊' },
          { title: 'Model Design', color: '#8B5CF6', icon: '🧠' },
          { title: 'Training', color: '#06B6D4', icon: '🎓' },
          { title: 'Validation', color: '#10B981', icon: '✓' },
          { title: 'Integration', color: '#F59E0B', icon: '🔗' },
          { title: 'Learning', color: '#EF4444', icon: '📈' }
        ];
      default:
        return [];
    }
  };

  const steps = getProcessSteps(type);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <svg
        viewBox="0 0 800 400"
        className="w-full h-auto"
        style={{ filter: 'drop-shadow(0 4px 6px rgb(0 0 0 / 0.1))' }}
      >
        {/* Background */}
        <defs>
          <linearGradient id={`bg-gradient-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          
          {/* Animated flow gradient */}
          <linearGradient id={`flow-gradient-${type}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            {animated && (
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0,0;800,0;0,0"
                dur="3s"
                repeatCount="indefinite"
              />
            )}
          </linearGradient>
        </defs>

        <rect width="800" height="400" fill={`url(#bg-gradient-${type})`} rx="12" />

        {/* Process Flow Line */}
        <path
          d="M 60 200 Q 200 150 340 200 Q 480 250 620 200 Q 680 180 740 200"
          stroke={`url(#flow-gradient-${type})`}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Process Steps */}
        {steps.map((step, index) => {
          const x = 60 + (index * 136);
          const y = 200 + (index % 2 === 0 ? -30 : 30);

          return (
            <g key={index}>
              {/* Connection Line */}
              {index > 0 && (
                <line
                  x1={x - 136}
                  y1={200 + ((index - 1) % 2 === 0 ? -30 : 30)}
                  x2={x}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              )}

              {/* Step Circle */}
              <circle
                cx={x}
                cy={y}
                r="35"
                fill={step.color}
                stroke="white"
                strokeWidth="3"
              >
                {animated && (
                  <animate
                    attributeName="r"
                    values="35;40;35"
                    dur="2s"
                    begin={`${index * 0.5}s`}
                    repeatCount="indefinite"
                  />
                )}
              </circle>

              {/* Step Number */}
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
              >
                {index + 1}
              </text>

              {/* Step Title */}
              <text
                x={x}
                y={y + 60}
                textAnchor="middle"
                fill="#374151"
                fontSize="14"
                fontWeight="600"
              >
                {step.title}
              </text>

              {/* Step Icon */}
              <text
                x={x}
                y={y - 60}
                textAnchor="middle"
                fontSize="24"
              >
                {step.icon}
              </text>
            </g>
          );
        })}

        {/* Title */}
        <text x="400" y="40" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#1f2937">
          {type.charAt(0).toUpperCase() + type.slice(1)} Implementation Process
        </text>

        {/* Subtitle */}
        <text x="400" y="65" textAnchor="middle" fontSize="14" fill="#6b7280">
          Our proven {steps.length}-phase methodology for successful delivery
        </text>
      </svg>
    </div>
  );
};
