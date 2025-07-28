import React from 'react';
import styled, { keyframes } from 'styled-components';

const LogoBubbles = ({ onProjectClick }) => {
  const logos = [
    { src: '/portfolio/vinoLogo.png', alt: 'Vinotipia', projectIndex: 0 },
    { src: '/portfolio/JoyLogo.png', alt: 'Joycof', projectIndex: 1 },
    { src: '/portfolio/NhLogo.png', alt: 'NH', projectIndex: 2 },
    { src: '/portfolio/LogoSADA.svg', alt: 'SADA', projectIndex: 3 }
  ];

  return (
    <BubblesContainer>
      {logos.map((logo, index) => (
        <Bubble 
          key={index} 
          delay={index * 0.2}
          onClick={() => onProjectClick(logo.projectIndex)}
        >
          <LogoImage 
            src={logo.src} 
            alt={logo.alt} 
            isSada={logo.alt === 'SADA'}
            isJoycof={logo.alt === 'Joycof'}
          />
        </Bubble>
      ))}
    </BubblesContainer>
  );
};

export default LogoBubbles;

// Animaciones
const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled Components
const BubblesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  max-width: 260px;
  margin: 3rem auto 0;
  padding: 0 1rem;

  /* Tablet horizontal: 500px - 768px */
  @media (min-width: 500px) and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 500px;
    gap: 1rem;
  }

  /* Desktop: 769px+ */
  @media (min-width: 769px) {
    display: none;
  }
`;

const Bubble = styled.div`
  width: 100px;
  height: 100px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid var(--primary-cyan);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 20px rgba(13, 211, 250, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  animation: 
    ${fadeInScale} 0.6s ease-out ${props => props.delay}s both,
    ${float} 3s ease-in-out infinite ${props => props.delay + 1}s;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 
      0 12px 30px rgba(13, 211, 250, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-color: var(--accent-color);
  }

  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  &:nth-child(4) {
    animation-delay: 0.6s;
  }
`;

const LogoImage = styled.img`
  width: ${props => props.isSada ? '85%' : '70%'};
  height: ${props => props.isSada ? '85%' : '70%'};
  object-fit: contain;
  filter: brightness(1.1);
  transition: filter 0.3s ease;

  ${Bubble}:hover & {
    filter: brightness(1.3);
  }

  /* Filtro blanco para Joycof en mobile */
  @media (max-width: 767px) {
    filter: ${props => props.isJoycof 
      ? 'brightness(1.1) invert(1) brightness(2)' 
      : 'brightness(1.1)'
    };

    ${Bubble}:hover & {
      filter: ${props => props.isJoycof 
        ? 'brightness(1.3) invert(1) brightness(2)' 
        : 'brightness(1.3)'
      };
    }
  }
`; 