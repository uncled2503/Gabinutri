"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, MessageCircle, Heart, Star, MapPin, Phone, Mail, ChevronRight, Menu, X, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Index() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header active states & premium navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "quem-sou", "comportamental", "terapeuta", "alem"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#141312] text-[#E6DFD3] font-sans selection:bg-[#E6DFD3] selection:text-[#141312] antialiased scroll-smooth">
      
      {/* PREMIUM FLOATING FIXED HEADER - Highly Responsive */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#141312]/95 backdrop-blur-xl py-3 md:py-4 border-b border-[#E6DFD3]/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
          : "bg-[#141312]/40 backdrop-blur-sm py-4 md:py-6 border-b border-[#E6DFD3]/5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#E6DFD3]/30 flex items-center justify-center transition-all duration-500 group-hover:rotate-180 group-hover:border-[#E6DFD3]">
              <span className="font-serif text-[10px] font-bold text-[#E6DFD3]">G</span>
            </div>
            <span className="font-serif text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold text-[#E6DFD3] transition-colors duration-300 group-hover:text-[#F5EFE4]">
              Gabriela Siman
            </span>
          </div>

          {/* Desktop Navigation Link Highlights */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium text-[#E6DFD3]/60">
            {[
              { id: "quem-sou", label: "Quem Sou Eu" },
              { id: "comportamental", label: "Nutri Comportamental" },
              { id: "terapeuta", label: "Terapeuta Alimentar" },
              { id: "alem", label: "Muito Além" }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className={`relative py-2 transition-all duration-300 hover:text-[#E6DFD3] group ${
                  activeSection === item.id ? "text-[#E6DFD3]" : "text-[#E6DFD3]/50"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#E6DFD3] transition-all duration-500 origin-left ${
                  activeSection === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Header Action Button */}
          <button
            onClick={() => handleBooking("Contato Geral")}
            className="hidden sm:inline-flex relative overflow-hidden group border border-[#E6DFD3]/20 hover:border-[#E6DFD3] text-[#E6DFD3] text-[10px] uppercase tracking-widest px-6 py-3 rounded-full transition-all duration-500"
          >
            <span className="absolute inset-0 w-full h-full bg-[#E6DFD3] origin-bottom transform scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-0"></span>
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#141312] flex items-center gap-2">
              Falar no WhatsApp <MessageCircle className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Mobile Menu Trigger with improved padding touch zone */}
          <button 
            className="md:hidden p-2 -mr-2 text-[#E6DFD3] hover:text-[#DECBB7] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 animate-pulse" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu - Highly Polished and Blur Focused */}
        <div className={`md:hidden fixed top-[56px] left-0 right-0 bottom-0 bg-[#141312]/98 border-t border-[#E6DFD3]/10 backdrop-blur-3xl transition-all duration-500 z-50 flex flex-col justify-between ${
          mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}>
          <div className="px-6 py-8 flex flex-col gap-6 text-sm sm:text-base uppercase tracking-widest font-semibold">
            {[
              { id: "quem-sou", label: "Quem Sou Eu" },
              { id: "comportamental", label: "Nutri Comportamental" },
              { id: "terapeuta", label: "Terapeuta Alimentar" },
              { id: "alem", label: "Muito Além" }
            ].map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                style={{ animationDelay: `${index * 75}ms` }}
                className={`text-left py-3 border-b border-[#E6DFD3]/5 flex items-center justify-between transition-colors ${
                  activeSection === item.id ? "text-white" : "text-[#E6DFD3]/60"
                } ${mobileMenuOpen ? "animate-fade-in-up" : ""}`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-[#E6DFD3]/30" />
              </button>
            ))}
          </div>

          <div className="p-6 bg-[#0B0A09]/90 border-t border-[#E6DFD3]/10 space-y-4">
            <button
              onClick={() => handleBooking("Contato Mobile")}
              className="w-full bg-[#E6DFD3] text-[#141312] text-xs uppercase tracking-widest py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </button>
            <p className="text-[10px] text-center text-[#E6DFD3]/40 tracking-wider">
              Gabriela Siman • CRN-3 / 123456
            </p>
          </div>
        </div>
      </header>

      {/* DECK WRAPPER */}
      <main>

        {/* SECTION 1: IMMERSIVE FULL-BLEED HERO COVER BANNER */}
        <section 
          id="hero" 
          className="relative h-screen w-full overflow-hidden cursor-pointer"
          onClick={() => scrollToSection("quem-sou")}
        >
          {/* Edge-to-edge Cinematic background - completely clean to value the background image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/gabi-hero.png" 
              alt="Gabriela Siman Full Bleed Hero Cover" 
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            {/* Soft subtle ambient shadows */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/30 via-transparent to-[#141312]/20"></div>
          </div>
        </section>


        {/* SECTION 2: QUEM SOU EU? */}
        <section 
          id="quem-sou" 
          className="min-h-screen flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24 border-b border-[#E6DFD3]/10 relative bg-[#1c1b19]/40"
        >
          {/* Subtle design backdrop glows */}
          <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-stone-900/40 blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#E6DFD3]/40"></span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E6DFD3]/70 font-semibold">
                  Atrás do Jaleco
                </span>
              </div>
              
              <h2 className="font-sans font-black tracking-tighter text-4xl sm:text-7xl lg:text-[6rem] leading-none text-[#E6DFD3] uppercase">
                QUEM SOU EU?
              </h2>

              <div className="max-w-xl space-y-5 sm:space-y-6 text-[#E6DFD3]/90 text-sm sm:text-base font-light leading-relaxed">
                <p className="font-semibold text-white text-lg sm:text-xl">
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
                <p className="italic text-[#E6DFD3]/70 pt-4 border-t border-[#E6DFD3]/20">
                  Agora, vem conhecer um pouquinho do meu lado profissional e especialidades.
                </p>
              </div>
            </div>

            {/* Right Buttons & CTA Column - Floating beautifully and touching responsively */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-4 sm:gap-6 lg:pl-12 w-full">
              
              {/* Special Pill button 1: Nutricionista Comportamental */}
              <button 
                onClick={() => scrollToSection("comportamental")}
                className="group relative w-full max-w-[320px] py-6 rounded-full border border-[#E6DFD3]/30 hover:border-[#E6DFD3] flex items-center justify-center transition-all duration-500 overflow-hidden bg-[#141312]/40 backdrop-blur-sm active:scale-98"
              >
                <span className="absolute inset-0 bg-[#E6DFD3] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0"></span>
                <span className="relative text-[11px] tracking-[0.2em] font-bold uppercase text-[#E6DFD3] group-hover:text-[#141312] text-center px-6 leading-relaxed z-10 transition-colors duration-500">
                  Nutricionista<br/>Comportamental
                </span>
              </button>

              {/* Special Pill button 2: Terapeuta Alimentar */}
              <button 
                onClick={() => scrollToSection("terapeuta")}
                className="group relative w-full max-w-[320px] py-6 rounded-full bg-[#E6DFD3] hover:bg-stone-100 text-[#141312] flex items-center justify-center transition-all duration-500 overflow-hidden active:scale-98"
              >
                <span className="absolute inset-0 bg-white transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0"></span>
                <span className="relative text-[11px] tracking-[0.2em] font-bold uppercase text-center px-6 leading-relaxed z-10">
                  Terapeuta<br/>Alimentar
                </span>
              </button>

              <div className="pt-4 text-center lg:text-right w-full max-w-[320px]">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#E6DFD3]/40 font-semibold">
                  Gabriela Siman • CRN-3
                </span>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 3: NUTRI COMPORTAMENTAL */}
        <section 
          id="comportamental" 
          className="min-h-screen flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24 border-b border-[#E6DFD3]/10 relative bg-[#1A1917]/30 overflow-hidden"
        >
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-stone-900/30 blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
            
            {/* Header Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#E6DFD3]/40"></span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E6DFD3]/60">Atendimento Clínico</span>
                </div>
                <h2 className="font-sans font-black tracking-tighter text-4xl sm:text-7xl lg:text-[6.5rem] leading-none text-[#E6DFD3] uppercase transition-all duration-500">
                  NUTRI<br/>COMPORTAMENTAL
                </h2>
              </div>
              
              {/* Photo Frame responsive adjustment */}
              <div className="lg:col-span-5">
                <div className="aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E6DFD3]/10 bg-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group cursor-pointer">
                  <div className="absolute inset-0 bg-[#141312]/30 group-hover:bg-[#141312]/0 transition-all duration-500 z-10"></div>
                  <img 
                    src="/images/gabi-comportamental.jpg" 
                    alt="Nutricionista Comportamental" 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                </div>
              </div>
            </div>

            {/* Content columns optimized for smaller mobile views */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-8 sm:pt-12 border-t border-[#E6DFD3]/15">
              
              {/* Col 1 */}
              <div className="space-y-4">
                <p className="text-[#E6DFD3]/85 text-sm sm:text-base leading-relaxed font-light">
                  Acredito que a alimentação vai muito além de dietas ou regras rígidas. Cada pessoa tem uma história com a comida, uma rotina, emoções e desafios diferentes.
                </p>
                <p className="text-[#E6DFD3]/80 text-xs sm:text-sm leading-relaxed font-light">
                  No meu trabalho, busco olhar para tudo isso com cuidado e escuta. Meu objetivo é te ajudar a entender melhor seu corpo, sua fome e os sentimentos que muitas vezes se misturam com a alimentação.
                </p>
              </div>

              {/* Col 2 */}
              <div className="space-y-4">
                <p className="text-[#E6DFD3]/85 text-sm sm:text-base leading-relaxed font-light">
                  A partir disso, construímos juntos um caminho mais possível e gentil com você, com orientação nutricional, plano alimentar quando necessário e ferramentas da nutrição comportamental para tornar sua relação com a comida mais leve e consciente.
                </p>
              </div>

              {/* Col 3 & CTA */}
              <div className="space-y-6 sm:space-y-8 flex flex-col justify-between">
                <p className="text-[#E6DFD3]/80 text-xs sm:text-sm leading-relaxed font-light">
                  Se você sente que já tentou muitas dietas e quer construir uma relação mais leve com a comida, estou aqui para te ajudar. <span className="text-rose-400">♥</span>
                </p>

                <button 
                  onClick={() => handleBooking("Nutrição Comportamental")}
                  className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-[#E6DFD3] hover:text-white transition-all duration-300 group border-b border-[#E6DFD3]/30 pb-2 w-fit"
                >
                  <span>Agende sua consulta</span> 
                  <span className="transition-transform duration-500 group-hover:translate-x-2">🌟</span>
                </button>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 4: TERAPEUTA ALIMENTAR */}
        <section 
          id="terapeuta" 
          className="min-h-screen flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24 border-b border-[#E6DFD3]/10 relative overflow-hidden"
        >
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-stone-900/25 blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
            
            {/* Header Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              <div className="lg:col-span-7 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#E6DFD3]/40"></span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E6DFD3]/60">Pediatria & Desenvolvimento</span>
                </div>
                <h2 className="font-sans font-black tracking-tighter text-4xl sm:text-7xl lg:text-[6.5rem] leading-none text-[#E6DFD3] uppercase transition-all duration-500">
                  TERAPEUTA<br/>ALIMENTAR
                </h2>
              </div>
              
              {/* Photo Frame responsive scale */}
              <div className="lg:col-span-5">
                <div className="aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#E6DFD3]/10 bg-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative group cursor-pointer">
                  <div className="absolute inset-0 bg-[#141312]/30 group-hover:bg-[#141312]/0 transition-all duration-500 z-10"></div>
                  <img 
                    src="/images/gabi-terapeuta.jpg" 
                    alt="Terapeuta Alimentar" 
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                </div>
              </div>
            </div>

            {/* Content columns matching the layout with touch spacing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-8 sm:pt-12 border-t border-[#E6DFD3]/15">
              
              {/* Col 1 */}
              <div className="space-y-4">
                <p className="text-[#E6DFD3]/85 text-sm sm:text-base leading-relaxed font-light">
                  Sou apaixonada pelo cuidado infantil, pelo desenvolvimento humano e pela forma como a alimentação pode transformar relações, emoções e vivências dentro de uma família.
                </p>
                <p className="text-[#E6DFD3]/80 text-xs sm:text-sm leading-relaxed font-light">
                  Acredito em um atendimento leve, acolhedor e individualizado, onde cada criança é respeitada em sua singularidade, no seu tempo e nas suas dificuldades.
                </p>
              </div>

              {/* Col 2 */}
              <div className="space-y-4">
                <p className="text-[#E6DFD3]/85 text-sm sm:text-base leading-relaxed font-light">
                  Minha trajetória profissional me aproximou não apenas da nutrição comportamental, mas também do universo do neurodesenvolvimento infantil, despertando ainda mais meu interesse por seletividade alimentar, flexibilidade alimentar e autonomia nas refeições.
                </p>
              </div>

              {/* Col 3 & CTA */}
              <div className="space-y-6 sm:space-y-8 flex flex-col justify-between">
                <p className="text-[#E6DFD3]/80 text-xs sm:text-sm leading-relaxed font-light">
                  Mais do que orientar alimentação, meu propósito é acolher famílias e construir caminhos possíveis, sem culpa, sem pressão e com muito respeito.
                </p>

                <button 
                  onClick={() => handleBooking("Terapia Alimentar")}
                  className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-[#E6DFD3] hover:text-white transition-all duration-300 group border-b border-[#E6DFD3]/30 pb-2 w-fit"
                >
                  <span>Agende sua consulta</span> 
                  <span className="transition-transform duration-500 group-hover:translate-x-2">🌟</span>
                </button>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 5: MUITO ALÉM DA ALIMENTAÇÃO - DESIGN EXCLUSIVO DE CAPA COM CORTE */}
        <section 
          id="alem" 
          className="min-h-screen flex flex-col justify-between py-12 md:py-24 px-6 sm:px-12 lg:px-24 relative bg-[#141312] overflow-hidden"
        >
          {/* Top Line: name on left, slick arrow on right */}
          <div className="w-full flex items-center justify-between pb-6 md:pb-12 border-b border-[#E6DFD3]/5">
            <span className="text-base sm:text-lg font-sans tracking-[0.05em] text-[#E6DFD3] font-light">
              Gabriela Siman
            </span>
            <div className="flex items-center gap-3 text-[#E6DFD3]/90">
              <span className="w-16 sm:w-24 h-[1px] bg-[#E6DFD3]/70"></span>
              <ChevronRight className="w-5 h-5 -ml-2" />
            </div>
          </div>

          {/* Grid Layout conforming to reference */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end relative z-10 pt-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 md:space-y-12 text-left pb-4 lg:pb-16">
              
              {/* Massive Condensed Heading styled exactly like image */}
              <h2 className="font-sans font-black tracking-tighter text-[2.75rem] sm:text-[4.75rem] lg:text-[5.5rem] leading-[0.9] text-[#E6DFD3] uppercase select-none">
                MUITO ALÉM DA<br/>ALIMENTAÇÃO
              </h2>

              {/* Exact Description matching screenshot */}
              <div className="max-w-xl space-y-5 text-[#E6DFD3]/85 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                <p>
                  Meu propósito é ajudar crianças, adultos e famílias a construírem uma relação mais leve, saudável e acolhedora com a comida.
                </p>
                <p>
                  Acredito em um cuidado humanizado, individualizado e respeitoso, entendendo que alimentação não envolve apenas nutrientes, mas também emoções, vivências, rotina, comportamento e afeto.
                </p>
                <p>
                  Seja através da nutrição comportamental ou da terapia alimentar, meu objetivo é transformar o momento da alimentação em algo mais possível, leve e seguro. <span className="text-amber-400 font-semibold text-lg inline-block align-middle">🌟</span>
                </p>
              </div>
            </div>

            {/* Right Column: overlapping portrait cutout with cushion pillow */}
            <div className="lg:col-span-6 flex justify-end items-end w-full relative h-[450px] sm:h-[600px] lg:h-[680px]">
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#141312] via-transparent to-transparent z-10 pointer-events-none"></div>
              <img 
                src="/images/gabi-cutout.png" 
                alt="Gabriela Siman Cutout Portrait" 
                className="w-full h-full object-contain object-bottom select-none pointer-events-none filter brightness-[0.98] transform translate-y-4"
              />
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER - Responsively redesigned */}
      <footer className="bg-[#0B0A09] border-t border-[#E6DFD3]/10 text-[#E6DFD3]/60 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E6DFD3]/10 via-[#E6DFD3]/40 to-[#E6DFD3]/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#E6DFD3] uppercase">
              Gabriela Siman
            </h3>
            <p className="text-xs leading-relaxed max-w-xs mx-auto md:mx-0 font-light text-[#E6DFD3]/70">
              Nutricionista comportamental e infantil comprometida em transformar a alimentação em um momento leve, sem culpas e com muito afeto.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#E6DFD3]">Contatos</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs font-light text-[#E6DFD3]/75">
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-[#E6DFD3]/50 shrink-0" />
                Atendimento Presencial e Online
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-[#E6DFD3]/50 shrink-0" />
                (11) 99999-9999
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#E6DFD3]/50 shrink-0" />
                contato@gabrielasiman.com
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#E6DFD3]">Registro Profissional</h4>
            <p className="text-xs font-light text-[#E6DFD3]/75 leading-relaxed">
              Gabriela Siman<br />
              CRN-3 / 123456
            </p>
            <p className="text-[10px] text-[#E6DFD3]/35 pt-2 md:pt-4">
              © {new Date().getFullYear()} Gabriela Siman. Todos os direitos reservados.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-[#E6DFD3]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light text-[#E6DFD3]/40 text-center md:text-left">
          <p>Nutrição Ética e Comportamental Baseada em Evidências.</p>
        </div>
      </footer>

    </div>
  );
}