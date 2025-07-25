import React from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Hero from '../components/hero/hero'
import Services from '../components/services/services'
import Portfolio from '../components/portfolio/portfolio'
import Team from '../components/team/Team'
import TeamMobile from '../components/team/TeamMobile';
import Blog from '../components/blog/blog'
import Contact from '../components/contact/contact'
import Skills from '../components/skills/skills'
import Footer from './Footer';

const Home = () => {
  // Refs para detectar cuando cada componente está en viewport
  const servicesRef = useRef(null)
  const teamRef = useRef(null)
  const blogRef = useRef(null)
  const portfolioRef = useRef(null)
  const contactRef = useRef(null)
  const skillsRef = useRef(null)
  const footerRef = useRef(null);

  // Hooks para detectar cuando cada componente está visible
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" })
  const isTeamInView = useInView(teamRef, { once: true, margin: "-100px" })
  const isBlogInView = useInView(blogRef, { once: true, margin: "-100px" })
  const isPortfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" })
  const isContactInView = useInView(contactRef, { once: true, margin: "-100px" })
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const isFooterInView = useInView(footerRef, { once: true, margin: "-100px" });

  return (
    <HomeContainer>
        <Hero />
        
        <motion.div
          ref={servicesRef}
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          animate={isServicesInView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -100, rotate: -10 }}
          transition={{ duration: 1.2, ease: "backOut" }}
        >
          <Services />
        </motion.div>
        
        <motion.div
          ref={teamRef}
          initial={{ opacity: 0, y: 80, scale: 0.92, rotateZ: -8 }}
          animate={isTeamInView ? { opacity: 1, y: 0, scale: 1, rotateZ: 0 } : { opacity: 0, y: 80, scale: 0.92, rotateZ: -8 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
        <Portfolio /> 
        </motion.div>

        <motion.div
          ref={skillsRef}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isSkillsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <TeamDesktopWrapper>
            <Team />
          </TeamDesktopWrapper>

          <TeamMobileWrapper>
            <TeamMobile />
          </TeamMobileWrapper>
        </motion.div>


        <motion.div
          ref={blogRef}
          initial={{ opacity: 0, y: -50, rotateX: 15 }}
          animate={isBlogInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: -50, rotateX: 15 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Skills />
        </motion.div>
        
        <motion.div
          ref={portfolioRef}
          initial={{ opacity: 0, y: 100, rotateY: 45 }}
          animate={isPortfolioInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 100, rotateY: 45 }}
          transition={{ duration: 1.5, ease: "circOut" }}
        >
          <Blog />
        </motion.div>
        
      <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 80, scale: 0.92, rotateZ: -8 }}
          animate={isContactInView ? { opacity: 1, y: 0, scale: 1, rotateZ: 0 } : { opacity: 0, y: 80, scale: 0.92, rotateZ: -8 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
        <Contact /> 
        </motion.div>

        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={isFooterInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "backOut" }}
        >
          <Footer />
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
  width: 100%;
`
const TeamDesktopWrapper = styled.div`
  display: block;

  @media (max-width: 767px) {
    display: none;
  }
`;

const TeamMobileWrapper = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;
