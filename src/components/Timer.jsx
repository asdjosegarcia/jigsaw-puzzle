import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { variableContext } from "../context/context.jsx";


function Timer() {
  const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto


  const [getMs, setMs] = useState(Number)
  const [getSeconds, setSeconds] = useState(Number)
  const [getMinutes, setMinutes] = useState(Number)

  useEffect(() => { //evita que se vuelva a ejecutar lo que esta dentro una vez renderizado
    

    let tenMs = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let tenMsInterval

    // console.log( 'getCompletedGame '+contexto.getCompletedGame)

    function showTime() {//esta funcion calcula el tiempo que paso
      tenMs = tenMs + 1
      // console.log(tenMs);
      if (tenMs > 99) {
        tenMs = 0
        seconds = seconds + 1
      }
      if (seconds > 59) {
        //los segundos solo llegan a 60
        seconds = 0
        minutes = minutes + 1;
      }
      setMs(tenMs),
        setSeconds(seconds),
        setMinutes(minutes)


      // console.log(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}:${tenMs < 10? "0" + tenMs: tenMs }`)//muestra el tiempo, si es menor a 10 agrega un 0
    }

    if (contexto.getTimerStatus) {
      tenMsInterval = setInterval(() => { showTime() }, 10);//si el juego inicio ejecuta la funcion cada 10 ms
      console.log('inicia el cronometrooooooo')
    } 
    return (()=>{clearInterval(tenMsInterval)});//si no retornamos la funcion del useEfect el cronometro no para

  }, [contexto.getTimerStatus])


  return (
    <>
      <div>{`${getMinutes}:${getSeconds < 10 ? "0" + getSeconds : getSeconds}:${getMs < 10 ? "0" + getMs : getMs}`}</div>
    </>
  );
}
export default Timer;
