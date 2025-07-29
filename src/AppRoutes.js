// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BlogPost from './components/blog/BlogPost'
import Loader from './components/loader'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Loader />
          <Home />
        </>
      } />
      <Route path='/blog/:slug' element={<BlogPost />} />
    </Routes>
  )
}
