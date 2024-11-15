import React from 'react'
import { createContext,useState } from 'react'

export const editContextResponse=createContext()



function Contextapi({children}) {
    const[editResponse,seteditResponse]=useState("")
  return (
    <>
    <editContextResponse.Provider value={{editResponse,seteditResponse}}>
        
        {children}
        
    </editContextResponse.Provider>
    </>
  )
}

export default Contextapi