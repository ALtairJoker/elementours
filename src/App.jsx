
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/Navegacion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Tours from './pages/Tours';
import Contacto from './pages/Contacto';
import Context from './context';
import Detalle from './pages/Detalle';
import { useState, useEffect } from "react";


function App() {

  const [tours, setTours] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    try {
      const response = await fetch("./tours.json");
      const data = await response.json();
      setTours(data.actividades);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <Context.Provider value={{ tours}} >
      <Router>
      <Navegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tours/:id" element={<Detalle />} />
      </Routes>
    </Router>
    </Context.Provider>
    </div>
  )
}

export default App
