import "../../index.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import React, { useRef } from "react";
import styled from "styled-components";

const Card3D = ({ title, description, image }) => {
  const cardreft = useRef(null);

  return (
    <CardContainer ref={cardreft}>
      <Cardimage src={image} alt="Roma" className="cardimage" />
      <h2>{title}</h2>
      <p>{description}</p>
      <SocialLinks>
        <SocialIcon href="#" aria-label="GitHub">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="#" aria-label="LinkedIn">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="#" aria-label="Instagram">
          <FaInstagram />
        </SocialIcon>
      </SocialLinks>
    </CardContainer>
  );
};

export default Card3D;

const SocialLinks = styled.div`
  display: flex;
  gap: 25px;
`;

const SocialIcon = styled.a`
  color: var(--primary-color);
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--secondary-color);
  }
`;

const Cardimage = styled.img`
  margin-bottom: 20px;
  border-radius: 15px;
  filter: brightness(0.9) contrast(1.05) saturate(1.1);
  width: 200px;
  height: 200px;
`;

// Animación para el box-shadow rotativo
const CardContainer = styled.div`
  width: 300px;
  height: 400px;
  background: radial-gradient(
    circle at 50% 30%,
    rgba(13, 211, 250, 0.18) 0%,
    rgba(16, 124, 157, 0.1) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  animation: shadowRotate 0.4s linear infinite;

  &:hover {
    box-shadow: 0 0 80px 20px var(--medium-blue);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  will-change: transform;

  h2 {
    margin: 10px 0;
    font-size: 24px;
    font-family: var(--heading-font);
    background: var(--gradient-primary);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  p {
    font-size: 18px;
    font-family: var(--heading-font);
    background: var(--text-color);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: 800;
  }

  @keyframes shadowRotate {
    0% {
      box-shadow: 0 -1px 7px 2px var(--medium-blue);
    }
    25% {
      box-shadow: 1px 0 7px 2px var(--medium-blue);
    }
    50% {
      box-shadow: 0 1px 7px 2px var(--medium-blue);
    }
    75% {
      box-shadow: -1px 0 7px 2px var(--medium-blue);
    }
    100% {
      box-shadow: 0 -1px 7px 2px var(--medium-blue);
    }
  }
`;
