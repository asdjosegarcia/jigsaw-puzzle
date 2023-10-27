import React, { useContext } from "react";
import { StartButton } from "@components/buttons/StartButton.jsx";
import '@styles/common/StartStage.scss'
import { variableContext } from "../context/context.jsx";
import NextButton from "../components/buttons/NextButton.jsx";


export function StartStage() {
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
    const startButtonStyle={ //enviamos los estilos desde aqui para evitar tocar el css de manera directa en el startbuton.css y afectar a todos los starts button
        gridColumn: '2/3',
        gridRow: '3/3',
        justifySelf:'center', 
    }
    const nextButtonStyle={
        gridColumn: '3/3',
        gridRow: '3/3',
        justifySelf:'start', 
    }


    return (
        <>
            {!contexto.gameStartedStatus && ( /* si el juego esta iniciado el cartel desaparece */
                <div className="start-stage__background">
                    <div className="start-stage__container">
                        <StartButton styleProp={startButtonStyle} />
                        <NextButton styleProp={nextButtonStyle} className="start-stage__NextButton" />
                    </div>

                </div>
            )}
        </>
    )
}