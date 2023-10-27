import React from "react"
import '@styles/components/buttons/GeneralButtonsStyles.scss'
import "@styles/components/buttons/NextButton.scss"
const NextButton = (prop) => {

    return (
        <>
            <button style={prop.styleProp} className="general-button next-button__button">
                <p className="genral-button__button-text next-button__button-text">Next ▸▸ </p>
            </button>
        </>
    )
}

export default NextButton