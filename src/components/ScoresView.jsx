import React, { useEffect, useState, useContext } from 'react'
import '@styles/components/ScoresView.scss'
import { variableContext } from '../context/context.jsx'

let data;
const ScoreView = (prop) => {
    const contexto = useContext(variableContext)
    const [getData, setData] = useState([
        {},{},{},{},{},{},{},{},{},{},
    ])
    useEffect(() => {
        if (contexto.getCompletedGame && data == undefined) {
            // console.log('GET-Request')
            async function getApiScores() {
                const res = await fetch(`https://puzzles-backend-eight.vercel.app/jigsaw-scores/best-scores/${contexto.getScore.map}`)
                /* const */ data = (await res.json())
                // console.log(await data)
                setData(await data)
                data = undefined
            }
            getApiScores()
        }


    }, [contexto.getCompletedGame])

    return (
        <div style={prop.styleProp} className='scores-container'>
            <table>
                <thead>
                    <tr className='head-tr'>
                        <th>N</th>
                        <th>Player</th>
                        <th>Time</th>
                        <th>Movements</th>
                        <th>Score</th>
                        {/* <th>Fecha</th> */}
                    </tr>
                </thead>
                <tbody>
                    {getData.map((user, index) => { return (<tr key={index}>{<td>{index + 1}</td>}<td>{user.user}</td><td>{user.secondsPlayed}</td><td>{user.movementsNumber}</td><td>{user.score}</td></tr>) })}

                </tbody>
            </table>
        </div>
    )
}

export default ScoreView