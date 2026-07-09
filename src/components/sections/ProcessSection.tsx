import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processoData } from '../../constants/data';
import { fadeInUp } from '../../utils/animations';

export function ProcessSection() {
  // Referência para o container principal da timeline
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook do Framer Motion que monitora o scroll ESPECIFICAMENTE dentro deste container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] // Começa a preencher quando o topo bate no meio da tela, e termina quando o final bate no meio
  });

  // Transforma o progresso do scroll (0 a 1) em uma porcentagem de altura (0% a 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="processo" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Cronologia
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
            Sua Jornada Conosco
          </h2>
          <p className="text-brand-muted max-w-2xl mx-auto">
            Entenda o passo a passo do nosso atendimento, desde o primeiro contato até a entrega do seu novo sorriso.
          </p>
        </motion.div>

        {/* Container da Timeline */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          
          {/* 1. A Linha Fundo (Cinza clara) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 rounded-full"></div>
          
          {/* 2. A Linha Animada (Dourada/Amarela - acompanhando o scroll) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-brand-accent -translate-x-1/2 rounded-full origin-top"
          />

          {/* 3. Mapeamento das Etapas */}
          {processoData.map((etapa, index) => {
            // Verifica se o índice é par para jogar para a esquerda no Desktop
            const isLeft = index % 2 === 0;
            
            // CORREÇÃO AQUI: Extraímos o ícone para uma variável com letra maiúscula
            const Icon = etapa.icon;

            return (
              <div key={etapa.id} className="relative flex items-center w-full mb-16 md:mb-24 last:mb-0">
                
                {/* O Círculo Central com o Ícone */}
                <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-brand-accent flex items-center justify-center z-10 shadow-sm">
                  {/* AGORA USAMOS A VARIÁVEL COM LETRA MAIÚSCULA */}
                  <Icon className="w-5 h-5 text-brand-accent" />
                </div>

                {/* Container do Texto da Etapa */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`w-full pl-24 md:pl-0 md:w-[45%] ${
                    isLeft 
                      ? 'md:mr-auto md:pr-12 md:text-right' // Se for par, fica na esquerda, alinha texto a direita
                      : 'md:ml-auto md:pl-12 md:text-left'  // Se for impar, fica na direita, alinha texto a esquerda
                  }`}
                >
                  <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-5xl font-script text-gray-100 absolute -z-10 -mt-6">
                      0{index + 1}
                    </span>
                    <h3 className="text-2xl font-serif text-brand-dark mb-3">
                      {etapa.titulo}
                    </h3>
                    <p className="text-brand-muted leading-relaxed">
                      {etapa.descricao}
                    </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}