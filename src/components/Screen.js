import React from 'react'
// import { Textfit } from 'react-textfit'
import './Screen.css'

const Screen = ({ value }) => {
  return (
    <div className='value'>
      <p>{value}</p>
    </div>
  )
}

export default Screen
