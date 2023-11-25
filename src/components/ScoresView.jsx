import React, { useEffect, useState } from 'react'
import '@styles/components/ScoresView.scss'

// let data;
const ScoreView = (prop) => {
    const [getData, setData] = useState([])
    useEffect(() => {
        async function getApiScores() {
            const res = await fetch(`https://db-asdjosegarcia.vercel.app/api/jigsaw/scores`)
            const data = (await res.json())
            console.log(data)
            setData(data)
            //   await new Promise((resolve)=>{setTimeout(resolve,1000)})

            // return data
        }
        getApiScores()

/*         fetch('https://db-asdjosegarcia.vercel.app/api/jigsaw/scores/')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error)); */
    }, [])

    return (
        <div style={prop.styleProp} className='scores-container'>
            <table>
                <thead>
                    <tr className='head-tr'>
                        <th>N</th>
                        <th>Jugador</th>
                        <th>Tiempo</th>
                        <th>Movimientos</th>
                        <th>Score</th>
                        {/* <th>Fecha</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* {console.log(getData)} */}
                    {  getData.map((user,index)=>{return(<tr key={user.id}>{<td>{index}</td>}<td>{user.user}</td><td>{user.secondsPlayed}</td><td>{user.movementsNumber}</td><td>{user.score}</td></tr>)})}  
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