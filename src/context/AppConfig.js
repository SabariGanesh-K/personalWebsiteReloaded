

import React, { useState } from 'react'
import { createContext } from 'react'

export const AppContext =  createContext();
export const AppProvider = ({children})=>{
    const [loaded,setloaded] = useState("")

    return(
        <AppProvider value = {{loaded,setloaded}} >{children}</AppProvider>
    )
}