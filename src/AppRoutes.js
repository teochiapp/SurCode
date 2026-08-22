// AppRoutes.jsx
import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import BlogPost from './components/blog/BlogPost'
import TeoChiappero from './pages/TeoChiappero'
import Loader from './components/loader'
import Header from './pages/Header'
import ErrorBoundary from './components/ErrorBoundary'
import Agnes from './pages/presupuestos/BudgetAgnes'
import TresNoches from './pages/presupuestos/TresNoches'
import Lucho from './pages/presupuestos/Lucho'
import VillaMarAlimentos from './pages/presupuestos/VillaMarAlimentos'
import ColegioAbogados from './pages/presupuestos/ColegioAbogados'
import SBYogaShala from './pages/presupuestos/SBYogaShala'
import FullPower from './pages/presupuestos/FullPower'
import Marybe from './pages/presupuestos/Marybe'
import Domus from './pages/presupuestos/Domus'
import EspacioJL from './pages/presupuestos/EspacioJL'

// Al cambiar de ruta arrancamos arriba de la pagina.
// Si la URL trae un #hash (ej: /#contact) no tocamos el scroll,
// para no pisar el scrollIntoView de las secciones.
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

// Wrapper corto para no repetir <ErrorBoundary> en cada ruta
const Page = ({ children }) => <ErrorBoundary>{children}</ErrorBoundary>

export default function AppRoutes() {
  // Component structure for Home page (reused for both languages)
  const HomePage = (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Loader />
      </ErrorBoundary>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </>
  )

  // Blog (con Header arriba)
  const BlogPage = (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <BlogPost />
      </ErrorBoundary>
    </>
  )

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Routes>
        {/* ---------- Home ---------- */}
        <Route path='/' element={HomePage} />
        <Route path='/eng' element={HomePage} />

        {/* ---------- Blog ---------- */}
        <Route path='/blog/:slug' element={BlogPage} />
        <Route path='/eng/blog/:slug' element={BlogPage} />

        {/* ---------- Teo Chiappero ---------- */}
        <Route path='/teo-chiappero' element={<Page><TeoChiappero /></Page>} />
        <Route path='/eng/teo-chiappero' element={<Page><TeoChiappero /></Page>} />

        {/* ---------- Presupuestos ---------- */}
        <Route path='/presupuestos/agnes' element={<Page><Agnes /></Page>} />
        <Route path='/presupuestos/fullpower' element={<Page><FullPower /></Page>} />
        <Route path='/presupuestos/colegio-abogados' element={<Page><ColegioAbogados /></Page>} />
        <Route path='/presupuestos/tres-noches' element={<Page><TresNoches /></Page>} />
        <Route path='/presupuestos/lucho' element={<Page><Lucho /></Page>} />
        <Route path='/presupuestos/villa-mar-alimentos' element={<Page><VillaMarAlimentos /></Page>} />
        <Route path='/presupuestos/sb-yoga-shala' element={<Page><SBYogaShala /></Page>} />
        <Route path='/presupuestos/marybe' element={<Page><Marybe /></Page>} />
        <Route path='/presupuestos/domus' element={<Page><Domus /></Page>} />
        <Route path='/presupuestos/espacio-jl' element={<Page><EspacioJL /></Page>} />

        {/* ---------- Alias viejos (links ya enviados a clientes) ---------- */}
        <Route path='/budget/agnes' element={<Navigate to='/presupuestos/agnes' replace />} />
        <Route path='/presupuesto/fullpower' element={<Navigate to='/presupuestos/fullpower' replace />} />
        <Route path='/presupuesto/colegio-abogados' element={<Navigate to='/presupuestos/colegio-abogados' replace />} />

        {/* ---------- 404: cualquier otra URL vuelve al inicio ---------- */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </ErrorBoundary>
  )
}
