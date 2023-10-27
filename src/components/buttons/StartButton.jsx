// import React from "react"; 
import '@styles/components/buttons/StartButton.scss'
import React, { useContext } from "react";
import { variableContext } from "../../context/context.jsx";

export function StartButton(props) {
  const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
  const StartButtonClicked=()=>{
    contexto.setTimerStatus(true)
    contexto.setGameStartedStatus(true)
    if(contexto.soundBackground.loop==false){ //si ya se esta reproduciendo el audio en infinito no lo reproduce de nuevo
      contexto.soundBackground.loop = true;//reproduccion del audio en infinito
      contexto.soundBackground.play()
    }
  }
  return (
    <>
      <button style={props.styleProp} onClick={()=>{StartButtonClicked()}} className="start-button__button">
        <p className="start-button__button-text">Start!</p>
      </button>
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