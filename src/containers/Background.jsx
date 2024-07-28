
import React, { useContext, useEffect, useState } from 'react';
import { variableContext } from "@context/context.jsx";
import { jigsawMaps } from "../utils/maps.jsx";
import Loading from '../templates/Loading.jsx';

let soundBackground;
let level = null;

const Background = ({ children }) => {
    const contexto = useContext(variableContext);
    const [getLoadingAnimation, setLoadingAnimation] = useState(false)

    /////////////////////////////// gestion de la pantalla Loading
    useEffect(() => {
        if (level !== contexto.getLevel) {//si el nivel es nuevo
            contexto.setShowLoading(true)//establemos la animacion por que estamos en un nivel nuevo
            setLoadingAnimation(false)//
            level = contexto.getLevel
            const img = new Image(); //creamos una instancia de tipo Image, se utiliza en JS para manipular iamgenes
            img.src = jigsawMaps[contexto.getLevel].imgBackgroundUrl; // llamamos a la imagen segun el nivel
            img.onload = ()=>{disableLoading()};//ejecuta la funcion disableLoading una vez llamada la 
            // console.log('if');
        }

    }, [contexto.getLevel])
    

    const disableLoading = () => {
        // console.log('ave');
        setLoadingAnimation(true)//esto va a activar la animacion de desvanecimiento del loading
        setTimeout(() => { contexto.setShowLoading(false); }, 4000);//una vez que la imagene ste cargada establecemos el estado como false para que es muestre la web    
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
            {contexto.getShowLoading && <Loading disableLoading={getLoadingAnimation} />}


            <div style={style} className="app-background">
                {children}
            </div>
            {/* : */}
        </>
    );
}

export default Background;
