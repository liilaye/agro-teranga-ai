
import React from 'react';
import { MapPin, Droplets, Thermometer, Wind } from 'lucide-react';

interface Field {
  id: string;
  name: string;
  crop: string;
  area: number;
  status: 'healthy' | 'warning' | 'critical';
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const FieldMap = () => {
  const fields: Field[] = [
    {
      id: '1',
      name: 'Parcelle Nord',
      crop: 'Blé',
      area: 25.5,
      status: 'healthy',
      temperature: 22,
      humidity: 65,
      windSpeed: 12
    },
    {
      id: '2',
      name: 'Parcelle Sud',
      crop: 'Maïs',
      area: 18.2,
      status: 'warning',
      temperature: 26,
      humidity: 45,
      windSpeed: 8
    },
    {
      id: '3',
      name: 'Parcelle Est',
      crop: 'Tournesol',
      area: 32.1,
      status: 'healthy',
      temperature: 24,
      humidity: 58,
      windSpeed: 15
    },
    {
      id: '4',
      name: 'Parcelle Ouest',
      crop: 'Colza',
      area: 12.8,
      status: 'critical',
      temperature: 28,
      humidity: 35,
      windSpeed: 20
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-[#1D3C34] bg-green-50 border-[#1D3C34]';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-600';
      case 'critical': return 'text-red-600 bg-red-50 border-red-600';
      default: return 'text-gray-600 bg-gray-50 border-gray-600';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'healthy': return 'Saine';
      case 'warning': return 'Attention';
      case 'critical': return 'Critique';
      default: return 'Inconnue';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-[#1D3C34] mb-6">Vue d'ensemble des parcelles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {fields.map((field) => (
          <div 
            key={field.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200 cursor-pointer hover:border-[#1D3C34]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <MapPin className="text-[#1D3C34]" size={16} />
                <h4 className="font-medium text-[#1D3C34]">{field.name}</h4>
              </div>
              <span 
                className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(field.status)}`}
              >
                {getStatusLabel(field.status)}
              </span>
            </div>
            
            <div className="space-y-2 mb-3">
              <p className="text-sm text-gray-600">
                <span className="font-medium">Culture:</span> {field.crop}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Surface:</span> {field.area} ha
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="flex items-center space-x-1">
                <Thermometer size={12} className="text-red-500" />
                <span>{field.temperature}°C</span>
              </div>
              <div className="flex items-center space-x-1">
                <Droplets size={12} className="text-blue-500" />
                <span>{field.humidity}%</span>
              </div>
              <div className="flex items-center space-x-1">
                <Wind size={12} className="text-gray-500" />
                <span>{field.windSpeed}km/h</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FieldMap;
