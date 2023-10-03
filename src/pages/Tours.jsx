import React from "react";
import "./css/tours.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context";

function Tours() {
  const { tours } = useContext(Context);

  const navigate = useNavigate();

  console.log(tours[0]);


  return (
    <div className="contenedorTours">
    
      <div className="grilla">
        {tours.map((tour) =>  
         <div className="col">
         <Card
           key={tour.id}
           style={{ width: "22rem" }}
           className="mt-5 card"
         >
           <Card.Body>
            {/* <Card.Img variant="top" src={tour.img} /> */}
            <img src={tour.img} alt="" className="imgCard" />
             <Card.Title className="fs-3 text fw-bold text-center">{`${tour.nombre[0].toUpperCase()}${tour.nombre.slice(
               1
             )}`}</Card.Title>
             <Button variant="primary" onClick={() => navigate(`/tours/${tour.id}`)}>Ver mas</Button>
           </Card.Body>
         </Card>
       </div>
        )  }
      </div>
    </div>
  );
}

export default Tours;
