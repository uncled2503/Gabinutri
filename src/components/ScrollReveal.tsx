"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fade-up" | "fade-in" | "scale-up" | "slide-left" | "slide-right";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1000,
  animation = "fade-up",
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px", // Ativa um pouco antes de entrar totalmente
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12";
      case "fade-in":
        return isIntersecting ? "opacity-100" : "opacity-0";
      case "scale-up":
        return isIntersecting
          ? "opacity-100 scale-100"
          : "opacity-0 scale-95";
      case "slide-left":
        return isIntersecting
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-12";
      case "slide-right":
        return isIntersecting
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-12";
      default:
        return "opacity-100 translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) ${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}