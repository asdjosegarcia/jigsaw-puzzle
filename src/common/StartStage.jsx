import React,{useContext, useEffect} from "react";
import { StartButton } from "@components/buttons/StartButton.jsx";
import '@styles/common/StartStage.scss'
import { variableContext } from "../context/context.jsx";


export function StartStage(){ 
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto

   
    return(
    <>
        {!contexto.gameStartedStatus &&( /* si el juego esta iniciado el cartel desaparece */
        <div className="start-stage__background">
            <div className="start-stage__StartButton-container">
            <StartButton className="start-stage__StartButton"/>
            </div>
        </div>
        )}
    </>
    )
}