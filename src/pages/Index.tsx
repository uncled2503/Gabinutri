"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, MessageCircle, Heart, Star, MapPin, Phone, Mail, ChevronRight, Menu, X, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import RevealPhoto from "@/components/RevealPhoto";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Index() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cutoutVisible, setCutoutVisible] = useState(false);

  // Monitor scroll for header active states, premium navbar behavior and cutout reveal
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

      // Check for cutout visibility in section 5
      const alemSection = document.getElementById("alem");
      if (alemSection) {
        const rect = alemSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setCutoutVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBooking = (type: string) => {
    const message = `Olá, Gabriela!\nVim pelo site e gostaria de entender melhor como funciona o seu acompanhamento.`;
    const whatsappUrl = `https://wa.me/553299755053?text=${encodeURIComponent(message)}`;
    
    toast({
      title: "Conectando ao WhatsApp...",
      description: `Iniciando contato com Gabriela Siman...`,
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
        mobileMenuOpen
          ? "bg-[#141312] py-4 border-b border-[#E6DFD3]/10"
          : scrolled 
            ? "bg-[#141312]/95 backdrop-blur-xl py-3 md:py-4 border-b border-[#E6DFD3]/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]" 
            : "bg-[#141312]/40 backdrop-blur-sm py-4 md:py-6 border-b border-[#E6DFD3]/5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Header Brand Logo Integration */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[#E6DFD3]/20 flex items-center justify-center overflow-hidden bg-[#1A1917] p-1 transition-all duration-500 group-hover:scale-105 group-hover:border-[#E6DFD3]">
              <img 
                src="/images/logo-monogram.png" 
                alt="Gabriela Siman Monograma" 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:rotate-12"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold text-[#E6DFD3] transition-colors duration-300 group-hover:text-[#F5EFE4]">
                Gabriela Siman
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.18em] text-[#E6DFD3]/50 font-light -mt-0.5">
                Nutricionista
              </span>
            </div>
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
      </header>

      {/* Mobile Navigation Dropdown Menu - Moved outside header to prevent backdrop-filter bugs */}
      <div className={`md:hidden fixed inset-0 bg-[#141312] z-[45] flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-500 ${
        mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"
      }`}>
        <div className="px-2 flex flex-col gap-6 text-sm sm:text-base uppercase tracking-widest font-semibold">
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
              className={`text-left py-3.5 border-b border-[#E6DFD3]/5 flex items-center justify-between transition-colors ${
                activeSection === item.id ? "text-white" : "text-[#E6DFD3]/60"
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-[#E6DFD3]/30" />
            </button>
          ))}
        </div>

        <div className="p-6 bg-[#0B0A09] border border-[#E6DFD3]/10 rounded-2xl space-y-4">
          <button
            onClick={() => handleBooking("Contato Mobile")}
            className="w-full bg-[#E6DFD3] text-[#141312] text-xs uppercase tracking-widest py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </button>
          <p className="text-[10px] text-center text-[#E6DFD3]/40 tracking-wider">
            Gabriela Siman • CRN-9 / 36803
          </p>
        </div>
      </div>

      {/* DECK WRAPPER */}
      <main>

        {/* SECTION 1: IMMERSIVE FULL-BLEED HERO COVER BANNER */}
        <section 
          id="hero" 
          className="relative h-[62vh] xs:h-[68vh] sm:h-[80vh] md:h-screen w-full overflow-hidden cursor-pointer bg-[#141312]"
          onClick={() => scrollToSection("quem-sou")}
        >
          {/* Edge-to-edge Cinematic background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            {/* Desktop Hero Image - resized to fit the screen size perfectly without cutting off her head or body */}
            <img 
              src="/images/gabi-hero.png" 
              alt="Gabriela Siman Hero Cover" 
              className="hidden md:block w-full h-full object-contain filter brightness-100"
            />
            {/* Mobile Hero Image - resized to fit mobile view screens gracefully */}
            <img 
              src="/images/gabi-hero-mobile.png" 
              alt="Gabriela Siman Hero Cover Mobile" 
              className="block md:hidden w-full h-full object-contain filter brightness-105"
            />
            {/* Soft top gradient to keep text readable */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#141312]/65 to-transparent z-10 pointer-events-none"></div>
            
            {/* Soft, Subtle and elegant base gradient overlay blending perfectly into next section */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#141312] via-[#141312]/85 to-transparent z-10 pointer-events-none"></div>
          </div>
        </section>


        {/* SECTION 2: QUEM SOU EU? */}
        <section 
          id="quem-sou" 
          className="min-h-screen flex flex-col justify-center pt-8 pb-16 sm:py-24 px-4 sm:px-12 lg:px-24 border-b border-[#E6DFD3]/10 relative bg-[#141312]"
        >
          {/* Subtle design backdrop glows */}
          <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-stone-900/40 blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <ScrollReveal delay={100}>
                <div className="flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#E6DFD3]/40"></span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E6DFD3]/70 font-semibold">
                    Atrás do Jaleco
                  </span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h2 className="font-sans font-black tracking-tighter text-4xl sm:text-7xl lg:text-[6rem] leading-none text-[#E6DFD3] uppercase">
                  QUEM SOU EU?
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={300} className="max-w-xl space-y-5 sm:space-y-6 text-[#E6DFD3]/90 text-sm sm:text-base font-light leading-relaxed">
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
              </ScrollReveal>
            </div>

            {/* Right Buttons & CTA Column */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-4 sm:gap-6 lg:pl-12 w-full">
              
              {/* Special Pill button 1: Nutricionista Comportamental */}
              <ScrollReveal delay={250} className="w-full max-w-[320px]">
                <button 
                  onClick={() => scrollToSection("comportamental")}
                  className="group relative w-full py-6 rounded-full border border-[#E6DFD3]/30 hover:border-[#E6DFD3] flex items-center justify-center transition-all duration-500 overflow-hidden bg-[#141312]/40 backdrop-blur-sm active:scale-98"
                >
                  <span className="absolute inset-0 bg-[#E6DFD3] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0"></span>
                  <span className="relative text-[11px] tracking-[0.2em] font-bold uppercase text-[#E6DFD3] group-hover:text-[#141312] text-center px-6 leading-relaxed z-10 transition-colors duration-500">
                    Nutricionista<br/>Comportamental
                  </span>
                </button>
              </ScrollReveal>

              {/* Special Pill button 2: Terapeuta Alimentar */}
              <ScrollReveal delay={350} className="w-full max-w-[320px]">
                <button 
                  onClick={() => scrollToSection("terapeuta")}
                  className="group relative w-full py-6 rounded-full bg-[#E6DFD3] hover:bg-stone-100 text-[#141312] flex items-center justify-center transition-all duration-500 overflow-hidden active:scale-98"
                >
                  <span className="absolute inset-0 bg-white transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-0"></span>
                  <span className="relative text-[11px] tracking-[0.2em] font-bold uppercase text-center px-6 leading-relaxed z-10">
                    Terapeuta<br/>Alimentar
                  </span>
                </button>
              </ScrollReveal>

              <ScrollReveal delay={450} className="pt-4 text-center lg:text-right w-full max-w-[320px]">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#E6DFD3]/40 font-semibold">
                  Gabriela Siman • CRN-9 / 36803
                </span>
              </ScrollReveal>
            </div>

          </div>
        </section>


        {/* SECTION 3: NUTRI COMPORTAMENTAL */}
        <section 
          id="comportamental" 
          className="min-h-screen flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-12 lg:px-24 border-b border-[#E6DFD3]/10 relative bg-[#1A1917]/30 overflow-hidden"
        >
          <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-stone-900/30 blur-3xl -z-10 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full space-y-8 sm:space-y-12">
            
            {/* Header Layout - Clean full-width to prevent overlaps */}
            <div className="space-y-3 sm:space-y-4">
              <ScrollReveal delay={100}>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#E6DFD3]/40"></span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E6DFD3]/60 font-semibold">Atendimento Clínico</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h2 className="font-sans font-black tracking-tighter text-4xl sm:text-7xl lg:text-[6.5rem] leading-none text-[#E6DFD3] uppercase transition-all duration-500">
                  NUTRI COMPORTAMENTAL
                </h2>
              </ScrollReveal>
            </div>

            {/* Content Layout - Structured beautifully below the headline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 sm:pt-12 border-t border-[#E6DFD3]/15">
              
              {/* Left Column: Premium styled Image with full auto height rendering */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={300} animation="scale-up">
                  <RevealPhoto 
                    src="/images/gabi-comportamental.jpg" 
                    alt="Nutricionista Comportamental" 
                  />
                </ScrollReveal>
              </div>

              {/* Right Column: Descriptions & Action CTA */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                <ScrollReveal delay={400} className="space-y-4">
                  <p className="text-[#E6DFD3]/85 text-sm sm:text-base leading-relaxed font-light">
                    Acredito que a alimentação vai muito além de dietas ou regras rígidas. Cada pessoa tem uma história com a comida, uma rotina, emoções e desafios diferentes.
                  </p>
                  <p className="text-[#E6DFD3]/80 text-xs sm:text-sm leading-relaxed font-light">
                    No meu trabalho, busco olhar para tudo isso com cuidado and escuta. Meu objetivo é te ajudar a entender melhor seu corpo, sua fome e os sentimentos que muitas vezes se misturam com a alimentação.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={500} className="space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <p className="text-[#E6DFD3]/85 text-sm sm:text-base leading-relaxed font-light">
                      A partir disso, construímos juntos um caminho mais possível e gentil com você, com orientação nutricional, plano alimentar quando necessário e ferramentas da nutrição comportamental para tornar sua relação com a comida mais leve e consciente.
                    </p>
                    <p className="text-[#E6DFD3]/80 text-xs sm:text-sm leading-relaxed font-light">
                      Se você sente que já tentou muitas dietas e quer construir uma relação mais leve com a comida, estou aqui para te ajudar. <span className="text-rose-400">♥</span>
                    </p>
                  </div>

                  <button 
                    onClick={() => handleBooking("Nutrição Comportamental")}
                    className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-[#E6DFD3] hover:text-white transition-all duration-300 group border-b border-[#E6DFD3]/30 pb-2 w-fit pt-4"
                  >
                    <span>Agende sua consulta</span> 
                    <span className="transition-transform duration-500 group-hover:translate-x-2">🌟</span>
                  </button>
                </ScrollReveal>
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

          <div className="max-w-7xl mx-auto w-full space-y-8 sm:space-y-12">
            
            {/* Header Layout - Clean full-width to prevent overlaps */}
            <div className="space-y-3 sm:space-y-4">
              <ScrollReveal delay={100}>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-[1px] bg-[#E6DFD3]/40"></span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E6DFD3]/60 font-semibold">Pediatria & Desenvolvimento</span>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <h2 className="font-sans font-black tracking-tighter text-4xl sm:text-7xl lg:text-[6.5rem] leading-none text-[#E6DFD3] uppercase transition-all duration-500">
                  TERAPEUTA ALIMENTAR
                </h2>
              </ScrollReveal>
            </div>

            {/* Content Layout - Structured beautifully below the headline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 sm:pt-12 border-t border-[#E6DFD3]/15">
              
              {/* Left Column: Premium styled Image with full auto height rendering */}
              <div className="lg:col-span-5">
                <ScrollReveal delay={300} animation="scale-up">
                  <RevealPhoto 
                    src="/images/gabi-terapeuta.jpg" 
                    alt="Terapeuta Alimentar" 
                  />
                </ScrollReveal>
              </div>

              {/* Right Column: Descriptions & Action CTA */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                <ScrollReveal delay={400} className="space-y-4">
                  <p className="text-[#E6DFD3]/85 text-sm sm:text-base leading-relaxed font-light">
                    Sou apaixonada pelo cuidado infantil, pelo desenvolvimento humano e pela forma como a alimentação pode transformar relações, emoções e vivências dentro de uma família.
                  </p>
                  <p className="text-[#E6DFD3]/80 text-xs sm:text-sm leading-relaxed font-light">
                    Acredito em um atendimento leve, acolhedor e individualizado, onde cada criança é respeitada em sua singularidade, no seu tempo e nas suas dificuldades.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={500} className="space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <p className="text-[#E6DFD3]/85 text-sm sm:text-base leading-relaxed font-light">
                      Minha trajetória profissional me aproximou não apenas da nutrição comportamental, mas também do universo do neurodesenvolvimento infantil, despertando ainda mais meu interesse por seletividade alimentar, flexibilidade alimentar e autonomia nas refeições.
                    </p>
                    <p className="text-[#E6DFD3]/80 text-xs sm:text-sm leading-relaxed font-light">
                      Mais do que orientar alimentação, meu propósito é acolher famílias e construir caminhos possíveis, sem culpa, sem pressão e com muito respeito.
                    </p>
                  </div>

                  <button 
                    onClick={() => handleBooking("Terapia Alimentar")}
                    className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.25em] uppercase text-[#E6DFD3] hover:text-white transition-all duration-300 group border-b border-[#E6DFD3]/30 pb-2 w-fit pt-4"
                  >
                    <span>Agende sua consulta</span> 
                    <span className="transition-transform duration-500 group-hover:translate-x-2">🌟</span>
                  </button>
                </ScrollReveal>
              </div>

            </div>

          </div>
        </section>


        {/* SECTION 5: MUITO ALÉM DA ALIMENTAÇÃO - DESIGN EXCLUSIVO DE CAPA COM CORTE */}
        <section 
          id="alem" 
          className="min-h-0 md:min-h-screen flex flex-col justify-between pt-12 pb-0 md:py-24 px-6 sm:px-12 lg:px-24 relative bg-[#141312] overflow-hidden"
        >
          {/* Top Line: name on left, line and slick arrow completely removed */}
          <div className="w-full flex items-center justify-between pb-6 md:pb-12 border-b border-[#E6DFD3]/5">
            <span className="text-base sm:text-lg font-sans tracking-[0.05em] text-[#E6DFD3] font-light">
              Gabriela Siman
            </span>
          </div>

          {/* Grid Layout conforming to reference */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-16 items-end relative z-10 pt-4 lg:pt-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4 md:space-y-12 text-left pb-2 lg:pb-16 relative z-10">
              
              {/* Massive Condensed Heading styled exactly like image */}
              <ScrollReveal delay={100}>
                <h2 className="font-sans font-black tracking-tighter text-[2.75rem] sm:text-[4.75rem] lg:text-[5.5rem] leading-[0.9] text-[#E6DFD3] uppercase select-none">
                  MUITO ALÉM DA<br/>ALIMENTAÇÃO
                </h2>
              </ScrollReveal>

              {/* Exact Description matching screenshot */}
              <ScrollReveal delay={250} className="max-w-xl space-y-4 text-[#E6DFD3]/85 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                <p>
                  Meu propósito é ajudar crianças, adultos e famílias a construírem uma relação mais leve, saudável e acolhedora com a comida.
                </p>
                <p>
                  Acredito em um cuidado humanizado, individualizado e respeitoso, entendendo que alimentação não envolve apenas nutrientes, mas também emoções, vivências, rotina, comportamento e afeto.
                </p>
                <p>
                  Seja através da nutrição comportamental ou da terapia alimentar, meu objetivo é transformar o momento da alimentação em algo mais possível, leve e seguro. <span className="text-amber-400 font-semibold text-lg inline-block align-middle">🌟</span>
                </p>
              </ScrollReveal>
            </div>

            {/* Right Column: portrait cutout with matching bottom padding alignment */}
            <div className="lg:col-span-6 flex justify-end items-end w-[calc(100%+3rem)] -mr-6 md:w-full md:mr-0 relative h-[400px] xs:h-[460px] sm:h-[500px] lg:h-[720px] overflow-hidden -mt-4 lg:mt-0 z-0 pb-0">
              {/* Dark tint overlay for cutout portrait that fades smoothly */}
              <div 
                className={`absolute inset-0 bg-[#141312] transition-opacity duration-1200 ease-out z-15 pointer-events-none ${
                  cutoutVisible ? "opacity-0" : "opacity-40"
                }`}
              />

              <img 
                src="/images/gabi-cutout.png" 
                alt="Gabriela Siman Cutout Portrait" 
                style={{
                  transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1), filter 1.4s ease-out"
                }}
                className={`w-full h-full object-contain object-right-bottom select-none pointer-events-none origin-bottom-right z-10 translate-y-0 ${
                  cutoutVisible 
                    ? "brightness-105 saturate-100 scale-[1.48] md:scale-110 translate-x-0 filter-none" 
                    : "brightness-[0.7] saturate-[0.5] scale-[1.51] md:scale-[1.13] translate-x-3 blur-[1px]"
                }`}
              />
              {/* Corrected matching background color gradient blend to prevent visual lines */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#141312] via-[#141312]/70 to-transparent z-20 pointer-events-none"></div>
            </div>

          </div>

          {/* Absolute overlay over the entire bottom of the section to smooth out transition from #141312 to #0B0A09 */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0A09] to-transparent pointer-events-none z-30"></div>
        </section>

      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* FOOTER - Responsively redesigned */}
      <footer className="bg-[#0B0A09] text-[#E6DFD3]/60 py-16 sm:py-20 relative overflow-hidden z-10 -mt-1">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E6DFD3]/10 via-[#E6DFD3]/40 to-[#E6DFD3]/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
          
          <div className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
            {/* Integrated high-end full logo */}
            <div className="max-w-[220px] h-auto p-1.5 bg-[#141312]/35 border border-[#E6DFD3]/10 rounded-xl">
              <img 
                src="/images/logo-full.png" 
                alt="Logo Completo Gabriela Siman" 
                className="w-full h-auto object-contain brightness-105"
              />
            </div>
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
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer" onClick={() => handleBooking("Contato Rodapé")}>
                <Phone className="w-4 h-4 text-[#E6DFD3]/50 shrink-0" />
                (32) 99755-0533
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#E6DFD3]/50 shrink-0" />
                gabrielasimanutri@gmail.com
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-[#E6DFD3]">Registro Profissional</h4>
            <p className="text-xs font-light text-[#E6DFD3]/75 leading-relaxed">
              Gabriela Siman<br />
              CRN-9 / 36803
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