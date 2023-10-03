import React from 'react'
import { useParams } from "react-router-dom";
import Context from '../context';
import { useContext } from "react";
import "./css/detalle.css";

function Detalle() {

    const { tours} = useContext(Context);

    console.log(tours);

    const { id } = useParams();

    const tourId = parseInt(id);


    const tour = tours.filter((tour) => tour.id === tourId);

    console.log(tour);
    console.log(tour[0]);
    console.log(tour[0].nombre);
    console.log(tour[0].precio);


  return (
    <div className='contenedorDetalle d-flex justify-content-center align-items-center mt-5'>
        <h1>{tour[0].nombre}</h1>
        <h2>{tour[0].nombre}</h2>
    </div>
  )
}

export default Detalle