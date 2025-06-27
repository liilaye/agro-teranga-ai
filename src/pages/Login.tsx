
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler une vérification d'authentification
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isAuthenticated', 'true');
      toast.success('Connexion réussie !');
      navigate('/');
    } else {
      toast.error('Identifiants incorrects. Utilisez admin/admin');
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[#1D3C34]">
            Agro Teranga AI
          </CardTitle>
          <CardDescription>
            Connectez-vous au tableau de bord agricole
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="admin"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1D3C34] hover:bg-[#0f2420]"
              disabled={isLoading}
            >
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>Identifiants par défaut :</p>
            <p>Utilisateur: <strong>admin</strong></p>
            <p>Mot de passe: <strong>admin</strong></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
