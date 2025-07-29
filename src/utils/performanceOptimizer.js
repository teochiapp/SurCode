// Optimizador de rendimiento para evitar violaciones de message handler
let isOptimizing = false;
let performanceQueue = [];

// Throttle para operaciones pesadas
const createThrottle = (func, delay) => {
  let timeoutId;
  let lastExecTime = 0;
  
  return function (...args) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// Wrapper para operaciones que pueden causar violaciones de rendimiento
export const optimizePerformance = (operation, options = {}) => {
  const { 
    priority = 'normal', 
    maxDelay = 16, 
    useRequestAnimationFrame = true 
  } = options;

  if (isOptimizing && priority !== 'high') {
    performanceQueue.push({ operation, options });
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    const executeOperation = () => {
      try {
        const startTime = performance.now();
        const result = operation();
        const endTime = performance.now();
        
        // Si la operación toma más de 16ms, optimizar la siguiente
        if (endTime - startTime > maxDelay) {
          isOptimizing = true;
          setTimeout(() => {
            isOptimizing = false;
            processQueue();
          }, 100);
        }
        
        resolve(result);
      } catch (error) {
        console.error('Error in optimized operation:', error);
        resolve(null);
      }
    };

    if (useRequestAnimationFrame) {
      requestAnimationFrame(executeOperation);
    } else {
      setTimeout(executeOperation, 0);
    }
  });
};

// Procesar cola de operaciones pendientes
const processQueue = () => {
  if (performanceQueue.length === 0) return;
  
  const batchSize = Math.min(3, performanceQueue.length);
  const batch = performanceQueue.splice(0, batchSize);
  
  requestIdleCallback(() => {
    batch.forEach(({ operation, options }) => {
      optimizePerformance(operation, options);
    });
    
    if (performanceQueue.length > 0) {
      setTimeout(processQueue, 50);
    }
  }, { timeout: 1000 });
};

// Interceptar y optimizar mensajes del worker que causan violaciones
export const optimizeMessageHandlers = () => {
  // Interceptar addEventListener para message events
  const originalAddEventListener = window.addEventListener;
  
  window.addEventListener = function(event, handler, options) {
    if (event === 'message') {
      // Crear un handler optimizado
      const optimizedHandler = createThrottle((e) => {
        optimizePerformance(() => handler(e), { 
          priority: 'normal',
          maxDelay: 50,
          useRequestAnimationFrame: true 
        });
      }, 16);
      
      return originalAddEventListener.call(this, event, optimizedHandler, options);
    }
    
    return originalAddEventListener.call(this, event, handler, options);
  };
  
  // Interceptar onmessage directos
  const originalPostMessage = window.postMessage;
  
  window.postMessage = function(message, targetOrigin, transfer) {
    // Optimizar mensajes grandes o complejos
    if (message && typeof message === 'object') {
      return optimizePerformance(() => {
        return originalPostMessage.call(this, message, targetOrigin, transfer);
      }, { priority: 'normal', useRequestAnimationFrame: false });
    }
    
    return originalPostMessage.call(this, message, targetOrigin, transfer);
  };
};

// Optimizar animaciones y transiciones
export const optimizeAnimations = () => {
  let animationFrame = null;
  
  const throttledRAF = createThrottle((callback) => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    animationFrame = requestAnimationFrame(callback);
  }, 16);
  
  // Interceptar requestAnimationFrame para evitar excesos
  const originalRAF = window.requestAnimationFrame;
  
  window.requestAnimationFrame = function(callback) {
    return throttledRAF(() => {
      try {
        callback(performance.now());
      } catch (error) {
        console.error('Error in animation frame callback:', error);
      }
    });
  };
  
  return () => {
    window.requestAnimationFrame = originalRAF;
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
  };
};

// Monitor de rendimiento
export const setupPerformanceMonitoring = () => {
  let violationCount = 0;
  
  // Interceptar console.warn para detectar violaciones
  const originalWarn = console.warn;
  console.warn = function(...args) {
    const message = args.join(' ');
    
    if (message.includes('Violation') && message.includes('handler took')) {
      violationCount++;
      
      // Si hay muchas violaciones, activar modo de optimización agresiva
      if (violationCount > 5) {
        isOptimizing = true;
        
        setTimeout(() => {
          isOptimizing = false;
          violationCount = Math.max(0, violationCount - 2);
        }, 1000);
        
        console.log('Performance optimization activated due to violations');
      }
    }
    
    return originalWarn.apply(console, args);
  };
  
  // Monitor de long tasks si está disponible
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        // Capturar isOptimizing en una variable local para evitar el error de loop
        const currentOptimizingState = isOptimizing;
        
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            violationCount++;
            
            // Optimizar próximas operaciones
            if (!currentOptimizingState) {
              isOptimizing = true;
              setTimeout(() => {
                isOptimizing = false;
              }, 200);
            }
          }
        }
      });
      
      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.warn('PerformanceObserver for longtask not supported');
    }
  }
  
  return () => {
    console.warn = originalWarn;
  };
};

// Función principal para inicializar todas las optimizaciones
export const initializePerformanceOptimizations = () => {
  try {
    optimizeMessageHandlers();
    const cleanupAnimations = optimizeAnimations();
    const cleanupMonitoring = setupPerformanceMonitoring();
    
    console.log('Performance optimizations initialized');
    
    return () => {
      cleanupAnimations();
      cleanupMonitoring();
    };
  } catch (error) {
    console.error('Error initializing performance optimizations:', error);
    return () => {};
  }
};

// Exportar como objeto nombrado para evitar el error de anonymous default export
const performanceOptimizerUtils = {
  optimizePerformance,
  optimizeMessageHandlers,
  optimizeAnimations,
  setupPerformanceMonitoring,
  initializePerformanceOptimizations
};

export default performanceOptimizerUtils; 