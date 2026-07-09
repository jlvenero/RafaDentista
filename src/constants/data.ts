// src/constants/data.ts
import { Scan, Cpu, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react'; // Importe o tipo!

// Crie a "forma" que cada etapa deve ter
type Processo = {
  id: number;
  step: string;
  badge: string;
  tempo: string;
  titulo: string;
  descricao: string;
  icon: LucideIcon; // Avisa o TS que isso é um ícone válido
};

export const tratamentosData = [
  {
    id: 1,
    categoria: "Especialidade",
    titulo: "Implantes Dentários",
    descricao: "Reabilitação completa com implantes de última geração...",
    imagem: "../../public/ImplanteDentario.jpg"
  },
  {
    id: 2,
    categoria: "Estética",
    titulo: "Lentes de Contato Dental",
    descricao: "Facetas ultrafinas em porcelana que transformam a harmonia do sorriso com mínimo desgaste dental e resultado natural.",
    imagem: "../../public/lenteDental.jpg"
  },
  {
    id: 3,
    categoria: "Design",
    titulo: "Harmonização do Sorriso",
    descricao: "Design de sorriso personalizado integrando clareamento, contorno gengival e restaurações para um resultado que respeita sua identidade.",
    imagem: "../../public/sorriso.jpg"
  }
  // ... copie o restante dos objetos do seu LandingPage.tsx original
];

export const diferenciaisData = [
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

export const depoimentosData = [
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

export const processoData: Processo[] = [
  {
    id: 1,
    step: "01",
    badge: "Diagnóstico",
    tempo: "60 min",
    titulo: "Primeira Consulta",
    descricao: "Conversa detalhada sobre seus desejos e expectativas, exame clínico completo e escaneamento digital 3D.",
    icon: Clock
  },
  {
    id: 2,
    step: "02",
    badge: "Projeto",
    tempo: "7 dias",
    titulo: "Planejamento Digital",
    descricao: "Simulação virtual do resultado final usando tecnologia CAD/CAM. Você visualiza seu novo sorriso antes de iniciar.",
    icon: Clock
  },
  {
    id: 3,
    step: "03",
    badge: "Execução",
    tempo: "1-3h",
    titulo: "Procedimento",
    descricao: "Execução com precisão milimétrica, em ambiente confortável e seguro, seguindo o plano aprovado por você.",
    icon: Clock
  },
  {
    id: 4,
    step: "04",
    badge: "Cuidado",
    tempo: "6 meses",
    titulo: "Acompanhamento",
    descricao: "Retornos programados para garantir a perfeita integração e longevidade do resultado. Suporte contínuo.",
    icon: Clock
  }
];

export const faqData = [
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