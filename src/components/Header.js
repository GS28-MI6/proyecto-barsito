import React from 'react'
import "../recursos/css/Header.css"

export default function Header() {
  return (
    <div className='header'>
        <p>Header</p>
        <div className='links'>
            <p>Estadisticas</p>
            <p>Productos</p>
            <p>Gastos</p>
        </div>
    </div>
  )
}
