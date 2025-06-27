
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BarChart3, 
  MapPin, 
  Sprout, 
  AlertTriangle,
  Settings,
  Users,
  Calendar
} from 'lucide-react';

const Navigation = () => {
  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '/analytics', icon: BarChart3, label: 'Analytics' },
    { to: '/fields', icon: MapPin, label: 'Parcelles' },
    { to: '/crops', icon: Sprout, label: 'Cultures' },
    { to: '/alerts', icon: AlertTriangle, label: 'Alertes' },
    { to: '/planning', icon: Calendar, label: 'Planning' },
    { to: '/team', icon: Users, label: 'Équipe' },
    { to: '/settings', icon: Settings, label: 'Paramètres' },
  ];

  return (
    <nav className="bg-gradient-to-b from-green-800 to-green-900 text-white w-64 min-h-screen p-4 shadow-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-green-100 mb-2">🌾 Pulsar Agro</h1>
        <p className="text-green-300 text-sm">Dashboard Agricole</p>
      </div>
      
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-green-700 text-white shadow-lg transform scale-105'
                    : 'text-green-100 hover:bg-green-700/50 hover:text-white'
                }`
              }
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto pt-8">
        <div className="bg-green-700/30 p-4 rounded-lg">
          <p className="text-green-200 text-sm mb-2">Météo Actuelle</p>
          <div className="flex items-center space-x-2">
            <span className="text-xl">☀️</span>
            <span className="text-white font-semibold">24°C</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
