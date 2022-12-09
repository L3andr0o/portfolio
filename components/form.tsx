
import styled from "styled-components"

export default function Form(){
  return(
    <Wrapper>
      <h2>Contact Me</h2>
      <form>
        <div className="top">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" autoComplete="off"/>
          </div>
          <div>
            <label htmlFor="emailAdress">Your Email Adress</label>
            <input type="email" id="emailAdress" autoComplete="off" />
          </div>
        </div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols={30} rows={3}></textarea>
        <button>SEND MESSAGE</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 1090px;
  margin: 20px auto;
  /* text-align: center; */
  background-color: #372c5f;
  border-radius: 8px;
  color: #fff;
  padding: 10px 20px;
  label{
    display: block;
    font-size: 14px;
    margin: 3px 0 ;
    width: fit-content;
  }
  h2{
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 2px solid #a0999933;
    padding: 5px;

  }
  form{
    margin-top: 10px;
    .top{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      div{
        width: 100%;
       
        input{
        width: 100%;
      }
      }
    }
    input,textarea{
      width: 100%;
      padding: 10px;
      border: none;
      outline: none;
      border-radius: 4px;
      resize: none;
      background-color: #171933;
      transition: all .3s ease;
      color: #fff;
      &:focus{
      background-color: #0f1127;
      }
    }
    button{
      width: 100%;
      padding: 10px;
      background-color: #0c0830;
      color: #fff;
      border: none;
      outline: none;
      margin-top: 5px;
    }
  }
`

