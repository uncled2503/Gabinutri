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
        } else {
          // Permite que volte ao estado oculto caso o usuário suba a página novamente (opcional para efeito contínuo)
          setIsIntersecting(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -120px 0px", // Ativa um pouco antes da foto estar inteira na tela
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
      className={`relative overflow-hidden rounded-2xl border border-[#E6DFD3]/10 bg-[#141312] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group cursor-pointer ${className}`}
    >
      {/* Camada escura que clareia de forma extremamente suave e premium */}
      <div
        className={`absolute inset-0 bg-[#141312] transition-opacity duration-1000 ease-out z-10 pointer-events-none ${
          isIntersecting ? "opacity-0" : "opacity-60"
        } ${overlayClassName}`}
      />
      
      {/* Imagem transita de preto e branco, escura e desfocada para 100% colorida, nítida e iluminada */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-auto object-contain transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          isIntersecting
            ? "brightness-105 saturate-100 blur-0 scale-100 grayscale-0"
            : "brightness-[0.4] saturate-[0.1] grayscale blur-[4px] scale-[1.04]"
        } ${imgClassName}`}
      />
      
      {/* Gradiente sutil na base */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-15 pointer-events-none"></div>
    </div>
  );
}