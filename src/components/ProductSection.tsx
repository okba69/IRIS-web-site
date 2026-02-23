import { useState } from 'react';
import { motion } from 'motion/react';
import { Shield, Truck, RotateCcw, Check } from 'lucide-react';

interface ProductSectionProps {
  onAddToCart: (product: any) => void;
}

export default function ProductSection({ onAddToCart }: ProductSectionProps) {
  const [selectedColor, setSelectedColor] = useState('Noir Sidéral');
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: 'Noir Sidéral', class: 'bg-zinc-900' },
    { name: 'Argent', class: 'bg-zinc-400' }
  ];

  const handleAdd = () => {
    onAddToCart({
      id: 'iris-screenbar',
      name: 'Iris Screenbar Premium',
      price: 189,
      color: selectedColor,
      quantity
    });
  };

  return (
    <section id="product" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-black aspect-square">
              <img 
                src="https://picsum.photos/seed/iris-main/1000/1000" 
                alt="Iris Screenbar" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-white/10 bg-black aspect-square cursor-pointer hover:border-white/30 transition-colors">
                  <img 
                    src={`https://picsum.photos/seed/iris-thumb-${i}/300/300`} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-5xl font-bold mb-4">Iris Screenbar Premium</h2>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-display font-bold">189,00 €</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20">
                Livraison offerte
              </span>
            </div>

            <div className="space-y-8 mb-10">
              <div>
                <label className="text-sm font-medium text-white/40 uppercase tracking-widest block mb-4">Couleur : {selectedColor}</label>
                <div className="flex gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${
                        selectedColor === color.name ? 'border-blue-500 scale-110' : 'border-transparent'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full ${color.class}`} />
                      {selectedColor === color.name && <Check size={14} className="absolute text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-white/40 uppercase tracking-widest block mb-4">Quantité</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-white/10 rounded-full px-4 py-2">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-8 flex items-center justify-center hover:text-blue-400">-</button>
                    <span className="w-12 text-center font-bold">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:text-blue-400">+</button>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={handleAdd}
              className="w-full btn-primary py-6 text-lg mb-8"
            >
              Ajouter au panier
            </button>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <Truck size={20} className="mx-auto mb-2 text-white/60" />
                <div className="text-[10px] uppercase font-bold text-white/40">Livraison</div>
                <div className="text-xs font-semibold">2-4 jours</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <RotateCcw size={20} className="mx-auto mb-2 text-white/60" />
                <div className="text-[10px] uppercase font-bold text-white/40">Garantie</div>
                <div className="text-xs font-semibold">30 jours</div>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <Shield size={20} className="mx-auto mb-2 text-white/60" />
                <div className="text-[10px] uppercase font-bold text-white/40">Sécurité</div>
                <div className="text-xs font-semibold">SSL 256-bit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
