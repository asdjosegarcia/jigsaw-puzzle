import React from "react";
// import penguinPreview from '@img/penguin-483X483.jpg'
import "@styles/JigsawImgPreview.scss"
import { jigsawMaps } from "../utils/maps.jsx";

const JigsawImgPreview=()=>{
    return(
    <>
    <img src={jigsawMaps.lvl1.imgPreview} className="jigsaw-img-preview"></img>
    </>
    )
}
export default JigsawImgPreview;