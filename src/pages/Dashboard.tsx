
import React from 'react';
import MetricCard from '../components/MetricCard';
import ChartContainer from '../components/ChartContainer';
import FieldMap from '../components/FieldMap';
import AlertPanel from '../components/AlertPanel';
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Sun, 
  Sprout, 
  TrendingUp,
  MapPin,
  Calendar
} from 'lucide-react';

const Dashboard = () => {
  // Données pour les graphiques
  const temperatureData = [
    { name: '00h', value: 18 },
    { name: '04h', value: 16 },
    { name: '08h', value: 20 },
    { name: '12h', value: 25 },
    { name: '16h', value: 28 },
    { name: '20h', value: 24 }
  ];

  const humidityData = [
    { name: 'Lun', value: 65 },
    { name: 'Mar', value: 72 },
    { name: 'Mer', value: 58 },
    { name: 'Jeu', value: 45 },
    { name: 'Ven', value: 52 },
    { name: 'Sam', value: 68 },
    { name: 'Dim', value: 75 }
  ];

  const cropData = [
    { name: 'Blé', value: 35 },
    { name: 'Maïs', value: 25 },
    { name: 'Tournesol', value: 20 },
    { name: 'Colza', value: 15 },
    { name: 'Autres', value: 5 }
  ];

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

        {/* Métriques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Température Moyenne"
            value={24}
            unit="°C"
            icon={Thermometer}
            trend="up"
            trendValue="+2°C"
            color="red"
          />
          <MetricCard
            title="Humidité du Sol"
            value={68}
            unit="%"
            icon={Droplets}
            trend="down"
            trendValue="-5%"
            color="blue"
          />
          <MetricCard
            title="Vitesse du Vent"
            value={12}
            unit="km/h"
            icon={Wind}
            trend="stable"
            trendValue="0 km/h"
            color="green"
          />
          <MetricCard
            title="Index UV"
            value={7}
            unit="/10"
            icon={Sun}
            trend="up"
            trendValue="+1"
            color="yellow"
          />
        </div>

        {/* Graphiques principaux */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartContainer
            title="Évolution de la Température (24h)"
            type="line"
            data={temperatureData}
            color="#EF4444"
            height={300}
          />
          <ChartContainer
            title="Humidité Hebdomadaire"
            type="bar"
            data={humidityData}
            color="#3B82F6"
            height={300}
          />
        </div>

        {/* Section des parcelles */}
        <div className="mb-8">
          <FieldMap />
        </div>

        {/* Analyse des cultures et alertes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartContainer
            title="Répartition des Cultures"
            type="pie"
            data={cropData}
            height={350}
          />
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
