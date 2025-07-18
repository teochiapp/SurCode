import React from 'react'
import styled from 'styled-components'
import Hero from '../components/hero/hero'
import Services from '../components/services/services'
import Portfolio from '../components/portfolio/portfolio'
import Team from '../components/team/Team'
import Contact from '../components/contact/contact'

const Home = () => {
  return (
    <HomeContainer>
        <Hero />
        <Team />
        <Portfolio />
        <Contact />
    </HomeContainer>
  )
}

export default Home


const HomeContainer = styled.main`
  min-height: 100vh;
  background-color: var(--background-color, #0A0A0A);
  color: var(--text-color, #E6E6E6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

`
