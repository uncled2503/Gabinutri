"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealPhotoProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  overlayClassName?: string;
}

export default function RevealPhoto({
  src,
  alt,
  className = "",
  imgClassName = "",
  overlayClassName = "",
}: RevealPhotoProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px", // Transição de clareamento suave na rolagem
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl border border-[#E6DFD3]/10 bg-stone-900/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group cursor-pointer ${className}`}
    >
      {/* Camada escura que desaparece completamente conforme scrollamos */}
      <div
        className={`absolute inset-0 bg-[#141312] transition-opacity duration-1000 ease-out z-10 pointer-events-none ${
          isIntersecting ? "opacity-0" : "opacity-45"
        } ${overlayClassName}`}
      />
      
      {/* Imagem que transiciona de fosca/dessaturada para super brilhante, focada e clara */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-contain transition-all duration-1200 ease-out ${
          isIntersecting
            ? "brightness-105 saturate-100 filter-none scale-100"
            : "brightness-75 saturate-[0.5] blur-[1.5px] scale-[1.03]"
        } ${imgClassName}`}
      />
      
      {/* Gradiente sutil na base */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-15 pointer-events-none"></div>
    </div>
  );
}