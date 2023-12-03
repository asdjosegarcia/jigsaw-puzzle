import React, { useEffect, useState } from "react"
// import backgroundSound from "@sounds/background_sound_lvl1.mp3"
import { jigsawMaps } from "../utils/maps.jsx";



export const variableContext = React.createContext();//creamos un context
// let gameStarted;
export function FuncionProvider({ children }) {//creamos la funcion que encapsulara los valores y luego encapsulara el componente principal de la app
    const [gameStartedStatus, setGameStartedStatus] = useState(false)//lo que vamos a compartir en toda la app
    const [getCompletedGame, setCompletedGame] = useState(false)//establece el juego como completado
    const [getTimerStatus, setTimerStatus] = useState(false)//temporizador
    const [getResetClock, setResetClock] = useState(false)
    let gameStatus = {
        mapAttempts: 0,
        mapStatus: 'complete',
        scoreId: 0
    }
    const [getLevel, setLevel] = useState(1)

    let soundBackground = new Audio(jigsawMaps[getLevel].backgroundSound);
    const [getScore, setScore] = useState({
        map: 0,
        user: 'Unknown',
        userId: 0,
        score: 0,
        secondsPlayed: 0,
        movementsNumber: 0,
        mapWin: true,
    })
    useEffect(() => {
        if (!getCompletedGame && gameStartedStatus) {
            console.log('play')
            soundBackground.play();
            // console.log(soundBackground)

        } else {
            // soundBackground.paused=true;
            console.log('pause', soundBackground)
            console.log(soundBackground)
            soundBackground.pause();
        }
    }, [getCompletedGame, gameStartedStatus, /* soundBackground */])



    return (
        <variableContext.Provider value={{
            gameStartedStatus, setGameStartedStatus,
            getCompletedGame, setCompletedGame,
            getTimerStatus, setTimerStatus,
            getResetClock, setResetClock,
            gameStatus,
            // soundBackground,
            getLevel, setLevel,
            getScore, setScore
        }}>{/* value almacena lo que queremos entregar a el resto de la app */}
            {children} {/* un children por que aqui entrar el elemento que encapsulemos */}
        </variableContext.Provider>
    )
}