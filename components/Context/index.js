import {createContext,useState} from 'react';
import React from 'react'
export const LoginContext=createContext()
export const Provider=(props)=>{
    const [UserisLogin,setUserisLogin]=useState(false)
    const [DriverisLogin,setDriverisLogin]=useState(false)
    return (
           <LoginContext.Provider value={{User:[UserisLogin,setUserisLogin],Driver:[DriverisLogin,setDriverisLogin]}}>
               {props.children}
           </LoginContext.Provider>
    )
}
export const Consumer=LoginContext.Consumer;