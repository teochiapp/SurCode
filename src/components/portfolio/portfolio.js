import React from 'react'

function portfolio() {
  return (
    <div></div>
  )
}

export default portfolio

// import React, { useState } from 'react'
// import styled from 'styled-components'
// import { motion, AnimatePresence } from 'framer-motion'
// import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi'

// function Portfolio() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       category: "Web Development",
//       image: "/logo.png",
//       description: "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.",
//       longDescription: "Desarrollamos una plataforma de e-commerce moderna utilizando React para el frontend y Node.js para el backend. Incluye funcionalidades como carrito de compras, sistema de pagos integrado con Stripe, panel de administración para gestión de productos, y sistema de usuarios con autenticación JWT.",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
//       liveUrl: "https://ecommerce-demo.com",
//       githubUrl: "https://github.com/surcode/ecommerce",
//       features: ["Carrito de compras", "Sistema de pagos", "Panel admin", "Gestión de usuarios"]
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       category: "Mobile App",
//       image: "/logo.png",
//       description: "Aplicación móvil para gestión de tareas con sincronización en tiempo real y colaboración en equipo.",
//       longDescription: "Aplicación móvil desarrollada con React Native que permite a los usuarios crear, organizar y compartir tareas. Incluye funcionalidades de sincronización en tiempo real, notificaciones push, y colaboración en equipo con roles y permisos.",
//       technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
//       liveUrl: "https://taskapp-demo.com",
//       githubUrl: "https://github.com/surcode/taskapp",
//       features: ["Sincronización en tiempo real", "Notificaciones push", "Colaboración en equipo", "Roles y permisos"]
//     },
//     {
//       id: 3,
//       title: "Analytics Dashboard",
//       category: "Web Development",
//       image: "/logo.png",
//       description: "Dashboard de analytics con visualizaciones interactivas y reportes personalizables para análisis de datos.",
//       longDescription: "Dashboard de analytics desarrollado con React y D3.js que permite visualizar datos complejos de manera interactiva. Incluye gráficos personalizables, filtros avanzados, exportación de reportes y integración con múltiples fuentes de datos.",
//       technologies: ["React", "D3.js", "Express", "PostgreSQL", "Chart.js"],
//       liveUrl: "https://analytics-demo.com",
//       githubUrl: "https://github.com/surcode/analytics",
//       features: ["Visualizaciones interactivas", "Filtros avanzados", "Exportación de reportes", "Múltiples fuentes de datos"]
//     }
//   ];

//   const openModal = (project) => {
//     setSelectedProject(project);
//   };

//   const closeModal = () => {
//     setSelectedProject(null);
//   };

//   return (
//     <PortfolioContainer id="portfolio">
//       <SectionTitle>Nuestros Proyectos</SectionTitle>
//       <SectionSubtitle>Descubre algunas de nuestras mejores creaciones</SectionSubtitle>
      
//       <ProjectsGrid>
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <ProjectCard>
//               <ProjectImage src={project.image} alt={project.title} />
//               <ProjectOverlay>
//                 <ProjectCategory>{project.category}</ProjectCategory>
//                 <ProjectTitle>{project.title}</ProjectTitle>
//                 <ProjectDescription>{project.description}</ProjectDescription>
//                 <ProjectTechnologies>
//                   {project.technologies.slice(0, 3).map((tech, techIndex) => (
//                     <TechTag key={techIndex}>{tech}</TechTag>
//                   ))}
//                 </ProjectTechnologies>
//                 <ProjectActions>
//                   <ActionButton onClick={() => openModal(project)}>
//                     <FiEye /> Ver Detalles
//                   </ActionButton>
//                   <ActionButton href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                     <FiExternalLink /> Demo
//                   </ActionButton>
//                 </ProjectActions>
//               </ProjectOverlay>
//             </ProjectCard>
//           </motion.div>
//         ))}
//       </ProjectsGrid>

//       <AnimatePresence>
//         {selectedProject && (
//           <ModalOverlay onClick={closeModal}>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.3 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <ModalContent>
//                 <ModalHeader>
//                   <ModalTitle>{selectedProject.title}</ModalTitle>
//                   <CloseButton onClick={closeModal}>×</CloseButton>
//                 </ModalHeader>
                
//                 <ModalImage src={selectedProject.image} alt={selectedProject.title} />
                
//                 <ModalBody>
//                   <ModalDescription>{selectedProject.longDescription}</ModalDescription>
                  
//                   <ModalSection>
//                     <SectionTitle>Características:</SectionTitle>
//                     <FeaturesList>
//                       {selectedProject.features.map((feature, featureIndex) => (
//                         <FeatureItem key={featureIndex}>• {feature}</FeatureItem>
//                       ))}
//                     </FeaturesList>
//                   </ModalSection>
                  
//                   <ModalSection>
//                     <SectionTitle>Tecnologías:</SectionTitle>
//                     <TechnologiesList>
//                       {selectedProject.technologies.map((tech, techIndex) => (
//                         <TechTag key={techIndex}>{tech}</TechTag>
//                       ))}
//                     </TechnologiesList>
//                   </ModalSection>
                  
//                   <ModalActions>
//                     <ModalButton href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
//                       <FiExternalLink /> Ver Demo
//                     </ModalButton>
//                     <ModalButton href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
//                       <FiGithub /> Ver Código
//                     </ModalButton>
//                   </ModalActions>
//                 </ModalBody>
//               </ModalContent>
//             </motion.div>
//           </ModalOverlay>
//         )}
//       </AnimatePresence>
//     </PortfolioContainer>
//   )
// }

// export default Portfolio

// const PortfolioContainer = styled.section`
//   padding: 5rem 2rem;
//   background: linear-gradient(135deg, var(--background-color) 0%, var(--secondary-bg) 100%);
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `

// const SectionTitle = styled.h2`
//   font-size: 3rem;
//   font-weight: 700;
//   color: var(--text-color);
//   margin-bottom: 1rem;
//   text-align: center;
//   background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `

// const SectionSubtitle = styled.p`
//   font-size: 1.2rem;
//   color: var(--text-color);
//   opacity: 0.8;
//   margin-bottom: 3rem;
//   text-align: center;
//   max-width: 600px;
// `

// const ProjectsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   gap: 2rem;
//   max-width: 1200px;
//   width: 100%;
// `

// const ProjectCard = styled.div`
//   position: relative;
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 16px;
//   overflow: hidden;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   backdrop-filter: blur(10px);

//   &:hover {
//     transform: translateY(-8px);
//     border-color: var(--primary-color);
//     box-shadow: 0 20px 40px rgba(102, 211, 250, 0.2);
//   }
// `

// const ProjectImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `

// const ProjectOverlay = styled.div`
//   padding: 1.5rem;
// `

// const ProjectCategory = styled.span`
//   background: var(--primary-color);
//   color: var(--background-color);
//   padding: 0.25rem 0.75rem;
//   border-radius: 20px;
//   font-size: 0.875rem;
//   font-weight: 500;
// `

// const ProjectTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: var(--text-color);
//   margin: 1rem 0;
// `

// const ProjectDescription = styled.p`
//   color: var(--text-color);
//   opacity: 0.8;
//   line-height: 1.6;
//   margin-bottom: 1rem;
// `

// const ProjectTechnologies = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `

// const TechTag = styled.span`
//   background: rgba(102, 211, 250, 0.1);
//   color: var(--primary-color);
//   padding: 0.25rem 0.75rem;
//   border-radius: 20px;
//   font-size: 0.875rem;
//   font-weight: 500;
//   border: 1px solid rgba(102, 211, 250, 0.3);
// `

// const ProjectActions = styled.div`
//   display: flex;
//   gap: 1rem;
// `

// const ActionButton = styled.a`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   background: var(--primary-color);
//   color: var(--background-color);
//   padding: 0.75rem 1rem;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: 500;
//   transition: all 0.3s ease;
//   cursor: pointer;

//   &:hover {
//     background: var(--accent-color);
//     transform: translateY(-2px);
//   }
// `

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: rgba(0, 0, 0, 0.8);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 1000;
//   padding: 2rem;
// `

// const ModalContent = styled.div`
//   background: var(--background-color);
//   border-radius: 16px;
//   max-width: 600px;
//   width: 100%;
//   max-height: 90vh;
//   overflow-y: auto;
//   border: 1px solid rgba(255, 255, 255, 0.1);
// `

// const ModalHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1.5rem;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
// `

// const ModalTitle = styled.h2`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: var(--text-color);
//   margin: 0;
// `

// const CloseButton = styled.button`
//   background: none;
//   border: none;
//   color: var(--text-color);
//   font-size: 2rem;
//   cursor: pointer;
//   padding: 0;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     color: var(--primary-color);
//   }
// `

// const ModalImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `

// const ModalBody = styled.div`
//   padding: 1.5rem;
// `

// const ModalDescription = styled.p`
//   color: var(--text-color);
//   opacity: 0.8;
//   line-height: 1.6;
//   margin-bottom: 1.5rem;
// `

// const ModalSection = styled.div`
//   margin-bottom: 1.5rem;
// `

// const FeaturesList = styled.ul`
//   list-style: none;
//   padding: 0;
// `

// const FeatureItem = styled.li`
//   color: var(--text-color);
//   opacity: 0.8;
//   margin-bottom: 0.5rem;
// `

// const TechnologiesList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;
// `

// const ModalActions = styled.div`
//   display: flex;
//   gap: 1rem;
//   margin-top: 2rem;
// `

// const ModalButton = styled.a`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   background: var(--primary-color);
//   color: var(--background-color);
//   padding: 0.75rem 1.5rem;
//   border-radius: 8px;
//   text-decoration: none;
//   font-weight: 500;
//   transition: all 0.3s ease;

//   &:hover {
//     background: var(--accent-color);
//     transform: translateY(-2px);
//   }
// `