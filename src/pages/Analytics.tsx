
import React from 'react';
import ChartContainer from '../components/ChartContainer';
import MetricCard from '../components/MetricCard';
import { BarChart3, TrendingUp, Activity, Target } from 'lucide-react';

const Analytics = () => {
  const monthlyYieldData = [
    { name: 'Jan', value: 145 },
    { name: 'Fév', value: 162 },
    { name: 'Mar', value: 189 },
    { name: 'Avr', value: 201 },
    { name: 'Mai', value: 234 },
    { name: 'Jun', value: 267 },
    { name: 'Jul', value: 289 },
    { name: 'Aoû', value: 301 },
    { name: 'Sep', value: 278 },
    { name: 'Oct', value: 245 },
    { name: 'Nov', value: 198 },
    { name: 'Déc', value: 167 }
  ];

  const cropPerformanceData = [
    { name: 'Blé', value: 92 },
    { name: 'Maïs', value: 85 },
    { name: 'Tournesol', value: 78 },
    { name: 'Colza', value: 88 },
    { name: 'Orge', value: 81 }
  ];

  const weatherImpactData = [
    { name: 'Température', value: 85 },
    { name: 'Pluviométrie', value: 72 },
    { name: 'Ensoleillement', value: 91 },
    { name: 'Humidité', value: 67 },
    { name: 'Vent', value: 58 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Analytics Avancées</h1>
          <p className="text-gray-600">Analyse détaillée des performances agricoles</p>
        </div>

        {/* KPIs principaux */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Rendement Global"
            value={267}
            unit="tonnes"
            icon={BarChart3}
            trend="up"
            trendValue="+12%"
            color="green"
          />
          <MetricCard
            title="Efficacité Moyenne"
            value={84}
            unit="%"
            icon={Target}
            trend="up"
            trendValue="+3%"
            color="blue"
          />
          <MetricCard
            title="Performance Météo"
            value={75}
            unit="%"
            icon={Activity}
            trend="stable"
            color="yellow"
          />
          <MetricCard
            title="Croissance YoY"
            value={15}
            unit="%"
            icon={TrendingUp}
            trend="up"
            trendValue="+5%"
            color="green"
          />
        </div>

        {/* Graphiques d'analyse */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ChartContainer
            title="Rendement Mensuel (tonnes)"
            type="bar"
            data={monthlyYieldData}
            color="#10B981"
            height={400}
          />
          <ChartContainer
            title="Performance par Culture (%)"
            type="bar"
            data={cropPerformanceData}
            color="#3B82F6"
            height={400}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChartContainer
            title="Impact des Facteurs Météo (%)"
            type="pie"
            data={weatherImpactData}
            height={400}
          />
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Résumé Analytique</h3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <h4 className="font-medium text-green-800 mb-2">Performances Excellentes</h4>
                <p className="text-sm text-green-700">Le rendement global a augmenté de 12% par rapport à l'année précédente.</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-medium text-blue-800 mb-2">Optimisation Possible</h4>
                <p className="text-sm text-blue-700">La gestion de l'humidité peut être améliorée pour augmenter l'efficacité.</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-medium text-yellow-800 mb-2">Surveillance Recommandée</h4>
                <p className="text-sm text-yellow-700">Les conditions météorologiques nécessitent une attention particulière.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
