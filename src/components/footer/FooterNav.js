import React from 'react';
import styled from 'styled-components';


const links = [
  { href: '#home', label: 'Inicio' },
  { href: '#services', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#team', label: 'Equipo' },
  { href: '#blog', label: 'Blog' },
];

const FooterNav = ({ column = false, gap }) => (
  <Nav column={column} gap={gap}>
    {links.map(link => (
      <NavLink key={link.href} href={link.href}>{link.label}</NavLink>
    ))}
  </Nav>
);

export default FooterNav; 


const Nav = styled.nav`
  display: flex;
  gap: ${props => props.gap || '2.2rem'};
  padding: 0;
  z-index: 2;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  align-items: left;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.13rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-color);
  }
`;