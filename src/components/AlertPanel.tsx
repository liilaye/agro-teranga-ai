
import React from 'react';
import { AlertTriangle, Info, CheckCircle, XCircle } from 'lucide-react';

interface Alert {
  id: string;
  type: 'warning' | 'info' | 'success' | 'error';
  title: string;
  message: string;
  field: string;
  timestamp: string;
}

const AlertPanel = () => {
  const alerts: Alert[] = [
    {
      id: '1',
      type: 'warning',
      title: 'Faible humidité détectée',
      message: 'Le taux d\'humidité de la parcelle Sud est descendu à 35%',
      field: 'Parcelle Sud',
      timestamp: '2024-01-15 14:30'
    },
    {
      id: '2',
      type: 'error',
      title: 'Température critique',
      message: 'La température de la parcelle Ouest dépasse les seuils recommandés',
      field: 'Parcelle Ouest',
      timestamp: '2024-01-15 13:45'
    },
    {
      id: '3',
      type: 'info',
      title: 'Irrigation programmée',
      message: 'L\'irrigation automatique débutera dans 2 heures',
      field: 'Parcelle Nord',
      timestamp: '2024-01-15 12:00'
    },
    {
      id: '4',
      type: 'success',
      title: 'Croissance optimale',
      message: 'Les conditions de croissance sont idéales',
      field: 'Parcelle Est',
      timestamp: '2024-01-15 10:15'
    }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="text-yellow-500" size={20} />;
      case 'error': return <XCircle className="text-red-500" size={20} />;
      case 'info': return <Info className="text-blue-500" size={20} />;
      case 'success': return <CheckCircle className="text-[#1D3C34]" size={20} />;
      default: return <Info className="text-gray-500" size={20} />;
    }
  };

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'warning': return 'border-l-yellow-500 bg-yellow-50';
      case 'error': return 'border-l-red-500 bg-red-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      case 'success': return 'border-l-[#1D3C34] bg-green-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-[#1D3C34] mb-4">Alertes Récentes</h3>
      
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div 
            key={alert.id}
            className={`border-l-4 p-4 rounded-r-lg ${getAlertColor(alert.type)} hover:shadow-sm transition-shadow duration-200`}
          >
            <div className="flex items-start space-x-3">
              {getAlertIcon(alert.type)}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-800">{alert.title}</h4>
                  <span className="text-xs text-gray-500">{alert.timestamp}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{alert.message}</p>
                <p className="text-xs text-gray-500">📍 {alert.field}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-[#1D3C34] hover:text-[#0f2420] text-sm font-medium transition-colors duration-200">
          Voir toutes les alertes →
        </button>
      </div>
    </div>
  );
};

export default AlertPanel;
