import React from 'react'
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion'
import DarkVeil from './extensions/DarkVeil'
import SplitText from "./extensions/SplitText";
import AnimatedButton from './extensions/AnimatedButton';

function Hero() {
  return (
    <HeroWrapper>
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
              <SplitText
                text="Transformamos ideas en soluciones tecnológicas"
                className="text-2xl font-semibold"
                delay={60}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
              />
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
          <AnimatedButton>Contactanos!</AnimatedButton>
 
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
          </motion.div>
        </HeroText>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 600px;

  @media (min-width: 1024px) {
    max-width: 800px;
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
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 0;
  backdrop-filter: blur(10px);
`

const Title = styled.h3`
  font-family: var(--text-font, 'Red Hat Display', sans-serif);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 !important;
  padding: 0 !important;
  color: white;
  text-align: left !important;

  p {
    margin-bottom: 0;
  text-align: left !important;

  }

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