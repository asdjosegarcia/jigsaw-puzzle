import React,{useContext} from 'react'
import "@styles/components/NameInput.scss"
import { variableContext } from "../context/context.jsx";


let inputValue="Unknown"
const NameInput = () => {
    const contexto = useContext(variableContext)

    const extractName = (event) => {//funcion que ejecuta el input cda vez que se escrube algo
        inputValue=event.target.value;//almacenamos el valor del inut en la vvariable
        console.log(inputValue)
    };
    
    function send(){
        contexto.setScore({...contexto.getScore, user:inputValue}) //esto actualiza el valor de nombre en el userScore
        async function putName() {
            console.log('PUT-request')
            const res = await fetch(`https://db-asdjosegarcia.vercel.app/api/jigsaw/scores/${contexto.gameStatus.scoreId}`, {
                method: "PUT",//creamos la tarea con PUT
                body: JSON.stringify({"user":`${inputValue}`}),//enviamos datos a editar, en este caso nombre de usuario
                headers: { //le indicamos que trabajaremos con 
                    "Content-Type": "application/json",//json
                },
            })
                .then(async response => {
                    const data =await  response.json();
                    // console.log('PUT-response', data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        putName()

    }

    return (
        <div className='input-container'>
            <label htmlFor="name"></label>
            <input id='name' onChange={extractName} type="text" placeholder='Write your name' />
            <button onClick={()=>send()} className=' send-name-button'>Send</button>
            <span>📝</span>
        </div>
    )
}

export default NameInput