import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Importamos os ícones do menu

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Controla o menu no celular

  // Extraímos os itens do menu para um array para facilitar a renderização nas duas versões (desktop e mobile)
  const navItems = ['Início', 'Sobre', 'Tratamentos', 'Resultados', 'Depoimentos', 'FAQ'];

  // Monitora o scroll da página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      // Se o menu mobile estiver aberto, forçamos o fundo sólido para o texto ficar legível
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-brand-light/95 backdrop-blur-md border-b border-gray-200/50 py-3 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-serif text-brand-dark relative z-50">
          Dr. Rafael <span className="text-brand-accent">Monteiro</span>
        </div>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-brand-dark">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-brand-accent transition-colors drop-shadow-sm"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Botão CTA Desktop */}
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center bg-brand-dark text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Agendar Consulta
        </a>

        {/* Botão Menu Hambúrguer (Mobile) */}
        <button 
          className="md:hidden relative z-50 text-brand-dark p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Alternar menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-brand-light shadow-lg transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] border-b border-gray-200/50 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-6 space-y-2">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              // Fecha o menu automaticamente quando o usuário clica em um link
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-lg font-medium text-brand-dark hover:text-brand-accent transition-colors py-3 border-b border-gray-200/50 last:border-none"
            >
              {item}
            </a>
          ))}
          
          {/* Botão CTA dentro do Menu Mobile */}
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 flex items-center justify-center bg-brand-dark text-white px-6 py-3.5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors w-full"
          >
            Agendar Consulta
          </a>
        </nav>
      </div>
    </header>
  );
}