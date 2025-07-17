import React from 'react'
import styled from 'styled-components'

function Footer() {
  const colors = [
    { name: 'Background', value: 'var(--background-color)', hex: '#0A0A0A' },
    { name: 'Primary', value: 'var(--primary-color)', hex: '#66D3FA' },
    { name: 'Primary Dark', value: 'var(--primary-dark)', hex: '#2BA4D8' },
    { name: 'Accent', value: 'var(--accent-color)', hex: '#00BFFF' },
    { name: 'Text Color', value: 'var(--text-color)', hex: '#E6E6E6' },
    { name: 'Secondary BG', value: 'var(--secondary-bg)', hex: '#121A2E' },
    { name: 'Secondary', value: 'var(--secondary-color)', hex: '#FFD26F' },
    { name: 'Secondary Dark', value: 'var(--secondary-dark)', hex: '#E6B84D' },
    { name: 'Secondary Accent', value: 'var(--secondary-accent)', hex: '#FFECB0' },
  ]

  return (
    <FooterContainer>
      {colors.map((color) => (
        <ColorBlock key={color.name} style={{ '--color': color.value }}>
          {color.name} <br /> {color.hex}
        </ColorBlock>
      ))}

      <FontBlock>
        <TextSample>THIS IS A SAMPLE USING TEXT FONT.</TextSample>
        <TextSample>This is a sample text using --font-text.</TextSample>
      </FontBlock>

      <FontBlock>
        <HeadingSample>TEST PRUEBA HEADING FONT</HeadingSample>
        <HeadingSample>test prueba heading font</HeadingSample>
      </FontBlock>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  background-color: #111;
  gap: 1rem;
`

const ColorBlock = styled.div`
  background-color: var(--color);
  color: #fff;
  padding: 1rem;
  min-width: 160px;
  text-align: center;
  border-radius: 8px;
  font-size: 0.875rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
`

const FontBlock = styled.div`
  background-color: #222;
  color: #fff;
  padding: 1rem;
  min-width: 220px;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 0 8px rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const TextSample = styled.p`
  font-family: var(--text-font);
  font-size: 1rem;
`

const HeadingSample = styled.h3`
  font-family: var(--heading-font);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`