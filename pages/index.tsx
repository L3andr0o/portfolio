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





export default function Home() {
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
        My Projects
      </h4>
      <div className="projects">
        <ProjectCard 
          img={TasksManager} 
          name='Task Manager' 
          subt='This is a task manager' 
          description='This is a web where you can manage invoices, you can create, edit and eliminate an invoice by using a form. It was built using SASS, React, Redux and Strapi for the REST API where the invoices are keep.' 
          techs={[ReactJs,Typescript,Firebase]}
        />
        <ProjectCard 
          img={CountriesApp} 
          name='Countries App' 
          subt='This is a countries app' 
          description='This is a web where you can manage invoices, you can create, edit and eliminate an invoice by using a form. It was built using SASS, React, Redux and Strapi for the REST API where the invoices are keep.' 
          techs={[ReactJs,Typescript,Analytics]}
        />
        <ProjectCard 
          img={RockPaperScissors} 
          name='Rock Paper Scissors Pwa App' 
          subt='This is a rock paper scissors app' 
          description='This is a web where you can manage invoices, you can create, edit and eliminate an invoice by using a form. It was built using SASS, React, Redux and Strapi for the REST API where the invoices are keep.' 
          techs={[ReactJs,Javascript,Analytics,Workbox]}
        />
        <ProjectCard 
          img={SpaceTourismWeb} 
          name='Space Tourism Web' 
          subt='This is a space tourism web' 
          description='This is a web where you can manage invoices, you can create, edit and eliminate an invoice by using a form. It was built using SASS, React, Redux and Strapi for the REST API where the invoices are keep.' 
          techs={[Gatsby,Typescript,Analytics]}
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
    max-width: 1090px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
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
    /* text-align: left; */
    display: flex;
    flex-wrap: wrap;
    max-width: 1090px;
    justify-content: space-between;
    align-items: left;
  }
`



