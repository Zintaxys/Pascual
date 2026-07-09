import { useState } from 'react';
import { motion } from 'motion/react';

export function B2BPortal() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', businessType: '', phone: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias! Un asesor comercial se comunicará contigo.');
    setStep(1);
    setFormData({ name: '', businessType: '', phone: '' });
  };

  return (
    <div id="b2b-portal" className="w-full lg:w-[350px] bg-slate-900 rounded-3xl p-6 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center shrink-0">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-bl-full opacity-20 pointer-events-none"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">Cotización Mayorista</h3>
        <p className="text-slate-400 text-xs mb-6 italic">Precios de fábrica para tu negocio</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="space-y-4">
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Tipo de Negocio</label>
              <select 
                required
                value={formData.businessType}
                onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                className="w-full bg-slate-800 border-none rounded-lg p-3 text-sm text-white focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="" disabled>Selecciona una opción</option>
                <option value="tiendita">Tiendita de Abarrotes</option>
                <option value="distribuidor">Distribuidor Regional</option>
                <option value="eventos">Eventos Masivos</option>
              </select>
            </div>
            
            <div>
              <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Nombre Contacto</label>
              <input 
                type="text" required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-slate-800 border-none rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Ej: Juan Pérez"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1">WhatsApp / Contacto</label>
              <input 
                type="tel" required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-slate-800 border-none rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Ej: 55 1234 5678"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-xl text-sm transition-colors mt-2"
            >
              DAR DE ALTA MI NEGOCIO
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}
