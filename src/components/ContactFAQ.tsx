import { useState } from 'react';
import { ChevronDown, ChevronUp, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "La caméra IR enregistre-t-elle des images ?",
    answer: "Non. Le capteur infrarouge ne capture pas d'images vidéo. Il mesure uniquement des points de données biométriques (dilatation pupillaire) qui sont traités instantanément par la puce locale d'Iris. Aucune donnée ne quitte l'appareil."
  },
  {
    question: "Est-ce compatible avec les écrans incurvés ?",
    answer: "Absolument. Iris a été conçu avec un système de fixation breveté qui s'adapte à toutes les épaisseurs d'écrans, y compris les modèles ultra-incurvés (jusqu'à 1000R)."
  },
  {
    question: "Quelle est la durée de vie des LEDs ?",
    answer: "Nos LEDs premium sont certifiées pour plus de 50 000 heures d'utilisation, soit environ 15 ans à raison de 8 heures par jour."
  },
  {
    question: "Puis-je l'utiliser sans le mode automatique ?",
    answer: "Oui, vous pouvez désactiver le capteur IR à tout moment via l'application Iris ou le bouton tactile sur le dessus de la barre pour passer en mode manuel."
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        {/* FAQ */}
        <div>
          <h2 className="text-4xl font-bold mb-12">Questions Fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/10 rounded-2xl overflow-hidden bg-white/5">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold">{faq.question}</span>
                  {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-white/50 leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass p-10 rounded-3xl">
          <h2 className="text-3xl font-bold mb-2">Besoin d'aide ?</h2>
          <p className="text-white/50 mb-8">Notre équipe technique vous répond en moins de 24h.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Nom</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" placeholder="Jean Dupont" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" placeholder="jean@exemple.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Sujet</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors appearance-none">
                <option className="bg-zinc-900">Question technique</option>
                <option className="bg-zinc-900">Suivi de commande</option>
                <option className="bg-zinc-900">Partenariat</option>
                <option className="bg-zinc-900">Autre</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/40 uppercase tracking-widest">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors resize-none" placeholder="Comment pouvons-nous vous aider ?" />
            </div>
            <button className="w-full btn-primary flex items-center justify-center gap-2">
              Envoyer le message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
