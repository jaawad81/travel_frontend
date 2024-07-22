import React from 'react'

const Banner = ({IMG,val}) => {
console.log(val)
  const bgImage={
    backgroundImage: `url(${IMG})`,
    backgroundSize:'cover',
    backgroudPosition:'center',
    height:"600px"
  }
  return (
    <section style={bgImage}></section>
  )
}

export default Banner