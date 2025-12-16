"use client";

import { useEffect } from 'react';

/**
 * Hook that adds smooth momentum effect during scrolling
 * Creates a dynamic "pull" impression for sections
 */
export function useSmoothScroll() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Clear timeout while scrolling
      clearTimeout(scrollTimeout);

      // After scrolling ends (user stopped scrolling)
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const scrollDelta = Math.abs(currentScrollY - lastScrollY);
        
        // Only if scrolling was minimal (user stopped near a section)
        if (scrollDelta < 100) {
          // Find the closest section and gently snap to it
          const sections = document.querySelectorAll('section');
          const viewportCenter = window.scrollY + window.innerHeight / 2;
          
          let closestSection: Element | null = null;
          let minDistance = Infinity;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const distance = Math.abs(viewportCenter - sectionTop - 64); // 64px offset for navbar

            if (distance < minDistance) {
              minDistance = distance;
              closestSection = section;
            }
          });

          // If section is close (within 30% of viewport), snap to it
          if (closestSection && minDistance < window.innerHeight * 0.3) {
            const rect = closestSection.getBoundingClientRect();
            const offset = 64; // navbar height
            const targetPosition = rect.top + window.scrollY - offset;
            
            // Only if the difference is not too large
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

