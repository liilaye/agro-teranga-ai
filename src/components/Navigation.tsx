
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
    <nav className="bg-gradient-to-b from-[#1D3C34] to-[#0f2420] text-white w-64 min-h-screen p-4 shadow-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">🌾 Agro Teranga AI</h1>
        <p className="text-gray-200 text-sm">Dashboard Agricole</p>
      </div>
      
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-white/20 text-white shadow-lg transform scale-105'
                    : 'text-gray-200 hover:bg-white/10 hover:text-white'
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
        <div className="bg-white/10 p-4 rounded-lg">
          <p className="text-gray-200 text-sm mb-2">Météo Actuelle</p>
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
