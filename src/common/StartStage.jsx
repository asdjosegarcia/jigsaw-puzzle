import React, { useContext } from "react";
import { StartButton } from "@components/buttons/StartButton.jsx";
import '@styles/common/StartStage.scss'
import { variableContext } from "../context/context.jsx";
import NextButton from "../components/buttons/NextButton.jsx";
import RetryButton from "../components/buttons/RetryButton.jsx"
import ScoresView from "../components/ScoresView.jsx";
import UserScoreView from "../components/UserScoreView.jsx"
import MapDescription from "../components/MapDescription.jsx";

let ejecuciones = 0;

export function StartStage() {
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
    let startButtonview = false;//true se renderiza boton, false pos nel
    let retryReplyButtonView = false;
    let nextButtonView = false;
    // if (contexto.gameStatus.mapAttempts<1) {
        //     startButtonview=true
    // }
    switch (true) {
        // case (blockPosition == quotesPosition):
        //     break;
        case (contexto.gameStatus.mapAttempts > 0):
            retryReplyButtonView = true;
            break;
        case (contexto.getCompletedGame):
            nextButtonView = true
            retryReplyButtonView = true;
            startButtonview = false;
            break;
        case (contexto.gameStatus.mapAttempts < 1):
            startButtonview = true;
        break;
        // default:
        //     if (blockPosition == quotesPosition - mapWidth || blockPosition == quotesPosition + mapWidth || blockPosition == quotesPosition + 1 || blockPosition == quotesPosition - 1) {
        //         movimiento(quotesPosition, blockPosition)
        //     }
    }

    const startButtonStyle = { //enviamos los estilos desde aqui para evitar tocar el css de manera directa en el startbuton.css y afectar a todos los starts button
        gridColumn: '1/3',
        gridRow: '3/3',
        justifySelf: 'center',
    }
    const nextButtonStyle = {
        gridColumn: '1/3',
        gridRow: '3/3',
        justifySelf: 'start',
    }
    const retryButtonStyle = {
        gridColumn: '1/3',
        gridRow: '3/3',
        justifySelf: 'end',
        // backgroundColor:'yellow'
    }
    /*     const ScoreViewStyle = {
            gridColumn: '1/3',
            gridRow: '1/2',
            // color:'red',
            // textAling:'center'
        } */
    /*     const UserScoreViewStyle={
            gridColumn: '3/4',
            gridRow: '1/2',
            
        } */


    return (
        <>
            {!contexto.gameStartedStatus && ( /* si el juego esta iniciado el cartel desaparece */
                <div className="start-stage__background">
                    <div className="start-stage__container">
                        <div className="start-stage__scores">
                            <>
                                {contexto.getCompletedGame ? (
                                    <>
                                        <ScoresView /* styleProp={ScoreViewStyle} */ ></ScoresView>
                                        <UserScoreView /* styleProp={UserScoreViewStyle} */></UserScoreView>
                                    </>
                                ) : (
                                    <MapDescription></MapDescription>
                                )}
                            </>


                        </div>
                        {/* {contexto.getCompletedGame && ( */}
                        {/*  )} */}
                        <div className="start-stage__buttons-container">
                            {retryReplyButtonView && <RetryButton styleProp={retryButtonStyle} className="start-stage__RetryButton" />}
                            {startButtonview && <StartButton styleProp={startButtonStyle} />}
                            {nextButtonView && <NextButton styleProp={nextButtonStyle} className="start-stage__NextButton" />}
                        </div>
                    </div>

                </div>
            )}
        </>
    )
}