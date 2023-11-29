import React, { useContext } from "react"
import '@styles/components/MapDescription.scss'
import { variableContext } from "../context/context.jsx";
import { jigsawMaps } from "../utils/maps.jsx";


const MapDescription = () => {
    const contexto = useContext(variableContext)
    // jigsawMaps[contexto.getLevel].startItems.startMessage
  return (
    <div className='description-container'>{jigsawMaps[contexto.getLevel].startItems.startMessage} <br/> <br/> {jigsawMaps[contexto.getLevel].startItems.startSecondMessage}</div>
  )
}

export default MapDescription