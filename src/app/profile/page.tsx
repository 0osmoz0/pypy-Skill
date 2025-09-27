"use client";

import { useSession, signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isClient, setIsClient] = useState(false);
  const [userData, setUserData] = useState(session?.user);

  useEffect(() => {
    setIsClient(true);
    if (status === 'loading') return;
    if (!session) router.push('/login');
    
    // Mettre à jour userData quand la session change
    setUserData(session?.user);
  }, [session, status, router]);

  // Fonction pour récupérer les données fraîches
  const fetchUserData = async () => {
    try {
      const response = await fetch('/api/profile/get');
      if (response.ok) {
        const data = await response.json();
        setUserData(data.user);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  useEffect(() => {
    // Si on vient d'une mise à jour de profil, nettoyer l'URL et récupérer les données fraîches
    if (searchParams.get('refresh')) {
      router.replace('/profile');
      // Récupérer les données fraîches après une mise à jour
      setTimeout(() => {
        fetchUserData();
      }, 100);
    }
  }, [searchParams, router]);

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

      {/* Header avec photo de profil */}
      <div className="relative z-10 p-6">
        <div className="flex justify-end items-center">
          <div className="flex items-center space-x-3">
            <Link href="/settings" className="group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-2xl">
                {userData?.image ? (
                  <img 
                    src={userData.image} 
                    alt="Avatar" 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  userData?.name?.charAt(0)?.toUpperCase() || 'U'
                )}
              </div>
            </Link>
            <button 
              onClick={() => signOut({ callbackUrl: '/' })}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>

      {/* Contenu principal centré */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="text-center">
          {/* Titre */}
          <h1 className="text-6xl font-black text-white mb-8 tracking-wider uppercase"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                letterSpacing: '0.2em',
              }}>
            PYPYSKILL
          </h1>
          
          {/* Message de bienvenue */}
          <h2 className="text-2xl font-bold text-white mb-4">
            Bienvenue, {userData?.name}! 👋
          </h2>
          
          {/* Bouton Commencer */}
          <Link href="/missions">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-glow">
              Commencer
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
