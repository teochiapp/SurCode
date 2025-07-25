import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GradientText from '../GradientText';
import ProjectCard from './ProjectCard';
import ProjectGrid from './ProjectGrid';
import cardsPortfolio from '../../data/projectsData';

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animaciones
const fadeIn = keyframes`
  0% { opacity: 0; transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
`;

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const projects = cardsPortfolio;

  useEffect(() => {
    // Animación de entrada del contenedor
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToProject = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play con pausa en hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextProject();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentProject = {
    ...projects[currentIndex],
    index: currentIndex
  };

  return (
    <PortfolioContainer ref={containerRef} id="proyectos">
      <HeaderSection>
          <GradientText
            colors={["var(--text-color)", "var(--primary-color)", "var(--primary-cyan)", "var(--accent-color)", "var(--text-color)"]}
          animationSpeed={3}
            showBorder={false}
        >
          <MainTitle>Nuestros Proyectos</MainTitle>
        </GradientText>
        <Subtitle>Soluciones digitales que transforman ideas en experiencias únicas</Subtitle>
      </HeaderSection>

      <CarouselContainer>
        <CarouselWrapper ref={carouselRef}>
          <ProjectCard
            key={`project-${currentIndex}-${direction}`}
            project={currentProject}
            direction={direction}
            isAnimating={isAnimating}
            onPrev={prevProject}
            onNext={nextProject}
            onProjectClick={goToProject}
            currentIndex={currentIndex}
            totalProjects={projects.length}
          />
        </CarouselWrapper>
      </CarouselContainer>

      <ProjectGrid
        projects={projects}
        currentIndex={currentIndex}
        onProjectClick={goToProject}
      />
    </PortfolioContainer>
  );
}

export default Portfolio;

// Styled Components
const PortfolioContainer = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(13, 211, 250, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  animation: ${fadeIn} 1s ease-out;
`;

const MainTitle = styled.h2`
  font-size: 3.5rem;
  font-family: var(--heading-font);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-cyan), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.8;
  margin: 0 auto;
  width: 100%;
  font-family: var(--text-font);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
  height: 600px;
  perspective: 1000px;

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 3rem;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`;