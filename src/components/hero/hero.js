import React from 'react'
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion'
import DarkVeil from './extensions/DarkVeil'
import SplitText from "./extensions/SplitText";
import AnimatedButton from './extensions/AnimatedButton';
import GradientText from '../GradientText';

function Hero() {
  return (
    <HeroWrapper id="hero">
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
                Transformamos ideas en soluciones tecnológicas
              </GradientText>
            </Title>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Subtitle>
              Somos un equipo multidisciplinario que te acompaña desde la concepción de la idea hasta su implementación.
            </Subtitle>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
          <AnimatedButton to="#contact">Contactanos!</AnimatedButton>
 
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
          </motion.div>
        </HeroText>
        
        <HeroIllustration>
          <TechIllustration>
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
            <div className="connection-line line-1"></div>
            <div className="connection-line line-2"></div>
          </TechIllustration>
        </HeroIllustration>
      </HeroContent>
    </HeroWrapper>
  )
}


export default Hero

const HeroWrapper = styled.section`
  width: 100%;
  height: 100vh;
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
`

const Title = styled.h3`
  font-family: var(--text-font, 'Red Hat Display', sans-serif);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 10px 0 !important;
  padding: 0 !important;
  text-align: left !important;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`

const Subtitle = styled.p`
  font-family: var(--text-font, 'Inter', sans-serif);
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 500px;
`

const HeroIllustration = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  
  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 2rem;
  }
`

const TechIllustration = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
    border-radius: 50%;
    opacity: 0.1;
    animation: pulse 3s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, var(--secondary-color), var(--primary-color));
    border-radius: 50%;
    opacity: 0.2;
    animation: pulse 3s ease-in-out infinite 1s;
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 0.3;
    }
  }
  
  /* Círculos flotantes */
  .floating-circle {
    position: absolute;
    border-radius: 50%;
    background: var(--primary-color);
    opacity: 0.6;
    animation: float 6s ease-in-out infinite;
  }
  
  .circle-1 {
    width: 20px;
    height: 20px;
    top: 20%;
    left: 20%;
    animation-delay: 0s;
  }
  
  .circle-2 {
    width: 15px;
    height: 15px;
    top: 70%;
    right: 20%;
    animation-delay: 2s;
  }
  
  .circle-3 {
    width: 25px;
    height: 25px;
    bottom: 20%;
    left: 30%;
    animation-delay: 4s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  /* Líneas de conexión */
  .connection-line {
    position: absolute;
    background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    height: 2px;
    opacity: 0.3;
    animation: flow 4s linear infinite;
  }
  
  .line-1 {
    width: 100px;
    top: 30%;
    left: 10%;
    transform: rotate(45deg);
  }
  
  .line-2 {
    width: 80px;
    top: 60%;
    right: 15%;
    transform: rotate(-30deg);
  }
  
  @keyframes flow {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.1;
    }
  }
`