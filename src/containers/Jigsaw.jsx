import React from "react";
import { useState } from "react";
// import StartButton from "@components/buttons/StartButton.jsx"; 
import JigsawTitle from '@components/JigsawTitle.jsx'
import JigsawImgPreview from '@components/JigsawImgPreview.jsx'
import '@styles/Jigsaw.scss'
import sound from "@sounds/snow_slowed.mp3"

const soundMove=new Audio(sound)
 const Jigsaw=()=>{
    const mapWidth=3;
    const mapHeight=5;
    const completeMap=[1];
    (function(){
        const totalSize=mapWidth*mapHeight;
        for (let i = 0; i < totalSize-1; i++) {
            completeMap.push(completeMap[completeMap.length-1]+1);
        }
    })()
    const [getJigsawMap,setJigsawMap]=useState(/* completeMap.sort((a, b) => 0.5 - Math.random()) */
        completeMap
/*         [
            "",2,3,
            4,5,6,
            7,8,9,
            10,11,12
        ] */
        )
        getJigsawMap[getJigsawMap.findIndex((num)=>num==1)]=""//al parecer se puede modificar el el get sin el set.....

    const specialPositionRight=completeMap.filter((numero)=>{return(numero%mapWidth===0)})
    const specialPositionLeft=specialPositionRight.map((number)=>{return(number+1)})//agrega +1 a cada valor del specialPositionRight previamente filtrado

    const extractQuotesPosition=()=>{ //extrae la posicion de ""
        return(getJigsawMap.findIndex((position)=>position==="")+1)
    }

    const remap=(quotesPositionfunc,blockPosition,specialPositionRight,specialPositionLeft)=>{
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

    const movimiento=(quotesPosition,blockPosition)=>{
            let newArray=[...getJigsawMap]
            newArray[blockPosition-1]=""
            newArray[quotesPosition-1]=getJigsawMap[blockPosition-1]
                    setJigsawMap(newArray)
            checkStatus(newArray)
        }

    const checkStatus=(newArray)=>{
            const completeMapQuotes=[...completeMap]
            completeMapQuotes[0]=""
            const isEqual=JSON.stringify(newArray)===JSON.stringify(completeMapQuotes)
            if(isEqual){
                setTimeout(function(){alert('EZ MANCO')},1)//se utilizo setTime out por que el cartel salia antes de que se realize el movimiento en pantalla
                
            }
        }

    const movePosition=(blockPosition)=>{
        soundMove.play()
        remap(extractQuotesPosition(),blockPosition,specialPositionRight,specialPositionLeft)
    }


    return(
    <div className="jigsaw-background"> 
      <JigsawTitle/>
        <JigsawImgPreview/>
        <div className="jigsaw-container">
            {getJigsawMap.map((item, index, arr) =>{return( <div onClick={()=>{movePosition(index+1)}} key={index} className={`piece-${getJigsawMap[index]} pieces`}>{getJigsawMap[index]}</div> )})}
        </div>
    </div>
    )
}
export default Jigsaw;