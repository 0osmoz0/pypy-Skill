"use client";

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token');
      const email = searchParams.get('email');

      if (!token || !email) {
        setStatus('error');
        setMessage('Lien de vérification invalide');
        return;
      }

      try {
        const response = await fetch(`/api/auth/verify-email?token=${token}&email=${email}`);
        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage(data.message);
          // Rediriger vers la page de connexion après 3 secondes
          setTimeout(() => {
            router.push('/login');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(data.error);
        }
      } catch (error) {
        setStatus('error');
        setMessage('Erreur lors de la vérification');
      }
    };

    verifyEmail();
  }, [searchParams, router]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* Effet de fond avec étoiles */}
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

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-3xl font-black text-white mb-2 tracking-wider uppercase"
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
                  letterSpacing: '0.2em',
                }}>
              PYPYSKILL
            </h1>
          </div>

          {/* Status */}
          <div className="mb-6">
            {status === 'loading' && (
              <>
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-white text-lg">Vérification en cours...</p>
              </>
            )}
            
            {status === 'success' && (
              <>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-green-400 text-lg font-semibold mb-2">Email vérifié !</p>
                <p className="text-gray-300 text-sm">Redirection vers la page de connexion...</p>
              </>
            )}
            
            {status === 'error' && (
              <>
                <div className="w-16 h-16 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-red-400 text-lg font-semibold mb-2">Erreur de vérification</p>
                <p className="text-gray-300 text-sm">{message}</p>
              </>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Link 
              href="/login" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Aller à la connexion
            </Link>
            
            <div>
              <Link 
                href="/" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
