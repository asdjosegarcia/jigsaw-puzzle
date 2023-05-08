import React from "react";
import { useState } from "react";
// import StartButton from "@components/buttons/StartButton.jsx"; 
import JigsawTitle from '@components/JigsawTitle.jsx'
import JigsawImgPreview from '@components/JigsawImgPreview.jsx'
import '@styles/Jigsaw.scss'

 const Jigsaw=()=>{
    const mapSize=3;
    const [getJigsawMap,setJigsawMap]=useState(
        [
            "",2,3,
            4,5,6,
            7,8,9
        ])
    const specialPositionRight=[];
    (function(){
        let total=0;
        for(let i = 0; i < mapSize; i++){
            total=total+mapSize
            specialPositionRight.push(total)
        }
    })()
    const specialPositionLeft=specialPositionRight.map((number)=>{return(number+1)})//agrega +1 a cada valor del specialPositionRight previamente filtrado

    const extractQuotesPosition=()=>{ //extrae la posicion de ""
        return(getJigsawMap.findIndex((position)=>position==="")+1)
    }

    const remap=(quotesPositionfunc,blockPosition,specialPositionRight,specialPositionLeft)=>{
        const quotesPosition=quotesPositionfunc
        switch (true){
            case (blockPosition==quotesPosition ):
                // console.log('movimiento invalido');
                break;
            case (specialPositionRight.includes(quotesPosition)):
                if(blockPosition==quotesPosition-mapSize || blockPosition==quotesPosition+mapSize|| blockPosition==quotesPosition-1 ){
                    // console.log('movimiento sin +1');
                    movimiento(quotesPosition,blockPosition)
                    
                }
                break;
            case (specialPositionLeft.includes(quotesPosition)):
                if(blockPosition==quotesPosition-mapSize || blockPosition==quotesPosition+mapSize|| blockPosition==quotesPosition+1 ){
                // console.log('movimiento sin -1');
                movimiento(quotesPosition,blockPosition)
                }
                break;
            default:
                if(blockPosition==quotesPosition-mapSize || blockPosition==quotesPosition+mapSize|| blockPosition==quotesPosition+1 ||blockPosition==quotesPosition-1){
                    movimiento(quotesPosition,blockPosition)

                    // console.log('MOVIMIENTO algun otro numero');
                }
        }
        }

        const movimiento=(quotesPosition,blockPosition)=>{
            let newArray=[...getJigsawMap]
            newArray[blockPosition-1]=""
            newArray[quotesPosition-1]=getJigsawMap[blockPosition-1]
                    console.log(newArray);
                    setJigsawMap(newArray)
            checkStatus(newArray)
        }

        const checkStatus=(newArray)=>{
            const isEqual=JSON.stringify(newArray)===JSON.stringify(["",2,3,4,5,6,7,8,9])
            if(isEqual){
                setTimeout(function(){alert('EZ MANCO')},0)//se utilizo setTime out por que el cartel salia antes de que se realize el movimiento en pantalla
                
            }
            console.log('nel');

        }

    const movePosition=(blockPosition)=>{
        remap(extractQuotesPosition(),blockPosition,specialPositionRight,specialPositionLeft)

    }


    return(
    <div className="jigsaw-background"> 
      <JigsawTitle/>
        <JigsawImgPreview/>
        <div className="jigsaw-container">
            <div onClick={()=>{movePosition(1)}} className="piece-1 pieces">{getJigsawMap[0]}</div>
            <div onClick={()=>{movePosition(2)}} className="piece-2 pieces">{getJigsawMap[1]}</div>
            <div onClick={()=>{movePosition(3)}} className="piece-3 pieces">{getJigsawMap[2]}</div>
            <div onClick={()=>{movePosition(4)}} className="piece-4 pieces">{getJigsawMap[3]}</div>
            <div onClick={()=>{movePosition(5)}} className="piece-5 pieces">{getJigsawMap[4]}</div>
            <div onClick={()=>{movePosition(6)}} className="piece-6 pieces">{getJigsawMap[5]}</div>
            <div onClick={()=>{movePosition(7)}} className="piece-7 pieces">{getJigsawMap[6]}</div>
            <div onClick={()=>{movePosition(8)}} className="piece-8 pieces">{getJigsawMap[7]}</div>
            <div onClick={()=>{movePosition(9)}} className="piece-9 pieces">{getJigsawMap[8]}</div>
        </div>
    </div>
    )
}
export default Jigsaw;