import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollTrigger = () => {
  const triggersRef = useRef([]);

  const createScrollTrigger = (config) => {
    try {
      // Validar que el elemento trigger existe
      if (config.trigger && !config.trigger.isConnected) {
        console.warn('ScrollTrigger: trigger element is not connected to DOM');
        return null;
      }

      const trigger = ScrollTrigger.create(config);
      triggersRef.current.push(trigger);
      return trigger;
    } catch (error) {
      console.error('Error creating ScrollTrigger:', error);
      return null;
    }
  };

  const killTrigger = (trigger) => {
    if (trigger) {
      try {
        trigger.kill();
        // Remover de la lista de triggers
        triggersRef.current = triggersRef.current.filter(t => t !== trigger);
      } catch (error) {
        console.error('Error killing ScrollTrigger:', error);
      }
    }
  };

  const killAllTriggers = () => {
    triggersRef.current.forEach(trigger => {
      try {
        if (trigger) {
          trigger.kill();
        }
      } catch (error) {
        console.error('Error killing ScrollTrigger:', error);
      }
    });
    triggersRef.current = [];
  };

  const refreshTriggers = () => {
    try {
      ScrollTrigger.refresh();
    } catch (error) {
      console.error('Error refreshing ScrollTriggers:', error);
    }
  };

  // Cleanup cuando el componente se desmonte
  useEffect(() => {
    return () => {
      killAllTriggers();
    };
  }, []);

  return {
    createScrollTrigger,
    killTrigger,
    killAllTriggers,
    refreshTriggers
  };
};

export default useScrollTrigger; 