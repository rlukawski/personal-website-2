"use client";

import { useEffect, useRef, useState } from 'react';

/**
 * Hook dodający animacje fade-in i slide-up podczas scrollowania
 * Tworzy dynamiczne wrażenie podczas przewijania do sekcji
 */
export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animuj gdy sekcja jest widoczna w co najmniej 20%
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        }
      },
      {
        threshold: [0, 0.2, 0.5],
        rootMargin: '-50px 0px',
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return { elementRef, isVisible };
}

