import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function HeroSection() {
  return (
    <section id="início" className="relative w-full min-h-screen flex items-center pt-0">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
        
        {/* Coluna da Esquerda: Texto */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          // Adicionamos pt-32 aqui para o texto não ficar escondido atrás do Header
          className="max-w-xl z-10 pt-32 pb-20"
        >
          <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
            Estética & Implantodontia
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-brand-dark">
            A Arte da <br />
            <span className="font-script text-6xl md:text-8xl lowercase -ml-2">Silhueta</span> <br />
            Perfeita
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-brand-muted text-lg leading-relaxed mb-10">
            Transformando sorrisos com precisão cirúrgica e sensibilidade artística. 
            Cada detalhe é pensado para revelar a sua melhor versão.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511999999999"
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all flex items-center justify-center text-center"
            >
              Agendar Consulta
            </a>
            <a 
              href="#sobre"
              className="bg-transparent border border-gray-300 text-brand-dark px-8 py-3.5 rounded-full text-sm font-medium hover:border-brand-dark transition-all flex items-center justify-center text-center"
            >
              Conheça o Dr. Rafael
            </a>
          </motion.div>
        </motion.div>

        {/* Coluna da Direita: Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          // A altura 96vh faz a imagem pegar quase a tela toda. mt-4 dá o leve respiro no topo como no seu print.
          className="relative h-[60vh] md:h-[96vh] w-full rounded-[2rem] overflow-hidden md:mt-4"
        >
          <img
            src="/drRafa.jpg" // Lembre-se de usar o caminho correto da sua imagem
            alt="Dr. Rafael Monteiro"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </motion.div>

      </div>
    </section>
  );
}