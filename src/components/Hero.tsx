import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Technologie IR de pointe
          </div>
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 text-gradient">
            L'éclairage qui s'adapte à votre regard.
          </h1>
          <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
            Iris utilise un capteur infrarouge intelligent pour mesurer votre fatigue oculaire en temps réel et ajuster la lumière automatiquement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#product" className="btn-primary flex items-center justify-center gap-2">
              Acheter maintenant <ChevronRight size={18} />
            </a>
            <a href="#tech" className="btn-secondary flex items-center justify-center">
              Découvrir la technologie
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
            <img 
              src="https://picsum.photos/seed/iris-product/1200/800" 
              alt="Iris Screenbar Premium" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 glass p-4 rounded-xl animate-bounce-slow">
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Fatigue</div>
            <div className="text-2xl font-display font-bold text-blue-400">-42%</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
