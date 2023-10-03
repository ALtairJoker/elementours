import React from 'react'
import './css/inicio.css'

function inicio() {
  return (
    <div className='contenedor'>
      <div className='d-flex align-items-end'>
        <img
        src="https://images.pexels.com/photos/14866603/pexels-photo-14866603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="imagenFondoInicio img2"
      ></img>
        <div className="texto">
          <h1>Increibles tours a lo largo de todo Chile</h1>
          <h2>Vive una experencia inigualable</h2> 
        </div>
      </div>
    </div>
  )
}

export default inicio