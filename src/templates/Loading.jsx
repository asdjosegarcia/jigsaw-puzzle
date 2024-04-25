import React from 'react'
import './Loading.css'

let className=""
const Loading = (props) => {
  if(true){
    className="disabledLoading"
  }

  return (
    <div className={`Loading ${className}`}  >
      {/* <img src='' /> */}
      <div className='Loading__blocks-container'>
        <div className='blocks block-1'></div>
        <div className='blocks block-2'></div>
        <div className='blocks block-3'></div>
        <div className='blocks block-4'></div>
      </div>
      <p>Loading...</p>
      
    </div>
  )
}


export default Loading
