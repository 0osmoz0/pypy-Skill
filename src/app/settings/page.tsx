"use client";

import { useSession, signOut, update } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [avatarUrl, setAvatarUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (status === 'loading') return;
    if (!session) router.push('/login');
    
    // Initialiser les données du formulaire avec la session
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        email: session.user.email || ''
      });
      setAvatarUrl(session.user.image || '');
    }
  }, [session, status, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Effacer les messages d'erreur/succès quand l'utilisateur tape
    if (message) setMessage('');
    if (error) setError('');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/profile/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setAvatarUrl(data.imageUrl);
        setMessage('Image uploadée avec succès !');
      } else {
        setError(data.error || 'Erreur lors de l\'upload');
      }
    } catch (error) {
      setError('Erreur de connexion');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('/api/profile/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          avatar: avatarUrl
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Profil mis à jour avec succès !');
        // Rediriger vers le dashboard avec un paramètre refresh
        setTimeout(() => {
          window.location.href = '/profile?refresh=true';
        }, 1000);
      } else {
        setError(data.error || 'Erreur lors de la mise à jour');
      }
    } catch (error) {
      setError('Erreur de connexion');
    } finally {
      setIsLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-lg">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 overflow-hidden">
      {/* Effet de fond avec étoiles */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 150 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`,
              }}
            />
          ))}
        </div>
      )}

      {/* Nébuleuses */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-center mb-8">
          <Link href="/profile" className="text-gray-400 hover:text-white transition-colors text-lg">
            ← Retour au dashboard
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-white font-semibold">{session.user?.name}</p>
              <p className="text-gray-400 text-sm">{session.user?.email}</p>
            </div>
            <button 
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-600/20 hover:bg-red-600/30 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Messages */}
        {message && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-xl text-green-400 text-center backdrop-blur-sm animate-fade-in shadow-2xl">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">{message}</span>
            </div>
          </div>
        )}
        
        {error && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 mb-6 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/50 rounded-xl text-red-400 text-center backdrop-blur-sm animate-fade-in shadow-2xl">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-medium">{error}</span>
            </div>
          </div>
        )}

        {/* Contenu principal */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h1 className="text-3xl font-bold text-white mb-8 text-center">Paramètres du profil</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Photo de profil */}
              <div className="flex flex-col items-center mb-8">
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl overflow-hidden">
                    {avatarUrl ? (
                      <img 
                        src={avatarUrl} 
                        alt="Avatar" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      formData.name.charAt(0)?.toUpperCase() || 'U'
                    )}
                  </div>
                  {uploading && (
                    <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                
                <div className="w-full">
                  {/* Upload de fichier */}
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Choisir une image depuis votre ordinateur
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      disabled={uploading}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 disabled:opacity-50"
                    />
                    <p className="text-gray-400 text-xs mt-1">Formats acceptés: JPG, PNG, GIF (max 5MB)</p>
                  </div>
                </div>
              </div>

              {/* Pseudo */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Pseudo *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre pseudo"
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                <p className="text-gray-400 text-xs mt-1">Ce pseudo doit être unique</p>
              </div>

              {/* Email (lecture seule) */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/30 border border-gray-600/30 rounded-lg text-gray-400 cursor-not-allowed"
                  />
                </div>
                <p className="text-gray-400 text-xs mt-1">L'email ne peut pas être modifié</p>
              </div>

              {/* Bouton de soumission */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Mise à jour...
                    </div>
                  ) : (
                    'Mettre à jour le profil'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
