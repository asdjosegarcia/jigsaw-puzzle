import React from "react";
import { StartButton } from "@components/buttons/StartButton.jsx";
import '@styles/common/StartStage.scss'

export function StartStage(){
   
    return(
        <div className="start-stage__background">
            <div className="start-stage__StartButton-container">
            <StartButton className="start-stage__StartButton"/>
            </div>
        </div>
    )
}