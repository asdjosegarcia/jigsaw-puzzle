import React from 'react'
import './Loading.css'

const Loading = () => {
  return (
    <div className='Loading'>
      <img src='' />
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
