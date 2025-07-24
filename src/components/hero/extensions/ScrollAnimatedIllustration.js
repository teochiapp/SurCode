import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollAnimatedIllustration = () => {
  const { scrollY } = useScroll();
  
  // Transformaciones basadas en scroll
  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, 100]);
  const y3 = useTransform(scrollY, [0, 300], [0, -150]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const rotate = useTransform(scrollY, [0, 300], [0, 360]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.3]);
  
  // Línea que sale del círculo hacia abajo
  const lineHeight = useTransform(scrollY, [0, 1500], [0, 1200]);
  const lineOpacity = useTransform(scrollY, [0, 300], [0, 0.9]);
  const circleY = useTransform(scrollY, [0, 1500], [0, 1150]);
  const circleOpacity = useTransform(scrollY, [0, 400], [0, 1]);

  return (
    <motion.div
      style={{ scale, opacity }}
      transition={{ duration: 0.1 }}
    >
      <TechIllustration>
        <motion.div 
          className="floating-circle circle-1"
          style={{ y: y1 }}
        ></motion.div>
        <motion.div 
          className="floating-circle circle-2"
          style={{ y: y2 }}
        ></motion.div>
        <motion.div 
          className="floating-circle circle-3"
          style={{ y: y3 }}
        ></motion.div>
        <motion.div 
          className="connection-line line-1"
          style={{ rotate }}
        ></motion.div>
        <motion.div 
          className="connection-line line-2"
          style={{ rotate: useTransform(scrollY, [0, 300], [0, -180]) }}
        ></motion.div>
        
        {/* Partículas adicionales que aparecen al hacer scroll */}
        <motion.div
          className="scroll-particle particle-1"
          style={{ 
            opacity: useTransform(scrollY, [0, 100], [0, 0.8]),
            scale: useTransform(scrollY, [0, 100], [0, 1])
          }}
        ></motion.div>
        <motion.div
          className="scroll-particle particle-2"
          style={{ 
            opacity: useTransform(scrollY, [0, 150], [0, 0.6]),
            scale: useTransform(scrollY, [0, 150], [0, 1])
          }}
        ></motion.div>
        <motion.div
          className="scroll-particle particle-3"
          style={{ 
            opacity: useTransform(scrollY, [0, 200], [0, 0.7]),
            scale: useTransform(scrollY, [0, 200], [0, 1])
          }}
        ></motion.div>
      </TechIllustration>
      
      {/* Línea que sale del círculo hacia abajo */}
      <motion.div
        className="scroll-line"
        style={{ 
          height: lineHeight,
          opacity: lineOpacity
        }}
      />
      
      {/* Círculo final de la línea */}
      <motion.div
        className="line-end-circle"
        style={{ 
          y: circleY,
          opacity: circleOpacity
        }}
      />
    </motion.div>
  );
};

export default ScrollAnimatedIllustration;

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
    filter: blur(1px);
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
    filter: blur(0.5px);
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
    box-shadow: 0 0 20px rgba(30, 221, 142, 0.3);
    transition: all 0.3s ease;
  }
  
  .floating-circle:hover {
    transform: scale(1.2);
    box-shadow: 0 0 30px rgba(30, 221, 142, 0.6);
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
    box-shadow: 0 0 10px rgba(30, 221, 142, 0.4);
    border-radius: 1px;
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
  

  
  /* Partículas que aparecen al hacer scroll */
  .scroll-particle {
    position: absolute;
    border-radius: 50%;
    background: var(--accent-color);
    box-shadow: 0 0 15px rgba(83, 192, 210, 0.5);
    animation: sparkle 2s ease-in-out infinite;
  }
  
  .particle-1 {
    width: 8px;
    height: 8px;
    top: 15%;
    right: 25%;
    animation-delay: 0s;
  }
  
  .particle-2 {
    width: 6px;
    height: 6px;
    top: 75%;
    left: 15%;
    animation-delay: 0.5s;
  }
  
  .particle-3 {
    width: 10px;
    height: 10px;
    bottom: 30%;
    right: 10%;
    animation-delay: 1s;
  }
  
  @keyframes sparkle {
    0%, 100% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.3);
      opacity: 1;
    }
  }
  
  /* Línea que sale del círculo hacia abajo */
  .scroll-line {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to bottom, 
      var(--primary-color) 0%, 
      var(--primary-color) 20%, 
      var(--accent-color) 40%, 
      var(--secondary-color) 60%, 
      rgba(83, 192, 210, 0.3) 80%, 
      transparent 100%
    );
    width: 8px;
    border-radius: 4px;
    box-shadow: 
      0 0 25px rgba(30, 221, 142, 0.9),
      0 0 15px rgba(83, 192, 210, 0.6),
      0 0 8px rgba(30, 221, 142, 0.4);
    transform-origin: top;
    transition: all 0.1s ease;
    filter: blur(0.5px);
    z-index: 10;
  }
  
  /* Círculo final de la línea */
  .line-end-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 12px;
    background: var(--primary-color);
    border-radius: 50%;
    box-shadow: 
      0 0 20px rgba(30, 221, 142, 0.8),
      0 0 10px rgba(83, 192, 210, 0.6);
    z-index: 11;
  }
`; 