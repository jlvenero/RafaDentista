import { useState } from 'react';
import { motion } from 'framer-motion';
import { GripVertical } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function ResultsSection() {
  const [sliderPos, setSliderPos] = useState(50); // Estado isolado!

  return (
    <section id="resultados" className="w-full bg-[#111111] py-24 px-6">
              <div className="max-w-5xl mx-auto">
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className="text-center mb-16"
                >
                  <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                    Resultados
                  </motion.span>
                  <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif leading-tight text-white">
                    A transformação fala por <span className="font-script text-5xl md:text-6xl lowercase">si mesma</span>
                  </motion.h2>
                </motion.div>
    
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[2/1] rounded-[2rem] overflow-hidden group select-none"
                >
                  {/* Imagem de Fundo (DEPOIS) */}
                  <img
                    src="/sorriB.png"
                    alt="Resultado Após Tratamento"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
    
                  {/* Imagem Sobreposta (ANTES) com Clip-path dinâmico */}
                  <div
                    className="absolute inset-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                  >
                    {/* Opcional: Adicione a classe 'grayscale' abaixo se quiser o antes em preto e branco como no design */}
                    <img
                      src="/sorriF.png"
                      alt="Condição Inicial"
                      className="absolute inset-0 w-full h-full object-cover object-center grayscale"
                    />
                  </div>
    
                  {/* Badges Indicativos */}
                  <div className="absolute top-6 left-6 bg-[#111111]/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest px-4 py-2 rounded-full z-10 pointer-events-none">
                    ANTES
                  </div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm text-[#111111] text-[10px] font-bold tracking-widest px-4 py-2 rounded-full z-10 pointer-events-none">
                    DEPOIS
                  </div>
    
                  {/* Linha Divisória e "Thumb" (Alça) */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
                    style={{ left: `calc(${sliderPos}% - 2px)` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-transform group-hover:scale-105">
                      <GripVertical className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
    
                  {/* Input Range Invisível (O verdadeiro controlador de arrastar) */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPos}
                    onChange={(e) => setSliderPos(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
                    aria-label="Controle de antes e depois"
                  />
                </motion.div>
                
                <p className="text-center text-gray-500 text-xs mt-6 tracking-wide">
                  Arraste o marcador para comparar · Caso clínico real com consentimento do paciente
                </p>
    
              </div>
            </section>
  );
}