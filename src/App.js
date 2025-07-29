import React, { useEffect } from 'react'
import Header from './pages/Header'
import AppRoutes from './AppRoutes'
import ErrorBoundary from './components/ErrorBoundary'
import { setupGlobalCleanup } from './utils/cleanup'
import scrollTriggerPatchUtils from './utils/scrollTriggerPatch'
import { initializePerformanceOptimizations } from './utils/performanceOptimizer'
import './index.css'

function App() {
  useEffect(() => {
    // Aplicar parches críticos primero
    try {
      scrollTriggerPatchUtils.applyGlobalPatches();
      scrollTriggerPatchUtils.patchScrollTrigger();
    } catch (error) {
      console.error('Error applying patches:', error);
    }
    
    // Inicializar optimizaciones de rendimiento
    let performanceCleanup = () => {};
    try {
      performanceCleanup = initializePerformanceOptimizations();
    } catch (error) {
      console.error('Error initializing performance optimizations:', error);
    }
    
    // Configurar limpieza global
    const cleanup = setupGlobalCleanup();
    
    // Retornar función de cleanup combinada
    return () => {
      cleanup();
      performanceCleanup();
    };
  }, []);

  return (
    <ErrorBoundary>
      <Header />
      <AppRoutes />
    </ErrorBoundary>
  )
}

export default App