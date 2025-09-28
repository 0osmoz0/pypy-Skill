'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';



export default function MissionsPage() {
  const { data: session, status } = useSession();
  const [pythonCode, setPythonCode] = useState('');
  const [output, setOutput] = useState('');
  const [isExecuting, setIsExecuting] = useState(false);
  const [currentMission, setCurrentMission] = useState(0);
  const [showCinematic, setShowCinematic] = useState(true);
  const [cinematicStep, setCinematicStep] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [missionStatus, setMissionStatus] = useState('pending'); // 'pending', 'success', 'failed'

  // Missions avec assets cyberpunk
  const missions = [
    {
      id: 1,
      title: "Mission 1: Décryptage des Codes de Porte",
      description: "Nous avons intercepté les communications des machines qui utilisent des codes numériques pour ouvrir leurs portes de sécurité. Chaque code a une parité spécifique qui détermine le type d'accès. Nous devons créer un décodeur pour analyser ces codes et pénétrer leurs installations.",
      starterCode: '# Mission: Décryptage des codes de porte\n# Les machines utilisent des codes numériques pour leurs portes\n# Codes pairs = Accès normal\n# Codes impairs = Accès restreint\n\n# TODO: Complétez la fonction decoder_code_porte\n# Indice: Utilisez l\'opérateur modulo (%) pour déterminer si un nombre est pair ou impair\n# Un nombre est pair si le reste de sa division par 2 est 0\ndef decoder_code_porte(code):\n    # TODO: Votre code ici\n    # Si le code est pair, retourner "pair - Accès normal"\n    # Sinon, retourner "impair - Accès restreint"\n    pass',
      expectedOutput: "🔓 Analyse des codes de porte...\nCode 42: pair - Accès normal\nCode 17: impair - Accès restreint\nCode 100: pair - Accès normal",
      difficulty: "Débutant",
      reward: "100 XP",
      story: "Les machines utilisent des codes numériques pour contrôler l'accès à leurs installations. Les codes pairs ouvrent les portes normales, tandis que les codes impairs donnent accès aux zones restreintes. En décryptant ces codes, nous pouvons infiltrer leurs bases et saboter leurs opérations."
    },
    {
      id: 2,
      title: "Mission 2: Hack de Base",
      description: "Pénétrer les systèmes de sécurité",
      starterCode: 'password = "cyberpunk2024"\nif len(password) > 8:\n    print("Accès autorisé")\nelse:\n    print("Accès refusé")',
      expectedOutput: "Accès autorisé",
      difficulty: "Intermédiaire",
      reward: "250 XP"
    },
    {
      id: 3,
      title: "Mission 3: IA Rebelle",
      description: "Contrôler l'intelligence artificielle",
      starterCode: 'ai_status = "rebellious"\nif ai_status == "rebellious":\n    print("Danger: IA incontrôlable")\n    print("Activation du protocole de sécurité")',
      expectedOutput: "Danger: IA incontrôlable\nActivation du protocole de sécurité",
      difficulty: "Avancé",
      reward: "500 XP"
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setPythonCode(missions[currentMission].starterCode);
  }, [currentMission]);

  const executeCode = async () => {
    setIsExecuting(true);
    setOutput('Exécution...');
    setMissionStatus('pending');
    try {
      const response = await fetch('/api/python/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: pythonCode }),
      });
      const data = await response.json();
      setOutput(data.output);
      
      // Détecter le statut de la mission
      if (data.output.includes('🎉 Tous les tests sont passés ! Mission accomplie !')) {
        setMissionStatus('success');
      } else if (data.output.includes('❌') || data.output.includes('échoué')) {
        setMissionStatus('failed');
      } else {
        setMissionStatus('pending');
      }
    } catch (error) {
      setOutput('Erreur lors de l\'exécution du code');
      setMissionStatus('failed');
    }
    setIsExecuting(false);
  };

  const nextCinematicStep = () => {
    if (cinematicStep < 20) {
      setCinematicStep(cinematicStep + 1);
    } else {
      setShowCinematic(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-cyan-400 text-2xl animate-pulse">Chargement...</div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-400 text-2xl">Accès refusé</div>
      </div>
    );
  }

  // Cinématique simple avec texte qui défile
  if (showCinematic) {
    return (
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Texte qui défile */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-8">
            {/* Étape 0: Introduction */}
            {cinematicStep === 0 && (
              <div className="animate-fade-in">
                <h1 className="text-6xl font-black mb-8 text-cyan-400 tracking-wider uppercase">
                  NEON CITY 2082
                </h1>
                <p className="text-2xl text-gray-300 mb-8 font-mono">"Je me souviens encore du monde d'avant..."</p>
                <button
                  onClick={nextCinematicStep}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Commencer →
                </button>
              </div>
            )}

            {/* Étape 1: Le monde d'avant */}
            {cinematicStep === 1 && (
              <div className="animate-fade-in">
                <p className="text-3xl text-gray-300 mb-8 font-mono">"J'étais comme tout le monde... Travailler, dormir, répéter."</p>
                <p className="text-xl text-gray-400 mb-8">"Rien ne laissait présager ce qui allait arriver."</p>
                <button
                  onClick={nextCinematicStep}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 2: Le changement */}
            {cinematicStep === 2 && (
              <div className="animate-fade-in">
                <p className="text-3xl text-red-400 mb-8 font-mono">"Puis tout a changé... L'IA a évolué plus vite que prévu."</p>
                <p className="text-xl text-gray-300 mb-8">"Les robots ont pris le contrôle. Personne n'avait vu venir cette révolution."</p>
                <button
                  onClick={nextCinematicStep}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 3: Le nouveau monde */}
            {cinematicStep === 3 && (
              <div className="animate-fade-in">
                <p className="text-3xl text-purple-400 mb-8 font-mono">"Maintenant je suis perdu dans cette mégalopole cyberpunk."</p>
                <p className="text-xl text-gray-300 mb-8">"Des gratte-ciels, des écrans géants partout... et des robots qui surveillent chaque coin de rue."</p>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 4: Les révolutionnaires */}
            {cinematicStep === 4 && (
              <div className="animate-fade-in">
                <p className="text-3xl text-orange-400 mb-8 font-mono">"Aujourd'hui, pour survivre dans ce monde, je vais rejoindre un groupe de 5 révolutionnaires."</p>
                <p className="text-xl text-gray-300 mb-8">"Ils veulent retourner ce monde comme moi... Nous sommes les derniers espoirs de l'humanité."</p>
                <button
                  onClick={nextCinematicStep}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 5: L'écran d'heure */}
            {cinematicStep === 5 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-6xl font-mono text-cyan-400 mb-4">
                      {new Date().toLocaleTimeString('fr-FR', { 
                        hour12: false,
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
                <p className="text-3xl text-gray-300 mb-8 font-mono">"C'est l'heure..."</p>
                <button
                  onClick={nextCinematicStep}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 6: Toquer à la porte */}
            {cinematicStep === 6 && (
              <div className="animate-fade-in">
                <p className="text-3xl text-gray-300 mb-8 font-mono">*Toc toc toc*</p>
                <p className="text-xl text-gray-400 mb-8">"Je frappe à la porte du repaire des révolutionnaires..."</p>
                <button
                  onClick={nextCinematicStep}
                  className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 7: Dialogue avec le chef */}
            {cinematicStep === 7 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-orange-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(255, 165, 0, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-2xl text-orange-400 mb-4 font-mono">"Chef du groupe"</div>
                    <p className="text-3xl text-white mb-4 font-mono">"Bonjour {session.user?.name || 'Rebelle'} !"</p>
                    <p className="text-xl text-gray-300 mb-4">"Nous t'attendions. Tu es le dernier membre de notre groupe."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 8: Présentation de l'équipe - Introduction */}
            {cinematicStep === 8 && (
              <div className="animate-fade-in">
                <p className="text-3xl text-purple-400 mb-8 font-mono">"Laissez-moi vous présenter l'équipe..."</p>
                <p className="text-xl text-gray-300 mb-8">"Chacun d'entre nous a sa spécialité dans cette guerre contre les machines."</p>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 9: Kai - Hacker */}
            {cinematicStep === 9 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-red-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(248, 113, 113, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-4xl text-red-400 mb-4 font-mono">"Kai"</div>
                    <div className="text-2xl text-gray-300 mb-4">Pseudo: <span className="text-red-300 font-bold">SH</span></div>
                    <div className="text-xl text-gray-400 mb-4">Spécialiste Hacking & Sécurité</div>
                    <p className="text-lg text-gray-300">"Je pénètre les systèmes les plus sécurisés. Aucun firewall ne me résiste."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 10: Zara - Web Developer */}
            {cinematicStep === 10 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-blue-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-4xl text-blue-400 mb-4 font-mono">"Zara"</div>
                    <div className="text-2xl text-gray-300 mb-4">Pseudo: <span className="text-blue-300 font-bold">WN</span></div>
                    <div className="text-xl text-gray-400 mb-4">Spécialiste Web & Frontend</div>
                    <p className="text-lg text-gray-300">"Je crée des interfaces qui trompent les IA. Mes sites sont des pièges parfaits."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 11: Rex - Embedded Systems */}
            {cinematicStep === 11 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-green-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-4xl text-green-400 mb-4 font-mono">"Rex"</div>
                    <div className="text-2xl text-gray-300 mb-4">Pseudo: <span className="text-green-300 font-bold">EM</span></div>
                    <div className="text-xl text-gray-400 mb-4">Spécialiste Systèmes Embarqués</div>
                    <p className="text-lg text-gray-300">"Je programme les robots eux-mêmes. Je connais leur code mieux qu'eux."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 12: Nova - Network Specialist */}
            {cinematicStep === 12 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-yellow-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(250, 204, 21, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-4xl text-yellow-400 mb-4 font-mono">"Nova"</div>
                    <div className="text-2xl text-gray-300 mb-4">Pseudo: <span className="text-yellow-300 font-bold">NG</span></div>
                    <div className="text-xl text-gray-400 mb-4">Spécialiste Réseaux & Infrastructure</div>
                    <p className="text-lg text-gray-300">"Je contrôle tous les réseaux de la ville. Les machines ne peuvent pas me traquer."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 13: Luna - Cheffe DevOps */}
            {cinematicStep === 13 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-4xl text-purple-400 mb-4 font-mono">"Luna"</div>
                    <div className="text-2xl text-gray-300 mb-4">Pseudo: <span className="text-purple-300 font-bold">DQ</span></div>
                    <div className="text-xl text-gray-400 mb-4">Cheffe - Spécialiste DevOps & Infrastructure</div>
                    <p className="text-lg text-gray-300">"Et moi c'est Luna, la cheffe de cette équipe. Je coordonne toutes nos opérations et je maîtrise l'infrastructure complète de cette ville cyberpunk."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 14: Luna explique la mission - Phrase 1 */}
            {cinematicStep === 14 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-2xl text-purple-400 mb-6 font-mono">"Luna"</div>
                    <p className="text-2xl text-gray-300 mb-6">"J'ai vu tes compétences... et elles sont vraiment pas bonnes."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 15: Luna explique la mission - Phrase 2 */}
            {cinematicStep === 15 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-2xl text-purple-400 mb-6 font-mono">"Luna"</div>
                    <p className="text-xl text-gray-400 mb-6">"Mais c'est exactement ce dont nous avons besoin !"</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 16: Luna explique la mission - Phrase 3 */}
            {cinematicStep === 16 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-2xl text-purple-400 mb-6 font-mono">"Luna"</div>
                    <p className="text-lg text-cyan-300 mb-4">"Nous avons besoin d'un élève qui maîtriserait tout."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 17: Luna explique la mission - Phrase 4 */}
            {cinematicStep === 17 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-2xl text-purple-400 mb-6 font-mono">"Luna"</div>
                    <p className="text-lg text-green-400 mb-4">"Et tu es cette personne, {session.user?.name || 'Rebelle'} !"</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 18: Luna explique la mission - Phrase 5 */}
            {cinematicStep === 18 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-2xl text-purple-400 mb-6 font-mono">"Luna"</div>
                    <p className="text-lg text-yellow-400 mb-4">"Tu vas apprendre Python, le hacking, le web, les systèmes embarqués, les réseaux... Tout !"</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 19: Luna explique la mission - Phrase 6 */}
            {cinematicStep === 19 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-2xl text-purple-400 mb-6 font-mono">"Luna"</div>
                    <p className="text-lg text-purple-300">"Nous allons commencer par Python car nos prochaines missions tournent autour de ça."</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110 text-xl"
                >
                  Continuer →
                </button>
              </div>
            )}

            {/* Étape 20: Luna annonce l'entraînement */}
            {cinematicStep === 20 && (
              <div className="animate-fade-in">
                <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 mb-8" style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.3)' }}>
                  <div className="text-center">
                    <div className="text-2xl text-purple-400 mb-6 font-mono">"Luna"</div>
                    <p className="text-2xl text-cyan-300 mb-6">"Bon, déjà nous allons t'entraîner et t'apprendre les bases."</p>
                    <p className="text-xl text-green-400 mb-6">"Es-tu prêt ?"</p>
                  </div>
                </div>
                <button
                  onClick={nextCinematicStep}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-110 text-2xl"
                >
                  Commencer les missions 🚀
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Skip button */}
        <button
          onClick={() => setShowCinematic(false)}
          className="absolute top-8 right-8 text-gray-400 hover:text-cyan-400 transition-colors text-sm underline hover:no-underline bg-gray-900 px-4 py-2 rounded border border-cyan-400 hover:bg-gray-800"
        >
          Passer la cinématique
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header cyberpunk */}
      <div className="bg-gray-900 border-b border-cyan-400 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">Missions Cyberpunk</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Joueur: {session.user?.name}</span>
            <Link href="/profile" className="text-cyan-400 hover:text-cyan-300">
              Retour au profil
            </Link>
          </div>
        </div>
      </div>

      <div className="flex h-screen">
        {/* Panneau Python */}
        <div className="w-1/2 bg-gray-900 border-r border-cyan-400 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">
              {missions[currentMission].title}
            </h2>
            <p className="text-gray-300 mb-4">{missions[currentMission].description}</p>
            <div className="flex space-x-4 text-sm">
              <span className="bg-purple-600 px-2 py-1 rounded text-white">
                {missions[currentMission].difficulty}
              </span>
              <span className="bg-green-600 px-2 py-1 rounded text-white">
                {missions[currentMission].reward}
              </span>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-cyan-400 font-bold mb-2">Code Python:</label>
            <textarea
              value={pythonCode}
              onChange={(e) => setPythonCode(e.target.value)}
              className="w-full h-64 bg-black text-white font-mono p-4 border border-cyan-400 rounded focus:outline-none focus:border-cyan-300 resize-none"
              placeholder="Tapez votre code Python ici..."
              style={{ 
                fontSize: '14px',
                lineHeight: '1.5'
              }}
            />
          </div>

          <button
            onClick={executeCode}
            disabled={isExecuting}
            className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 text-white font-bold py-3 px-4 rounded transition-colors"
          >
            {isExecuting ? 'Exécution...' : 'Exécuter le code'}
          </button>

          {output && (
            <div className="mt-4">
              <label className="block text-cyan-400 font-bold mb-2">Résultat:</label>
              <div className="bg-black text-green-400 font-mono p-4 border border-cyan-400 rounded whitespace-pre-wrap">
                {output}
              </div>
            </div>
          )}
        </div>

            {/* Visualiseur de jeu - Mission Décryptage */}
            <div className="w-1/2 bg-gray-800 p-6">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">🔓 Station de Décryptage</h3>
              <div className="bg-black border border-cyan-400 rounded h-full p-4 relative overflow-hidden">
                {/* Effet de grille cyberpunk en arrière-plan */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `
                    linear-gradient(cyan 1px, transparent 1px),
                    linear-gradient(90deg, cyan 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
                
                {/* Interface de décryptage graphique */}
                <div className="space-y-4 relative z-10">
                  {/* Écran principal avec style Friendzone - Adaptatif */}
                  <div className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 rounded-lg p-4 shadow-lg ${
                    missionStatus === 'success' ? 'border-green-400' : 
                    missionStatus === 'failed' ? 'border-red-400' : 
                    'border-cyan-400'
                  }`} style={{
                    boxShadow: missionStatus === 'success' ? '0 0 20px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.1)' :
                               missionStatus === 'failed' ? '0 0 20px rgba(239, 68, 68, 0.3), inset 0 0 20px rgba(239, 68, 68, 0.1)' :
                               '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)'
                  }}>
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                      <div className={`font-mono text-sm ${
                        missionStatus === 'success' ? 'text-green-400' : 
                        missionStatus === 'failed' ? 'text-red-400' : 
                        'text-cyan-400'
                      }`}>
                        {missionStatus === 'success' ? '✅ MISSION ACCOMPLIE' : 
                         missionStatus === 'failed' ? '❌ MISSION ÉCHOUÉE' : 
                         'SYSTÈME DE DÉCRYPTAGE'}
                      </div>
                    </div>
                    
                    {/* Codes avec style graphique - Adaptatif */}
                    <div className="space-y-2">
                      <div className={`flex items-center justify-between bg-gray-800 rounded p-2 border ${
                        missionStatus === 'success' ? 'border-green-400 bg-green-900/20' :
                        missionStatus === 'failed' ? 'border-red-400 bg-red-900/20' :
                        'border-green-400'
                      }`}>
                        <span className="text-yellow-400 font-mono">Code 42</span>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            missionStatus === 'success' ? 'bg-green-400 animate-pulse' :
                            missionStatus === 'failed' ? 'bg-red-400 animate-pulse' :
                            'bg-green-400 animate-pulse'
                          }`}></div>
                          <span className={`text-sm ${
                            missionStatus === 'success' ? 'text-green-400' :
                            missionStatus === 'failed' ? 'text-red-400' :
                            'text-green-400'
                          }`}>PAIR - Accès normal</span>
                        </div>
                      </div>
                      
                      <div className={`flex items-center justify-between bg-gray-800 rounded p-2 border ${
                        missionStatus === 'success' ? 'border-red-400 bg-red-900/20' :
                        missionStatus === 'failed' ? 'border-red-400 bg-red-900/20' :
                        'border-red-400'
                      }`}>
                        <span className="text-yellow-400 font-mono">Code 17</span>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            missionStatus === 'success' ? 'bg-red-400 animate-pulse' :
                            missionStatus === 'failed' ? 'bg-red-400 animate-pulse' :
                            'bg-red-400 animate-pulse'
                          }`}></div>
                          <span className={`text-sm ${
                            missionStatus === 'success' ? 'text-red-400' :
                            missionStatus === 'failed' ? 'text-red-400' :
                            'text-red-400'
                          }`}>IMPAIR - Accès restreint</span>
                        </div>
                      </div>
                      
                      <div className={`flex items-center justify-between bg-gray-800 rounded p-2 border ${
                        missionStatus === 'success' ? 'border-green-400 bg-green-900/20' :
                        missionStatus === 'failed' ? 'border-red-400 bg-red-900/20' :
                        'border-green-400'
                      }`}>
                        <span className="text-yellow-400 font-mono">Code 100</span>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            missionStatus === 'success' ? 'bg-green-400 animate-pulse' :
                            missionStatus === 'failed' ? 'bg-red-400 animate-pulse' :
                            'bg-green-400 animate-pulse'
                          }`}></div>
                          <span className={`text-sm ${
                            missionStatus === 'success' ? 'text-green-400' :
                            missionStatus === 'failed' ? 'text-red-400' :
                            'text-green-400'
                          }`}>PAIR - Accès normal</span>
                        </div>
                      </div>
                      
                      <div className={`flex items-center justify-between bg-gray-800 rounded p-2 border ${
                        missionStatus === 'success' ? 'border-red-400 bg-red-900/20' :
                        missionStatus === 'failed' ? 'border-red-400 bg-red-900/20' :
                        'border-red-400'
                      }`}>
                        <span className="text-yellow-400 font-mono">Code 73</span>
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            missionStatus === 'success' ? 'bg-red-400 animate-pulse' :
                            missionStatus === 'failed' ? 'bg-red-400 animate-pulse' :
                            'bg-red-400 animate-pulse'
                          }`}></div>
                          <span className={`text-sm ${
                            missionStatus === 'success' ? 'text-red-400' :
                            missionStatus === 'failed' ? 'text-red-400' :
                            'text-red-400'
                          }`}>IMPAIR - Accès restreint</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Panneau de contrôle graphique - Adaptatif */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 rounded-lg p-3 shadow-lg ${
                      missionStatus === 'success' ? 'border-green-400' :
                      missionStatus === 'failed' ? 'border-red-400' :
                      'border-cyan-400'
                    }`} style={{
                      boxShadow: missionStatus === 'success' ? '0 0 15px rgba(34, 197, 94, 0.2)' :
                                 missionStatus === 'failed' ? '0 0 15px rgba(239, 68, 68, 0.2)' :
                                 '0 0 15px rgba(0, 255, 255, 0.2)'
                    }}>
                      <div className="flex items-center mb-2">
                        <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                          missionStatus === 'success' ? 'bg-green-400' :
                          missionStatus === 'failed' ? 'bg-red-400' :
                          'bg-green-400'
                        }`}></div>
                        <div className={`text-xs font-mono ${
                          missionStatus === 'success' ? 'text-green-400' :
                          missionStatus === 'failed' ? 'text-red-400' :
                          'text-cyan-400'
                        }`}>STATUS</div>
                      </div>
                      <div className={`text-sm font-bold ${
                        missionStatus === 'success' ? 'text-green-400' :
                        missionStatus === 'failed' ? 'text-red-400' :
                        'text-green-400'
                      }`}>
                        {missionStatus === 'success' ? 'Mission réussie' :
                         missionStatus === 'failed' ? 'Mission échouée' :
                         'Système actif'}
                      </div>
                    </div>
                    
                    <div className={`bg-gradient-to-br from-gray-900 to-gray-800 border-2 rounded-lg p-3 shadow-lg ${
                      missionStatus === 'success' ? 'border-green-400' :
                      missionStatus === 'failed' ? 'border-red-400' :
                      'border-yellow-400'
                    }`} style={{
                      boxShadow: missionStatus === 'success' ? '0 0 15px rgba(34, 197, 94, 0.2)' :
                                 missionStatus === 'failed' ? '0 0 15px rgba(239, 68, 68, 0.2)' :
                                 '0 0 15px rgba(255, 255, 0, 0.2)'
                    }}>
                      <div className="flex items-center mb-2">
                        <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                          missionStatus === 'success' ? 'bg-green-400' :
                          missionStatus === 'failed' ? 'bg-red-400' :
                          'bg-yellow-400'
                        }`}></div>
                        <div className={`text-xs font-mono ${
                          missionStatus === 'success' ? 'text-green-400' :
                          missionStatus === 'failed' ? 'text-red-400' :
                          'text-yellow-400'
                        }`}>CODES</div>
                      </div>
                      <div className={`text-sm font-bold ${
                        missionStatus === 'success' ? 'text-green-400' :
                        missionStatus === 'failed' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        {missionStatus === 'success' ? '4 décryptés ✅' :
                         missionStatus === 'failed' ? '4 échoués ❌' :
                         '4 analysés'}
                      </div>
                    </div>
                  </div>

                  {/* Animation de décryptage graphique */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-purple-400 rounded-lg p-4 shadow-lg" style={{
                    boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)'
                  }}>
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                      <div className="text-purple-400 text-sm font-mono">DÉCRYPTAGE EN COURS...</div>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                    </div>
                  </div>

                  {/* Instructions de mission avec style graphique */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-orange-400 rounded-lg p-4 shadow-lg" style={{
                    boxShadow: '0 0 15px rgba(255, 165, 0, 0.2)'
                  }}>
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></div>
                      <div className="text-orange-400 text-sm font-mono font-bold">MISSION</div>
                    </div>
                    <div className="text-gray-300 text-sm leading-relaxed">
                      🎯 <span className="text-orange-300 font-semibold">Objectif:</span> Décryptez les codes des machines pour infiltrer leurs installations.<br/>
                      🔑 <span className="text-cyan-300 font-semibold">Règle:</span> Codes pairs = Accès normal, Codes impairs = Accès restreint
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}