
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/Navegacion';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import Acerca from './pages/Acerca';
import Tours from './pages/Tours';
import Contacto from './pages/Contacto';

function App() {


  return (
    <>
      <Router>
      <Navegacion />
      <Routes>
        
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
