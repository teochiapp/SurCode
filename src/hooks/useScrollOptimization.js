import { useEffect, useCallback } from 'react';
import { useInView } from 'framer-motion';

// Función throttle simple para no depender de lodash
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

export const useScrollOptimization = () => {
  const handleScrollStart = useCallback(() => {
    document.body.classList.add('scrolling');
    // Pausar animaciones complejas durante scroll activo
    document.body.style.setProperty('--scroll-active', '1');
  }, []);

  const handleScrollEnd = useCallback(
    throttle(() => {
      document.body.classList.remove('scrolling');
      // Reactivar animaciones cuando termine el scroll
      document.body.style.setProperty('--scroll-active', '0');
    }, 100),
    []
  );

  useEffect(() => {
    let scrollTimer = null;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScrollStart();
          
          clearTimeout(scrollTimer);
          scrollTimer = setTimeout(() => {
            handleScrollEnd();
          }, 100);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Usar scroll optimizado con passive listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [handleScrollStart, handleScrollEnd]);
};

// Hook para optimizar useInView
export const useOptimizedInView = (ref, options = {}) => {
  const defaultOptions = {
    once: true,
    margin: "-100px",
    amount: 0.1, // Reducir el threshold para activar antes
    ...options
  };

  return useInView(ref, defaultOptions);
}; 