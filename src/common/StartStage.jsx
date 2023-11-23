import React, { useContext } from "react";
import { StartButton } from "@components/buttons/StartButton.jsx";
import '@styles/common/StartStage.scss'
import { variableContext } from "../context/context.jsx";
import NextButton from "../components/buttons/NextButton.jsx";
import RetryButton from "../components/buttons/RetryButton.jsx"
import ScoreView from "../components/ScoreView.jsx";

let ejecuciones=0;
export function StartStage() {
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto

/*     async function getApiScores() {
        const res = await fetch(`https://db-puzzles.vercel.app/api/jigsaw/scores`)
        const data = await res.json()
        // await new Promise((resolve)=>{setTimeout(resolve,1000)})

        // return data
        console.log(data)
    } */
/*     if(contexto.getCompletedGame){
        getApiScores()
    } */
    const startButtonStyle = { //enviamos los estilos desde aqui para evitar tocar el css de manera directa en el startbuton.css y afectar a todos los starts button
        gridColumn: '2/3',
        gridRow: '3/3',
        justifySelf: 'center',
    }
    const nextButtonStyle = {
        gridColumn: '3/3',
        gridRow: '3/3',
        justifySelf: 'start',
    }
    const retryButtonStyle = {
        gridColumn: '1/2',
        gridRow: '3/3',
        justifySelf: 'end',
        // backgroundColor:'yellow'
    }
    const ScoreViewStyle = {
        gridColumn: '1/3',
        gridRow: '1/3',
        // color:'red',
        // textAling:'center'
    }


    return (
        <>
            {!contexto.gameStartedStatus && ( /* si el juego esta iniciado el cartel desaparece */
                <div className="start-stage__background">
                    <div className="start-stage__container">
                        {/* {contexto.getCompletedGame && ( */}
                        <ScoreView styleProp={ScoreViewStyle} ></ScoreView>
                        {/*  )} */}
                        <StartButton styleProp={startButtonStyle} />
                        <NextButton styleProp={nextButtonStyle} className="start-stage__NextButton" />
                        <RetryButton styleProp={retryButtonStyle} className="start-stage__RetryButton" />
                    </div>

                </div>
            )}
        </>
    )
}