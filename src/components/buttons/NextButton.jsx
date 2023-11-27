import React,{useContext} from "react"
import '@styles/components/buttons/GeneralButtonsStyles.scss'
import "@styles/components/buttons/NextButton.scss"
// import { useContext,react } from 'react'
import { variableContext } from "@context/context.jsx";
const NextButton = (prop) => {
    const contexto = useContext(variableContext)
    const levelUp = () => {
        contexto.setResetClock(true)
        contexto.setCompletedGame(false)
        contexto.setLevel(contexto.getLevel+1);
        contexto.setScore({...contexto.getScore,
            // map:0,
            // user:'Unknown',
            // userId:0,
            score:0,
            secondsPlayed:0,
            movementsNumber:0,
            })
        
    }

    return (
        <>
            <button onClick={() => levelUp()} style={prop.styleProp} className="general-button next-button__button">
                <p className="genral-button__button-text next-button__button-text">Next ▸▸ </p>
            </button>
        </>
    )
}

export default NextButton