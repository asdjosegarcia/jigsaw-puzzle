import React, { useEffect, useState,useContext } from 'react'
import '@styles/components/ScoresView.scss'
import { variableContext } from '../context/context.jsx'

let data;
const ScoreView = (prop) => {
    const contexto = useContext(variableContext)
    const [getData, setData] = useState([])
    useEffect(() => {
        if(contexto.getCompletedGame && data==undefined ){
            console.log('GET-Request')
            async function getApiScores() {
                const res = await fetch(`https://db-asdjosegarcia.vercel.app/api/jigsaw/scores/best-ten/${contexto.getScore.map}`)
                /* const */ data = (await res.json())
                console.log(await data)
                setData(await data)
                data=undefined
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
                    {/* {console.log(getData)} */}
                    {  getData.map((user,index)=>{return(<tr key={user.id}>{<td>{index+1}</td>}<td>{user.user}</td><td>{user.secondsPlayed}</td><td>{user.movementsNumber}</td><td>{user.score}</td></tr>)})}  
                    {/*                     <tr>
                        <td>Juan</td>
                        <td>Gomez</td>
                        <td>32</td>
                        <td>328382</td>
                    </tr>
    */}
                </tbody>
            </table>
        </div>
    )
}

export default ScoreView