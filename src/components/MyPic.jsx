import React from 'react'
import handsome from '../assets/handsome.jpg'


function MyPic({ width , className}) {
  return (
    <img
     src={handsome} alt="Handsome" width={width}  className={` ${className}`}  />

  )
}

export default MyPic
