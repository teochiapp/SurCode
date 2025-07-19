import React from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Hero from '../components/hero/hero'
import Services from '../components/services/services'
import Portfolio from '../components/portfolio/portfolio'
import Team from '../components/team/Team'
import Contact from '../components/contact/contact'

const Home = () => {
  // Refs para detectar cuando cada componente está en viewport
  const servicesRef = useRef(null)
  const teamRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)

  // Hooks para detectar cuando cada componente está visible
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" })
  const isPortfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })

  return (
    <HomeContainer>
        <Hero />
        
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, x: -100 }}
          animate={isServicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Services />
        </motion.div>
        
        <motion.div
          ref={teamRef}
          initial={{ opacity: 0, x: 100 }}
          animate={isTeamInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Team />
        </motion.div>
        
        <motion.div
          ref={portfolioRef}
          initial={{ opacity: 0, y: 100 }}
          animate={isPortfolioInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Portfolio />
        </motion.div>
        
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isContactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
    </HomeContainer>
  )
}

export default Home

const HomeContainer = styled.main`
  min-height: 100vh;
  background-color: var(--background-color, #0A0A0A);
  color: var(--text-color, #E6E6E6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`
