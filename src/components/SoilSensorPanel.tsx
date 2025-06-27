
import React from 'react';

interface SoilSensorData {
  id: string;
  name: string;
  value: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
}

interface SatelliteData {
  id: string;
  name: string;
  value: number;
  unit: string;
  description: string;
}

const SoilSensorPanel = () => {
  const soilSensors: SoilSensorData[] = [
    { id: '1', name: 'Humidité du Sol', value: 68, unit: '%', status: 'normal' },
    { id: '2', name: 'Température du Sol', value: 22.5, unit: '°C', status: 'normal' },
    { id: '3', name: 'pH du Sol', value: 6.8, unit: 'pH', status: 'normal' },
    { id: '4', name: 'Conductivité Électrique', value: 1.2, unit: 'mS/cm', status: 'warning' },
    { id: '5', name: 'Azote (N)', value: 45, unit: 'mg/kg', status: 'normal' },
    { id: '6', name: 'Phosphore (P)', value: 32, unit: 'mg/kg', status: 'normal' },
    { id: '7', name: 'Potassium (K)', value: 180, unit: 'mg/kg', status: 'normal' },
    { id: '8', name: 'Matière Organique', value: 3.2, unit: '%', status: 'critical' }
  ];

  const satelliteData: SatelliteData[] = [
    { id: '1', name: 'NDVI', value: 0.75, unit: 'index', description: 'Indice de végétation par différence normalisée' },
    { id: '2', name: 'CWSI', value: 0.32, unit: 'index', description: 'Indice de stress hydrique des cultures' },
    { id: '3', name: 'SWCI', value: 0.68, unit: 'index', description: 'Indice de contenu en eau du sol' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-[#1D3C34] bg-green-50 border-[#1D3C34]';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-600';
      case 'critical': return 'text-red-600 bg-red-50 border-red-600';
      default: return 'text-gray-600 bg-gray-50 border-gray-600';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'normal': return 'Normal';
      case 'warning': return 'Attention';
      case 'critical': return 'Critique';
      default: return 'Inconnu';
    }
  };

  return (
    <div className="space-y-6">
      {/* Capteurs de Sol */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-[#1D3C34] mb-6">Capteurs de Sol - Données en Temps Réel</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {soilSensors.map((sensor) => (
            <div key={sensor.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-[#1D3C34] text-sm">{sensor.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(sensor.status)}`}>
                  {getStatusLabel(sensor.status)}
                </span>
              </div>
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-bold text-[#1D3C34]">{sensor.value}</span>
                <span className="text-gray-500 text-sm">{sensor.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Données Satellite */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-[#1D3C34] mb-6">Données Satellite EO - Analyse Spectrale</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {satelliteData.map((data) => (
            <div key={data.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
              <h4 className="font-medium text-[#1D3C34] mb-2">{data.name}</h4>
              <div className="flex items-baseline space-x-1 mb-2">
                <span className="text-2xl font-bold text-[#1D3C34]">{data.value}</span>
                <span className="text-gray-500 text-sm">{data.unit}</span>
              </div>
              <p className="text-xs text-gray-600">{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoilSensorPanel;
