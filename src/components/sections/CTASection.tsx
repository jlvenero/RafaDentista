import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function CTASection() {
  return (
<section className="w-full bg-[#111111] py-24 px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 block">
              Comece sua transformação
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-serif leading-tight text-white mb-8">
              O sorriso que você merece <br className="hidden md:block" />
              está a uma <span className="font-script text-5xl md:text-7xl lowercase">conversa</span> de <br className="hidden md:block" />
              distância
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Agende sua avaliação personalizada diretamente pelo WhatsApp. O primeiro passo é sempre uma conversa acolhedora e sem compromisso.
            </motion.p>
            <motion.a
              variants={fadeInUp}
              href="#"
              className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-4 rounded-full text-sm md:text-base font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Falar com o Dr. Rafael
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </section>
  )
}