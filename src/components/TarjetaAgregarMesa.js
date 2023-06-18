import React from 'react'

export default function TarjetaMesa({agregarMesa}) {
  return (
    <div className='tarjetaMesa' onClick={agregarMesa} style={{width:"300px",height:"300px",backgroundColor:"lightblue"}}>
      <p>+</p>
    </div>
  )
}
