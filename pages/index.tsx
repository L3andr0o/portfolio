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
      <div className="projects">
        <h1>
          <Image src={CodeLogo} alt={'code'} width={25} height={25}/>
          My Projects
        </h1>
        <ProjectCard />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;
  .info{
    width: 90%;
    margin: 20px auto;
  }
  .projects{
    width: 90%;
    margin: 20px auto;
    text-align: center;
    h1{
      color: #fff;
      font-weight: 500;
      img{
        margin-right: 5px;
      }
    }
  }
`



