// components/AnimatedButton.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const AnimatedButton = ({ children = "Contáctanos", to, ...props }) => {
  const handleClick = () => {
    if (to) {
      const element = document.getElementById(to.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className="text">{children}</span>
      <span className="circle"></span>
      <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </Button>
  );
};

export default AnimatedButton;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  border: 4px solid transparent;
  background-color: transparent;
  border-radius: 100px;
  color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  font-family: var(--heading-font);

  svg {
    position: absolute;
    width: 24px;
    fill: var(--primary-color);
    z-index: 2;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .arr-1 {
    right: 16px;
  }

  .arr-2 {
    left: -25%;
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: var(--primary-color);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
  }

  .text {
    position: relative;
    z-index: 2;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover {
    box-shadow: 0 0 0 12px transparent;
    color: var(--background-color);
    border-radius: 12px;

    .arr-1 {
      right: -25%;
    }

    .arr-2 {
      left: 16px;
    }

    .text {
      transform: translateX(12px);
    }

    svg {
      fill: var(--background-color);
    }

    .circle {
      width: 220px;
      height: 220px;
      opacity: 1;
      background-color: var(--secondary-color);
    }
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 0 4px var(--primary-color);
  }
`;
