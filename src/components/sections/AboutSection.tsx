import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';


export function AboutSection() {
  return (
<section id="sobre" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative p-4"
            >
              {/* Borda decorativa externa */}
              <div className="absolute inset-0 border border-gray-200 rounded-3xl -z-10 translate-x-4 -translate-y-4"></div>
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
                {/* Substitua o src pela foto do consultório */}
                <img
                  src="../../public/cadeiraClinica.jpg"
                  alt="Consultório Dr. Rafael Monteiro"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl"
            >
              <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                Sobre o Profissional
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif leading-tight mb-8">
                Onde a ciência encontra a <br />
                <span className="font-script text-5xl md:text-6xl lowercase">sensibilidade</span>
              </motion.h2>
              
              <motion.div variants={fadeInUp} className="space-y-6 text-brand-muted text-base leading-relaxed mb-12">
                <p>
                  Dr. Rafael Monteiro dedica sua carreira à interseção entre a precisão cirúrgica e a visão artística. Formado pela Universidade de São Paulo, com especializações em implantodontia e estética dental, ele acredita que cada sorriso é uma obra única — e merece ser tratado como tal.
                </p>
                <p>
                  Seu trabalho vai além da técnica: é sobre compreender a história de cada paciente, suas inseguranças e desejos, para desenhar um resultado que transcenda expectativas e restaure a confiança natural.
                </p>
              </motion.div>

              {/* Grid de Ícones */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <GraduationCap className="w-6 h-6 text-brand-accent mb-3" strokeWidth={1.5} />
                  <h3 className="font-serif font-semibold text-brand-dark mb-1">CRO-SP 123456</h3>
                  <p className="text-xs text-brand-muted">Universidade de São Paulo (USP)</p>
                </div>
                <div>
                  <Award className="w-6 h-6 text-brand-accent mb-3" strokeWidth={1.5} />
                  <h3 className="font-serif font-semibold text-brand-dark mb-1">Especialista</h3>
                  <p className="text-xs text-brand-muted">Implantodontia e Estética Dental</p>
                </div>
                <div>
                  <Heart className="w-6 h-6 text-brand-accent mb-3" strokeWidth={1.5} />
                  <h3 className="font-serif font-semibold text-brand-dark mb-1">+3.000 sorrisos</h3>
                  <p className="text-xs text-brand-muted">Transformados em 15 anos</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
  )
}