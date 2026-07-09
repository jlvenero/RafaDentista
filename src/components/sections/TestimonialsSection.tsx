import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { depoimentosData } from '../../constants/data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function TestimonialsSection() {
  return (

<section id="depoimentos" className="max-w-7xl mx-auto px-6 py-24 bg-brand-light">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Cabeçalho da Seção */}
            <div className="text-center mb-16">
              <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                Depoimentos
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif leading-tight text-brand-dark">
                Histórias de <span className="font-script text-5xl md:text-6xl lowercase">transformação</span>
              </motion.h2>
            </div>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {depoimentosData.map((depoimento) => (
                <motion.div
                  key={depoimento.id}
                  variants={fadeInUp}
                  className="bg-white p-10 rounded-3xl border border-gray-100/60 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] flex flex-col h-full"
                >
                  {/* Estrelas */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                    ))}
                  </div>

                  {/* Texto do Depoimento */}
                  <p className="text-brand-muted text-[15px] leading-relaxed italic mb-10 flex-grow">
                    {depoimento.texto}
                  </p>

                  {/* Perfil do Paciente */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-brand-light flex items-center justify-center text-brand-muted font-serif font-medium text-sm">
                      {depoimento.iniciais}
                    </div>
                    <div>
                      <h4 className="text-brand-dark font-serif font-semibold text-sm">
                        {depoimento.nome}
                      </h4>
                      <p className="text-brand-muted text-xs mt-0.5">
                        {depoimento.tratamento}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
  )
}