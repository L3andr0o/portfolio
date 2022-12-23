import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../assets/globalStyles'
import HeadComponent from '../components/head'
import Navbar from '../components/navbar';
import 'react-typed/dist/animatedCursor.css';
import CodeLogo from '../assets/CodeLogo.png';
import Description from '../components/description'
import Techs from '../components/techs'
import ProjectCard from '../components/projectCard'
import TasksManager from '../assets/TasksManager.jpg';
import CountriesApp from '../assets/CountriesApp.jpg';
import RockPaperScissors from '../assets/RockPaperScissors.jpg';
import SpaceTourismWeb from '../assets/SpaceTourismWeb.jpg';
import ReactJs from '../assets/React.png';
import Typescript from '../assets/Typescript.svg';
import Firebase from '../assets/Firebase.png';
import Gatsby from '../assets/Gatsby.png';
import Javascript from '../assets/Javascript.png';
import Analytics from '../assets/Analytics.png';
import Workbox from '../assets/Workbox.svg';
import Form from '../components/form'
import Footer from '../components/footer'
import Link from 'next/link'
import { useLang } from '../context/langContext'


export default function Home() {

  const {language} = useLang()

  return (
    <Wrapper>
      <GlobalStyles />
      <HeadComponent />
      <Navbar />
      <div className="info">
        <Description />
        <Techs />
      </div>
      <h4>
        <Image src={CodeLogo} alt={'code'} width={25} height={25}/>
        {language.projectsHeader}
      </h4>
      <div className="projects" id='projects'>
        <ProjectCard 
          img={TasksManager} 
          name='Task Manager' 
          subt={language.taskManagerSubt} 
          description={language.taskManagerDesc}
          techs={[ReactJs,Typescript,Firebase]}
          repo='https://github.com/leandroperez19/tasks-manager'
          demo='https://tasks-manager-kanban.netlify.app/'
        />      
        <ProjectCard 
          img={CountriesApp} 
          name='Countries Web' 
          subt={language.countriesAppSubt}
          description={language.countriesAppDesc}
          techs={[ReactJs,Typescript,Analytics]}
          repo='https://github.com/leandroperez19/countries-typescript'
          demo='https://countries-api-site.netlify.app'
        />  
        <ProjectCard 
          img={RockPaperScissors} 
          name='Rock Paper Scissors Pwa' 
          subt={language.rockPaperScissorsSubt}
          description={language.rockPaperScissorsDesc}
          techs={[ReactJs,Javascript,Analytics,Workbox]}
          repo='https://github.com/leandroperez19/rock-paper-scissors-pwa'
          demo='https://rock-papers-scissors-pwa.netlify.app'
        />
        <ProjectCard 
          img={SpaceTourismWeb} 
          name='Space Tourism Web' 
          subt={language.spaceTourismWebSubt}
          description={language.spaceTourismWebDesc} 
          techs={[Gatsby,Typescript,Analytics]}
          repo='https://github.com/leandroperez19/space-tourism-web'
          demo='https://space-tourism-web-gatsby.netlify.app/'
        />
      </div>
      <Form />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  .info{
    width: 90%;
    /* max-width: 285px; */
    max-width: 1120px;
    margin: 80px auto;
    margin-bottom: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    @media (max-width:812px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  h4{
      color: #fff;
      font-weight: 500;
      text-align: center;
      font-size: 22px;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        margin-right: 5px;
      }
    }
  .projects{
    width: 90%;
    margin: 20px auto;
    margin-bottom: 120px;
    /* text-align: left; */
    display: flex;
    flex-wrap: wrap;
    max-width: 1180px;
    justify-content: space-between;
    align-items: left;
    @media (max-width:812px) {
      /* flex-direction: column; */
      justify-content: space-evenly;
      align-items: center;
    }
  }
`



