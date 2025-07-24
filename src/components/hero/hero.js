import React from 'react'
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion'
import DarkVeil from './extensions/DarkVeil'
import SplitText from "./extensions/SplitText";
import AnimatedButton from './extensions/AnimatedButton';
import GradientText from '../GradientText';
import ScrollAnimatedIllustration from './extensions/ScrollAnimatedIllustration';

function Hero() {

  return (
    <HeroWrapper id="home">
      
      <RippleBackground>
        <DarkVeil 
          hueShift={37}
          noiseIntensity={0.0}
          scanlineIntensity={0}
          speed={1.2}
          scanlineFrequency={0.5}
          warpAmount={0.1}
          resolutionScale={1}
        />
      </RippleBackground>

      <HeroContent>
        <HeroText>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CustomDevTag>DESARROLLOS A MEDIDA</CustomDevTag>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Title>
              <GradientText
                colors={["var(--text-color), var(--primary-color)", "var(--primary-cyan)", "var(--accent-color)", "var(--text-color)"]}
                animationSpeed={6}
                showBorder={false}
              >
                Soluciones tecnológicas para impulsar tu crecimiento online
              </GradientText>
            </Title>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Subtitle>
              Te acompañamos en cada etapa: desde la idea hasta su implementación, evolución y mantenimiento online.
            </Subtitle>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
          <AnimatedButton to="#contact">Empecemos!</AnimatedButton>
 
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
          </motion.div>
        </HeroText>
        
        <HeroIllustration>
          <ScrollAnimatedIllustration />
        </HeroIllustration>
      </HeroContent>
      

    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.section`
  width: 100%;
  height: 95vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;

  @media (min-width: 1024px) {
    padding: 4rem;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    grid-template-rows: auto 1fr;
  }
`

const RippleBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
`

const HeroText = styled.div`
  flex: 1;
  color: white;
  z-index: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    order: 2;
  }
`

const CustomDevTag = styled.span`
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  margin: 0 0 0 0;
  backdrop-filter: blur(10px);
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(45deg, var(--secondary-color), var(--primary-color), var(--accent-color), var(--secondary-color));
    background-size: 300% 300%;
    animation: gradientShift 3s ease-in-out infinite;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    z-index: -2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: var(--secondary-color);
    border-radius: 18px;
    opacity: 0.1;
    z-index: -1;
  }
  
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`

const Title = styled.h3`
  font-family: var(--text-font, 'Red Hat Display', sans-serif);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 10px 0 15px !important;
  padding: 0 !important;
  text-align: left !important;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.2rem;
  }

  @media (max-width: 768px) {
    text-align: center !important;
  }
`

const Subtitle = styled.p`
  font-family: var(--text-font, 'Inter', sans-serif);
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const HeroIllustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 2rem;
  }
`