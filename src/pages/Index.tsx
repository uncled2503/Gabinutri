"use client";

import React, { useState } from "react";
import { 
  ArrowRight, 
  Calendar, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  Baby, 
  Compass, 
  MessageCircle, 
  Plus, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Check, 
  ArrowUpRight,
  Star,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Index() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"behavioral" | "infant">("behavioral");

  const handleBooking = (type?: string) => {
    const message = type 
      ? `Olá Gabi! Gostaria de agendar uma consulta focada em ${type}.`
      : "Olá Gabi! Gostaria de agendar uma consulta de nutrição.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    
    toast({
      title: "Redirecionando para o WhatsApp...",
      description: "Preparando seu atendimento personalizado com a Gabi.",
    });
    
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0F0E0C] text-[#F3EFEA] selection:bg-[#C5A880] selection:text-[#0F0E0C] font-sans overflow-x-hidden antialiased">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#0F0E0C]/90 backdrop-blur-md border-b border-[#2C2620]/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#D4C3B3]">
              GABI <span className="text-[#C5A880]">SIMAN</span>
            </span>
            <div className="hidden md:block h-4 w-[1px] bg-[#2C2620]"></div>
            <span className="hidden md:block text-xs uppercase tracking-widest text-[#A89A8D]">
              Nutrição Humana & Comportamental
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-wider font-medium text-[#D4C3B3]">
            <a href="#inicio" className="hover:text-[#C5A880] transition-colors duration-200">Início</a>
            <a href="#sobre" className="hover:text-[#C5A880] transition-colors duration-200">Quem Sou Eu</a>
            <a href="#atuacao" className="hover:text-[#C5A880] transition-colors duration-200">Áreas de Atuação</a>
            <a href="#como-funciona" className="hover:text-[#C5A880] transition-colors duration-200">O Atendimento</a>
            <a href="#depoimentos" className="hover:text-[#C5A880] transition-colors duration-200">Depoimentos</a>
            <a href="#faq" className="hover:text-[#C5A880] transition-colors duration-200">Dúvidas</a>
          </nav>

          <div>
            <Button 
              onClick={() => handleBooking()}
              className="bg-[#C5A880] hover:bg-[#D4B993] text-[#0F0E0C] font-semibold tracking-wider uppercase text-xs px-6 py-5 rounded-full transition-all duration-300 shadow-lg shadow-[#C5A880]/10 flex items-center gap-2"
            >
              Agendar Consulta
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section id="inicio" className="relative pt-10 pb-20 lg:pt-16 lg:pb-32 overflow-hidden border-b border-[#2C2620]/20">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute -top-10 left-10 w-[300px] h-[300px] bg-[#D4C3B3]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* Main Visual Frame & Huge Editorial Heading */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Core Messages */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-8 z-10 text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1.5 rounded-full border border-[#C5A880]/20 bg-[#C5A880]/5 text-[#C5A880] text-xs font-semibold uppercase tracking-widest w-fit mx-auto lg:mx-0">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Uma Nutrição Sem Culpa e com Afeto
              </div>

              <div className="space-y-4">
                <p className="text-[#A89A8D] uppercase tracking-[0.25em] text-sm font-semibold">
                  Gabriela Siman
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F3EFEA] leading-[1.15] tracking-tight">
                  Sua relação com a comida pode ser <span className="italic text-[#C5A880] font-normal">leve e segura</span>.
                </h1>
              </div>

              <p className="text-[#A89A8D] text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Nutricionista comportamental e terapeuta alimentar dedicada a guiar adultos e crianças a redescobrirem o prazer de comer de forma consciente, respeitosa e livre de restrições extremas.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Button 
                  onClick={() => handleBooking()}
                  className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#D4B993] text-[#0F0E0C] font-semibold uppercase tracking-wider text-xs px-8 py-6 rounded-full transition-all duration-300 shadow-xl shadow-[#C5A880]/15 flex items-center justify-center gap-2"
                >
                  Agendar consulta no WhatsApp
                  <MessageCircle className="w-4 h-4" />
                </Button>
                
                <a 
                  href="#atuacao" 
                  className="w-full sm:w-auto border border-[#2C2620] hover:border-[#C5A880]/60 text-[#D4C3B3] hover:text-[#F3EFEA] bg-transparent text-xs font-semibold uppercase tracking-widest px-8 py-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Conhecer minhas versões
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Minimal social proof / statistics badges */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#2C2620]/30 max-w-md mx-auto lg:mx-0">
                <div>
                  <h3 className="font-serif text-2xl text-[#C5A880]">100%</h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#A89A8D] mt-1">Abordagem Individualizada</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#C5A880]">+500</h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#A89A8D] mt-1">Famílias Acolhidas</p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#C5A880]">CRN-3</h3>
                  <p className="text-[11px] uppercase tracking-wider text-[#A89A8D] mt-1">Atuação Certificada</p>
                </div>
              </div>
            </div>

            {/* Right Col: Stunning Editorial Hero Image */}
            <div className="lg:col-span-7 relative flex justify-center items-center">
              
              {/* Elegant golden frame backdrop behind the image */}
              <div className="absolute -inset-2 rounded-2xl border border-[#C5A880]/10 pointer-events-none transform rotate-1 scale-[1.01] transition-transform duration-700"></div>
              
              {/* Main premium graphic element */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#1C1A17] to-[#0F0E0C] border border-[#2C2620]/50 shadow-2xl">
                <img 
                  src="/images/gabi-hero.png" 
                  alt="Gabriela Siman - Nutricionista Comportamental e Infantil" 
                  className="w-full object-cover max-h-[580px] lg:max-h-[620px] object-center transition-transform duration-700 hover:scale-[1.02]"
                />
                
                {/* Embedded floating signature pill */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0F0E0C]/90 backdrop-blur-md p-4 rounded-xl border border-[#C5A880]/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 flex items-center justify-center border border-[#C5A880]/20 text-[#C5A880] font-serif font-bold text-sm">
                      GS
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#A89A8D]">Atendimento Presencial e Online</p>
                      <p className="text-sm font-semibold text-[#F3EFEA]">Agende com facilidade</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#C5A880]" />
                </div>
              </div>

              {/* Decorative design curves in beige */}
              <svg className="absolute -top-6 -right-6 w-24 h-24 text-[#C5A880]/20 pointer-events-none" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <path d="M0,50 Q50,50 50,100" strokeWidth="0.75" />
                <path d="M50,0 Q50,50 100,50" strokeWidth="0.75" />
              </svg>
            </div>

          </div>

        </div>
      </section>

      {/* 2. QUEM SOU EU (SOBRE A PROFISSIONAL) */}
      <section id="sobre" className="py-24 relative overflow-hidden bg-[#161412]">
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[300px] bg-[#C5A880]/3 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Column 1: Editorial Title and Core Belief */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold block">A mente por trás da marca</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light leading-tight text-[#F3EFEA]">
                Prazer, eu sou a <span className="italic font-normal text-[#C5A880]">Gabriela Siman</span>.
              </h2>
              
              <div className="h-[2px] w-16 bg-[#C5A880]/50 my-6"></div>

              <blockquote className="border-l-2 border-[#C5A880] pl-6 py-2 italic text-[#D4C3B3] text-lg font-light leading-relaxed">
                "Para além da nutrição, sou apaixonada por um docinho e acho que quando o almoço tem tropeiro o dia fica automaticamente melhor."
              </blockquote>

              <p className="text-[#A89A8D] text-sm leading-relaxed uppercase tracking-wider">
                Acredito que o alimento não deve ser visto apenas como calorias ou nutrientes, mas como afeto, emoção, memória e cuidado. Comida também é abraço, lembrança, acolhimento e conexão.
              </p>
            </div>

            {/* Column 2: Deeper Intro and Dynamic Bio Switcher */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6 text-[#D4C3B3] text-base font-light leading-relaxed">
                <p>
                  Foi através dessa visão mais humana da alimentação que me encontrei na nutrição comportamental e no cuidado com o próximo. Minha trajetória profissional me aproximou não apenas da nutrição para adultos, mas também do universo do neurodesenvolvimento infantil, despertando ainda mais meu interesse por seletividade alimentar, flexibilidade alimentar e autonomia nas refeições.
                </p>
                <p>
                  Meu propósito é ajudar crianças, adultos e famílias a construírem uma relação mais leve, saudável e acolhedora com a comida. Acredito em um cuidado humanizado, individualizado e respeitoso, entendendo que a alimentação envolve emoções, vivências, rotina e comportamento.
                </p>
              </div>

              {/* Dynamic Toggle Interaction for the "Two Sides" */}
              <div className="p-6 rounded-2xl bg-[#0F0E0C] border border-[#2C2620]/40 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C5A880] animate-ping"></div>
                  <h4 className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold">Duas frentes de atuação com o mesmo propósito:</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => {
                      setActiveTab("behavioral");
                      document.getElementById("atuacao")?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      activeTab === "behavioral" 
                        ? "border-[#C5A880] bg-[#C5A880]/5" 
                        : "border-[#2C2620] hover:border-[#C5A880]/30 bg-[#161412]/50"
                    }`}
                  >
                    <p className="font-semibold text-[#F3EFEA] text-sm flex items-center justify-between">
                      Nutrição Comportamental
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                    </p>
                    <p className="text-xs text-[#A89A8D] mt-1.5 leading-relaxed">
                      Para adultos que buscam fazer pazes com a balança e a rotina de forma gentil e sem dietas rígidas.
                    </p>
                  </div>

                  <div 
                    onClick={() => {
                      setActiveTab("infant");
                      document.getElementById("atuacao")?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      activeTab === "infant" 
                        ? "border-[#C5A880] bg-[#C5A880]/5" 
                        : "border-[#2C2620] hover:border-[#C5A880]/30 bg-[#161412]/50"
                    }`}
                  >
                    <p className="font-semibold text-[#F3EFEA] text-sm flex items-center justify-between">
                      Nutrição Infantil (Terapia Alimentar)
                      <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                    </p>
                    <p className="text-xs text-[#A89A8D] mt-1.5 leading-relaxed">
                      Apoio especializado para crianças com dificuldades alimentares, seletividade e desenvolvimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. AS DUAS VERSÕES DE ATENDIMENTO */}
      <section id="atuacao" className="py-24 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#C5A880]/2 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">Minhas Versões de Atendimento</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EFEA]">
              Como posso te ajudar <span className="italic font-normal text-[#C5A880]">hoje</span>?
            </h2>
            <p className="text-[#A89A8D] text-sm sm:text-base font-light">
              Escolha a área de atendimento que melhor atende ao seu momento de vida atual ou às necessidades da sua família.
            </p>

            {/* Premium Selector Tabs */}
            <div className="inline-flex p-1.5 rounded-full bg-[#161412] border border-[#2C2620]/80 mt-6">
              <button
                onClick={() => setActiveTab("behavioral")}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "behavioral" 
                    ? "bg-[#C5A880] text-[#0F0E0C] shadow-lg" 
                    : "text-[#D4C3B3] hover:text-[#F3EFEA]"
                }`}
              >
                Nutrição Comportamental
              </button>
              <button
                onClick={() => setActiveTab("infant")}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === "infant" 
                    ? "bg-[#C5A880] text-[#0F0E0C] shadow-lg" 
                    : "text-[#D4C3B3] hover:text-[#F3EFEA]"
                }`}
              >
                Terapia Alimentar Infantil
              </button>
            </div>
          </div>

          {/* Tab Content Display with Animation effect */}
          <div className="transition-all duration-500">
            {activeTab === "behavioral" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual Accent Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#C5A880]/20 bg-[#161412] relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-transparent to-transparent z-10 opacity-60"></div>
                    <div className="absolute bottom-6 left-6 z-20 space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">Abordagem para Adultos</span>
                      <h3 className="font-serif text-2xl text-[#F3EFEA]">Fazer pazes com a comida</h3>
                    </div>
                    {/* Placeholder colored box mirroring premium aesthetic if image is single */}
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-900">
                      <Compass className="w-16 h-16 text-[#C5A880]/20 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-[#2C2620]/30 bg-[#161412]/40">
                    <h4 className="font-serif text-[#C5A880] text-lg mb-2">Se você sente que:</h4>
                    <ul className="space-y-2.5 text-xs text-[#A89A8D] font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A880] mt-0.5">•</span>
                        Já tentou inúmeras dietas restritivas e sempre volta ao ponto inicial.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A880] mt-0.5">•</span>
                        Sente culpa excessiva ou ansiedade antes, durante ou após comer.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A880] mt-0.5">•</span>
                        Desconta as emoções do dia a dia (estresse, cansaço, tristeza) na comida.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main Content Column */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F3EFEA] font-light">
                      Nutrição Comportamental & <span className="italic text-[#C5A880]">Gentil</span>
                    </h3>
                    <p className="text-[#D4C3B3] text-base leading-relaxed font-light">
                      Acredito que a alimentação vai muito além de dietas ou regras rígidas. Cada pessoa tem uma história com a comida, uma rotina, emoções e desafios diferentes. No meu trabalho, busco olhar para tudo isso com cuidado e escuta profunda.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] border border-[#C5A880]/20">
                        <Heart className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#F3EFEA] uppercase tracking-wider">Comer Intuitivo</h4>
                      <p className="text-xs text-[#A89A8D] leading-relaxed">
                        Reaprender a ouvir e respeitar os sinais naturais de fome, saciedade e prazer do seu próprio corpo.
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] border border-[#C5A880]/20">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#F3EFEA] uppercase tracking-wider">Sem Julgamentos</h4>
                      <p className="text-xs text-[#A89A8D] leading-relaxed">
                        Acolhimento para lidar com a compulsão alimentar e episódios de exagero sem punição física ou mental.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2C2620]/30 flex flex-col sm:flex-row items-center gap-6">
                    <Button
                      onClick={() => handleBooking("Nutrição Comportamental")}
                      className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#D4B993] text-[#0F0E0C] font-semibold uppercase tracking-wider text-xs px-8 py-5 rounded-full"
                    >
                      Agendar esta modalidade
                    </Button>
                    <span className="text-xs text-[#A89A8D] italic">
                      Disponível para atendimentos Presencial em clínica e Online (via chamada de vídeo).
                    </span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Visual Accent Column */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#C5A880]/20 bg-[#161412] relative group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0C] via-transparent to-transparent z-10 opacity-60"></div>
                    <div className="absolute bottom-6 left-6 z-20 space-y-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold">Cuidado Materno-Infantil</span>
                      <h3 className="font-serif text-2xl text-[#F3EFEA]">Terapia Alimentar e Afeto</h3>
                    </div>
                    {/* Placeholder colored box mirroring premium child therapy aesthetic */}
                    <div className="absolute inset-0 flex items-center justify-center bg-stone-900">
                      <Baby className="w-16 h-16 text-[#C5A880]/20 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl border border-[#2C2620]/30 bg-[#161412]/40">
                    <h4 className="font-serif text-[#C5A880] text-lg mb-2">Ideal para famílias com:</h4>
                    <ul className="space-y-2.5 text-xs text-[#A89A8D] font-light">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A880] mt-0.5">•</span>
                        Crianças com alta recusa ou extrema seletividade de cores/texturas.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A880] mt-0.5">•</span>
                        Dificuldades na introdução alimentar ou na transição de consistência.
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A880] mt-0.5">•</span>
                        Crianças neuroatípicas (TEA, TDAH) que necessitam de intervenção personalizada.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Main Content Column */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#F3EFEA] font-light">
                      Terapia Alimentar <span className="italic text-[#C5A880]">Infantil</span>
                    </h3>
                    <p className="text-[#D4C3B3] text-base leading-relaxed font-light">
                      Sou profundamente apaixonada pelo cuidado infantil, pelo desenvolvimento humano e pela forma como a alimentação pode transformar as relações familiares. Meu papel é apoiar os pais na construção de caminhos viáveis, sem culpa e com muita paciência.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2.5">
                      <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] border border-[#C5A880]/20">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#F3EFEA] uppercase tracking-wider">Aproximação Sem Pressão</h4>
                      <p className="text-xs text-[#A89A8D] leading-relaxed">
                        Uso de técnicas lúdicas e científicas para aproximar a criança do alimento respeitando seu ritmo sensorial.
                      </p>
                    </div>

                    <div className="space-y-2.5">
                      <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 flex items-center justify-center text-[#C5A880] border border-[#C5A880]/20">
                        <Heart className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-semibold text-[#F3EFEA] uppercase tracking-wider">Orientação para Pais</h4>
                      <p className="text-xs text-[#A89A8D] leading-relaxed">
                        Acolhimento da dinâmica familiar para eliminar o estresse e as brigas na hora das refeições principais.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#2C2620]/30 flex flex-col sm:flex-row items-center gap-6">
                    <Button
                      onClick={() => handleBooking("Nutrição Infantil")}
                      className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#D4B993] text-[#0F0E0C] font-semibold uppercase tracking-wider text-xs px-8 py-5 rounded-full"
                    >
                      Agendar esta modalidade
                    </Button>
                    <span className="text-xs text-[#A89A8D] italic">
                      Sessões estruturadas e acolhedoras para transformar o momento das refeições em paz.
                    </span>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. COMO FUNCIONA O ATENDIMENTO */}
      <section id="como-funciona" className="py-24 relative overflow-hidden bg-[#161412]">
        <div className="absolute bottom-0 right-10 w-[500px] h-[300px] bg-[#C5A880]/3 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold block">Sua Jornada de Saúde</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EFEA]">
                O Caminho do <span className="italic font-normal text-[#C5A880]">Cuidado</span>
              </h2>
            </div>
            <p className="text-[#A89A8D] text-sm md:text-base font-light max-w-md">
              Construímos juntos um caminho mais possível, gentil e seguro, com suporte contínuo e acolhimento em cada etapa do seu processo alimentar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="relative p-6 rounded-2xl bg-[#0F0E0C] border border-[#2C2620]/40 space-y-4 hover:border-[#C5A880]/30 transition-all duration-300">
              <div className="absolute top-4 right-6 text-5xl font-serif text-[#C5A880]/10 font-bold">
                01
              </div>
              <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] font-semibold">
                I
              </div>
              <h3 className="font-serif text-xl text-[#F3EFEA]">Primeiro Contato</h3>
              <p className="text-xs text-[#A89A8D] leading-relaxed font-light">
                Conversamos via WhatsApp para compreender sua queixa principal, tirar dúvidas e alinhar a melhor modalidade de consulta para o seu caso.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-2xl bg-[#0F0E0C] border border-[#2C2620]/40 space-y-4 hover:border-[#C5A880]/30 transition-all duration-300">
              <div className="absolute top-4 right-6 text-5xl font-serif text-[#C5A880]/10 font-bold">
                02
              </div>
              <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] font-semibold">
                II
              </div>
              <h3 className="font-serif text-xl text-[#F3EFEA]">Avaliação Detalhada</h3>
              <p className="text-xs text-[#A89A8D] leading-relaxed font-light">
                Realizamos uma primeira sessão sem pressa, analisando sua história alimentar, hábitos familiares, rotina, relação emocional com o prato e exames.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-2xl bg-[#0F0E0C] border border-[#2C2620]/40 space-y-4 hover:border-[#C5A880]/30 transition-all duration-300">
              <div className="absolute top-4 right-6 text-5xl font-serif text-[#C5A880]/10 font-bold">
                03
              </div>
              <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] font-semibold">
                III
              </div>
              <h3 className="font-serif text-xl text-[#F3EFEA]">Plano Personalizado</h3>
              <p className="text-xs text-[#A89A8D] leading-relaxed font-light">
                Esqueça planos engessados ou metas inatingíveis. Criamos metas possíveis, combinando nutrição científica prática com ferramentas de flexibilidade.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative p-6 rounded-2xl bg-[#0F0E0C] border border-[#2C2620]/40 space-y-4 hover:border-[#C5A880]/30 transition-all duration-300">
              <div className="absolute top-4 right-6 text-5xl font-serif text-[#C5A880]/10 font-bold">
                04
              </div>
              <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] font-semibold">
                IV
              </div>
              <h3 className="font-serif text-xl text-[#F3EFEA]">Acompanhamento</h3>
              <p className="text-xs text-[#A89A8D] leading-relaxed font-light">
                Suporte contínuo para manter a motivação e ajustar o plano diante de novos desafios do cotidiano ou marcos do desenvolvimento.
              </p>
            </div>

          </div>

          {/* Quick CTA banner at the bottom of Steps */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1C1A17] to-[#0F0E0C] border border-[#C5A880]/20 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2">
              <h4 className="font-serif text-xl text-[#F3EFEA]">Vamos traçar o seu plano personalizado juntos?</h4>
              <p className="text-xs text-[#A89A8D]">Atendimento personalizado para você ou para o seu filho.</p>
            </div>
            <Button
              onClick={() => handleBooking()}
              className="w-full md:w-auto bg-[#C5A880] hover:bg-[#D4B993] text-[#0F0E0C] font-semibold uppercase tracking-wider text-xs px-8 py-5 rounded-full flex items-center justify-center gap-2"
            >
              Iniciar meu atendimento
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

        </div>
      </section>

      {/* 5. DEPOIMENTOS */}
      <section id="depoimentos" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#C5A880]/3 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">Vozes do Acolhimento</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EFEA]">
              Histórias que me <span className="italic font-normal text-[#C5A880]">inspiram</span>
            </h2>
            <p className="text-[#A89A8D] text-sm font-light">
              Veja a transformação de pessoas e famílias que decidiram dar uma chance para uma nutrição baseada no respeito, afeto e autoconhecimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-[#161412] border border-[#2C2620]/30 space-y-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#D4C3B3] leading-relaxed font-light italic">
                  "Eu vinha de um histórico de quase 10 anos de efeito sanfona e pavor de comer carboidratos à noite. A Gabi me mostrou que a culpa só me afastava da saúde. Hoje me alimento em paz, perdi peso sem passar fome e sem neuras."
                </p>
              </div>
              <div className="pt-4 border-t border-[#2C2620]/40">
                <p className="text-sm font-semibold text-[#F3EFEA]">Mariana Soares</p>
                <p className="text-[10px] uppercase tracking-widest text-[#A89A8D] mt-0.5">Paciente de Nutrição Comportamental</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-[#161412] border border-[#2C2620]/30 space-y-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#D4C3B3] leading-relaxed font-light italic">
                  "Meu filho de 4 anos não aceitava nada de legumes ou frutas, a hora do jantar era um pesadelo e choro. Com as sessões de Terapia Alimentar lúdicas da Gabi, ele já aceita tocar e até provar alimentos que antes eram impossíveis!"
                </p>
              </div>
              <div className="pt-4 border-t border-[#2C2620]/40">
                <p className="text-sm font-semibold text-[#F3EFEA]">Juliana & Arthur (4 anos)</p>
                <p className="text-[10px] uppercase tracking-widest text-[#A89A8D] mt-0.5">Mãe de Paciente Infantil</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-[#161412] border border-[#2C2620]/30 space-y-6 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
              <div className="space-y-4">
                <div className="flex gap-1 text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#D4C3B3] leading-relaxed font-light italic">
                  "O atendimento da Gabi é humanizado em cada detalhe. O material que ela envia depois da consulta é lindo, prático e realmente se encaixa na correria do dia a dia. Recomendo de olhos fechados para todo mundo."
                </p>
              </div>
              <div className="pt-4 border-t border-[#2C2620]/40">
                <p className="text-sm font-semibold text-[#F3EFEA]">Rodrigo Almeida</p>
                <p className="text-[10px] uppercase tracking-widest text-[#A89A8D] mt-0.5">Paciente de Acompanhamento Mensal</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. PERGUNTAS FREQUENTES (FAQ) */}
      <section id="faq" className="py-24 relative overflow-hidden bg-[#161412] border-t border-[#2C2620]/30">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#C5A880]/2 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center space-y-4 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">Esclareça suas dúvidas</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#F3EFEA]">
              Perguntas <span className="italic font-normal text-[#C5A880]">Frequentes</span>
            </h2>
            <p className="text-[#A89A8D] text-sm max-w-lg mx-auto">
              Selecione as perguntas abaixo para saber mais detalhes práticos sobre as consultas de nutrição e o fluxo de agendamento.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            
            <AccordionItem value="item-1" className="border border-[#2C2620]/50 bg-[#0F0E0C] px-6 py-2 rounded-xl">
              <AccordionTrigger className="font-serif text-lg text-[#F3EFEA] hover:text-[#C5A880] hover:no-underline transition-colors py-4">
                Como funciona a consulta de Nutrição Comportamental?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#A89A8D] leading-relaxed pt-2 pb-4 font-light">
                A consulta é um espaço seguro de escuta. Ao invés de uma folha de papel com alimentos permitidos e proibidos, nós conversamos sobre seu histórico, medos e desejos. Juntos, identificamos os gatilhos alimentares e desenhamos ferramentas práticas (como comer consciente, diários gentis e metas gradativas) para restabelecer a paz alimentar de forma saudável.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[#2C2620]/50 bg-[#0F0E0C] px-6 py-2 rounded-xl">
              <AccordionTrigger className="font-serif text-lg text-[#F3EFEA] hover:text-[#C5A880] hover:no-underline transition-colors py-4">
                A terapia alimentar infantil é só para quem tem seletividade severa?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#A89A8D] leading-relaxed pt-2 pb-4 font-light">
                Não apenas! Ela é ideal também para crianças que estão passando por dificuldades na introdução alimentar, transições difíceis de consistência, recusa de grupos alimentares específicos, ou quando o momento das refeições em família se tornou estressante e repleto de brigas e desgaste emocional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[#2C2620]/50 bg-[#0F0E0C] px-6 py-2 rounded-xl">
              <AccordionTrigger className="font-serif text-lg text-[#F3EFEA] hover:text-[#C5A880] hover:no-underline transition-colors py-4">
                Você atende por planos de saúde / convênios?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#A89A8D] leading-relaxed pt-2 pb-4 font-light">
                Os atendimentos são estritamente particulares para garantir que cada paciente receba o tempo e a atenção individualizada que merece. No entanto, fornecemos um recibo detalhado com o código de procedimento de nutrição para que você possa solicitar o reembolso diretamente ao seu plano de saúde.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-[#2C2620]/50 bg-[#0F0E0C] px-6 py-2 rounded-xl">
              <AccordionTrigger className="font-serif text-lg text-[#F3EFEA] hover:text-[#C5A880] hover:no-underline transition-colors py-4">
                Os atendimentos online têm o mesmo resultado que o presencial?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-[#A89A8D] leading-relaxed pt-2 pb-4 font-light">
                Sim! Para a nutrição comportamental de adultos, o atendimento online é extremamente acolhedor e eficiente, pois permite que o paciente esteja no conforto de sua casa. Fornecemos suporte completo digital por materiais exclusivos e suporte via WhatsApp após a consulta. Para terapia infantil, o atendimento em clínica costuma ser preferível para maior aproveitamento das técnicas lúdicas sensoriais com os brinquedos e alimentos.
              </AccordionContent>
            </AccordionItem>

          </Accordion>

        </div>
      </section>

      {/* 7. CHAMADA FINAL (VAMOS JUNTOS?) */}
      <section className="py-24 relative overflow-hidden bg-[#0F0E0C] border-t border-[#2C2620]/30 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto px-6 relative space-y-10">
          
          <div className="w-16 h-16 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] mx-auto">
            <Heart className="w-6 h-6 animate-pulse" />
          </div>

          <div className="space-y-4">
            <p className="text-[#C5A880] uppercase tracking-[0.25em] text-xs font-semibold">Dê o primeiro passo hoje</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F3EFEA] leading-tight">
              Vamos construir essa <span className="italic text-[#C5A880] font-normal">mudança juntos?</span>
            </h2>
            <p className="text-[#A89A8D] text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
              “Uma relação mais leve, consciente e saudável com a alimentação começa aqui.”
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Button
              onClick={() => handleBooking()}
              className="w-full bg-[#C5A880] hover:bg-[#D4B993] text-[#0F0E0C] font-semibold uppercase tracking-wider text-xs px-8 py-6 rounded-full transition-all duration-300 shadow-xl shadow-[#C5A880]/15 flex items-center justify-center gap-2"
            >
              Agendar minha consulta agora
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-[11px] uppercase tracking-widest text-[#A89A8D] italic">
            Vagas limitadas para acompanhamento mensal individualizado.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B0A09] border-t border-[#2C2620]/40 text-[#A89A8D] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4 col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold tracking-widest text-[#F3EFEA]">
              GABI <span className="text-[#C5A880]">SIMAN</span>
            </h3>
            <p className="text-xs max-w-sm leading-relaxed font-light">
              Nutricionista comportamental e infantil comprometida em restabelecer a paz, a alegria e a saúde integral na mesa de adultos e crianças.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#161412] hover:bg-[#C5A880] hover:text-[#0F0E0C] transition-all duration-300 flex items-center justify-center border border-[#2C2620] text-[#D4C3B3]">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:contato@gabrielasiman.com" className="w-9 h-9 rounded-full bg-[#161412] hover:bg-[#C5A880] hover:text-[#0F0E0C] transition-all duration-300 flex items-center justify-center border border-[#2C2620] text-[#D4C3B3]">
                <Mail className="w-4 h-4" />
              </a>
              <a href="tel:+5511999999999" className="w-9 h-9 rounded-full bg-[#161412] hover:bg-[#C5A880] hover:text-[#0F0E0C] transition-all duration-300 flex items-center justify-center border border-[#2C2620] text-[#D4C3B3]">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#F3EFEA]">Atendimento</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                Atendimento Presencial e Online
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                Segunda a Sexta, das 8h às 19h
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#C5A880]" />
                Incluso suporte pós-sessão
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#F3EFEA]">Legal & Registro</h4>
            <p className="text-xs leading-relaxed font-light">
              Gabriela Siman<br />
              Nutricionista Clinica e Infantil<br />
              CRN-3 / 123456<br />
              São Paulo - SP
            </p>
            <p className="text-[10px] text-[#A89A8D]/50 pt-2">
              © {new Date().getFullYear()} Gabi Siman. Todos os direitos reservados.
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#2C2620]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-[#A89A8D]/60">
          <p>Nutrição Ética, Comportamental e Baseada em Evidências Científicas.</p>
          <MadeWithDyad />
        </div>
      </footer>

    </div>
  );
}