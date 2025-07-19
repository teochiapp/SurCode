import React, { useState } from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "../components/hero/extensions/AnimatedButton";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderContainer>
      {/* Sección 1: Logo */}
      <LogoSection>
        <LogoImg src="/logo.png" alt="Logo" />
      </LogoSection>

      {/* Sección 2: Menú de Navegación */}
      <NavSection>
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

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <StyledLink
              to="servicios"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </StyledLink>
            <StyledLink
              to="team"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Equipo
            </StyledLink>
            <StyledLink
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Proyectos
            </StyledLink>
            <StyledLink
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </StyledLink>

            <AnimatedButton to="#contact">Contactanos!</AnimatedButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  height: 80px;
  padding: 1rem 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
    justify-content: space-between;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LogoImg = styled.img`
  height: 120px;
  object-fit: contain;
`;

const NavSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--background-color);
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  }
`;
