"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function FloatingWhatsApp() {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    const message = "Olá, Gabriela!\nVim pelo site e gostaria de entender melhor como funciona o seu acompanhamento.";
    const whatsappUrl = `https://wa.me/5532998161086?text=${encodeURIComponent(message)}`;
    
    toast({
      title: "Conectando ao WhatsApp...",
      description: "Carregando o chat seguro...",
    });
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Pulse Outer Effect in Green */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 scale-125 animate-ping pointer-events-none"></span>
      <span className="absolute inset-0 rounded-full bg-[#25D366]/10 scale-150 animate-pulse pointer-events-none"></span>

      {/* Elegant Tooltip */}
      <div className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#141312] border border-[#E6DFD3]/20 text-[#E6DFD3] text-[10px] tracking-widest uppercase py-2 px-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-0 -translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap">
        Fale comigo no WhatsApp
      </div>

      {/* Floating Button in WhatsApp Green */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Falar no WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_40px_rgba(37,211,102,0.3)] border border-[#25D366]/30 hover:scale-105 hover:bg-[#20ba59] active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
      </button>
    </div>
  );
}