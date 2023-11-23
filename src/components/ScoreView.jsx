import React from 'react'
import '@styles/components/ScoreView.scss'

const ScoreView = (prop) => {
    async function getApiScores() {
        const res = await fetch(`https://db-puzzles.vercel.app/api/jigsaw/scores`)
        const data = await res.json()
        // await new Promise((resolve)=>{setTimeout(resolve,1000)})

        // return data
        console.log(data)
    }
    getApiScores()
    return (
        <div style={prop.styleProp} className='scores-container'>
            <table>
                <thead>
                    <tr className='head-tr'>
                        <th>Nombre</th>
                        <th>Tiempo</th>
                        <th>Movimientos</th>
                        <th>Score</th>
                        {/* <th>Fecha</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* {prop.} */}
{/*                     <tr>
                        <td>Juan</td>
                        <td>Gomez</td>
                        <td>32</td>
                        <td>328382</td>
                    </tr>
                    <tr>
                        <td>Juan</td>
                        <td>Gomez</td>
                        <td>32</td>
                        <td>328382</td>
                    </tr>
                    <tr>
                        <td>Juan</td>
                        <td>Gomez</td>
                        <td>32</td>
                        <td>328382</td>
                    </tr>
                    <tr>
                        <td>Juan</td>
                        <td>Gomez</td>
                        <td>32</td>
                        <td>328382</td>
                    </tr>
                    <tr>
                        <td>Juan</td>
                        <td>Gomez</td>
                        <td>32</td>
                        <td>328382</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default ScoreView