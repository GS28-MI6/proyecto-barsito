import React from 'react'

export default function TarjetaMesa({numero, estado, ordenes}) {
  return (
    <div className='tarjetaMesa'>
        <p>
        Mesa #{numero}
        </p>
        <p>
        Ordenes: {ordenes}
        </p>
        <p>
        Estado: {estado}
        </p>
    </div>
  )
}
