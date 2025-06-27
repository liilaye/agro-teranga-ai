
import React from 'react';
import FieldMap from '../components/FieldMap';
import AlertPanel from '../components/AlertPanel';
import SoilSensorPanel from '../components/SoilSensorPanel';
import IrrigationPanel from '../components/IrrigationPanel';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard Agricole</h1>
          <p className="text-gray-600">Vue d'ensemble de vos exploitations - {new Date().toLocaleDateString('fr-FR')}</p>
        </div>

        {/* Capteurs de sol et données satellite */}
        <div className="mb-8">
          <SoilSensorPanel />
        </div>

        {/* Système d'irrigation et recommandations IA */}
        <div className="mb-8">
          <IrrigationPanel />
        </div>

        {/* Section des parcelles */}
        <div className="mb-8">
          <FieldMap />
        </div>

        {/* Alertes */}
        <div className="mb-8">
          <AlertPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
