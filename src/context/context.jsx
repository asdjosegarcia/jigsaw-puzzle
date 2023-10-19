import React,{useEffect, useState} from "react"

export const variableContext=React.createContext();//creamos un context
// let gameStarted;
export function FuncionProvider({children}){//creamos la funcion que encapsulara los valores y luego encapsulara el componente principal de la app
    const[texto,setTexto]=useState('no nacimos para perder')//lo que vamos a compartir en toda la app
    const [gameStartedStatus,setGameStartedStatus]=useState(false)
    const [getCompletedGame, setCompletedGame] = useState(false)//establece el juego como completado
    const [getTimerStatus,setTimerStatus]=useState(false)

      

    return (
        <variableContext.Provider value={{
            texto,setTexto,
            gameStartedStatus,setGameStartedStatus,
            getCompletedGame,setCompletedGame,
            getTimerStatus,setTimerStatus
            }}>{/* value almacena lo que queremos entregar a el resto de la app */}
            {children} {/* un children por que aqui entrar el elemento que encapsulemos */}
        </variableContext.Provider>
    )
}