import { Children, createContext, useContext, useState } from "react";


export const ThemeContext= createContext({
    mode:true,
    setMode:()=>{},
    setDarMode:()=>{},
    setLightMode:()=>{},
});

export const ContextProvider=ThemeContext.Provider;



export  function useTheme(){
    return useContext(ThemeContext)
}