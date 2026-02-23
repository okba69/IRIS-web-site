import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: any[];
  onRemove: (id: string) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onRemove }: CartDrawerProps) {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 200;
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-zinc-950 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} />
                <h2 className="text-xl font-bold">Votre Panier</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="p-6 bg-blue-500/5 border-b border-white/10">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/60">
                  {subtotal >= freeShippingThreshold 
                    ? "Livraison gratuite offerte !" 
                    : `Plus que ${(freeShippingThreshold - subtotal).toFixed(2)} € pour la livraison gratuite`}
                </span>
                <span className="font-bold">{progress.toFixed(0)}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-blue-500"
                />
              </div>
            </div>

            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <ShoppingBag size={48} className="mx-auto mb-4 text-white/10" />
                  <p className="text-white/40 italic">Votre panier est vide</p>
                </div>
              ) : (
                items.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-20 h-20 rounded-xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0">
                      <img src="https://picsum.photos/seed/iris-main/200/200" alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-sm">{item.name}</h3>
                        <button onClick={() => onRemove(item.id)} className="text-white/20 hover:text-red-400 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="text-xs text-white/40 mb-2">{item.color} • Qté: {item.quantity}</div>
                      <div className="font-bold">{item.price} €</div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-black/40">
                <div className="flex justify-between mb-2">
                  <span className="text-white/60">Sous-total</span>
                  <span className="font-bold">{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between mb-6">
                  <span className="text-white/60">Livraison</span>
                  <span className="text-emerald-400 font-medium">Gratuite</span>
                </div>
                <button className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                  Commander <ArrowRight size={18} />
                </button>
                <div className="mt-4 flex justify-center gap-4">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 opacity-50" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50" />
                   <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50" />
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
