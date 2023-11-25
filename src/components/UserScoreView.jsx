import React, { useContext } from "react";
import '@styles/components/UserScoreView.scss'
import { variableContext } from "../context/context.jsx";



const UserScoreView = (prop) => {
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
    console.log(contexto.getScore.secondsPlayed)
  return (
    <div style={prop.styleProp} className='userScoreView-container'>
        <div className='userScoreView-content'>
        <h2>Your Score</h2> 
        <h3>Time:</h3>
        <p>{contexto.getScore.secondsPlayed}</p>
        <h3>Movements:</h3>
        <p>{contexto.getScore.movementsNumber}</p>
        <h3>Score:</h3>
        <p>{contexto.getScore.score}</p>

        </div>
    </div>
  )
}

export default UserScoreView