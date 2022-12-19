import { createContext, useContext, useEffect, useState } from 'react';
import en from '../intl/en'
import es from '../intl/es'



export const langContext = createContext<any>(true);
export const useLang = () =>{
  const context = useContext(langContext);
  return context 
};

export default function LangProvider({children} : any){

  const [language,setLanguage] = useState<any>(en);

  const changeLanguage = ()=>{
    language === en ? setLanguage(es) : setLanguage(en)
  }
  
  useEffect(()=>{
    console.log(navigator.language)
  },[])

  return(
    <langContext.Provider value={{
      language,
      changeLanguage
    }}>
      {children}
    </langContext.Provider>
  )
}

