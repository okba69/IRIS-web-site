import { Moon, Sun, Focus } from 'lucide-react';

const benefits = [
  {
    icon: <Moon className="text-indigo-400" />,
    title: "Sommeil Préservé",
    description: "Réduction automatique de la lumière bleue le soir pour favoriser la production de mélatonine."
  },
  {
    icon: <Sun className="text-amber-400" />,
    title: "Zéro Reflet",
    description: "Conception optique asymétrique qui éclaire votre bureau sans jamais refléter sur l'écran."
  },
  {
    icon: <Focus className="text-emerald-400" />,
    title: "Focus Optimal",
    description: "Un éclairage uniforme qui réduit le contraste agressif entre l'écran et l'obscurité ambiante."
  }
];

export default function HealthSection() {
  return (
    <section id="health" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
