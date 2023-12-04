import React, { useState, useContext, useEffect } from "react";
import '@styles/Jigsaw.scss'
// import moveSound from "@sounds/snow_slowed.mp3"

import JigsawTitle from '@components/JigsawTitle.jsx'
import JigsawImgPreview from '@components/JigsawImgPreview.jsx'
import Timer from "../components/Timer.jsx";
// import CompletedStage from "../common/CompleteStage.jsx";
import { jigsawMaps } from "../utils/maps.jsx";
import { StartStage } from "../common/StartStage.jsx";
import { variableContext } from "../context/context.jsx";


let gameStarted = false
let movementsNumbers = 1;
const Jigsaw = () => {

    const contexto = useContext(variableContext)//traemos los valores que cargamos en variable context, y los almacenamos en contexto
    const soundMove = new Audio(jigsawMaps[contexto.getLevel].movementSound)
    const mapWidth = jigsawMaps[contexto.getLevel].mapWhidth;
    const mapHeight = jigsawMaps[contexto.getLevel].mapHeight;
    const completeMap = [1];
    const blockStyle = {};//envia los background de los bloques



    useEffect(() => {//si pasamos a un nivel nuevo
        if (!contexto.getCompletedGame) {
            contexto.setScore({ ...contexto.getScore, map: contexto.getLevel })//guardamos el numero de mapa para almacenar el nivel
            setJigsawMap([...completeMap]/* ([...completeMap]).sort((a, b) => 0.5 - Math.random()) */) //acutaliza el mapa, de lo contrario se generan solo los cuadros del mapa anterior
            contexto.setCompletedGame(false)
            contexto.setResetClock(false)
        }
    }, [contexto.getLevel, contexto.getCompletedGame]);

    (function () {//funcion autoejecutable
        const mapGenerate = () => {//crea un array/mapa de numeros dependiendo de el alto y ancho seleccionado
            let totalSize = mapWidth * mapHeight;//multilicacion del ancho y alto para sacar la cantidad de bloques
            for (let i = 0; i < totalSize - 1; i++) {
                completeMap.push(completeMap[completeMap.length - 1] + 1);//genera un arrayS
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
    const blockStyleGenerate = () => {
        getJigsawMap/* completeMap */.map((positionMap, index) => {//positionMap es valor del elemnto actual de getJigsawMap, index es la piscion del elemnto actual
            if (!positionMap == "") { //si position no es ""
                blockStyle[index] = { backgroundImage: `url(${jigsawMaps[contexto.getLevel].imgblocks[positionMap]})` } //creamos un claves backgroundImg con el valor de cada imagen    
            } else {//si position es "" cargamos un elemento vacio a style
                blockStyle[index] = {}
            }
        })
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
        movementsNumbers++
        // console.log(movementsNumbers)

    }

    const checkStatus = (newArray) => {//revisa si el mapa se completo durante cada movimiento
        const completeMapQuotes = [...completeMap]
        completeMapQuotes[0] = 1
        const isEqual = JSON.stringify(newArray) === JSON.stringify(completeMap)//si es igual almacena un true
        if (isEqual) {//si es true
            setJigsawMap(completeMapQuotes)//establecemos el mapa como
            contexto.setCompletedGame(true)//establece set complete map como true, lo que le indica a react que renderize el ¡mapa superado estupida!
            contexto.setGameStartedStatus(false)
            contexto.setTimerStatus(false)
            contexto.setScore({ ...contexto.getScore, movementsNumber: movementsNumbers })
        }
    }

    const movePosition = (blockPosition) => {
        if (!contexto.getCompletedGame) {//si no completo el juego
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
            <div style={jigsawMaps[contexto.getLevel].frameBackgroundColor} className="jigsaw-background">
                <div className="timer">
                    <Timer />
                </div>
                <JigsawTitle />
                <JigsawImgPreview />
                <div style={style} className={`jigsaw-container border-${!contexto.getCompletedGame ? 'inactive' : 'active'}`}>
                    {getJigsawMap.map((item, index, arr) => { return (<div onClick={() => { movePosition(index + 1) }} style={blockStyle[index]} key={index} className={/* piece-${getJigsawMap[index]}  */ `pieces border-${contexto.getCompletedGame ? 'inactive' : 'active'}`}>{/* {getJigsawMap[index]} */}</div>) })}
                </div>
            </div>
        </>
    )
}
export default Jigsaw;