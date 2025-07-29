// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogPost from './components/blog/BlogPost'
import Loader from './components/loader'
import ErrorBoundary from './components/ErrorBoundary'

export default function AppRoutes() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path='/' element={
          <>
            <ErrorBoundary>
              <Loader />
            </ErrorBoundary>
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          </>
        } />
        <Route path='/blog/:slug' element={
          <ErrorBoundary>
            <BlogPost />
          </ErrorBoundary>
        } />
      </Routes>
    </ErrorBoundary>
  )
}
