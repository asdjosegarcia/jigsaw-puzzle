// import React from "react"; 
import '@styles/components/buttons/StartButton.scss'
import React, { useContext } from "react";
import { variableContext } from "../../context/context.jsx";

export function StartButton() {
  const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto

    
  return (
    <>
    {/* <variableContext.provider value={{gameStarted}}> */}
      <button onClick={()=>{contexto.setGameStartedStatus(true),contexto.setTimerStatus(true)}} className="start-button__button">
        <p className="start-button__button-text">Start!</p>
      </button>
    {/* </variableContext.provider> */}
    </>
  );
}



/* function Hijo() {
    // console.log(contexto);
    return (
            <h1>hola, {contexto.texto}</h1>//contexto tiene los valores, texto es uno de los valores alamacenados en contexto
    )
}
export { Hijo }
 */