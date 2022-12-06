import Image from 'next/image'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../assets/globalStyles'
import HeadComponent from '../components/head'
import Navbar from '../components/navbar';
import Typed from 'react-typed'
import 'react-typed/dist/animatedCursor.css';


export default function Home() {

  const techs = ['Javascript','Typescript','React','Vue']
  

  return (
    <Wrapper>
      <GlobalStyles />
      <HeadComponent />
      <Navbar />
      <div className="info">
        <div className="description">
          <h1>Leandro Perez</h1>
          <span>
            Devoloper in 
            <Typed
            strings={techs}
            typeSpeed={50}
            backSpeed={40}
            loop
            className='animated-text'
            />
          </span>
          <p>
            Hi, i'm Leandro, a front-end developer.
            <br></br>
            Extremely motivated to
            constantly develop my skills
            and grow professionally. I am
            confident in my ability to
            create and even design web
            pages using front-end
            technologies
          </p>
        </div>
        <div className="techs">
          
        </div>
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
    .description{
      text-align: left;
      h1{
      font-size: 2.7em;
      font-weight: 800;
      color: transparent;
      background: linear-gradient(to right,red,blue);
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      animation: loop 10s ease 0s infinite normal both;
        @keyframes loop {
          0%{opacity:.5;}
          50%{opacity:1;}
          100%{opacity:.5;}
        }
      }
      span{
      font-size: 22px;
      text-align: center;
      color: #ce5b46;
       .animated-text{
          margin-left: 3px;
        }
      }
      p{
        color: #fffc;
        margin-top: 10px;
      }
    }
  }
`



