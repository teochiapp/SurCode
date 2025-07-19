import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiDatabase, FiSettings, FiServer, FiTrendingUp } from 'react-icons/fi'
import GradientText from '../GradientText'
  
function Services() {
  const services = [
    {
      icon: <FiCode />,
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos y responsivos con las últimas tecnologías. Desde landing pages hasta aplicaciones web complejas.",
      features: ["React & Next.js", "Diseño Responsivo", "SEO Optimizado", "Performance"]
    },    
    {
      icon: <FiDatabase />,
      title: "Sistemas y Bases de Datos",
      description: "Desarrollamos la lógica interna de tu aplicación y gestionamos toda la información de manera segura y eficiente.",
      features: ["Bases de Datos", "Sistemas de Usuarios", "Procesamiento de Datos", "Integraciones"]
    },
    {
      icon: <FiSmartphone />,
      title: "Desarrollo Móvil",
      description: "Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android con experiencia de usuario excepcional.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store"]
    },
    {
      icon: <FiSettings />,
      title: "Mantenimiento",
      description: "Mantenemos y actualizamos tus aplicaciones web y móviles para garantizar su funcionamiento óptimo y seguridad continua.",
      features: ["Actualizaciones de Seguridad", "Backups Automáticos", "Monitoreo 24/7", "Soporte Técnico"]
    },
    {
      icon: <FiTrendingUp />,
      title: "Optimización",
      description: "Optimizamos el rendimiento de tus aplicaciones web para mejorar la velocidad, SEO y experiencia del usuario.",
      features: ["Optimización de Velocidad", "SEO Técnico", "Compresión de Imágenes", "Caching Avanzado"]
    },{
      icon: <FiServer />,
      title: "Servicio de Hosting",
      description: "Ofrecemos hosting confiable y escalable para tus aplicaciones web con alta disponibilidad y soporte técnico especializado.",
      features: ["Hosting Compartido", "VPS Dedicados", "SSL Gratuito", "Panel de Control"]
    }
  ]

  return (
    <ServicesContainer id="servicios">
      <SectionTitle>
        <GradientText
          colors={["#66D3FA", "#00BFFF", "#2BA4D8", "#53c0d2"]}
          animationSpeed={4}
          showBorder={false}
        >
          Nuestros Servicios
        </GradientText>
      </SectionTitle>
      
      <SectionSubtitle>Soluciones tecnológicas integrales para hacer crecer tu negocio</SectionSubtitle>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <FeaturesList>
                {service.features.map((feature, featureIndex) => (
                  <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                ))}
              </FeaturesList>
            </ServiceCard>
          </motion.div>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  )
}

export default Services

const ServicesContainer = styled.section`
  padding: 5rem 2rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SectionTitle = styled.h2`
    font-size: 2.6rem;
    margin-bottom: 1rem;
    text-align: center;
    z-index: 10;
    text-transform: uppercase;
    letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.8;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
`

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px);
    border-color: var(--primary-color);
    box-shadow: 0 20px 40px rgba(102, 211, 250, 0.2);
  }
`

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1rem;
`

const ServiceDescription = styled.p`
  color: var(--text-color);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`

const FeatureItem = styled.li`
  background: rgba(102, 211, 250, 0.1);
  color: var(--primary-color);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid rgba(102, 211, 250, 0.3);
`