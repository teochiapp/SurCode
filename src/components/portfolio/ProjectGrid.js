import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ProjectGrid = ({ projects, currentIndex, onProjectClick }) => {
  const [showHorizontal, setShowHorizontal] = useState(true);

  // Alternar animación cada 1 segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHorizontal((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <GridContainer>
      {projects.map((project, index) => (
        <GridItem
          key={index}
          isActive={index === currentIndex}
          onClick={() => onProjectClick(index)}
        >
          {/* Animación de lombriz */}
          {showHorizontal ? (
            <>
              <GridTopBorder />
              <GridBottomBorder />
            </>
          ) : (
            <>
              <GridLeftBorder />
              <GridRightBorder />
            </>
          )}
          
          <GridImage src={project.image} alt={project.title} />
          <GridOverlay>
            <GridTitle>{project.title}</GridTitle>
            <GridTechs>
              {project.techs && project.techs.slice(0, 3).map((tech, techIndex) => (
                <GridTech key={techIndex}>{tech.icon}</GridTech>
              ))}
            </GridTechs>
          </GridOverlay>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export default ProjectGrid;

// Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 5rem;

  @media (max-width: 1024px) and (min-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
`;

const GridItem = styled.div`
  position: relative;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: ${props => props.isActive ? 'scale(1.05)' : 'scale(1)'};
  box-shadow: ${props => props.isActive ? '0 10px 30px rgba(13, 211, 250, 0.3)' : '0 5px 15px rgba(0, 0, 0, 0.2)'};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(13, 211, 250, 0.3);
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${GridItem}:hover & {
    transform: scale(1.1);
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(18, 26, 46, 0.8) 0%, rgba(18, 26, 46, 0.4) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GridItem}:hover & {
    opacity: 1;
  }
`;

const GridTitle = styled.h4`
  font-size: 1rem;
  font-family: var(--heading-font);
  color: var(--primary-cyan);
  margin: 0;
  font-weight: 600;
`;

const GridTechs = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

const GridTech = styled.div`
  color: var(--primary-cyan);
  font-size: 1.2rem;
`;

// Animaciones de lombriz para los bordes del grid
const gridTopBorderAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const gridBottomBorderAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const gridLeftBorderAnimation = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const gridRightBorderAnimation = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const GridTopBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-cyan), transparent);
  animation: ${gridTopBorderAnimation} 1s linear infinite;
  z-index: 10;
`;

const GridBottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-cyan), transparent);
  animation: ${gridBottomBorderAnimation} 1s linear infinite;
  z-index: 10;
`;

const GridLeftBorder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent, var(--primary-cyan), transparent);
  animation: ${gridLeftBorderAnimation} 1s linear infinite;
  z-index: 10;
`;

const GridRightBorder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent, var(--primary-cyan), transparent);
  animation: ${gridRightBorderAnimation} 1s linear infinite;
  z-index: 10;
`; 