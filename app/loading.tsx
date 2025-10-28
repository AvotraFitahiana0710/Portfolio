export default function Loading() {
  return (
    <div className="font-sans bg-background text-foreground flex flex-col items-center justify-center h-screen bg-white">
      {/* Cercle animé */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin"></div>
      </div>

      {/* Texte animé */}
      <p className="mt-6 text-lg font-medium text-gray-700 animate-pulse">
        Chargement du portfolio...
      </p>
    </div>
  );
}
