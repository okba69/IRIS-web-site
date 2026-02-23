import { motion } from 'motion/react';
import { Eye, ShieldCheck, Zap } from 'lucide-react';

export default function TechSection() {
  return (
    <section id="tech" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technologie IR Intelligente</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Iris ne se contente pas d'éclairer. Il observe et réagit pour protéger votre capital vue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="https://picsum.photos/seed/tech-diagram/800/600" 
              alt="Schéma Capteur IR" 
              className="relative z-10 rounded-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
               <div className="w-24 h-24 rounded-full border-2 border-blue-500/50 animate-ping" />
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                <Eye className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Suivi Pupillaire</h3>
                <p className="text-white/50 leading-relaxed">
                  Notre capteur IR mesure la dilatation de votre pupille 60 fois par seconde pour détecter les premiers signes de fatigue.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                <ShieldCheck className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Zéro Réglage Manuel</h3>
                <p className="text-white/50 leading-relaxed">
                  L'intensité et la température de couleur s'ajustent dynamiquement. Vous n'avez plus jamais à toucher un bouton.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                <Zap className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Privacy by Design</h3>
                <p className="text-white/50 leading-relaxed">
                  Le traitement des données est 100% local. Aucune image n'est enregistrée ni transmise. Votre vie privée est sacrée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
