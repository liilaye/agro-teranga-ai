
import React from 'react';
import ChartContainer from '../components/ChartContainer';
import FieldMap from '../components/FieldMap';
import AlertPanel from '../components/AlertPanel';
import SoilSensorPanel from '../components/SoilSensorPanel';
import IrrigationPanel from '../components/IrrigationPanel';
import { 
  TrendingUp,
  MapPin,
  Sprout
} from 'lucide-react';
import MetricCard from '../components/MetricCard';

const Dashboard = () => {
  const yieldData = [
    { name: 'Jan', value: 2.1 },
    { name: 'Fév', value: 2.3 },
    { name: 'Mar', value: 2.8 },
    { name: 'Avr', value: 3.2 },
    { name: 'Mai', value: 3.8 },
    { name: 'Jun', value: 4.1 }
  ];

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

        {/* Rendement et statistiques */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartContainer
              title="Évolution du Rendement (tonnes/ha)"
              type="line"
              data={yieldData}
              color="#10B981"
              height={300}
            />
          </div>
          
          <div className="space-y-4">
            <MetricCard
              title="Surface Totale"
              value={88.6}
              unit="hectares"
              icon={MapPin}
              color="green"
            />
            <MetricCard
              title="Cultures Actives"
              value={12}
              icon={Sprout}
              color="green"
            />
            <MetricCard
              title="Rendement Moyen"
              value={4.1}
              unit="t/ha"
              icon={TrendingUp}
              trend="up"
              trendValue="+8%"
              color="green"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
