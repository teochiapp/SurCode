import React, { useEffect } from 'react'
import Header from './pages/Header'
import AppRoutes from './AppRoutes'
import ErrorBoundary from './components/ErrorBoundary'
import { setupGlobalCleanup } from './utils/cleanup'
import './index.css'

function App() {
  useEffect(() => {
    // Configurar limpieza global
    const cleanup = setupGlobalCleanup();
    
    // Retornar función de cleanup
    return cleanup;
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <AppRoutes />
    </ErrorBoundary>
  )
}

export default App