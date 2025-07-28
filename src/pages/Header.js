import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FiMenu, FiX, FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "../components/hero/extensions/AnimatedButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const socialLinks = [
    {
      icon: <FiInstagram />,
      name: "Instagram",
      link: "https://instagram.com/surcode",
    },
    {
      icon: <FiGithub />,
      name: "GitHub",
      link: "https://github.com/surcode",
    },
    {
      icon: <FiMail />,
      name: "Email",
      link: "mailto:info@surcode.com",
    },
  ];

  return (
    <HeaderContainer isScrolled={isScrolled}>
      {/* Sección 1: Logo */}
      <LogoSection>
        <LogoLink to="/">
          <LogoImg src="/logo.png" alt="Logo" />
        </LogoLink>
      </LogoSection>

      {/* Sección 2: Menú de Navegación */}
      <NavSection isScrolled={isScrolled}>
        <Nav>
          <StyledLink
            to="hero"
            smooth={true}
            duration={300}
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </StyledLink>
          <StyledLink
            to="servicios"
            smooth={true}
            duration={300}
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </StyledLink>
          <StyledLink
            to="team"
            smooth={true}
            duration={300}
            onClick={() => setIsOpen(false)}
          >
            Equipo
          </StyledLink>
          <StyledLink
            to="portfolio"
            smooth={true}
            duration={300}
            onClick={() => setIsOpen(false)}
          >
            Proyectos
          </StyledLink>
          <StyledLink
            to="contact"
            smooth={true}
            duration={300}
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </StyledLink>
        </Nav>
      </NavSection>

      {/* Sección 3: Botón de Contacto */}
      <ContactSection>
        <AnimatedButton to="#contact">Contactanos!</AnimatedButton>
      </ContactSection>

      {/* Menú móvil */}
      <MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MobileMenuIcon>

      {/* Overlay y Sidebar Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <MobileOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <MobileSidebar
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Logo en el sidebar */}
              <SidebarLogo>
                <LogoLink to="/" onClick={() => setIsOpen(false)}>
                  <LogoImg src="/logo.png" alt="Logo" />
                </LogoLink>
              </SidebarLogo>

              {/* Menú de navegación */}
              <SidebarNav>
                <SidebarLink
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Inicio
                </SidebarLink>
                <SidebarLink
                  to="services"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </SidebarLink>
                <SidebarLink
                  to="team"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Equipo
                </SidebarLink>
                <SidebarLink
                  to="proyectos"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Proyectos
                </SidebarLink>
                <SidebarLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </SidebarLink>
              </SidebarNav>

              {/* Botón de contacto */}
              <SidebarContact>
                <AnimatedButton to="#contact" onClick={() => setIsOpen(false)}>
                  Contactanos!
                </AnimatedButton>
              </SidebarContact>

              {/* Redes sociales */}
              <SidebarSocial>
                <SocialTitle>Síguenos</SocialTitle>
                <SocialLinks>
                  {socialLinks.map((social, index) => (
                    <SocialLink
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </SocialLink>
                  ))}
                </SocialLinks>
              </SidebarSocial>
            </MobileSidebar>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: ${props => props.isScrolled ? '1fr 1fr' : '1fr 2fr 1fr'};
  align-items: center;
  height: 80px;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: transparent;
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: ${props => props.isScrolled ? '1fr 1fr' : '1fr 1.5fr 1fr'};
    height: 70px;
    padding: 0.8rem 1.5rem;
  }

  /* Mobile */
  @media (max-width: 767px) {
    grid-template-columns: 1fr auto;
    justify-content: space-between;
    backdrop-filter: ${props => props.isScrolled ? 'blur(8px)' : 'none'};
    -webkit-backdrop-filter: ${props => props.isScrolled ? 'blur(8px)' : 'none'};
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LogoLink = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    &:hover {
      transform: scale(1.03);
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

const LogoImg = styled.img`
  height: 100px;
  object-fit: contain;

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 80px;
  }

  /* Mobile */
  @media (max-width: 767px) {
    height: 70px;
  }
`;

const NavSection = styled.div`
  display: ${props => props.isScrolled ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease;

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    display: ${props => props.isScrolled ? 'none' : 'flex'};
  }

  /* Mobile */
  @media (max-width: 767px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    gap: 1.2rem;
  }
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    
    /* Reducir el botón en tablet */
    button, a {
      font-size: 0.9rem;
      padding: 0.6rem 1.2rem;
    }
  }

  /* Mobile */
  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: white;

  /* Mobile */
  @media (max-width: 767px) {
    display: block;
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 80vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  backdrop-filter: blur(2px);
`;

const MobileSidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 80vw;
  height: 100%;
  background: var(--background-color);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
`;

const SidebarLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex: 1;
`;

const SidebarLink = styled(ScrollLink)`
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  font-family: var(--heading-font);

  &:hover {
    color: var(--primary-color);
    padding-left: 1rem;
  }
`;

const SidebarContact = styled.div`
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
`;

const SidebarSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SocialTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(102, 211, 250, 0.1);
  border: 1px solid rgba(102, 211, 250, 0.2);
  border-radius: 50%;
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: rgba(102, 211, 250, 0.2);
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 211, 250, 0.3);
  }
`;

const StyledLink = styled(ScrollLink)`
  text-decoration: none;
  position: relative;
  overflow: hidden;
  z-index: 2;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1rem;
  text-transform: uppercase;
  color: inherit;
  font-family: var(--heading-font);
  cursor: pointer;

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 0.9rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    height: 0.25rem;
    border-radius: 0.625rem;
    background: linear-gradient(137deg, #1edd8e 10%, #53c0d2 62%);
    will-change: transform;
    opacity: 1;
    transform: translateX(-3.125rem);
    transition: opacity 0.35s, transform 0.35s;
    left: 0;
    right: 0;

    /* Tablet */
    @media (min-width: 768px) and (max-width: 1023px) {
      bottom: -0.4rem;
      height: 0.2rem;
    }
  }
`;
