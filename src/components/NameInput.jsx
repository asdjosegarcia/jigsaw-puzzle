import React from 'react'
import "@styles/components/NameInput.scss"


const NameInput = () => {
    return (
        <div className='input-container'>
            <input type="text" placeholder='Write your name' />
            <span>📝</span>
            <button className=' send-name-button'>Send</button>
        </div>
    )
}

export default NameInput