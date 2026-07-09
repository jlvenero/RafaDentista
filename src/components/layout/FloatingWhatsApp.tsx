import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511999999999" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-brand-dark text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform z-50 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-green-400" />
    </a>
  );
}