import { motion } from 'framer-motion';
import { diferenciaisData } from '../../constants/data';
import { fadeInUp, staggerContainer } from '../../utils/animations';


export function DifferentialsSection() {
  return (
<section id="diferenciais" className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Coluna da Esquerda (Texto) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
            >
              <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                Diferenciais
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif leading-tight mb-6 text-brand-dark">
                Por que <span className="font-script text-5xl md:text-6xl lowercase">escolher</span> o Dr. Rafael
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-brand-muted text-base leading-relaxed">
                Uma combinação rara de rigor científico, sensibilidade artística e tecnologia avançada para resultados que superam expectativas.
              </motion.p>
            </motion.div>

            {/* Coluna da Direita (Grid de Cards) */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {diferenciaisData.map((diferencial) => {
                const Icon = diferencial.icon;
                return (
                  <motion.div 
                    key={diferencial.id}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-3xl border border-gray-100/60 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center mb-6">
                      <Icon className="w-5 h-5 text-brand-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-semibold text-brand-dark mb-3">
                      {diferencial.titulo}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed">
                      {diferencial.descricao}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </section>
  )
}