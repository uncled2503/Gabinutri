"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, MessageCircle, Heart, Star, MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Index() {
  const { toast } = useToast();

  const handleBooking = (type: string) => {
    const message = `Olá Gabriela! Vi seu site e gostaria de agendar uma consulta focada em ${type}.`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    toast({
      title: "Conectando ao WhatsApp...",
      description: `Preparando seu contato para: ${type}`,
    });
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#141312] text-[#E6DFD3] font-sans selection:bg-[#E6DFD3] selection:text-[#141312] antialiased">
      
      {/* GLOBAL FIXED HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#141312]/80 backdrop-blur-md border-b border-[#E6DFD3]/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg tracking-widest uppercase font-semibold text-[#E6DFD3]">
              Gabriela Siman
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-[#E6DFD3]/60">
            <button 
              onClick={() => scrollToSection("quem-sou")} 
              className="hover:text-[#E6DFD3] transition-colors"
            >
              Quem Sou Eu
            </button>
            <button 
              onClick={() => scrollToSection("comportamental")} 
              className="hover:text-[#E6DFD3] transition-colors"
            >
              Nutri Comportamental
            </button>
            <button 
              onClick={() => scrollToSection("terapeuta")} 
              className="hover:text-[#E6DFD3] transition-colors"
            >
              Terapeuta Alimentar
            </button>
            <button 
              onClick={() => scrollToSection("alem")} 
              className="hover:text-[#E6DFD3] transition-colors"
            >
              Muito Além da Alimentação
            </button>
          </nav>

          <button
            onClick={() => handleBooking("Contato Geral")}
            className="border border-[#E6DFD3]/20 hover:border-[#E6DFD3] hover:bg-[#E6DFD3] hover:text-[#141312] text-[#E6DFD3] text-[10px] uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300"
          >
            Falar no WhatsApp
          </button>
        </div>
      </header>

      {/* DECK WRAPPER */}
      <main className="pt-20">

        {/* SECTION 1: QUEM SOU EU? */}
        <section 
          id="quem-sou" 
          className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 px-6 sm:px-12 lg:px-24 border-b border-[#E6DFD3]/10 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs uppercase tracking-widest text-[#E6DFD3]/40">Gabriela Siman</span>
              
              <h1 className="font-sans font-black tracking-tighter text-[4.5rem] sm:text-[6.5rem] leading-none text-[#E6DFD3] uppercase">
                QUEM SOU EU?
              </h1>

              <div className="max-w-xl space-y-6 text-[#E6DFD3]/80 text-sm sm:text-base font-light leading-relaxed">
                <p className="font-semibold text-[#E6DFD3] text-lg">
                  Prazer, eu sou a Gabriela.
                </p>
                <p>
                  Para além da nutrição, sou apaixonada por um docinho e acho que quando o almoço tem tropeiro o dia fica automaticamente melhor.
                </p>
                <p>
                  Acredito que o alimento não deve ser visto apenas como calorias ou nutrientes, mas como afeto, emoção, memória e cuidado. Comida também é abraço, lembrança, acolhimento e conexão.
                </p>
                <p>
                  Foi através dessa visão mais humana da alimentação que me encontrei na nutrição comportamental e no cuidado com o próximo.
                </p>
                <p className="italic text-[#E6DFD3]/60 pt-2 border-t border-[#E6DFD3]/10">
                  Agora, vem conhecer um pouquinho do meu lado profissional.
                </p>
              </div>
            </div>

            {/* Right Buttons Container with the newly updated Gabi image as background card */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center gap-6 lg:pl-12">
              
              {/* Premium presentation of Gabi's cover frame */}
              <div className="w-full max-w-sm aspect-[1.78/1] rounded-2xl overflow-hidden border border-[#E6DFD3]/10 bg-stone-900 shadow-xl mb-4">
                <img 
                  src="/images/gabi-hero.png" 
                  alt="Gabriela Siman" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Pill button 1: Nutricionista Comportamental */}
              <button 
                onClick={() => scrollToSection("comportamental")}
                className="group relative w-full max-w-[320px] aspect-[2.6/1] rounded-full border border-[#E6DFD3]/30 hover:border-[#E6DFD3] flex items-center justify-center transition-all duration-300"
              >
                {/* Cyan indicator dot exactly as in screenshot */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#13C2C2] shadow-lg shadow-[#13C2C2]/50"></div>
                
                <span className="text-xs tracking-widest font-bold uppercase text-[#E6DFD3] text-center px-6 leading-relaxed">
                  Nutricionista<br/>Comportamental
                </span>
              </button>

              {/* Pill button 2: Terapeuta Alimentar */}
              <button 
                onClick={() => scrollToSection("terapeuta")}
                className="w-full max-w-[320px] aspect-[2.6/1] rounded-full bg-[#E6DFD3] hover:bg-[#F5EFE4] text-[#141312] flex items-center justify-center transition-all duration-300 shadow-xl"
              >
                <span className="text-xs tracking-widest font-bold uppercase text-center px-6 leading-relaxed">
                  Terapeuta<br/>Alimentar
                </span>
              </button>

              <div className="hidden lg:block pt-4 self-end text-right">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#E6DFD3]/30 font-semibold">
                  Nutricionista
                </span>
              </div>
            </div>

          </div>

          {/* Elegant Section Switcher Slide Arrow */}
          <div className="absolute bottom-10 right-12 hidden lg:flex items-center gap-4 text-[#E6DFD3]/40 hover:text-[#E6DFD3] cursor-pointer transition-colors" onClick={() => scrollToSection("comportamental")}>
            <span className="text-[10px] tracking-[0.25em] uppercase">Nutri Comportamental</span>
            <div className="w-16 h-[1px] bg-current relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border-t border-r border-current"></div>
            </div>
          </div>
        </section>


        {/* SECTION 2: NUTRI COMPORTAMENTAL */}
        <section 
          id="comportamental" 
          className="min-h-screen flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-24 border-b border-[#E6DFD3]/10 relative bg-[#1A1917]/30"
        >
          <div className="max-w-7xl mx-auto w-full space-y-12">
            
            {/* Header Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest text-[#E6DFD3]/40">Gabriela Siman</span>
                <h2 className="font-sans font-black tracking-tighter text-[4rem] sm:text-[6rem] leading-none text-[#E6DFD3] uppercase mt-2">
                  NUTRI<br/>COMPORTAMENTAL
                </h2>
              </div>
              
              {/* Photo Frame matching exactly the deck screenshot aspect ratio */}
              <div className="lg:col-span-5">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#E6DFD3]/10 bg-stone-900 shadow-2xl relative group">
                  <img 
                    src="/images/gabi-hero.png" 
                    alt="Nutricionista Comportamental" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Content columns matching the layout exactly */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E6DFD3]/10">
              
              {/* Col 1 */}
              <div className="space-y-4">
                <p className="text-[#E6DFD3]/80 text-sm leading-relaxed font-light">
                  Acredito que a alimentação vai muito além de dietas ou regras rígidas. Cada pessoa tem uma história com a comida, uma rotina, emoções e desafios diferentes.
                </p>
                <p className="text-[#E6DFD3]/80 text-sm leading-relaxed font-light">
                  No meu trabalho, busco olhar para tudo isso com cuidado e escuta. Meu objetivo é te ajudar a entender melhor seu corpo, sua fome e os sentimentos que muitas vezes se misturam com a alimentação.
                </p>
              </div>

              {/* Col 2 */}
              <div className="space-y-4">
                <p className="text-[#E6DFD3]/80 text-sm leading-relaxed font-light">
                  A partir disso, construímos juntos um caminho mais possível e gentil com você, com orientação nutricional, plano alimentar quando necessário e ferramentas da nutrição comportamental para tornar sua relação com a comida mais leve e consciente.
                </p>
              </div>

              {/* Col 3 & CTA */}
              <div className="space-y-6 flex flex-col justify-between">
                <p className="text-[#E6DFD3]/80 text-sm leading-relaxed font-light">
                  Se você sente que já tentou muitas dietas e quer construir uma relação mais leve com a comida, estou aqui para te ajudar. <span className="text-rose-400">♥</span>
                </p>

                <button 
                  onClick={() => handleBooking("Nutrição Comportamental")}
                  className="inline-flex items-center gap-3 text-sm font-semibold tracking-wider uppercase text-[#E6DFD3] hover:text-[#DECBB7] transition-colors pt-4 group border-b border-[#E6DFD3]/30 pb-1 w-fit"
                >
                  Agende sua consulta <span className="text-amber-300 animate-pulse">🌟</span>
                </button>
              </div>

            </div>

          </div>

          {/* Elegant Section Switcher Slide Arrow */}
          <div className="absolute bottom-10 right-12 hidden lg:flex items-center gap-4 text-[#E6DFD3]/40 hover:text-[#E6DFD3] cursor-pointer transition-colors" onClick={() => scrollToSection("terapeuta")}>
            <span className="text-[10px] tracking-[0.25em] uppercase">Terapeuta Alimentar</span>
            <div className="w-16 h-[1px] bg-current relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border-t border-r border-current"></div>
            </div>
          </div>
        </section>


        {/* SECTION 3: TERAPEUTA ALIMENTAR */}
        <section 
          id="terapeuta" 
          className="min-h-screen flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-24 border-b border-[#E6DFD3]/10 relative"
        >
          <div className="max-w-7xl mx-auto w-full space-y-12">
            
            {/* Header Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest text-[#E6DFD3]/40">Gabriela Siman</span>
                <h2 className="font-sans font-black tracking-tighter text-[4rem] sm:text-[6rem] leading-none text-[#E6DFD3] uppercase mt-2">
                  TERAPEUTA<br/>ALIMENTAR
                </h2>
              </div>
              
              {/* Photo Frame matching exactly the deck screenshot aspect ratio */}
              <div className="lg:col-span-5">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#E6DFD3]/10 bg-stone-900 shadow-2xl relative group">
                  <img 
                    src="/images/gabi-hero.png" 
                    alt="Terapeuta Alimentar" 
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Content columns matching the layout exactly */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E6DFD3]/10">
              
              {/* Col 1 */}
              <div className="space-y-4">
                <p className="text-[#E6DFD3]/80 text-sm leading-relaxed font-light">
                  Sou apaixonada pelo cuidado infantil, pelo desenvolvimento humano e pela forma como a alimentação pode transformar relações, emoções e vivências dentro de uma família.
                </p>
                <p className="text-[#E6DFD3]/80 text-sm leading-relaxed font-light">
                  Acredito em um atendimento leve, acolhedor e individualizado, onde cada criança é respeitada em sua singularidade, no seu tempo e nas suas dificuldades.
                </p>
              </div>

              {/* Col 2 */}
              <div className="space-y-4">
                <p className="text-[#E6DFD3]/80 text-sm leading-relaxed font-light">
                  Minha trajetória profissional me aproximou não apenas da nutrição comportamental, mas também do universo do neurodesenvolvimento infantil, despertando ainda mais meu interesse por seletividade alimentar, flexibilidade alimentar e autonomia nas refeições.
                </p>
              </div>

              {/* Col 3 & CTA */}
              <div className="space-y-6 flex flex-col justify-between">
                <p className="text-[#E6DFD3]/80 text-sm leading-relaxed font-light">
                  Mais do que orientar alimentação, meu propósito é acolher famílias e construir caminhos possíveis, sem culpa, sem pressão e com muito respeito.
                </p>

                <button 
                  onClick={() => handleBooking("Terapia Alimentar")}
                  className="inline-flex items-center gap-3 text-sm font-semibold tracking-wider uppercase text-[#E6DFD3] hover:text-[#DECBB7] transition-colors pt-4 group border-b border-[#E6DFD3]/30 pb-1 w-fit"
                >
                  Agende sua consulta <span className="text-amber-300 animate-pulse">🌟</span>
                </button>
              </div>

            </div>

          </div>

          {/* Elegant Section Switcher Slide Arrow */}
          <div className="absolute bottom-10 right-12 hidden lg:flex items-center gap-4 text-[#E6DFD3]/40 hover:text-[#E6DFD3] cursor-pointer transition-colors" onClick={() => scrollToSection("alem")}>
            <span className="text-[10px] tracking-[0.25em] uppercase">Muito Além</span>
            <div className="w-16 h-[1px] bg-current relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 border-t border-r border-current"></div>
            </div>
          </div>
        </section>


        {/* SECTION 4: MUITO ALÉM DA ALIMENTAÇÃO */}
        <section 
          id="alem" 
          className="min-h-screen flex flex-col justify-center py-20 px-6 sm:px-12 lg:px-24 relative bg-[#1A1917]/20"
        >
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <span className="text-xs uppercase tracking-widest text-[#E6DFD3]/40">Gabriela Siman</span>
              
              <h2 className="font-sans font-black tracking-tighter text-[4rem] sm:text-[6rem] leading-none text-[#E6DFD3] uppercase">
                MUITO ALÉM DA ALIMENTAÇÃO
              </h2>

              <div className="max-w-xl space-y-6 text-[#E6DFD3]/80 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Meu propósito é ajudar crianças, adultos e famílias a construírem uma relação mais leve, saudável e acolhedora com a comida.
                </p>
                <p>
                  Acredito em um cuidado humanizado, individualizado e respeitoso, entendendo que alimentação não envolve apenas nutrientes, mas também emoções, vivências, rotina, comportamento e afeto.
                </p>
                <p>
                  Seja através da nutrição comportamental ou da terapia alimentar, meu objetivo é transformar o momento da alimentação em algo mais possible, leve e seguro. <span className="text-amber-300">🌟</span>
                </p>
              </div>

              {/* High-End Direct Contact CTA button */}
              <div className="pt-6">
                <button 
                  onClick={() => handleBooking("Muito Além da Alimentação")}
                  className="inline-flex items-center gap-3 bg-[#E6DFD3] hover:bg-[#F5EFE4] text-[#141312] font-semibold uppercase tracking-widest text-xs px-8 py-5 rounded-full transition-all duration-300 shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  Entrar em contato agora
                </button>
              </div>
            </div>

            {/* Right Large Vertical Photo Frame */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center">
              
              {/* Cyan floating dot on the edge of the photo as shown in the screenshot */}
              <div className="absolute left-[-10px] top-2/3 z-20 w-5 h-5 rounded-full bg-[#13C2C2] shadow-lg shadow-[#13C2C2]/50 animate-pulse"></div>

              <div className="w-full max-w-sm aspect-[1.78/1] rounded-3xl overflow-hidden border border-[#E6DFD3]/10 bg-[#1A1917] shadow-2xl">
                <img 
                  src="/images/gabi-hero.png" 
                  alt="Gabriela Siman - Muito além da nutrição" 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#0B0A09] border-t border-[#E6DFD3]/5 text-[#E6DFD3]/60 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold tracking-widest text-[#E6DFD3] uppercase">
              Gabriela Siman
            </h3>
            <p className="text-xs leading-relaxed max-w-xs font-light">
              Nutricionista comportamental e infantil comprometida em transformar a alimentação em um momento leve, sem culpas e com muito afeto.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#E6DFD3]">Contatos</h4>
            <ul className="space-y-2 text-xs font-light">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E6DFD3]/55" />
                Atendimento Presencial e Online
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E6DFD3]/55" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E6DFD3]/55" />
                contato@gabrielasiman.com
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#E6DFD3]">Registro Profissional</h4>
            <p className="text-xs font-light">
              Gabriela Siman<br />
              CRN-3 / 123456
            </p>
            <p className="text-[10px] text-[#E6DFD3]/30 pt-2">
              © {new Date().getFullYear()} Gabriela Siman. Todos os direitos reservados.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#E6DFD3]/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-[#E6DFD3]/40">
          <p>Nutrição Ética e Comportamental Baseada em Evidências.</p>
          <MadeWithDyad />
        </div>
      </footer>

    </div>
  );
}