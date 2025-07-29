import React, { useEffect, useRef, useState } from 'react';

const Loader = () => {
  const loaderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const mountTimeoutRef = useRef(null);

  useEffect(() => {
    // Asegurar montaje gradual para evitar errores DOM
    mountTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    // Asegurar que el componente esté montado antes de cualquier manipulación
    if (loaderRef.current) {
      // Cualquier lógica adicional de inicialización puede ir aquí
      loaderRef.current.setAttribute('data-loaded', 'true');
    }

    // Cleanup cuando el componente se desmonte
    return () => {
      if (mountTimeoutRef.current) {
        clearTimeout(mountTimeoutRef.current);
      }
      
      // Limpiar cualquier referencia o listener si es necesario
      if (loaderRef.current) {
        loaderRef.current.removeAttribute('data-loaded');
      }
    };
  }, []);

  // Renderizado condicional para evitar problemas de timing
  if (!isVisible) {
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
          opacity: 0
        }}
        role="status"
        aria-label="Inicializando..."
      >
        <span>Cargando...</span>
      </div>
    );
  }

  try {
    return (
      <div 
        ref={loaderRef}
        className="banter-loader"
        role="status"
        aria-label="Cargando..."
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        {[...Array(9)].map((_, i) => (
          <div 
            key={`loader-box-${i}`} 
            className="banter-loader__box"
            style={{
              animationDelay: `${i * 0.1}s` // Escalonar animaciones para mejor rendimiento
            }}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error rendering Loader component:', error);
    return (
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}
        role="status"
        aria-label="Cargando..."
      >
        <span>Cargando...</span>
      </div>
    );
  }
};

export default React.memo(Loader);
