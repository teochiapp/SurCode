import React from 'react'
import styled from 'styled-components'
import Hero from '../components/home/hero'
const Home = () => {
  return (
    <HomeContainer>
        <Hero />
       
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
