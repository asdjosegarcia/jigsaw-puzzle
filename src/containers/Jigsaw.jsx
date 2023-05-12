import React from "react";
import { useState } from "react";
// import StartButton from "@components/buttons/StartButton.jsx"; 
import JigsawTitle from '@components/JigsawTitle.jsx'
import JigsawImgPreview from '@components/JigsawImgPreview.jsx'
import '@styles/Jigsaw.scss'
import sound from "@sounds/snow_slowed.mp3"
import Timer from "../components/Timer.jsx";

const Jigsaw=()=>{
    const soundMove=new Audio(sound)
    const [getCompletedGame,setCompletedGame]=useState(false)
    const mapWidth=3;
    const mapHeight=3;
    const completeMap=[1];
    (function(){//crea un array/mapa de numeros dependiendo de el alto y ancho seleccionado
        const totalSize=mapWidth*mapHeight;
        for (let i = 0; i < totalSize-1; i++) {
            completeMap.push(completeMap[completeMap.length-1]+1);
        }
        completeMap[0]=""
    })()
    const [getJigsawMap,setJigsawMap]=useState(/* completeMap.sort((a, b) => 0.5 - Math.random()) */
        completeMap
        )

    const specialPositionRight=completeMap.filter((numero)=>{return(numero%mapWidth===0)})
    const specialPositionLeft=specialPositionRight.map((number)=>{return(number+1)})//agrega +1 a cada valor del specialPositionRight previamente filtrado

    const extractQuotesPosition=()=>{ //extrae la posicion de ""
        return(getJigsawMap.findIndex((position)=>position==="")+1)
    }

    const remap=(quotesPositionfunc,blockPosition,specialPositionRight,specialPositionLeft)=>{//comprrueba si el movimiento es valido
        const quotesPosition=quotesPositionfunc
        switch (true){
            case (blockPosition==quotesPosition ):
                break;
            case (specialPositionRight.includes(quotesPosition)):
                if(blockPosition==quotesPosition-mapWidth || blockPosition==quotesPosition+mapWidth|| blockPosition==quotesPosition-1 ){
                    movimiento(quotesPosition,blockPosition)
                }
                break;
            case (specialPositionLeft.includes(quotesPosition)):
                if(blockPosition==quotesPosition-mapWidth || blockPosition==quotesPosition+mapWidth|| blockPosition==quotesPosition+1 ){
                movimiento(quotesPosition,blockPosition)
                }
                break;
            default:
                if(blockPosition==quotesPosition-mapWidth || blockPosition==quotesPosition+mapWidth|| blockPosition==quotesPosition+1 ||blockPosition==quotesPosition-1){
                    movimiento(quotesPosition,blockPosition)
                }
        }
    }

    const movimiento=(quotesPosition,blockPosition)=>{//intercambia la posicion del bloque vacio por el bloque clickeado
            let newArray=[...getJigsawMap]
            newArray[blockPosition-1]=""
            newArray[quotesPosition-1]=getJigsawMap[blockPosition-1]
                    setJigsawMap(newArray)
            checkStatus(newArray)
        }

    const checkStatus=(newArray)=>{//revisa si el mapa se completo
            const completeMapQuotes=[...completeMap]
            completeMapQuotes[0]=1
            const isEqual=JSON.stringify(newArray)===JSON.stringify(completeMap)
            if(isEqual){
                setJigsawMap(completeMapQuotes)
                setCompletedGame(true)
                // setTimeout(function(){alert('EZ MANCO')},100)//se utilizo setTime out por que el cartel salia antes de que se visualize el movimiento final en pantalla
            }
        }

    const movePosition=(blockPosition)=>{
        if(!getCompletedGame){
            soundMove.play()
            remap(extractQuotesPosition(),blockPosition,specialPositionRight,specialPositionLeft)
        }
    }

    return(
        <>
        <div className={`win-${getCompletedGame?'active':'inactive'}  `}>
            <div>Completed!</div>
        </div>
        <div className="jigsaw-background"> 
        <div className="timer">
        <Timer />
        </div>
        <JigsawTitle/>
        <JigsawImgPreview/>
        <div className={`jigsaw-container border-${!getCompletedGame?'inactive':'active'}`}>
            {getJigsawMap.map((item, index, arr) =>{return( <div onClick={()=>{movePosition(index+1)}} key={index} className={`piece-${getJigsawMap[index]} pieces border-${getCompletedGame?'inactive':'active'}`}>{/* {getJigsawMap[index]} */}</div> )})}
        </div>
    </div>
        </>
    )
}
export default Jigsaw;