// import React, { useContext, useEffect } from 'react'
// import { variableContext } from "@context/context.jsx";
// import { jigsawMaps } from "../utils/maps.jsx";



// let soundBackground;
// const Background = ({ children }) => {
//     const contexto = useContext(variableContext)
//     if (soundBackground==undefined || contexto.gameStartedStatus && contexto.getCompletedGame) { //si el sonido no tiene nada o el juego esta iniciado
//         soundBackground = new Audio(jigsawMaps[contexto.getLevel].backgroundSound);
//         // console.log('declaraciones')
//     }
//     if (!contexto.getCompletedGame && contexto.gameStartedStatus) {//si el juego no se completo reproduce
//         // console.log('play')
//         // if(soundBackground.paused == true){
//         soundBackground.play();
//         // }
//         soundBackground.loop = true;
//     } else {//de lo contrario pausar    
//         // console.log('pause', soundBackground)
//         soundBackground.pause();
//         soundBackground=undefined
//     }


//     const img = jigsawMaps[contexto.getLevel].imgBackgroundUrl
//     const style = {
//         backgroundImage: `url(${img})`
//     }
//     // console.log(style)
//     // console.log(contexto.getLevel)
//     return (
//         <>
//             <div style={style} className="app-background">
//                 {children}
//             </div>
//         </>
//     )
// }

// export default Background
import React, { useContext, useEffect, useState } from 'react';
import { variableContext } from "@context/context.jsx";
import { jigsawMaps } from "../utils/maps.jsx";
import Loading from '../templates/Loading.jsx';

let soundBackground;

const Background = ({ children }) => {
    const contexto = useContext(variableContext);
    const [getIsBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

    // Función para manejar la carga de la imagen de fondo
    const handleBackgroundImageLoad = () => {
        setIsBackgroundLoaded(true);
    }

    useEffect(() => {
        if (!getIsBackgroundLoaded) {//si background img esta cargado
            const img = new Image();
            img.src = jigsawMaps[contexto.getLevel].imgBackgroundUrl;
            img.onload = handleBackgroundImageLoad;
        }
    }, [contexto.getLevel, getIsBackgroundLoaded]);

    if (soundBackground === undefined || (contexto.gameStartedStatus && contexto.getCompletedGame)) {
        soundBackground = new Audio(jigsawMaps[contexto.getLevel].backgroundSound);
    }

    if (!contexto.getCompletedGame && contexto.gameStartedStatus) {
        soundBackground.play();
        soundBackground.loop = true;
    } else {
        soundBackground.pause();
        soundBackground = undefined;
    }

    const img = jigsawMaps[contexto.getLevel].imgBackgroundUrl;
    const style = {
        backgroundImage: `url(${img})`
    };

    return (
        (getIsBackgroundLoaded )?
        <div style={style} className="app-background">
            {children}
        </div>
        :
        <Loading/>
    );
}

export default Background;
