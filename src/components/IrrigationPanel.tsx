
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from './ui/button';

const IrrigationPanel = () => {
  const [manualDuration, setManualDuration] = useState(30);
  const [isManualActive, setIsManualActive] = useState(false);
  const [isAutoActive, setIsAutoActive] = useState(false);

  // Données de consommation d'eau (litres par jour)
  const waterConsumptionData = [
    { name: 'Jan', value: 120 },
    { name: 'Fév', value: 135 },
    { name: 'Mar', value: 180 },
    { name: 'Avr', value: 220 },
    { name: 'Mai', value: 280 },
    { name: 'Jun', value: 320 },
    { name: 'Jul', value: 350 },
    { name: 'Aoû', value: 330 },
    { name: 'Sep', value: 290 },
    { name: 'Oct', value: 240 },
    { name: 'Nov', value: 180 },
    { name: 'Déc', value: 140 }
  ];

  const handleManualIrrigation = () => {
    setIsManualActive(!isManualActive);
  };

  const handleAutoIrrigation = () => {
    setIsAutoActive(!isAutoActive);
  };

  return (
    <div className="space-y-6">
      {/* Courbe de consommation d'eau */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-[#1D3C34] mb-4">Consommation d'Eau d'Arrosage</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={waterConsumptionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" label={{ value: 'Litres/jour', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value) => [`${value} L/jour`, 'Consommation']}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#1D3C34" 
              strokeWidth={3}
              dot={{ fill: '#1D3C34', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sections d'irrigation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Irrigation Manuelle */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-[#1D3C34] mb-4">Irrigation Manuelle</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Durée d'arrosage (minutes)
              </label>
              <input
                type="number"
                value={manualDuration}
                onChange={(e) => setManualDuration(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D3C34] focus:border-transparent"
                min="1"
                max="180"
              />
            </div>
            
            <div className="flex space-x-3">
              <Button
                onClick={handleManualIrrigation}
                className={`flex-1 ${isManualActive ? 'bg-red-600 hover:bg-red-700' : 'bg-[#1D3C34] hover:bg-[#0f2420]'} text-white`}
              >
                {isManualActive ? 'Arrêter' : 'Arroser'}
              </Button>
            </div>
            
            {isManualActive && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  Irrigation en cours - Durée: {manualDuration} minutes
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Irrigation Automatique IA */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-[#1D3C34] mb-4">Irrigation Automatique IA</h3>
          
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800 text-sm mb-2">
                L'IA analyse en temps réel:
              </p>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Humidité du sol: 68%</li>
                <li>• Température: 24°C</li>
                <li>• Prévisions météo</li>
                <li>• Stade de croissance</li>
              </ul>
            </div>
            
            <Button
              onClick={handleAutoIrrigation}
              className={`w-full ${isAutoActive ? 'bg-red-600 hover:bg-red-700' : 'bg-gradient-to-r from-[#1D3C34] to-[#2d5a4f] hover:from-[#0f2420] hover:to-[#1D3C34]'} text-white`}
            >
              {isAutoActive ? 'Désactiver IA' : 'Déclencher Arrosage IA'}
            </Button>
            
            {isAutoActive && (
              <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  IA activée - Irrigation intelligente en cours
                </p>
                <p className="text-green-700 text-xs mt-1">
                  Durée optimisée: 25 minutes basée sur l'analyse ML
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Recommandations IA */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-[#1D3C34] mb-4">Recommandations IA - Parcelle Test Niébé (200m²)</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Informations de la parcelle */}
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-[#1D3C34] mb-2">Informations Parcelle</h4>
              <div className="space-y-1 text-sm text-gray-700">
                <p><span className="font-medium">Surface:</span> 200 m²</p>
                <p><span className="font-medium">Culture:</span> Niébé</p>
                <p><span className="font-medium">Âge:</span> 45 jours</p>
                <p><span className="font-medium">Stade:</span> Floraison</p>
              </div>
            </div>
            
            {/* Recommandations d'arrosage */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-medium text-[#1D3C34] mb-2">Arrosage Recommandé</h4>
              <div className="space-y-1 text-sm text-blue-800">
                <p>• Fréquence: 2 fois par semaine</p>
                <p>• Volume: 15-20 L/m² par semaine</p>
                <p>• Meilleure heure: 6h-8h ou 18h-20h</p>
                <p>• Éviter l'arrosage foliaire pendant la floraison</p>
              </div>
            </div>
          </div>

          {/* Recommandations fertilisants */}
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-medium text-[#1D3C34] mb-3">Engrais NPK Recommandé</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-sm font-medium">Azote (N)</span>
                  <span className="text-sm text-[#1D3C34] font-bold">20 kg/ha</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-sm font-medium">Phosphore (P)</span>
                  <span className="text-sm text-[#1D3C34] font-bold">15 kg/ha</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded border">
                  <span className="text-sm font-medium">Potassium (K)</span>
                  <span className="text-sm text-[#1D3C34] font-bold">25 kg/ha</span>
                </div>
              </div>
            </div>
            
            {/* Fertilisants organiques */}
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-medium text-[#1D3C34] mb-2">Fertilisants Organiques</h4>
              <div className="space-y-1 text-sm text-yellow-800">
                <p>• Compost: 2 tonnes/ha</p>
                <p>• Fumier décomposé: 1.5 tonnes/ha</p>
                <p>• Application: avant semis et à 30 jours</p>
                <p>• Rhizobium pour fixation d'azote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrrigationPanel;
