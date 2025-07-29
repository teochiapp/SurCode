import React, { useEffect, useRef } from 'react';

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    // Asegurar que el componente esté montado antes de cualquier manipulación
    if (loaderRef.current) {
      // Cualquier lógica adicional de inicialización puede ir aquí
    }

    // Cleanup cuando el componente se desmonte
    return () => {
      // Limpiar cualquier referencia o listener si es necesario
    };
  }, []);

  try {
    return (
      <div 
        ref={loaderRef}
        className="banter-loader"
        role="status"
        aria-label="Cargando..."
      >
        {[...Array(9)].map((_, i) => (
          <div 
            key={`loader-box-${i}`} 
            className="banter-loader__box"
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
