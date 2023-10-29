import React, { useContext } from "react";
// import penguinPreview from '@img/penguin-483X483.jpg'
import "@styles/JigsawImgPreview.scss"
import { jigsawMaps } from "../utils/maps.jsx";
import { variableContext } from "@context/context.jsx";

const JigsawImgPreview = () => {
    const contexto = useContext(variableContext)//llamamos a el contexto para extraerle la imagen de preview


    return (
        <>
            <img src={jigsawMaps[contexto.getLevel].imgPreview} className="jigsaw-img-preview"></img>
            {/* establecemlos la imagen del nivel segun corresponda */}
        </>
    )
}
export default JigsawImgPreview;