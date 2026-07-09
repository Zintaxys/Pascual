import { Store, Truck, GlassWater, ChevronRight, Apple, Grape, Citrus } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative flex items-center px-6 lg:px-10 py-16 lg:py-24 bg-gradient-to-r from-orange-50 to-white overflow-hidden shrink-0">
      <div className="z-10 max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-3 py-1 mb-4 bg-orange-100 text-orange-700 text-xs font-bold uppercase rounded-full">
            100% Pulpa Natural Mexicana
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-4">
            Sabor natural que <br className="hidden sm:block" />
            <span className="text-orange-500 italic">genera ganancias.</span>
          </h1>
          <p className="text-slate-600 text-lg mb-6 leading-relaxed">
            Transforma la tradición mexicana y la frescura de nuestra pulpa natural en el motor de tu negocio. Conviértete en distribuidor o surte tu tiendita con los productos que México prefiere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="#b2b-portal"
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-xl shadow-red-200 hover:scale-105 transition-transform text-center flex items-center justify-center gap-2"
            >
              <Store className="w-5 h-5" />
              Surtir mi Negocio
            </a>
            <a
              href="#catalogo"
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-bold rounded-xl hover:bg-slate-50 transition-colors text-center"
            >
              Explorar Sabores
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative visual elements from the theme */}
      <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-1/2 items-center justify-center opacity-90 pointer-events-none">
        <div className="relative flex gap-4 rotate-6 transform scale-90 xl:scale-100">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="w-32 h-64 bg-orange-400 rounded-t-full border-4 border-white shadow-2xl relative"
          >
            <div className="absolute bottom-10 left-4 font-black text-white text-3xl opacity-30 uppercase rotate-90 origin-left">Boing</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
            className="w-32 h-72 bg-red-500 rounded-t-full border-4 border-white shadow-2xl mt-8 relative"
          >
            <div className="absolute bottom-10 left-4 font-black text-white text-3xl opacity-30 uppercase rotate-90 origin-left">Pato</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
            className="w-32 h-60 bg-green-500 rounded-t-full border-4 border-white shadow-2xl relative"
          >
            <div className="absolute bottom-10 left-4 font-black text-white text-3xl opacity-30 uppercase rotate-90 origin-left">Lulú</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
