import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

interface Props{
  img : StaticImageData,
  name : string,
  subt : string,
  description : string,
  techs : StaticImageData[]
}

export default function ProjectCard({img,name,subt,description,techs} : Props){
  return(
    <Wrapper>
      <Image src={img} alt='project' width={200} height={180} className='project-img'/>
      <div className="project-info">
        <h2>{name}</h2>
        <span>{subt}</span>
        <p>{description}</p>
      </div>
      <div className="techs-used">
        {techs.map((tech)=>(
          <Image src={tech} alt='tech' width={20} height={20}/>
        ))}
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