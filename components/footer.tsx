import styled from "styled-components";
import { BsWhatsapp,BsTelegram } from 'react-icons/bs';
import { AiFillLinkedin,AiFillGithub} from 'react-icons/ai';
import Link from "next/link";

export default function Footer(){
  return(
    <Wrapper>
      <div className="content">
        <div className="socials">
          <Link href="https://wa.me/584245069396" target='_blank'>
            <BsWhatsapp />
          </Link>
          <Link href="https://www.linkedin.com/in/leandro-p%C3%A9rez-barahona-743a37211/" target='_blank'>
            <AiFillLinkedin />
          </Link>
          <Link href="https://github.com/L3andr0o" target='_blank'>
            <AiFillGithub />
          </Link>
          <Link href="https://t.me/LeandroPerezDeveloper" target='_blank'>
            <BsTelegram className="telegram"/>
          </Link>
        </div>
        <span>Leandro Perez, Front-end Developer</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 4em;
  display: flex;
  margin-top: 150px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 15px 0;
  background-color: #100e13;
  color: #fff;
  .content{
    width: 90%;
    margin: 0 auto;
    max-width: 1090px;
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
    .telegram{
      &:hover{
        color: #7375f1;
      }
    }
  }
  }
`