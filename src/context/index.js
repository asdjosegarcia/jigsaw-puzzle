import React, { useState,useContext } from "react";

const GlobalContext = useContext();

function FuncionProvider({ children }) {
    const [getStarted,setStated]=useState()
    return(
    <GlobalContext.Provider value={{getStarted,setStated}} >
        {children}
    </GlobalContext.Provider>
    )
}
export { GlobalContext, FuncionProvider };
