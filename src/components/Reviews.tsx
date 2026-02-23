import { Star, Filter, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Thomas R.",
    rating: 5,
    date: "Il y a 2 jours",
    content: "Depuis que j'utilise Iris, mes maux de tête en fin de journée ont totalement disparu. L'ajustement automatique est bluffant.",
    verified: true,
    image: "https://picsum.photos/seed/user1/100/100"
  },
  {
    id: 2,
    author: "Sarah M.",
    rating: 5,
    date: "Il y a 1 semaine",
    content: "Le design est magnifique. Il s'intègre parfaitement sur mon écran incurvé. Le mode lecture le soir est un pur bonheur.",
    verified: true,
    image: "https://picsum.photos/seed/user2/100/100"
  },
  {
    id: 3,
    author: "Marc L.",
    rating: 4,
    date: "Il y a 2 semaines",
    content: "Produit premium. On sent la qualité dès le déballage. Un peu cher mais l'investissement dans la santé des yeux en vaut la peine.",
    verified: true,
    image: "https://picsum.photos/seed/user3/100/100"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Avis de la communauté</h2>
            <div className="flex items-center gap-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-xl font-bold">4.9/5</span>
              <span className="text-white/40 text-sm">(Basé sur 1,240 avis)</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">
              <Filter size={16} /> Filtres
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">
              Plus récents
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.image} alt={review.author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold flex items-center gap-2">
                    {review.author}
                    {review.verified && <CheckCircle2 size={14} className="text-blue-400" />}
                  </div>
                  <div className="text-xs text-white/40">{review.date}</div>
                </div>
              </div>
              <div className="flex text-amber-400 mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-white/70 leading-relaxed flex-grow italic">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
