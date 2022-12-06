import styled from "styled-components";
import Image from "next/image";
import TasksManager from '../assets/TasksManager.png';

export default function ProjectCard(){
  return(
    <Wrapper>
      <Image src={TasksManager} alt='project' width={100} height={100}/>
      <div className="project__info">
        <h2>Task Manager</h2>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  
`