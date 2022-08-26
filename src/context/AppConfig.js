

import React, { useState } from 'react'
import { useEffect } from 'react';
import { createContext } from 'react'

export  const AppContext =  createContext();
export const AppProvider = ({children})=>{
    const [status,setstatus] = useState(0);
    const [loaded,setloaded] = useState("")

    return(
        <AppContext.Provider value = {{loaded,setloaded,status,setstatus}} >{children}</AppContext.Provider>
    )
}