// import React, { useState } from 'react'
// import styled from 'styled-components'
// import { motion } from 'framer-motion'
// import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi'


function contact() {
  return (
    <div id="contact"></div>
  )
}

export default contact
// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simular envío del formulario
//     await new Promise(resolve => setTimeout(resolve, 2000));
    
//     setIsSubmitting(false);
//     setIsSubmitted(true);
    
//     // Resetear formulario después de 3 segundos
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     }, 3000);
//   };

//   const contactInfo = [
//     {
//       icon: <FiMail />,
//       title: "Email",
//       info: "info@surcode.com",
//       link: "mailto:info@surcode.com"
//     },
//     {
//       icon: <FiPhone />,
//       title: "Teléfono",
//       info: "+54 11 1234-5678",
//       link: "tel:+541112345678"
//     },
//     {
//       icon: <FiMapPin />,
//       title: "Ubicación",
//       info: "Buenos Aires, Argentina",
//       link: "https://maps.google.com"
//     }
//   ];

//   return (
//     <ContactContainer id="contact">
//       <SectionTitle>Contáctanos</SectionTitle>
//       <SectionSubtitle>¿Tienes un proyecto en mente? ¡Conversemos!</SectionSubtitle>
      
//       <ContactContent>
//         <ContactInfo>
//           <InfoTitle>Información de Contacto</InfoTitle>
//           <InfoDescription>
//             Estamos aquí para ayudarte a hacer realidad tu proyecto. 
//             No dudes en contactarnos para discutir tus ideas.
//           </InfoDescription>
          
//           <InfoList>
//             {contactInfo.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -50 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <InfoItem href={item.link} target="_blank" rel="noopener noreferrer">
//                   <InfoIcon>{item.icon}</InfoIcon>
//                   <InfoContent>
//                     <InfoItemTitle>{item.title}</InfoItemTitle>
//                     <InfoItemText>{item.info}</InfoItemText>
//                   </InfoContent>
//                 </InfoItem>
//               </motion.div>
//             ))}
//           </InfoList>
//         </ContactInfo>

//         <ContactForm>
//           <FormTitle>Envíanos un Mensaje</FormTitle>
          
//           {isSubmitted ? (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <SuccessMessage>
//                 <FiCheck />
//                 <SuccessTitle>¡Mensaje Enviado!</SuccessTitle>
//                 <SuccessText>
//                   Gracias por contactarnos. Te responderemos en breve.
//                 </SuccessText>
//               </SuccessMessage>
//             </motion.div>
//           ) : (
//             <Form onSubmit={handleSubmit}>
//               <FormGroup>
//                 <FormLabel htmlFor="name">Nombre *</FormLabel>
//                 <FormInput
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   placeholder="Tu nombre completo"
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <FormLabel htmlFor="email">Email *</FormLabel>
//                 <FormInput
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   placeholder="tu@email.com"
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <FormLabel htmlFor="subject">Asunto *</FormLabel>
//                 <FormInput
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   placeholder="¿En qué podemos ayudarte?"
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <FormLabel htmlFor="message">Mensaje *</FormLabel>
//                 <FormTextarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   placeholder="Cuéntanos sobre tu proyecto..."
//                   rows="5"
//                 />
//               </FormGroup>

//               <SubmitButton type="submit" disabled={isSubmitting}>
//                 {isSubmitting ? (
//                   <>
//                     <LoadingSpinner />
//                     Enviando...
//                   </>
//                 ) : (
//                   <>
//                     <FiSend />
//                     Enviar Mensaje
//                   </>
//                 )}
//               </SubmitButton>
//             </Form>
//           )}
//         </ContactForm>
//       </ContactContent>
//     </ContactContainer>
//   )
// }

// export default Contact

// const ContactContainer = styled.section`
//   padding: 5rem 2rem;
//   background: var(--background-color);
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

// const ContactContent = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 4rem;
//   max-width: 1200px;
//   width: 100%;

//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//     gap: 2rem;
//   }
// `

// const ContactInfo = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// const InfoTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: var(--text-color);
//   margin-bottom: 1rem;
// `

// const InfoDescription = styled.p`
//   color: var(--text-color);
//   opacity: 0.8;
//   line-height: 1.6;
//   margin-bottom: 2rem;
// `

// const InfoList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `

// const InfoItem = styled.a`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   padding: 1rem;
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 12px;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   backdrop-filter: blur(10px);

//   &:hover {
//     border-color: var(--primary-color);
//     transform: translateY(-2px);
//     box-shadow: 0 10px 30px rgba(102, 211, 250, 0.2);
//   }
// `

// const InfoIcon = styled.div`
//   font-size: 1.5rem;
//   color: var(--primary-color);
//   padding: 0.75rem;
//   background: rgba(102, 211, 250, 0.1);
//   border-radius: 50%;
// `

// const InfoContent = styled.div`
//   flex: 1;
// `

// const InfoItemTitle = styled.h4`
//   font-size: 1rem;
//   font-weight: 600;
//   color: var(--text-color);
//   margin: 0 0 0.25rem 0;
// `

// const InfoItemText = styled.p`
//   color: var(--text-color);
//   opacity: 0.8;
//   margin: 0;
// `

// const ContactForm = styled.div`
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   border-radius: 16px;
//   padding: 2rem;
//   backdrop-filter: blur(10px);
// `

// const FormTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 600;
//   color: var(--text-color);
//   margin-bottom: 2rem;
//   text-align: center;
// `

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `

// const FormLabel = styled.label`
//   color: var(--text-color);
//   font-weight: 500;
//   margin-bottom: 0.5rem;
// `

// const FormInput = styled.input`
//   background: rgba(255, 255, 255, 0.1);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 8px;
//   padding: 0.75rem 1rem;
//   color: var(--text-color);
//   font-size: 1rem;
//   transition: all 0.3s ease;

//   &::placeholder {
//     color: var(--text-color);
//     opacity: 0.5;
//   }

//   &:focus {
//     outline: none;
//     border-color: var(--primary-color);
//     box-shadow: 0 0 0 3px rgba(102, 211, 250, 0.1);
//   }
// `

// const FormTextarea = styled.textarea`
//   background: rgba(255, 255, 255, 0.1);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 8px;
//   padding: 0.75rem 1rem;
//   color: var(--text-color);
//   font-size: 1rem;
//   font-family: inherit;
//   resize: vertical;
//   transition: all 0.3s ease;

//   &::placeholder {
//     color: var(--text-color);
//     opacity: 0.5;
//   }

//   &:focus {
//     outline: none;
//     border-color: var(--primary-color);
//     box-shadow: 0 0 0 3px rgba(102, 211, 250, 0.1);
//   }
// `

// const SubmitButton = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   background: var(--primary-color);
//   color: var(--background-color);
//   border: none;
//   padding: 1rem 2rem;
//   border-radius: 8px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   margin-top: 1rem;

//   &:hover:not(:disabled) {
//     background: var(--accent-color);
//     transform: translateY(-2px);
//   }

//   &:disabled {
//     opacity: 0.7;
//     cursor: not-allowed;
//   }
// `

// const LoadingSpinner = styled.div`
//   width: 16px;
//   height: 16px;
//   border: 2px solid transparent;
//   border-top: 2px solid currentColor;
//   border-radius: 50%;
//   animation: spin 1s linear infinite;

//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }
// `

// const SuccessMessage = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding: 2rem;
//   color: var(--text-color);
// `

// const SuccessTitle = styled.h3`
//   font-size: 1.5rem;
//   font-weight: 600;
//   margin: 1rem 0 0.5rem 0;
//   color: var(--primary-color);
// `

// const SuccessText = styled.p`
//   color: var(--text-color);
//   opacity: 0.8;
//   line-height: 1.6;
// `