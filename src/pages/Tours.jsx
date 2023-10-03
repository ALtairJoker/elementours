import React from "react";
import "./css/tours.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useContext, useState } from "react";

function Tours() {

    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        obtenerDatos();
      }, []);
    


    const obtenerDatos = async () => {
        try {
          // cree mi propio perfil en pexels para poder obtener mis propias fotos a traves de la API
    
          const response = await fetch(
            "https://api.pexels.com/v1/collections/qtlog4u?per_page=80",
            {
              headers: {
                Authorization:
                  "563492ad6f9170000100000174d7c9eeb45446bca4ba206eb6f86361",
              },
            }
          );
          const data = await response.json();
          console.log(data);
          setFotos(data.media)
        } catch (error) {
          alert(error);
        }
      };


  return (
    <div className="contenedorTours">
      {/* <img
        src="https://images.pexels.com/photos/15608123/pexels-photo-15608123/free-photo-of-estrellas-stars.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="imagenFondo img3"
      ></img> */}
      <div className="grilla">
      {/* <Card style={{ width: '25rem', textAlign:'center' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/17413659/pexels-photo-17413659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body className="cuerpoCard">
        <Card.Title>Farellones</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', textAlign:'center' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/15607022/pexels-photo-15607022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body className="cuerpoCard">
        <Card.Title>Tour astronomico</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', textAlign:'center' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/15515197/pexels-photo-15515197/free-photo-of-chile-sur-amante-de-la-naturaleza-carretera-austral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body className="cuerpoCard">
        <Card.Title>Carretera austral</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', textAlign:'center' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/17413659/pexels-photo-17413659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body className="cuerpoCard">
        <Card.Title>Farellones</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', textAlign:'center' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/15607022/pexels-photo-15607022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body className="cuerpoCard">
        <Card.Title>Tour astronomico</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', textAlign:'center' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/15515197/pexels-photo-15515197/free-photo-of-chile-sur-amante-de-la-naturaleza-carretera-austral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body className="cuerpoCard">
        <Card.Title>Carretera austral</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', textAlign:'center' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/15515197/pexels-photo-15515197/free-photo-of-chile-sur-amante-de-la-naturaleza-carretera-austral.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Card.Body className="cuerpoCard">
        <Card.Title>Carretera austral</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}


      {fotos.map((foto) => (
        <Card style={{ width: '25rem', textAlign:'center' }}>
        <Card.Img variant="top" src={foto.src.portrait} />
        <Card.Body className="cuerpoCard">
          <Card.Title>{foto.alt}</Card.Title>
          <Button variant="primary">{foto.id}</Button>
        </Card.Body>
      </Card> 
      ))}
    </div>
      </div>
  );
}

export default Tours;
