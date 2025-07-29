import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const setupGlobalCleanup = () => {
  // Limpiar ScrollTriggers cuando la página se va a descargar
  const handleBeforeUnload = () => {
    try {
      ScrollTrigger.killAll();
    } catch (error) {
      console.error('Error cleaning up ScrollTriggers:', error);
    }
  };

  // Limpiar cuando el componente se desmonta o la página se recarga
  const handleUnload = () => {
    try {
      ScrollTrigger.killAll();
    } catch (error) {
      console.error('Error cleaning up ScrollTriggers on unload:', error);
    }
  };

  // Manejar errores de DOM no capturados
  const handleError = (event) => {
    if (event.error && event.error.message.includes('removeChild')) {
      console.warn('DOM removeChild error caught and handled:', event.error);
      event.preventDefault();
      return false;
    }
  };

  // Agregar event listeners
  window.addEventListener('beforeunload', handleBeforeUnload);
  window.addEventListener('unload', handleUnload);
  window.addEventListener('error', handleError);

  // Retornar función de cleanup
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('unload', handleUnload);
    window.removeEventListener('error', handleError);
  };
};

export const forceCleanup = () => {
  try {
    // Limpiar todos los ScrollTriggers
    ScrollTrigger.killAll();
    
    // Refrescar ScrollTrigger para limpiar referencias
    ScrollTrigger.refresh();
    
    console.log('Forced cleanup completed');
  } catch (error) {
    console.error('Error during forced cleanup:', error);
  }
}; 