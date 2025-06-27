
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Droplets,
  Activity,
  MapPin, 
  AlertTriangle,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Navigation = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { to: '/', icon: Home, label: 'Dashboard' },
    { to: '#soil-sensors', icon: Activity, label: 'Capteurs Sol' },
    { to: '#irrigation', icon: Droplets, label: 'Irrigation' },
    { to: '#fields', icon: MapPin, label: 'Parcelles' },
    { to: '#alerts', icon: AlertTriangle, label: 'Alertes' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    toast.success('Déconnexion réussie');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-b from-[#1D3C34] to-[#0f2420] text-white w-64 min-h-screen p-4 shadow-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Agro Teranga AI</h1>
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
        <div className="bg-white/10 p-4 rounded-lg mb-4">
          <p className="text-gray-200 text-sm mb-2">Météo Actuelle</p>
          <div className="flex items-center space-x-2">
            <span className="text-white font-semibold">24°C</span>
          </div>
        </div>
        
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full bg-transparent border-white/20 text-white hover:bg-white/10"
        >
          <LogOut size={16} className="mr-2" />
          Déconnexion
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
