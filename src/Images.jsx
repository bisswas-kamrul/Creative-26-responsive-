import React from 'react'

const Images = ({ImgSrc,AltSrc,className}) => {
  return (
    <img src={ImgSrc} alt={AltSrc} className={`${className}`}/>
  )
}

export default Images