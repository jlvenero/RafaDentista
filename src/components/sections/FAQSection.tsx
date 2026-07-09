import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../../constants/data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null); // Estado isolado!

  return (
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
  );
}