import React, { useEffect,useContext } from "react";
import { useState } from "react";
import { variableContext } from "../context/context.jsx";

// let tenMsInterval;

function Timer() {
    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto


    const [getMs,setMs]=useState(Number)
    const [getSeconds,setSeconds]=useState(Number)
    const [getMinutes,setMinutes]=useState(Number)
    

  let tenMs = 0;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;
  
  let tenMsInterval
  console.log('ejecutando esto');
  useEffect(()=>{//evita que se vuelva a ejecutar lo que esta dentro una vez renderizado
    
    if(!contexto.gameStartedStatus){
      clearInterval(tenMsInterval)
    }else{
    // clearInterval(tenMsInterval); //<------------con esto se para (en 15 seg)
     tenMsInterval = setInterval(() => {showTime()}, 10);
  }

  },[contexto.gameStartedStatus])
  
  function showTime() {
      tenMs=tenMs+1
      // console.log(tenMs);
      if (tenMs > 99) {
        tenMs=0
        seconds=seconds+1
      }
      if (seconds > 59) {
        //los segundos solo llegan a 60
        seconds=0
        minutes = minutes + 1;
      }
      setMs(tenMs),  
      setSeconds(seconds),
      setMinutes(minutes)
  
  
      // console.log(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}:${tenMs < 10? "0" + tenMs: tenMs }`)//muestra el tiempo, si es menor a 10 agrega un 0
  }


  return (
    <>
      <div>{`${getMinutes}:${getSeconds < 10 ? "0" + getSeconds : getSeconds}:${getMs < 10? "0" + getMs  : getMs }`}</div>
    </>
  );
}
export default Timer;
