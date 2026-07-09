import { useState } from 'react';
import { motion } from 'motion/react';
import { ShoppingCart } from 'lucide-react';

type Category = 'Todos' | 'Jugos' | 'Refrescos' | 'Agua';

const products = [
  { id: 1, name: 'Boing! Mango 250ml', category: 'Jugos', format: 'Tetra Pak', color: 'bg-orange-200', image: '🥭' },
  { id: 2, name: 'Pato Pascual 600ml', category: 'Refrescos', format: 'PET', color: 'bg-red-200', image: '🦆' },
  { id: 3, name: 'Lulú Manzana Lata', category: 'Refrescos', format: 'Lata', color: 'bg-green-200', image: '🍎' },
  { id: 4, name: 'Boing! Guayaba 354ml', category: 'Jugos', format: 'Vidrio', color: 'bg-pink-200', image: '🍐' },
  { id: 5, name: 'Boing! Uva 1L', category: 'Jugos', format: 'Tetra Pak', color: 'bg-purple-200', image: '🍇' },
  { id: 6, name: 'Pascual Purificada 1L', category: 'Agua', format: 'PET', color: 'bg-blue-200', image: '💧' },
];

export function Catalog() {
  const [filter, setFilter] = useState<Category>('Todos');

  const filteredProducts = filter === 'Todos' ? products : products.filter(p => p.category === filter);

  return (
    <div id="catalogo" className="flex-1 bg-slate-50 rounded-3xl p-6 border border-slate-100 overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h3 className="font-bold text-slate-800 text-lg">Catálogo de Alta Conversión</h3>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar w-full sm:w-auto">
          {(['Todos', 'Jugos', 'Refrescos', 'Agua'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                filter === cat
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'bg-white text-slate-500 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            key={product.id}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow group"
          >
            <div className={`w-12 h-20 ${product.color} rounded-lg mb-3 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
              {product.image}
            </div>
            <p className="font-bold text-xs text-center text-slate-800 line-clamp-2 min-h-[2rem]">
              {product.name}
            </p>
            <button className="mt-3 text-[10px] bg-slate-900 text-white px-3 py-1 rounded-full hover:bg-slate-700 transition-colors w-full">
              + Cotizar
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
