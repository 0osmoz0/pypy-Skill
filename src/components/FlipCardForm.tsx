"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function FlipCardForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');
    
    try {
      const result = await signIn('credentials', {
        email: loginData.email,
        password: loginData.password,
        redirect: false,
      });

      if (result?.error) {
        setError('Email ou mot de passe incorrect');
      } else if (result?.ok) {
        setMessage('Connexion réussie !');
        setTimeout(() => {
          router.push('/profile');
        }, 1000);
      }
    } catch (error) {
      setError('Erreur de connexion');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setMessage('');
    
    try {
      const response = await fetch('/api/auth/register-simple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Inscription réussie ! Vous pouvez maintenant vous connecter.');
        // Reset form
        setRegisterData({ name: '', email: '', password: '' });
        // Basculer vers le formulaire de connexion
        setTimeout(() => {
          setIsLogin(true);
        }, 2000);
      } else {
        setError(data.error || 'Erreur lors de l\'inscription');
      }
    } catch (error) {
      setError('Erreur de connexion');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string, isLoginForm: boolean) => {
    if (isLoginForm) {
      setLoginData(prev => ({ ...prev, [field]: value }));
    } else {
      setRegisterData(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* Effet de fond avec étoiles amélioré */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 200 }).map((_, i) => (
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

      {/* Nébuleuses et galaxies */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-3/4 left-1/6 w-72 h-72 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Particules flottantes */}
      {isClient && (
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              }}
            />
          ))}
        </div>
      )}

      {/* Grille cosmique */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-4 flex flex-col items-center justify-start pt-10">
        {/* Logo/Titre */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-white mb-2 tracking-wider uppercase"
              style={{
                textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
                letterSpacing: '0.2em',
                background: 'linear-gradient(45deg, #ffffff, #a0a0a0, #ffffff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'glow 2s ease-in-out infinite alternate'
              }}>
            PYPYSKILL
          </h1>
        </div>

        {/* Messages améliorés - Position fixes au-dessus */}
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

        {/* Flip Card Form */}
        <div className="wrapper">
          <div className="card-switch">
            <label className="switch">
              <input 
                className="toggle" 
                type="checkbox"
                checked={!isLogin}
                onChange={(e) => setIsLogin(!e.target.checked)}
              />
              <span className="slider"></span>
              <span className="card-side"></span>
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Connexion</div>
                  <form onSubmit={handleLoginSubmit} className="flip-card__form">
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Votre email" 
                        name="email" 
                        className="flip-card__input pl-12"
                        value={loginData.email}
                        onChange={(e) => handleInputChange('email', e.target.value, true)}
                        required
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <div className="relative">
                      <input 
                        type="password" 
                        placeholder="Votre mot de passe" 
                        name="password" 
                        className="flip-card__input pl-12"
                        value={loginData.password}
                        onChange={(e) => handleInputChange('password', e.target.value, true)}
                        required
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <button 
                      className="flip-card__btn" 
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Connexion...' : 'Se connecter'}
                    </button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <div className="title">Inscription</div>
                  <form onSubmit={handleRegisterSubmit} className="flip-card__form">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Votre pseudo" 
                        className="flip-card__input pl-12"
                        value={registerData.name}
                        onChange={(e) => handleInputChange('name', e.target.value, false)}
                        required
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Votre email" 
                        name="email" 
                        className="flip-card__input pl-12"
                        value={registerData.email}
                        onChange={(e) => handleInputChange('email', e.target.value, false)}
                        required
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <div className="relative">
                      <input 
                        type="password" 
                        placeholder="Votre mot de passe" 
                        name="password" 
                        className="flip-card__input pl-12"
                        value={registerData.password}
                        onChange={(e) => handleInputChange('password', e.target.value, false)}
                        required
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <button 
                      className="flip-card__btn" 
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Inscription...' : 'S\'inscrire'}
                    </button>
                  </form>
                </div>
              </div>
            </label>
          </div>   
        </div>

        {/* Retour à l'accueil */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
