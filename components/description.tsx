import Typed from 'react-typed'
import styled from 'styled-components'
import { useLang } from '../context/langContext';
import { BsWhatsapp,BsTelegram } from 'react-icons/bs';
import { AiFillLinkedin,AiFillGithub} from 'react-icons/ai';

export default function Description(){
  const techs = ['Javascript developer','Typescript developer','React developer','Vue developer'];
  const {language} = useLang();
  return(
    <Wrapper className="description">
      <h1>Leandro Perez</h1>
      <span>
        <Typed
        strings={techs}
        typeSpeed={50}
        backSpeed={40}
        loop
        className='animated-text'
        />
      </span>
      <p>
        {language.presentation}
        <br></br>
        {language.presentation2}
      </p>
      <div className="socials">
          <a href="https://wa.me/584245069396" target='_blank'>
            <BsWhatsapp className="whatsapp"/>
          </a>
          <a href="https://www.linkedin.com/in/leandro-perez-743a37211/" target='_blank'>
            <AiFillLinkedin className="linkedin" />
          </a>
          <a href="https://github.com/leandroperez19" target='_blank'>
            <AiFillGithub className="github" />
          </a>
          <a href="https://t.me/LeandroPerezDeveloper" target='_blank'>
            <BsTelegram className="telegram"/>
          </a>
      </div>
      {/* <p>
      Extremely motivated to
        constantly develop my skills
        and grow professionally. I am
        confident in my ability to
        create and even design web
        pages using front-end
        technologies
      </p> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &.description{
    text-align: left;
    max-width: 425px;
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
    .socials{
    width: 100%;
    max-width: 8em;
    font-size: 35px;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    svg{
      color: #Fff;
    }
    .linkedin{
      &:hover{
        color: #0977c0;
      }
    }
    .whatsapp{
      &:hover{
        color: #5ceb4f;
      }
    }
    .telegram{
      &:hover{
        color: #4faceb;
      }
    }
    .github{
      &:hover{
        color: #727272;
      }
    }
  }
  }
`
  
