import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import AppRoutes from './AppRoutes'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  )
}

export default App