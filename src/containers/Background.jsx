import React, { useContext, useEffect } from 'react'
import { variableContext } from "@context/context.jsx";
import { jigsawMaps } from "../utils/maps.jsx";



let soundBackground;
const Background = ({ children }) => {
    const contexto = useContext(variableContext)
    if (soundBackground==undefined || contexto.gameStartedStatus && contexto.getCompletedGame) { //si el sonido no tiene nada o el juego esta iniciado
        soundBackground = new Audio(jigsawMaps[contexto.getLevel].backgroundSound);
        console.log('declaraciones')
    }
    if (!contexto.getCompletedGame && contexto.gameStartedStatus) {//si el juego no se completo reproduce
        console.log('play')
        // if(soundBackground.paused == true){
        soundBackground.play();
        // }
        soundBackground.loop = true;
    } else {//de lo contrario pausar    
        console.log('pause', soundBackground)
        soundBackground.pause();
        soundBackground=undefined
    }


    const img = jigsawMaps[contexto.getLevel].imgBackgroundUrl
    const style = {
        backgroundImage: `url(${img})`
    }
    // console.log(style)
    // console.log(contexto.getLevel)
    return (
        <>
            <div style={style} className="app-background">
                {children}
            </div>
        </>
    )
}

export default Background