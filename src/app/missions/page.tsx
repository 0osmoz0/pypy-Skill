"use client";

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MissionsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [currentMission, setCurrentMission] = useState(0);
  const [pythonCode, setPythonCode] = useState('');
  const [missionResult, setMissionResult] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (status === 'loading') return;
    if (!session) router.push('/login');
  }, [session, status, router]);

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

  const missions = [
    {
      id: 1,
      title: "Mission 1: Premier Contact",
      description: "Créez une variable pour stocker votre nom et affichez un message de bienvenue.",
      objective: "Utilisez print() pour afficher 'Bonjour, [votre_nom] !'",
      starterCode: "# Écrivez votre code ici\nname = \"VotreNom\"\nprint(f\"Bonjour, {name} !\")",
      expectedOutput: "Bonjour, VotreNom !",
      story: "Vous arrivez sur une planète inconnue. Un étranger vous demande de vous présenter."
    },
    {
      id: 2,
      title: "Mission 2: Calcul de Distance",
      description: "Calculez la distance entre deux points dans l'espace.",
      objective: "Créez une fonction qui calcule la distance entre deux coordonnées.",
      starterCode: "# Importez math et créez votre fonction\ndef calculate_distance(x1, y1, x2, y2):\n    # Votre code ici\n    pass\n\n# Testez votre fonction\nprint(calculate_distance(0, 0, 3, 4))",
      expectedOutput: "5.0",
      story: "Votre vaisseau a besoin de calculer la distance vers la prochaine station spatiale."
    },
    {
      id: 3,
      title: "Mission 3: Boucle de Navigation",
      description: "Utilisez une boucle pour compter les systèmes solaires visités.",
      objective: "Créez une boucle qui compte de 1 à 5 et affiche chaque numéro.",
      starterCode: "# Créez une boucle for\nfor i in range(1, 6):\n    print(f\"Système solaire {i} visité\")",
      expectedOutput: "Système solaire 1 visité\nSystème solaire 2 visité\nSystème solaire 3 visité\nSystème solaire 4 visité\nSystème solaire 5 visité",
      story: "Vous explorez plusieurs systèmes solaires. Comptez chacun d'entre eux."
    }
  ];

  const runPythonCode = async () => {
    setIsRunning(true);
    setMissionResult('');

    try {
      // Envoyer le code à l'API d'exécution Python
      const response = await fetch('/api/python/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: pythonCode }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMissionResult(data.output || 'Code exécuté avec succès');
      } else {
        setMissionResult('Erreur: ' + (data.error || 'Erreur d\'exécution'));
      }
    } catch (error) {
      setMissionResult('Erreur de connexion: ' + error);
    } finally {
      setIsRunning(false);
    }
  };

  const nextMission = () => {
    if (currentMission < missions.length - 1) {
      setCurrentMission(currentMission + 1);
      setPythonCode(missions[currentMission + 1].starterCode);
      setMissionResult('');
    }
  };

  const previousMission = () => {
    if (currentMission > 0) {
      setCurrentMission(currentMission - 1);
      setPythonCode(missions[currentMission - 1].starterCode);
      setMissionResult('');
    }
  };

  useEffect(() => {
    setPythonCode(missions[currentMission].starterCode);
  }, [currentMission]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 overflow-hidden">
      {/* Effet de fond avec étoiles */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 100 }).map((_, i) => (
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
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="text-gray-400 hover:text-white transition-colors text-lg">
              ← Retour au dashboard
            </Link>
            <h1 className="text-2xl font-bold text-white">
              {missions[currentMission].title}
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link href="/settings" className="group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:scale-110 transition-transform duration-300">
                {session.user?.name?.charAt(0)?.toUpperCase() || 'U'}
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

        {/* Contenu principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Émulateur Python - Gauche */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">🐍</span>
              Émulateur Python
            </h2>
            
            {/* Description de la mission */}
            <div className="mb-4 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Objectif :</h3>
              <p className="text-gray-300 text-sm mb-2">{missions[currentMission].objective}</p>
              <p className="text-gray-400 text-xs">{missions[currentMission].description}</p>
            </div>

            {/* Éditeur de code */}
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Votre code Python :
              </label>
              <textarea
                value={pythonCode}
                onChange={(e) => setPythonCode(e.target.value)}
                className="w-full h-64 bg-gray-900/50 border border-gray-600/50 rounded-lg p-4 text-green-400 font-mono text-sm resize-none focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                placeholder="# Écrivez votre code Python ici..."
              />
            </div>

            {/* Boutons d'action */}
            <div className="flex space-x-3 mb-4">
              <button
                onClick={runPythonCode}
                disabled={isRunning}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isRunning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Exécution...
                  </>
                ) : (
                  <>
                    <span className="mr-2">▶️</span>
                    Exécuter
                  </>
                )}
              </button>
              
              <button
                onClick={previousMission}
                disabled={currentMission === 0}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                ←
              </button>
              
              <button
                onClick={nextMission}
                disabled={currentMission === missions.length - 1}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                →
              </button>
            </div>

            {/* Résultat */}
            {missionResult && (
              <div className="p-4 bg-gray-900/50 border border-gray-600/50 rounded-lg">
                <h3 className="text-lg font-semibold text-green-300 mb-2">Résultat :</h3>
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                  {missionResult}
                </pre>
              </div>
            )}
          </div>

          {/* Interface graphique - Droite */}
          <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">🚀</span>
              Aventure Spatiale
            </h2>

            {/* Zone de jeu */}
            <div className="relative h-96 bg-gradient-to-b from-black/50 to-blue-900/30 rounded-lg overflow-hidden border border-white/20">
              {/* Éléments visuels selon la mission */}
              {currentMission === 0 && (
                <>
                  {/* Planète et personnage */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-2xl">🌍</span>
                    </div>
                  </div>
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">👨‍🚀</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 p-3 rounded-lg border border-yellow-500/50">
                    <p className="text-yellow-300 text-sm">Étranger: "Qui êtes-vous ?"</p>
                  </div>
                </>
              )}

              {currentMission === 1 && (
                <>
                  {/* Vaisseau spatial */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-20 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                  </div>
                  {/* Station spatiale */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-24 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl">🛸</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black/50 p-3 rounded-lg border border-cyan-500/50">
                    <p className="text-cyan-300 text-sm">Calcul de distance requis...</p>
                  </div>
                </>
              )}

              {currentMission === 2 && (
                <>
                  {/* Systèmes solaires */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`absolute top-${i * 4} left-${i * 8}`}>
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">☀️</span>
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-4 left-4 bg-black/50 p-3 rounded-lg border border-yellow-500/50">
                    <p className="text-yellow-300 text-sm">Exploration en cours...</p>
                  </div>
                </>
              )}

              {/* Particules flottantes */}
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/30 rounded-full animate-pulse"
                  style={{
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
                />
              ))}
            </div>

            {/* Histoire */}
            <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-300 mb-2">Histoire :</h3>
              <p className="text-gray-300 text-sm">{missions[currentMission].story}</p>
            </div>

            {/* Progression */}
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 text-sm">Progression</span>
                <span className="text-gray-300 text-sm">{currentMission + 1}/{missions.length}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentMission + 1) / missions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
