import React, { useContext, useEffect } from "react";
import '@styles/components/UserScoreView.scss'
import { variableContext } from "../context/context.jsx";


let newScore=0;
const UserScoreView = (prop) => {
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
    useEffect(() => {
        const tiempo = ((0 - 999) / (10000 - 0)) * contexto.getScore.secondsPlayed + 999
        const movimientos = ((0 - 999) / (1000 - 0)) * contexto.getScore.movementsNumber + 999
        // console.log('tiempo', tiempo)
        // console.log('movimientos', movimientos)
         newScore = (tiempo * movimientos) / 1000
         newScore = parseFloat(newScore.toFixed(2));
         if (newScore !== contexto.getScore.score) {
             contexto.setScore({ ...contexto.getScore, score: newScore });
         }
    
      return  
    }, [contexto.getCompletedGame])
    
    

    //  contexto.setScore({ ...contexto.getScore, score: score })//guardamos el numero de mapa para almacenar el nivel


    console.log(contexto.getScore)
    return (
        <div style={prop.styleProp} className='userScoreView-container'>
            <div className='userScoreView-content'>
                <h2>Your Score</h2>
                <h3>Time:</h3>
                <p>{contexto.getScore.secondsPlayed}</p>
                <h3>Movements:</h3>
                <p>{contexto.getScore.movementsNumber}</p>
                <h3>Score:</h3>
                <p>{newScore}{/* {contexto.getScore.score} */}</p>

            </div>
        </div>
    )
}

export default UserScoreView