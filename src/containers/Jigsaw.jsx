import React, { useState, useContext, useEffect } from "react";
import '@styles/Jigsaw.scss'
import moveSound from "@sounds/snow_slowed.mp3"
import JigsawTitle from '@components/JigsawTitle.jsx'
import JigsawImgPreview from '@components/JigsawImgPreview.jsx'
import Timer from "../components/Timer.jsx";
// import CompletedStage from "../common/CompleteStage.jsx";
import { jigsawMaps } from "../utils/maps.jsx";
import { StartStage } from "../common/StartStage.jsx";
import { variableContext } from "../context/context.jsx";


let gameStarted = false
const Jigsaw = () => {

    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
    const soundMove = new Audio(moveSound)
    const mapWidth = jigsawMaps.lvl1.mapWhidth;
    const mapHeight = jigsawMaps.lvl1.mapHeight;
    const completeMap = [1];
    const blockStyle = {};//envia los background de los bloques
    // let newArray;
    // let onlyExecute=false;

    (function () {//funcion autoejecutable
        let totalSize;//cantidad de bloques que va a tener el nivel/mapa
        const mapGenerate = () => {//crea un array/mapa de numeros dependiendo de el alto y ancho seleccionado
            totalSize = mapWidth * mapHeight;
            for (let i = 0; i < totalSize - 1; i++) {
                completeMap.push(completeMap[completeMap.length - 1] + 1);
            }
            completeMap[0] = ""
        }
        mapGenerate()
    }
    )()
    const style = { gridTemplateColumns: "repeat(" + mapWidth + ",auto)" } //le enviamos la cantidad de grillas que tendra el juego para almacenar los cuadros




    const [getJigsawMap, setJigsawMap] = useState( // ([...completeMap]).sort((a, b) =>   0.5 - Math.random())
        //extrae los valores de complete map y los mezcla de forma aleatoria
        [...completeMap],
    )
    console.log('getMap ' + getJigsawMap)
    const blockStyleGenerate = () => {
        getJigsawMap.map((positionMap, index) => {//positionMap es valor del elemnto actual de getJigsawMap, index es la piscion del elemnto actual
            if (!positionMap == "") { //si position no es ""
                blockStyle[index] = { backgroundImage: `url(${jigsawMaps.lvl1.imgblocks[positionMap]})` } //creamos un claves backgroundImg con el valor de cada imagen    
            } else {//si position es "" cargamos un elemento vacio a style
                blockStyle[index] = {}
            }

        })
        // console.log(blockStyle)

    }
    blockStyleGenerate()


    const specialPositionRight = completeMap.filter((numero) => { return (numero % mapWidth === 0) })
    const specialPositionLeft = specialPositionRight.map((number) => { return (number + 1) })//agrega +1 a cada valor del specialPositionRight previamente filtrado

    const extractQuotesPosition = () => { //extrae la posicion de ""
        return (getJigsawMap.findIndex((position) => position === "") + 1)
    }

    const remap = (quotesPositionfunc, blockPosition, specialPositionRight, specialPositionLeft) => {//comprueba si el movimiento es valido
        const quotesPosition = quotesPositionfunc
        switch (true) {
            case (blockPosition == quotesPosition):
                break;
            case (specialPositionRight.includes(quotesPosition)):
                if (blockPosition == quotesPosition - mapWidth || blockPosition == quotesPosition + mapWidth || blockPosition == quotesPosition - 1) {
                    movimiento(quotesPosition, blockPosition)
                }
                break;
            case (specialPositionLeft.includes(quotesPosition)):
                if (blockPosition == quotesPosition - mapWidth || blockPosition == quotesPosition + mapWidth || blockPosition == quotesPosition + 1) {
                    movimiento(quotesPosition, blockPosition)
                }
                break;
            default:
                if (blockPosition == quotesPosition - mapWidth || blockPosition == quotesPosition + mapWidth || blockPosition == quotesPosition + 1 || blockPosition == quotesPosition - 1) {
                    movimiento(quotesPosition, blockPosition)
                }
        }
    }

    const movimiento = (quotesPosition, blockPosition) => {//intercambia la posicion del bloque vacio por el bloque clickeado
        let newArray = [...getJigsawMap]
        newArray[blockPosition - 1] = ""
        newArray[quotesPosition - 1] = getJigsawMap[blockPosition - 1]
        setJigsawMap(newArray)
        checkStatus(newArray)
    }

    const checkStatus = (newArray) => {//revisa si el mapa se completo
        const completeMapQuotes = [...completeMap]
        completeMapQuotes[0] = 1
        const isEqual = JSON.stringify(newArray) === JSON.stringify(completeMap)
        if (isEqual) {
            setJigsawMap(completeMapQuotes)
            contexto.setCompletedGame(true)//establece set complete map como true, lo que le indica a react que renderize el ¡mapa superado estupida!
            contexto.setGameStartedStatus(false)
            contexto.setTimerStatus(false)
        }
    }

    const movePosition = (blockPosition) => {
        if (!contexto.getCompletedGame) {//si completo creo
            soundMove.play() //reproduce sonido movimiento
            remap(extractQuotesPosition(), blockPosition, specialPositionRight, specialPositionLeft)
        }
        if (!gameStarted) { //si la variable gameStared tiene algo ejecuta el if, esto tendia que mezclar la piezas pero por alguna razon no se puede
            gameStarted = true
        }
    }


    return (
        <>
            <StartStage />{/* muestra el proximamente menu, alctual boton dle juego */}
            <div className={`win-${contexto.getCompletedGame ? 'active' : 'inactive'}  `}>{/* si getgame es true significa que el juego se completo y se renderizara  esto */}
                {/* <CompletedStage /> */}
            </div>
            <div className="jigsaw-background">
                <div className="timer">
                    <Timer />
                </div>
                <JigsawTitle />
                <JigsawImgPreview />
                <div style={style} className={`jigsaw-container border-${!contexto.getCompletedGame ? 'inactive' : 'active'}`}>
                    {getJigsawMap.map((item, index, arr) => { return (<div onClick={() => { movePosition(index + 1) }} style={blockStyle[index]} key={index} className={/* piece-${getJigsawMap[index]}  */`pieces border-${contexto.getCompletedGame ? 'inactive' : 'active'}`}>{/* {getJigsawMap[index]} */}</div>) })}
                </div>
            </div>
        </>
    )
}
export default Jigsaw;