import emailjs from '@emailjs/browser';
import styled from "styled-components"
import { useLang } from '../context/langContext';

export default function Form(){

  const sendEmail = (e:any)=>{
    e.preventDefault();
    const name = e.target.name.value.length;
    const email = e.target.email_id.value.length;
    const message = e.target.message.value.length;
    if(name > 0 && email > 0 && message > 0){
      emailjs.sendForm('service_zdn00ck','template_hax3yqu',e.target,'Jfyi76m84VM3xScUw')
      .then((result)=>{
        console.log(result.text)
      },(error)=>{
        console.log(error.text)
      });
      e.target.reset();
      return
    }alert(`Can't be empty fields`)
  }
  const {language} = useLang();

  return(
    <Wrapper id='contact'>
      <div className="picture">
      </div>
      <form onSubmit={e=>sendEmail(e)}>
      <h2>{language.formHeader}</h2>
        <div className="top">
          <div>
            <label htmlFor="name">{language.formInp1}</label>
            <input type="text" id="name" autoComplete="off" name='from_name'/>
          </div>
          <div>
            <label htmlFor="emailAdress">{language.formInp2}</label>
            <input type="email" id="emailAdress" autoComplete="off" name='email_id' />
          </div>
        </div>
        <label htmlFor="message">{language.formInp3}</label>
        <textarea name="message" id="message" cols={30} rows={3} dirName='message'></textarea>
        <button type='submit'>{language.formBtn}</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media (max-width:720px) {
    width: 90%;
    max-width: 1090px;
    margin: 20px auto;
    background-color: #372c5f;
    border-radius: 8px;
    color: #fff;
    position: relative;
    padding: 10px 20px;
    label{
      display: block;
      font-size: 14px;
      margin: 3px 0 ;
      width: fit-content;
    }
    .picture{display:none;}
    form{
      margin-top: 10px;
      h2{
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        border-bottom: 2px solid #a0999933;
        padding: 5px;
      }
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
  }
  @media (min-width: 720px) {
    display: flex;
    width: 90%;
    max-width: 1090px;
    margin: 20px auto;
    background-color: #372c5f;
    border-radius: 8px;
    height: 25em;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    label{
      display: block;
      font-size: 14px;
      margin-bottom: 5px;
    }
    .picture{
      height: 100%;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-size: cover;
      background-image: url(https://www.freecodecamp.org/news/content/images/2022/02/arnold-francisca-f77Bh3inUpE-unsplash.jpg);
    }
    form{
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      color: #fff;
      h2{
        font-size: 22px;
        text-align: center;
        margin-bottom: 10px;
      }
      input,textarea{
        width: 100%;
        padding: 10px 5px;
        resize: none;
        background-color: #0f1127;
        border: none;
        outline: none;
        color: #fff;
        transition: background-color .3s ease-in-out;
        &:focus{
          background-color: #171933;
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
        cursor: pointer;
        transition: background-color .3s ease;
        &:hover{
          background-color: #171933;
        }
      }
    }
  }
`

