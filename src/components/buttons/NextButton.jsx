import React from "react"
import "@styles/components/buttons/NextButton.scss"
const NextButton = (prop) => {

    return (
        <>
            <button style={prop.styleProp} className="next-button__button">
                <p className="next-button__button-text">Next ▸▸ </p>
            </button>
        </>
    )
}

export default NextButton