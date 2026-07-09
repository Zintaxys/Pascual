export function Legacy() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, quiero cotizar un pedido para mi negocio/evento. ¿Me pueden dar más información?");
    window.open(`https://wa.me/525500000000?text=${message}`, '_blank');
  };

  return (
    <footer id="legado" className="flex flex-col md:flex-row items-center justify-between px-6 lg:px-10 py-6 md:h-20 bg-slate-100 shrink-0 border-t border-slate-200 gap-6 md:gap-0 mt-auto">
      <div className="flex gap-6 sm:gap-10 text-slate-500 text-center md:text-left">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-slate-800">+30 Millones</span>
          <span className="text-[10px] uppercase font-semibold">Familias Mexicanas</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-slate-800">100% Social</span>
          <span className="text-[10px] uppercase font-semibold">Empresa Cooperativa</span>
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-slate-800">32 Estados</span>
          <span className="text-[10px] uppercase font-semibold">Presencia Nacional</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-white border border-slate-200 px-4 py-2 rounded-full flex items-center gap-3 shadow-sm cursor-pointer hover:shadow-md hover:border-slate-300 transition-all"
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm font-bold text-slate-700">Ventas WhatsApp</span>
        </button>
      </div>
    </footer>
  );
}
