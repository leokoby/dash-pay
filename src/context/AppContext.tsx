import React, { createContext, useState, ReactNode, useEffect } from 'react'

export const contextComponent = createContext(null)

type ContextProps = {
  children: ReactNode
}

export default function AppContext({children}: ContextProps) {
  const [bills, setBills] = useState([])
  const billOnLocal = localStorage.getItem("Bills")
  const billParse = JSON.parse(billOnLocal)

  useEffect(()=> {
    if(billOnLocal?.length){
      setBills(billParse)
    }
  },[])
  console.log(billOnLocal)

  return (
    <contextComponent.Provider value={{bills, setBills}}>
     {children}
    </contextComponent.Provider>
  )
}
