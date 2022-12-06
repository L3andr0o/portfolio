import styled from "styled-components";
import Image from "next/image";
import TasksManager from '../assets/TasksManager.png';
import ReactJs from '../assets/React.png';
import Typescript from '../assets/Typescript.svg';
import Firebase from '../assets/Firebase.png';


export default function ProjectCard(){
  return(
    <Wrapper>
      <Image src={TasksManager} alt='project' width={200} height={180} className='project-img'/>
      <div className="project-info">
        <h2>Task Manager</h2>
        <span>This is a task manager</span>
        <p>
        This is a web where you can manage invoices, you can create, edit and eliminate an invoice by using a form. It was built using SASS, React, Redux and Strapi for the REST API where the invoices are keep.
        </p>
      </div>
      <div className="techs-used">
        <Image src={ReactJs} alt='react' width={20} height={20}/>
        <Image src={Typescript} alt='react' width={20} height={20}/>
        <Image src={Firebase} alt='react' width={20} height={20}/>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #0007;
  color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px auto;
  .project-img{
    width: 100%;
  }
  .project-info{
    text-align: left;
    margin: 10px;
    h2{
      font-size: 18px;
      font-weight: 400;
    }
    span{
      font-size: 14px;
      font-weight: 300;
    }
    p{
      margin-top: 10px;
      font-size: 14px;
      color: #99a4ac;
    }
  }
  .techs-used{
    display: flex;
    justify-content: right;
    background-color: #303131;
    padding: 6px;
    img{
      margin-right: 8px;
    }
  }
`