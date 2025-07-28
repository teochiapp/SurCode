import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const FooterContact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      info: "surcodear@gmail.com"
    },
    {
      icon: <FiPhone />,
      info: "+54 9 11 5814-8683"
    },
    {
      icon: <FiMapPin />,
      info: "Buenos Aires, Argentina"
    },
    {
      icon: <FiMapPin />,
      info: "Córdoba, Argentina"
    }
  ]

  return (
    <ContactColumn>
      <ColumnTitle>Contacto</ColumnTitle>
      <ContactList>
        {contactInfo.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ContactItem>
              <ContactIcon>{item.icon}</ContactIcon>
              <ContactText>{item.info}</ContactText>
            </ContactItem>
          </motion.li>
        ))}
      </ContactList>
    </ContactColumn>
  )
}

export default FooterContact

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 2rem;
    height: 2px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    border-radius: 1px;
  }
`

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const ContactIcon = styled.div`
  color: var(--primary-color);
  font-size: 1rem;
  display: flex;
  align-items: center;
`

const ContactText = styled.span`
  color: var(--text-color);
  opacity: 0.8;
  font-size: 0.95rem;
` 