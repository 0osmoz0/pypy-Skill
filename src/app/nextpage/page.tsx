
import Link from 'next/link';

export default function NextPage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white p-8 overflow-hidden">
      {/* Effet de fond cosmique */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center animate-fade-in">
        <h1 className="text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-text-gradient">
          🌌 VOYAGE COSMIQUE 🌌
        </h1>
        <p className="text-xl mb-8 max-w-2xl opacity-90 animate-slide-up">
          Vous avez voyagé à travers l'espace-temps ! Le zoom cosmique vous a transporté 
          dans une nouvelle dimension. Préparez-vous à explorer l'infini de l'univers !
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <button className="bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
              🚀 Retour à la Planète
            </button>
          </Link>
          <button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg">
            ✨ Explorer l'Univers
          </button>
        </div>
      </div>
    </div>
  );
}
