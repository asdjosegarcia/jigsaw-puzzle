import React, { useContext, useEffect } from "react";
import '@styles/components/UserScoreView.scss'
import { variableContext } from "../context/context.jsx";


let newScore = 0;
let postRequest = 0;
let extractScore = {};
const UserScoreView = (prop) => {
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
    extractScore = contexto.getScore

    if (contexto.getCompletedGame) {
        const tiempo = ((0 - 999) / (10000 - 0)) * extractScore.secondsPlayed + 999
        const movimientos = ((0 - 999) / (1000 - 0)) * extractScore.movementsNumber + 999
        newScore = (tiempo * movimientos) / 1000
        newScore = parseFloat(newScore.toFixed(2));
        if (newScore !== extractScore.score) {
            extractScore.score = newScore
        }
    }

    if (contexto.getCompletedGame && contexto.getScore.secondsPlayed) {
        console.log(extractScore)
        async function postScore() {
            // console.log('extract', extractScore)
            const res = await fetch("https://db-asdjosegarcia.vercel.app/api/jigsaw/scores/new", {
                method: "POST",//creamos la tarea con POST
                body: JSON.stringify(extractScore),//enviamos como datos para la nueva tarea un post con titulo y descripcion
                headers: { //le indicamos que trabajaremos con 
                    "Content-Type": "application/json",//json
                },
            })
                .then(response => {
                    const data = response.json();//datos que contienen la tarea
                    console.log('POST-response', data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        postScore()
    }

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