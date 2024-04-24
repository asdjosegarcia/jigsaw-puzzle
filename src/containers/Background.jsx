
import React, { useContext, useEffect, useState } from 'react';
import { variableContext } from "@context/context.jsx";
import { jigsawMaps } from "../utils/maps.jsx";
import Loading from '../templates/Loading.jsx';

let soundBackground;

const Background = ({ children }) => {
    const contexto = useContext(variableContext);
    const [getIsBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
    const [getLoadingAnimation,setLoadingAnimation]=useState(false)


    useEffect(() => {
        if (!getIsBackgroundLoaded) {//si background img  NO esta cargado
            const img = new Image(); //creamos una instancia de tipo Image, se utiliza en JS para manipular iamgenes
            img.src = jigsawMaps[contexto.getLevel].imgBackgroundUrl; // llamamos a la imagen segun el nivel
            img.onload = disableLoading()
        }
    }, [contexto.getLevel, getIsBackgroundLoaded]);

    const disableLoading=()=>{
        setLoadingAnimation(true)
        setTimeout((disableLoading) => {setIsBackgroundLoaded(true);}, 2000);//una vez que la imagene ste cargada establecemos el estado como true para que es muestre la web
        
    }


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
        <>
        {!getIsBackgroundLoaded && <Loading disableLoading={getLoadingAnimation}/>}
        
        
        <div style={style} className="app-background">
            {children}
        </div>
        {/* : */}
        </>
    );
}

export default Background;
