import React from "react"
import '@styles/components/buttons/GeneralButtonsStyles.scss'
import "@styles/components/buttons/RetryButton.scss"
const NextButton = (prop) => {

    return (
        <>
            <button style={prop.styleProp} className="general-button retry-button__button">
                <p className="genral-button__button-text retry-button__button-text">⟳ Retry</p>
            </button>
        </>
    )
}

export default NextButton