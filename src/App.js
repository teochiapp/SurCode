import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import AppRoutes from './AppRoutes'
import Loader from './components/loader'
import './index.css'

function App() {
  return (
    <>
      <Loader />
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App