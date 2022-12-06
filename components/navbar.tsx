import { useState } from "react"
import styled from "styled-components"
import { GlobalStyles } from "../assets/globalStyles"


export default function Navbar(){

  const [menuState,setMenuState] = useState<boolean>(false);

  return(
    <Wrapper>
      <GlobalStyles />
      {
      menuState &&
      <div className="left burger">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" onClick={()=>setMenuState(false)}>
          <g fill="#828FA3" fillRule="evenodd">
            <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"/>
            <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"/>
          </g>
        </svg>
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </div>}
      <div className="rigth">
        <span>EN</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" onClick={()=>setMenuState(true)}>
        <g fill="#7e8192" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/>
        </g>
      </svg>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 5em;
  background-color: #18181b;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #3338;
  color: #fff;
  svg{
    scale: .8;
  }
  .burger{
    position: absolute;
    background-color: #37373a;
    color: #fff;
    top: 0;
    right: 0;
    width: 60vw;
    height: 100vh;
    z-index: 20;
    text-align: right;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: right;
    animation: sho .3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s 1 normal forwards;
    @keyframes sho {
      0%{transform: scaleX(0);}
      100%{transform:scaleX(1);}
    }
    svg{
      position: absolute;
      top: 32px;
      right: 20px;
      scale: 1.2;
    }
    ul{
      height: 15em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 80px;
    }
  }
`