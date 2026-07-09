import { AtSign, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
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
  );
}