import React,{useEffect, useState} from "react"
import backgroundSound from "@sounds/background_sound.mp3"


export const variableContext=React.createContext();//creamos un context
// let gameStarted;
export function FuncionProvider({children}){//creamos la funcion que encapsulara los valores y luego encapsulara el componente principal de la app
    const[texto,setTexto]=useState('no nacimos para perder')//lo que vamos a compartir en toda la app
    const [gameStartedStatus,setGameStartedStatus]=useState(false)
    const [getCompletedGame, setCompletedGame] = useState(false)//establece el juego como completado
    const [getTimerStatus,setTimerStatus]=useState(false)//temporizador
    const soundBackground = new Audio(backgroundSound);
    const [getLevel,setLevel]=useState(1)

      

    return (
        <variableContext.Provider value={{
            texto,setTexto,
            gameStartedStatus,setGameStartedStatus,
            getCompletedGame,setCompletedGame,
            getTimerStatus,setTimerStatus,
            soundBackground
            }}>{/* value almacena lo que queremos entregar a el resto de la app */}
            {children} {/* un children por que aqui entrar el elemento que encapsulemos */}
        </variableContext.Provider>
    )
}