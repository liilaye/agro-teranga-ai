
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'stable';
  trendValue?: string;
  color?: 'green' | 'blue' | 'yellow' | 'red';
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  unit,
  icon: Icon,
  trend,
  trendValue,
  color = 'green'
}) => {
  const colorClasses = {
    green: 'from-[#1D3C34] to-[#0f2420]',
    blue: 'from-[#1D3C34] to-[#0f2420]',
    yellow: 'from-[#1D3C34] to-[#0f2420]',
    red: 'from-[#1D3C34] to-[#0f2420]'
  };

  const getTrendIcon = () => {
    if (trend === 'up') return '↗️';
    if (trend === 'down') return '↘️';
    return '➡️';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className={`bg-gradient-to-r ${colorClasses[color]} p-4 rounded-t-xl`}>
        <div className="flex items-center justify-between">
          <Icon className="text-white" size={24} />
          <div className="text-white text-sm opacity-90">
            {trend && (
              <span className="flex items-center space-x-1">
                <span>{getTrendIcon()}</span>
                <span>{trendValue}</span>
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-gray-600 text-sm font-medium mb-2">{title}</h3>
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl font-bold text-[#1D3C34]">{value}</span>
          {unit && <span className="text-gray-500 text-sm">{unit}</span>}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
