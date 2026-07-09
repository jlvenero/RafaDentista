import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Heart, 
  MessageCircle, 
  ArrowUpRight,
  Scan,
  Cpu,
  ShieldCheck,
  Sparkles,
  GripVertical,
  Star,
  Clock,
  ChevronDown,
  ArrowRight,
  AtSign,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
// Adicionamos ": Variants" para o TypeScript entender o tipo exato
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const tratamentosData = [
  {
    id: 1,
    categoria: "Especialidade",
    titulo: "Implantes Dentários",
    descricao: "Reabilitação completa com implantes de última geração, planejamento digital 3D e cirurgia guiada para resultados precisos e duradouros.",
    imagem: "/tratamento-1.jpg"
  },
  {
    id: 2,
    categoria: "Estética",
    titulo: "Lentes de Contato Dental",
    descricao: "Facetas ultrafinas em porcelana que transformam a harmonia do sorriso com mínimo desgaste dental e resultado natural.",
    imagem: "/tratamento-2.jpg"
  },
  {
    id: 3,
    categoria: "Design",
    titulo: "Harmonização do Sorriso",
    descricao: "Design de sorriso personalizado integrando clareamento, contorno gengival e restaurações para um resultado que respeita sua identidade.",
    imagem: "/tratamento-3.jpg"
  }
];

const diferenciaisData = [
  {
    id: 1,
    titulo: "Planejamento Digital 3D",
    descricao: "Escaneamento intraoral de alta precisão e simulação virtual do resultado antes do procedimento.",
    icon: Scan,
  },
  {
    id: 2,
    titulo: "Tecnologia de Ponta",
    descricao: "Equipamentos de última geração incluindo CBCT, scanner digital e sistemas CAD/CAM para máxima precisão.",
    icon: Cpu,
  },
  {
    id: 3,
    titulo: "Materiais Premium",
    descricao: "Utilizamos exclusivamente porcelanas e implantes de marcas mundialmente reconhecidas e certificadas.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    titulo: "Visão Artística",
    descricao: "Cada caso é tratado como uma obra única, respeitando a harmonia facial e a individualidade do paciente.",
    icon: Sparkles,
  }
];

const depoimentosData = [
  {
    id: 1,
    texto: "\"Eu tinha vergonha de sorrir em fotos. Depois do tratamento com o Dr. Rafael, não consigo parar de sorrir. A naturalidade do resultado me surpreendeu — ninguém percebe que fiz algo, só elogiam meu sorriso.\"",
    iniciais: "CM",
    nome: "Carolina M.",
    tratamento: "Lentes de Contato"
  },
  {
    id: 2,
    texto: "\"Passei anos evitando certos alimentos e situações sociais. O Dr. Rafael devolveu não só meus dentes, mas minha confiança. O planejamento digital me mostrou o resultado antes mesmo de começar.\"",
    iniciais: "MA",
    nome: "Marcos A.",
    tratamento: "Implantes"
  },
  {
    id: 3,
    texto: "\"A experiência toda foi surpreendente — desde o primeiro atendimento até o resultado final. O cuidado com cada detalhe e a atenção genuína do Dr. Rafael fazem toda a diferença.\"",
    iniciais: "JR",
    nome: "Juliana R.",
    tratamento: "Harmonização do Sorriso"
  }
];

const processoData = [
  {
    id: 1,
    step: "01",
    badge: "Diagnóstico",
    tempo: "60 min",
    titulo: "Primeira Consulta",
    descricao: "Conversa detalhada sobre seus desejos e expectativas, exame clínico completo e escaneamento digital 3D."
  },
  {
    id: 2,
    step: "02",
    badge: "Projeto",
    tempo: "7 dias",
    titulo: "Planejamento Digital",
    descricao: "Simulação virtual do resultado final usando tecnologia CAD/CAM. Você visualiza seu novo sorriso antes de iniciar."
  },
  {
    id: 3,
    step: "03",
    badge: "Execução",
    tempo: "1-3h",
    titulo: "Procedimento",
    descricao: "Execução com precisão milimétrica, em ambiente confortável e seguro, seguindo o plano aprovado por você."
  },
  {
    id: 4,
    step: "04",
    badge: "Cuidado",
    tempo: "6 meses",
    titulo: "Acompanhamento",
    descricao: "Retornos programados para garantir a perfeita integração e longevidade do resultado. Suporte contínuo."
  }
];

const faqData = [
  { 
    id: 1, 
    pergunta: "Quanto tempo dura um implante dentário?", 
    resposta: "Com os devidos cuidados e higiene adequada, um implante dentário pode durar décadas ou até mesmo a vida toda. Utilizamos materiais premium em titânio que se integram perfeitamente ao osso." 
  },
  { 
    id: 2, 
    pergunta: "As lentes de contato dental parecem naturais?", 
    resposta: "Sim. Nossas lentes são desenhadas digitalmente e confeccionadas em porcelana ultrafina, reproduzindo a textura, translucidez e cor natural dos seus dentes originais, respeitando a sua harmonia facial." 
  },
  { 
    id: 3, 
    pergunta: "O procedimento de implante é doloroso?", 
    resposta: "Não. O procedimento é realizado com anestesia local e técnicas minimamente invasivas. O pós-operatório é geralmente muito tranquilo e controlado com medicações simples recomendadas em consultório." 
  },
  { 
    id: 4, 
    pergunta: "Qual o investimento para um tratamento estético?", 
    resposta: "O valor varia de acordo com a complexidade de cada caso e os materiais escolhidos. Durante a sua primeira consulta de diagnóstico, faremos um planejamento detalhado e apresentaremos todas as opções de investimento de forma transparente." 
  },
  { 
    id: 5, 
    pergunta: "Quanto tempo leva para finalizar um tratamento de lentes?", 
    resposta: "Geralmente, o tratamento completo é realizado em 2 a 3 sessões após a aprovação do planejamento digital. Em média, leva de 10 a 15 dias entre a preparação inicial e a cimentação final das lentes." 
  },
  { 
    id: 6, 
    pergunta: "Como funciona a primeira consulta?", 
    resposta: "A primeira consulta foca no diagnóstico profundo. Conversaremos detalhadamente sobre suas expectativas, realizaremos exames clínicos, fotografias e o escaneamento intraoral para dar início ao seu planejamento digital." 
  }
];

export default function LandingPage() {
  const [sliderPos, setSliderPos] = useState(50);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-accent selection:text-white">
      {/* --- NAVBAR --- */}
      <header className="sticky top-0 z-50 bg-brand-light/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-serif">
            Dr. Rafael <span className="text-brand-accent">Monteiro</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-brand-muted">
            {['Início', 'Sobre', 'Tratamentos', 'Resultados', 'Depoimentos', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-dark transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <button className="hidden md:block bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Agendar Consulta
          </button>
        </div>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-xl"
            >
              <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                Estética & Implantodontia
              </motion.span>
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif leading-tight mb-6">
                A Arte da <br />
                <span className="font-script text-6xl md:text-8xl lowercase -ml-2">Silhueta</span> <br />
                Perfeita
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-brand-muted text-lg leading-relaxed mb-10">
                Transformando sorrisos com precisão cirúrgica e sensibilidade artística. 
                Cada detalhe é pensado para revelar a sua melhor versão.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-dark text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
                  Agendar Consulta
                </button>
                <button className="bg-transparent border border-gray-300 text-brand-dark px-8 py-3.5 rounded-full text-sm font-medium hover:border-brand-dark transition-all">
                  Conheça o Dr. Rafael
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-[600px] w-full rounded-3xl overflow-hidden"
            >
              {/* Substitua o src pela sua foto do Dr. Rafael */}
              <img
                src="/caminho-para-foto-do-doutor.jpg"
                alt="Dr. Rafael Monteiro"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
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
                  src="/caminho-para-foto-do-consultorio.jpg"
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

        {/* --- TRATAMENTOS SECTION --- */}
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

        {/* --- DIFERENCIAIS SECTION --- */}
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

        {/* --- RESULTADOS SECTION --- */}
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
                src="/resultado-depois.jpg"
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
                  src="/resultado-antes.jpg"
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

        {/* --- DEPOIMENTOS SECTION --- */}
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

        {/* --- PROCESSO (TIMELINE) SECTION --- */}
        <section id="processo" className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Cabeçalho da Seção */}
            <div className="text-center mb-20">
              <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                Processo
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif leading-tight text-brand-dark">
                A cronologia do <span className="font-script text-5xl md:text-6xl lowercase">cuidado</span>
              </motion.h2>
            </div>

            {/* Container da Timeline */}
            <div className="relative max-w-4xl mx-auto">
              
              {/* Linha Central (Desktop) / Lateral (Mobile) */}
              <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 w-[1px] bg-brand-accent/30 md:-translate-x-1/2"></div>

              {processoData.map((item, index) => {
                const isEven = index % 2 === 0; // Define se o item fica na esquerda ou direita no Desktop

                return (
                  <motion.div
                    key={item.id}
                    variants={fadeInUp}
                    className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 last:mb-0 pl-16 md:pl-0`}
                  >
                    {/* Círculo do meio da timeline */}
                    <div className="absolute left-[17px] md:left-1/2 md:-translate-x-1/2 w-[13px] h-[13px] rounded-full border-[2px] border-brand-accent bg-brand-light z-10 top-2 md:top-auto"></div>

                    {/* Lado Esquerdo do item (Vazio se for ímpar no desktop) */}
                    <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:hidden'}`}>
                      {isEven && (
                        <div className="hidden md:block">
                          <div className="flex items-center justify-end gap-4 mb-4">
                            <span className="text-3xl text-gray-200 font-serif">{item.step}</span>
                            <span className="border border-brand-accent/50 rounded-full px-3 py-1 text-[10px] tracking-widest uppercase text-brand-accent">
                              {item.badge}
                            </span>
                            <div className="flex items-center gap-1.5 text-xs text-brand-muted">
                              <Clock className="w-3.5 h-3.5" />
                              {item.tempo}
                            </div>
                          </div>
                          <h3 className="text-2xl font-serif font-semibold text-brand-dark mb-3">{item.titulo}</h3>
                          <p className="text-sm text-brand-muted leading-relaxed">{item.descricao}</p>
                        </div>
                      )}
                    </div>

                    {/* Lado Direito do item (Vazio se for par no desktop) */}
                    <div className={`w-full md:w-[45%] ${!isEven ? 'md:text-left' : ''}`}>
                      {/* Este bloco renderiza sempre no Mobile, e apenas nos ímpares no Desktop */}
                      <div className={isEven ? 'md:hidden' : ''}>
                        <div className="flex items-center justify-start gap-4 mb-4">
                          <span className="text-3xl text-gray-200 font-serif">{item.step}</span>
                          <span className="border border-brand-accent/50 rounded-full px-3 py-1 text-[10px] tracking-widest uppercase text-brand-accent">
                            {item.badge}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-brand-muted">
                            <Clock className="w-3.5 h-3.5" />
                            {item.tempo}
                          </div>
                        </div>
                        <h3 className="text-2xl font-serif font-semibold text-brand-dark mb-3">{item.titulo}</h3>
                        <p className="text-sm text-brand-muted leading-relaxed">{item.descricao}</p>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faq" className="max-w-4xl mx-auto px-6 py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Cabeçalho da Seção */}
            <div className="text-center mb-16">
              <motion.span variants={fadeInUp} className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
                Dúvidas Frequentes
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif leading-tight text-brand-dark">
                Transparência em cada <span className="font-script text-5xl md:text-6xl lowercase">resposta</span>
              </motion.h2>
            </div>

            {/* Lista de Perguntas */}
            <div className="space-y-4">
              {faqData.map((faq) => {
                const isOpen = openFaq === faq.id;

                return (
                  <motion.div 
                    key={faq.id}
                    variants={fadeInUp}
                    className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] transition-colors hover:border-gray-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between gap-6"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-brand-dark text-[17px] md:text-lg">
                        {faq.pergunta}
                      </span>
                      <ChevronDown 
                        className={`w-5 h-5 text-brand-muted transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
                      />
                    </button>

                    {/* Área de conteúdo expansível com AnimatePresence para transição suave */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-8 pb-6 text-brand-muted text-sm leading-relaxed border-t border-gray-50/50 pt-4">
                            {faq.resposta}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
      {/* --- CTA (CALL TO ACTION) SECTION --- */}
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
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#f5f5f5] pt-20 pb-10 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            
            {/* Coluna 1: Marca */}
            <div>
              <div className="text-xl font-serif mb-6 text-brand-dark">
                Dr. Rafael <span className="text-brand-accent">Monteiro</span>
              </div>
              <p className="text-brand-muted text-sm mb-6 leading-relaxed">
                Cirurgião-Dentista · CRO-SP 123456<br />
                Especialista em Implantodontia e Estética Dental
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-accent transition-colors text-sm font-medium">
                <AtSign className="w-4 h-4" />
                @dr.rafaelmonteiro
              </a>
            </div>

            {/* Coluna 2: Contato */}
            <div>
              <h4 className="font-serif font-semibold text-brand-dark mb-6">Contato</h4>
              <ul className="space-y-4 text-sm text-brand-muted">
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-brand-dark transition-colors">
                    <Phone className="w-4 h-4 text-brand-accent" />
                    (11) 99999-9999
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 hover:text-brand-dark transition-colors">
                    <Mail className="w-4 h-4 text-brand-accent" />
                    contato@drrafaelmonteiro.com.br
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>
                    Av. Paulista, 1000 — Sala 1201<br />
                    São Paulo, SP
                  </span>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Navegação */}
            <div>
              <h4 className="font-serif font-semibold text-brand-dark mb-6">Navegação</h4>
              <ul className="space-y-4 text-sm text-brand-muted flex flex-col">
                {['Sobre', 'Tratamentos', 'Resultados', 'Depoimentos', 'FAQ'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-dark transition-colors w-fit">
                    {item}
                  </a>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <p>© 2026 Dr. Rafael Monteiro. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-800 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gray-800 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-brand-dark text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform z-50 flex items-center justify-center"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-green-400" />
      </a>
    </div>
  );
}