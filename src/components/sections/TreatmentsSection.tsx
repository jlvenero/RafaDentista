import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { tratamentosData } from '../../constants/data';
import { fadeInUp, staggerContainer } from '../../utils/animations';


export function TreatmentsSection() {
  return (

<section id="tratamentos" className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Título da Seção */}
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif leading-tight mb-16 text-brand-dark">
              Cada procedimento é uma <br />
              <span className="font-script text-5xl md:text-6xl lowercase">escultura</span>
            </motion.h2>

            {/* Grid de Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tratamentosData.map((tratamento) => (
                <motion.div
                  key={tratamento.id}
                  variants={fadeInUp}
                  className="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 group"
                >
                  {/* Container da Imagem com overflow hidden para o efeito de hover */}
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={tratamento.imagem}
                      alt={tratamento.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  {/* Conteúdo do Card */}
                  <div className="p-8">
                    <span className="text-brand-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
                      {tratamento.categoria}
                    </span>
                    <h3 className="text-xl font-serif font-semibold text-brand-dark mb-4">
                      {tratamento.titulo}
                    </h3>
                    <p className="text-sm text-brand-muted leading-relaxed mb-8">
                      {tratamento.descricao}
                    </p>
                    
                    {/* Link "Saiba mais" com microinteração no ícone */}
                    <a href="#" className="inline-flex items-center text-xs font-semibold text-brand-dark hover:text-brand-accent transition-colors">
                      Saiba mais 
                      <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
  )
}