import { motion } from 'motion/react';

export function Header() {
  return (
    <nav className="flex items-center justify-between px-6 lg:px-10 h-20 bg-white border-b border-slate-200 shrink-0 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-200">
          <span className="text-white font-black italic text-xl">B!</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-slate-800 uppercase">Pascual <span className="text-red-600">Cooperativa</span></span>
      </div>
      <div className="hidden lg:flex items-center gap-8 font-semibold text-slate-600 text-sm">
        <a href="#catalogo" className="hover:text-red-600 transition-colors">Nuestros Sabores</a>
        <a href="#b2b-portal" className="hover:text-red-600 transition-colors">Portal Mayorista</a>
        <a href="#legado" className="hover:text-red-600 transition-colors">Legado Social</a>
        <a href="#b2b-portal" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
          Surtir mi Negocio
        </a>
      </div>
    </nav>
  );
}
