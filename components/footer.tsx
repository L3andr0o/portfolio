import styled from "styled-components";
import { BsWhatsapp,BsTelegram } from 'react-icons/bs';
import { AiFillLinkedin,AiFillGithub} from 'react-icons/ai';

export default function Footer(){
  return(
    <Wrapper>
      <div className="content">
        <div className="socials">
          <a href="https://wa.me/584245069396" target='_blank'>
            <BsWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/leandro-p%C3%A9rez-barahona-743a37211/" target='_blank'>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/L3andr0o" target='_blank'>
            <AiFillGithub />
          </a>
          <a href="t.me/LeandroPerezDeveloper">
            <BsTelegram className="xd"/>
          </a>
        </div>
        <span>Leandro Perez, Front-end Developer</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 8em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 15px 0;
  background-color: #100e13;
  color: #fff;
  .content{
    width: 90%;
    margin: 0 auto;
    max-width: 990px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .socials{
    width: 100%;
    max-width: 8em;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    svg{
      color: #Fff;
    }
  }
  }
`