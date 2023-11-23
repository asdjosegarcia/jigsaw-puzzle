import React, { useContext } from 'react'
import { variableContext } from "@context/context.jsx";
import { jigsawMaps } from "../utils/maps.jsx";



const Background = ({children}) => {
    const contexto = useContext(variableContext)
    // console.log(contexto)

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