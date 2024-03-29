import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { variableContext } from "../context/context.jsx";

//establecemos estas variables fuera de la funcion de renderizado para que no se redeclaren y borren los datos
let tenMs;
let seconds;
let minutes;
let hours;
let tenMsInterval;
let valueClock;
let pause = false;
function Timer() {

  const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto


  const [getMs, setMs] = useState(Number)
  const [getSeconds, setSeconds] = useState(Number)
  const [getMinutes, setMinutes] = useState(Number)
  // const [getPause, setPause] = useState(false)



  const pauseClock = () => {
    // setPause(!pause)
    pause = !pause
  }
  const resetClock = () => {
    setClockToZero(true)
    pause=true
  }



  const saveValueClock = () => {
    valueClock = [minutes, seconds, tenMs]
    const clockSeconds = ((((valueClock[0] * 60) + valueClock[1] * 60) + (valueClock[2] / 100)))
    contexto.setScore({ ...contexto.getScore, secondsPlayed: clockSeconds })
  }

  const setClockToZero = (reset) => {
    if (tenMs == undefined || reset) {//si tenMs es undefined declara todas las variables como 0 asi el +1 haga efecto, o true
      tenMs = 0;
      seconds = 0;
      minutes = 0;
      hours = 0;
      setMs(0)
      setSeconds(0)
      setMinutes(0)
    }
  }
  setClockToZero()


  useEffect(() => { //evita que se vuelva a ejecutar lo que esta dentro una vez renderizado
    function showTime() {//esta funcion calcula el tiempo que paso
      tenMs = tenMs + 1
      if (tenMs > 99) {
        tenMs = 0
        seconds = seconds + 1
      }
      if (seconds > 59) {//los segundos solo llegan a 60
        seconds = 0
        minutes = minutes + 1;
      }
      setMs(tenMs),
        setSeconds(seconds),
        setMinutes(minutes)
      // console.log(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}:${tenMs < 10? "0" + tenMs: tenMs }`)//muestra el tiempo, si es menor a 10 agrega un 0
    }

    if (contexto.getTimerStatus && !pause) {
      tenMsInterval = setInterval(() => { showTime() }, 10);//si el juego inicio ejecuta la funcion cada 10 ms      
    }
    if (contexto.getCompletedGame) {//si el usuario completo el juego se llama a la funcion paara que guarde el tiempo
      saveValueClock()
    }
    if(contexto.getResetClock){
      setClockToZero(true)
    }

    return (() => { clearInterval(tenMsInterval) });//si no retornamos la funcion del useEfect el cronometro no para
  }, [contexto.getTimerStatus, pause, contexto.getCompletedGame])

  /*   if(){
  
    } */

  return (
    <>
      < >{`${getMinutes}:${getSeconds < 10 ? "0" + getSeconds : getSeconds}:${getMs < 10 ? "0" + getMs : getMs}`}</>{/* etiqueta fragment por que es la mas lijera */}
      {/* <button onClick={()=>{pauseClock()}}>Pause</button> */}
      {/* <button onClick={()=>{resetClock()}}>Reset</button> */}
      {/* <button onClick={()=>{saveValueClock()}}>Save</button> */}
    </>
  );
}
export default Timer;
