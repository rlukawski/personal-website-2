"use client";

import { useEffect } from 'react';

/**
 * Hook dodający płynny efekt momentum podczas scrollowania
 * Tworzy wrażenie dynamicznego "ciągnięcia" sekcji
 */
export function useSmoothScroll() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Clear timeout podczas scrollowania
      clearTimeout(scrollTimeout);

      // Po zakończeniu scrollowania (user przestał scrollować)
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        // Tylko jeśli scrollowanie było niewielkie (user się zatrzymał blisko sekcji)
        if (scrollDelta < 100) {
          // Znajdź najbliższą sekcję i delikatnie do niej przyciągnij
          const sections = document.querySelectorAll('section');
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          
          let closestSection: Element | null = null;
          let minDistance = Infinity;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const distance = Math.abs(viewportCenter - sectionTop - 64); // 64px offset dla navbar

            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section;
            }
          });

          // Jeśli sekcja jest blisko (w zakresie 30% viewport), przyciągnij
          if (closestSection && minDistance < window.innerHeight * 0.3) {
            const rect = closestSection.getBoundingClientRect();
            const offset = 64; // wysokość navbar
            const targetPosition = rect.top + window.scrollY - offset;
            
            // Tylko jeśli różnica nie jest zbyt duża
            if (Math.abs(targetPosition - currentScrollY) < window.innerHeight * 0.2) {
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          }
        }
        
        lastScrollY = currentScrollY;
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
}

