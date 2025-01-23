import React from 'react'
import './Portfolio.css'
import styled from 'styled-components'
import ProjectsGrid from './ProjectsGrid'
import Skills from './Skills'
import Education from './Education'
import SocialLinks from './SocialLinks'
import Footer from './Footer'
import WavyBackground from './WavyBackground'
import profileImage from '../assets/hero.jpg' // Make sure to replace with the correct path

const Portfolio = () => {
  return (
    <div className='port'>
    <div className='portfolio'>
      <header className='header'>
        <h1 className='logo'>Cate</h1>
        <nav className='nav'>
          <a href='#projects'>Projects</a>
          <a href='#skills'>Skills</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>
      <section className='main-content'>
        <Left>
          {' '}
          <div className='text-content'>
            <h2>Hello 👋 am </h2>
            <h1 className='name'>Cate</h1>
            <h2 className='title'>Software engineer and AI engineer</h2>
            <p>
              {' '}
              A transitioning computer science enthusiast with a strong interest in software development and emerging tech. My focus includes Flutter, React, AI, and mobile app development. Through self-led projects, I’ve built practical experience and am eager to tackle real-world challenges.

Looking for a remote role where I can grow, contribute to innovative projects, and collaborate with dynamic teams to create impactful solutions.
            </p>
            
            <a
              href='https://docs.google.com/uc?export=download&id=17uNQeulAcXFhWGkGEyjigQsF_WFFB5O_'
              download
            >
              <button className='download-btn'>Download CV</button>
            </a>
            <SocialLinks />
          </div>
        </Left>
        <Right>
          <div className='image-content'>
            <img src={profileImage} alt='Antony Kinuthia' />
          </div>
        </Right>
      </section>
      <SubHeading className='title' id='projects'>
        My Projects --
      </SubHeading>
      <ProjectsGrid />
      <SubHeading className='title' id='skills'>
        Skills --
      </SubHeading>
      <Skills />
      
      
    </div>
    <WavyBackground />
    <MyFotter id='contact'>
        <Footer />
      </MyFotter>
      </div>
      
  )
}
const MyFotter = styled.footer`
  background: #1C1E28;
  width: 100%;
  
`
const SubHeading = styled.div`
  text-align: left;
  margin-bottom: 7px;
`
const Left = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    overflow: hidden;
  }
`
const Right = styled.div`
  @media (min-width: 768px) {
    width: 30%;
    height: 50%;
    overflow: hidden;
  }
`

export default Portfolio
