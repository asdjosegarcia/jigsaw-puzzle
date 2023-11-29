import React, { useContext } from "react"
import '@styles/components/buttons/GeneralButtonsStyles.scss'
import "@styles/components/buttons/RetryButton.scss"

import { variableContext } from "@context/context.jsx";

const NextButton = (prop) => {
    const contexto = useContext(variableContext)

    const levelUp = () => {
        contexto.setResetClock(true)
        contexto.setTimerStatus(true)
        contexto.setCompletedGame(false)
        contexto.setGameStartedStatus(true)
        contexto.setScore({
            ...contexto.getScore,
            // map:0,
            // user:'Unknown',
            // userId:0,
            score: 0,
            secondsPlayed: 0,
            movementsNumber: 0,
        })
        if(contexto.soundBackground.loop==false){ //si ya se esta reproduciendo el audio en infinito no lo reproduce de nuevo
            contexto.soundBackground.loop = true;//reproduccion del audio en infinito
            contexto.soundBackground.play()
          }

    }

    return (
        <>
            <button style={prop.styleProp} onClick={() => levelUp()} className="general-button retry-button__button">
                <p className="genral-button__button-text retry-button__button-text">⟳ Retry</p>
            </button>
        </>
    )
}

export default NextButton