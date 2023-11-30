import React, { useContext } from "react";
import { StartButton } from "@components/buttons/StartButton.jsx";
import '@styles/common/StartStage.scss'
import { variableContext } from "../context/context.jsx";
import NextButton from "../components/buttons/NextButton.jsx";
import RetryButton from "../components/buttons/RetryButton.jsx"
import ScoresView from "../components/ScoresView.jsx";
import UserScoreView from "../components/UserScoreView.jsx"
import MapDescription from "../components/MapDescription.jsx";
import NameInput from "../components/NameInput.jsx";
import { jigsawMaps } from "../utils/maps.jsx";


export function StartStage() {
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
    const mapsLenght=Object.keys(jigsawMaps).length

    let startButtonview = false;//true se renderiza boton, false pos nel
    let retryReplyButtonView = false;
    let nextButtonView = false;
    let nameInputVieew = false;

    switch (true) {//este switch gestiona el renderizado de los bottones
        case (contexto.gameStatus.mapAttempts > 0):
            retryReplyButtonView = true;
            break;
        case (contexto.getCompletedGame && contexto.getScore.map == mapsLenght):
            nextButtonView = false;
            retryReplyButtonView = true;
            startButtonview = false;
            break;
        case (contexto.getCompletedGame):
            nextButtonView = true
            retryReplyButtonView = true;
            startButtonview = false;
            break;
        case (contexto.gameStatus.mapAttempts < 1):
            startButtonview = true;
            break;
    }

    const startButtonStyle = { //enviamos los estilos desde aqui para evitar tocar el css de manera directa en el startbuton.css y afectar a todos los starts button
        /*         gridColumn: '1/3',
                gridRow: '3/3',
                justifySelf: 'center', */
    }
    const nextButtonStyle = {
        /*         gridColumn: '1/3',
                gridRow: '1/1',
                justifySelf: 'start', */
    }
    const retryButtonStyle = {
        // gridColumn: '1/3',
        // gridRow: '1/1',
        // justifySelf: 'end',
        // backgroundColor:'yellow'
    }


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
                        {contexto.getCompletedGame && //si el juego se completo muestra el input para escribir el nombre
                            <div className="start-stage__input-Name-container">
                                <NameInput></NameInput>
                            </div>
                        }
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