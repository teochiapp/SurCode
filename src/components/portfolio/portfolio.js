import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';
import styled, { keyframes } from 'styled-components';
import GradientText from '../GradientText';
import { FaReact, FaNodeJs, FaDatabase, FaWordpress } from 'react-icons/fa';
import cardsPortfolio from '../../data/projectsData'

// Componente Card
const Card = forwardRef(({ customClass, ...rest }, ref) => (
  <CardStyled
    ref={ref}
    {...rest}
    className={`card ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
  />
));
Card.displayName = 'Card';

// Lógica CardSwap
const makeSlot = (i, distX, distY, total) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});
const placeNow = (el, slot, skew) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = ({
  width = 700,
  height = 350,
  cardDistance = 100,
  verticalDistance =100,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children,
  isVisible = true, // <-- NUEVO
}) => {
  // Responsividad mejorada para CardSwap
  const isMobile = window.innerWidth <= 600;
  const isTablet = window.innerWidth > 600 && window.innerWidth <= 900;
  const swapWidth = isMobile ? 250 : isTablet ? 500 : width;
  const swapHeight = isMobile ? 180 : isTablet ? 260 : height;
  const isDesktop = window.innerWidth > 900 && window.innerWidth <= 1200;
  const isLargeDesktop = window.innerWidth > 1200;
  
  // Ajustar distancias según el tamaño de pantalla
  const adjustedCardDistance = isMobile ? 40 : isTablet ? 60 : cardDistance;
  const adjustedVerticalDistance = isMobile ? 50 : isTablet ? 60 : verticalDistance;
  const adjustedSkewAmount = isMobile ? 3 : isTablet ? 4 : skewAmount;

  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef(null);
  const intervalRef = useRef();
  const container = useRef(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(r.current, makeSlot(i, adjustedCardDistance, adjustedVerticalDistance, total), adjustedSkewAmount)
    );
  }, [refs, adjustedCardDistance, adjustedVerticalDistance, adjustedSkewAmount]);

  useEffect(() => {
    if (!isVisible) return; // No hagas nada si no está visible

    const swap = () => {
      if (!refs.length) return;

      const total = refs.length;
      const newOrder = [...order.current];
      const first = newOrder.shift();
      newOrder.push(first);
      order.current = newOrder;

      const tl = gsap.timeline();
      tlRef.current = tl;

      // Animar cada card a su nueva posición
      newOrder.forEach((cardIndex, i) => {
        const slot = makeSlot(i, adjustedCardDistance, adjustedVerticalDistance, total);
        const card = refs[cardIndex].current;
        if (card) {
          tl.to(card, {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            skewY: adjustedSkewAmount,
            zIndex: slot.zIndex,
            duration: config.durMove,
            ease: config.ease,
          }, 0);
        }
      });

      // Callback para el índice actual
      if (onCardClick) {
        onCardClick(newOrder[0]);
      }
    };

    const startInterval = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(swap, delay);
    };

    const pause = () => {
      if (pauseOnHover && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    const resume = () => {
      if (pauseOnHover) {
        startInterval();
      }
    };

    startInterval();

    if (pauseOnHover && container.current) {
      container.current.addEventListener('mouseenter', pause);
      container.current.addEventListener('mouseleave', resume);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (pauseOnHover && container.current) {
        container.current.removeEventListener('mouseenter', pause);
        container.current.removeEventListener('mouseleave', resume);
      }
    };
  }, [refs, delay, pauseOnHover, onCardClick, isVisible, adjustedCardDistance, adjustedVerticalDistance, adjustedSkewAmount, config]);

  const rendered = childArr.map((child, i) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        key: i,
        ref: refs[i],
        onClick: () => onCardClick && onCardClick(i),
        style: {
          width: swapWidth,
          height: swapHeight,
          cursor: 'pointer',
        },
      });
    }
    return child;
  });

  return (
    <CardSwapContainer ref={container} style={{ width: swapWidth, height: swapHeight }}>
      {rendered}
    </CardSwapContainer>
  );
};

// Componente principal portfolio
function Portfolio() {
  // Estado para alternar el borde animado
  const [showHorizontal, setShowHorizontal] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowHorizontal((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Datos de proyectos
  const projects = cardsPortfolio;

  const [currentIndex, setCurrentIndex] = useState(0);

  // --- NUEVO: Visibilidad del portfolio ---
  const [isVisible, setIsVisible] = useState(true);
  const portfolioRef = useRef(null);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }
    return () => {
      if (portfolioRef.current) observer.unobserve(portfolioRef.current);
    };
  }, []);
  // --- FIN NUEVO ---

  // Actualiza el índice cuando la card swappea automáticamente
  useEffect(() => {
    if (!isVisible) return; // No hagas nada si no está visible
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [projects.length, isVisible]);

  return (
    <PortfolioFlex ref={portfolioRef}>
      <ContainerTitle id="proyectos">
        <TopBorder /><BottomBorder /><LeftBorder /><RightBorder />
        <div style={{ position: 'relative', zIndex: 20 }}>
          <GradientText
            colors={["var(--text-color)", "var(--primary-color)", "var(--primary-cyan)", "var(--accent-color)", "var(--text-color)"]}
            animationSpeed={4}
            showBorder={false}
          >
            <Title>{projects[currentIndex].title}</Title>
          </GradientText>
          <Desc>{projects[currentIndex].description}</Desc>
          <TechList>
            {projects[currentIndex].techs && projects[currentIndex].techs.map((tech, idx) => (
              <TechItem key={idx}>{tech.icon} {tech.name}</TechItem>
            ))}
          </TechList>
          {projects[currentIndex].url && (
            <GoButton
              href={projects[currentIndex].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a la página
            </GoButton>
          )}
        </div>
      </ContainerTitle>
      <ContainerPortfolio>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
          onCardClick={(idx) => setCurrentIndex(idx)}
          isVisible={isVisible} // <-- NUEVO
        >
          {projects.map((project, idx) => (
            <Card key={idx}>
              <CardImage src={project.image} alt={project.title} />
            </Card>
          ))}
        </CardSwap>
      </ContainerPortfolio>
    </PortfolioFlex>
  );
}

export default Portfolio;



// Estilos con styled-components

const ContainerTitle = styled.div`
  position: absolute;
  right: 10rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
  padding: 2rem 2.5rem;
  background: rgba(18, 26, 46, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  overflow: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: 320px;
  max-width: 90vw;
  box-sizing: border-box;
  gap: 1.2rem;
  height: 100%;
  @media (max-width: 1500px) {
    position: static;
    transform: none;
    margin: 0 auto 2rem auto;
    right: 0;
    top: 0;
    width: 100%;
    max-width: 600px;
    border-radius: 16px;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
    min-width: 0;
  }
  @media (max-width: 1400px) {
    right: 8rem;
    padding: 1.8rem 2rem;
    gap: 1.1rem;
    min-width: 300px;
  }
  @media (max-width: 1200px) {
    right: 2rem;
    padding: 1.5rem 1.2rem;
    gap: 1.5rem;
    min-width: 280px;
  }
  @media (max-width: 900px) {
    position: static;
    transform: none;
    margin: 0 auto 2rem auto;
    right: 0;
    top: 0;
    width: 100%;
    max-width: 100%;
    border-radius: 14px;
    padding: 1.7rem 0.7rem;
    gap: 2rem;
    min-width: 0;
  }
  @media (max-width: 600px) {
    padding: 1.2rem 0.3rem;
    min-width: 0;
    border-radius: 10px;
    gap: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-family: var(--heading-font);
  margin-bottom: 0.5rem;
  width: 500px;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  word-break: break-word;
  @media (max-width: 1500px) {
    font-size: 2.4rem;
    width: 100%;
    text-align: center;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 1400px) {
    font-size: 2.5rem;
    width: 450px;
  }
  @media (max-width: 1200px) {
    font-size: 2.2rem;
    width: 400px;
  }
  @media (max-width: 900px) {
    font-size: 2.1rem;
    width: 100%;
    margin-bottom: 0.7rem;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
    width: 100%;
    margin-bottom: 0.9rem;
  }
`;

const Desc = styled.p`
  color: var(--text-color);
  font-size: 1.25rem;
  font-family: var(--text-font);
  margin-bottom: 0.7rem;
  font-weight: 500;
  word-break: break-word;
  @media (max-width: 1500px) {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  @media (max-width: 1400px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1200px) {
    font-size: 1.15rem;
  }
  @media (max-width: 900px) {
    font-size: 1.1rem;
    margin-bottom: 1.1rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }
`;

const PortfolioFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  position: relative;
  margin-top: 90px;  
  margin-bottom: 100px;
  @media (max-width: 1500px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    gap: 3rem;
    margin-top: 80px;
    margin-bottom: 80px;
    padding: 0 2rem;
  }
  @media (max-width: 1400px) {
    height: 520px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  @media (max-width: 1200px) {
    height: 500px;
    margin-top: 70px;
    margin-bottom: 70px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
    gap: 2rem;
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    gap: 1.5rem;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 0 0.5rem;
  }
`;

const ContainerPortfolio = styled.div`
  height: 600px;
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1500px) {
    width: 100%;
    height: 400px;
    min-height: 300px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  @media (max-width: 1400px) {
    height: 520px;
  }
  @media (max-width: 1200px) {
    height: 500px;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 350px;
    min-height: 250px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  @media (max-width: 600px) {
    height: 220px;
    min-height: 120px;
    margin-bottom: 2rem;
    margin-right: 7rem;

    min-height: 180px;
    margin-bottom: 1.5rem;
  }
`;

const CardSwapContainer = styled.div`
  position: absolute;
  bottom: 120px;
  right: 0;
  transform: translate(95%, 20%);
  transform-origin: bottom right;
  perspective: 900px;
  overflow: visible;
  @media (max-width: 1500px) {
    position: static;
    transform: none;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
    perspective: 700px;
  }
  @media (max-width: 1400px) {
    transform: scale(0.9) translate(0%, 25%);
    bottom: 80px;
  }
  @media (max-width: 1200px) {
    transform: scale(0.85) translate(75%, 30%);
    bottom: 60px;
  }
  @media (max-width: 900px) {
    position: static;
    transform: none;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    right: 0;
    perspective: 600px;
  }
  @media (max-width: 600px) {
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: 0 auto;
    perspective: 400px;
  }
`;

const CardStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 18px;
  background: var(--gradient-card);
  box-shadow: 0 8px 32px 0 rgba(13,211,250,0.10);
  transform-style: preserve-3d;
  will-change: transform;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin-bottom: 100px;
  @media (max-width: 1400px) {
    border-radius: 16px;
    margin-bottom: 80px;
  }
  @media (max-width: 1200px) {
    border-radius: 14px;
    margin-bottom: 70px;
  }
  @media (max-width: 900px) {
    border-radius: 12px;
    margin-bottom: 60px;
  }
  @media (max-width: 600px) {
    border-radius: 8px;
    margin-bottom: 40px;
  }
`;

const GoButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-family: var(--heading-font);
  font-weight: 600;
  color: var(--primary-white);
  background: var(--gradient-primary);
  border: none;
  border-radius: 30px;
  box-shadow: 0 2px 16px 0 rgba(13,211,250,0.10);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  &:hover {
    background: var(--secondary-color);
    color: var(--secondary-bg);
    transform: translateY(-2px) scale(1.04);
  }
  @media (max-width: 1400px) {
    padding: 0.7rem 1.8rem;
    font-size: 1.05rem;
  }
  @media (max-width: 1200px) {
    padding: 0.65rem 1.6rem;
    font-size: 1rem;
  }
  @media (max-width: 900px) {
    padding: 0.6rem 1.4rem;
    font-size: 0.95rem;
    margin-top: 1.2rem;
  }
  @media (max-width: 600px) {
    padding: 0.5rem 1.2rem;
    font-size: 0.95rem;
    margin-top: 1rem;
  }
`;

const TechList = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 1.2rem;
  margin-bottom: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    gap: 1rem;
  }
  @media (max-width: 1200px) {
    gap: 0.9rem;
  }
  @media (max-width: 900px) {
    gap: 0.8rem;
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    gap: 0.5rem;
    margin-top: 0.7rem;
    margin-bottom: 0.2rem;
  }
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: var(--primary-cyan);
  background: rgba(13,211,250,0.08);
  border-radius: 18px;
  padding: 0.3rem 1rem 0.3rem 0.7rem;
  font-family: var(--text-font);
  font-weight: 600;
  @media (max-width: 1400px) {
    font-size: 1.05rem;
    padding: 0.25rem 0.9rem 0.25rem 0.6rem;
  }
  @media (max-width: 1200px) {
    font-size: 1rem;
    padding: 0.2rem 0.8rem 0.2rem 0.5rem;
  }
  @media (max-width: 900px) {
    font-size: 0.95rem;
    padding: 0.2rem 0.7rem 0.2rem 0.5rem;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 0.2rem 0.7rem 0.2rem 0.5rem;
  }
`;

// Animaciones de lombriz para los bordes
const topBorderAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;
const bottomBorderAnimation = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;
const leftBorderAnimation = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(-100%); }
`;
const rightBorderAnimation = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const TopBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-cyan), transparent);
  animation: ${topBorderAnimation} 1.2s linear infinite;
  z-index: 10;
`;
const BottomBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-cyan), transparent);
  animation: ${bottomBorderAnimation} 1.2s linear infinite;
  z-index: 10;
`;
const LeftBorder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent, var(--primary-cyan), transparent);
  animation: ${leftBorderAnimation} 1.2s linear infinite;
  z-index: 10;
`;
const RightBorder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 2px;
  background: linear-gradient(180deg, transparent, var(--primary-cyan), transparent);
  animation: ${rightBorderAnimation} 1.2s linear infinite;
  z-index: 10;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  object-fit: cover;
  display: block;
  background: transparent;
  max-width: 100%;
  max-height: 100%;
`