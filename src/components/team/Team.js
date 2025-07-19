import '../../index.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Card3D from './card3D';


const Container = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const Team = () => {

    return (
     <Container id="team"> 

        <Card3D 
        title="Tomás Cejas" 
        description="Full Stack Developer" 
        image="Img/ROMA.png" 
        />
        <Card3D 
        title="Teo Chiappero" 
        description="Frontend Developer" 
        image="Img/Teo.png" 
        />

     </Container>
    );
};

export default Team;