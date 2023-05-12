import React from "react";
import penguinPreview from '@img/penguin-483X483.jpg'
import "@styles/JigsawImgPreview.scss"

const JigsawImgPreview=()=>{
    return(
    <>
    <img src={penguinPreview} className="jigsaw-img-preview"></img>
    </>
    )
}
export default JigsawImgPreview;