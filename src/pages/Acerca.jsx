import React from "react";
import "./css/acerca.css";

function Acerca() {
  return (
    <div className="contenedorAcerca ">
      <img
        src="https://images.pexels.com/photos/14867014/pexels-photo-14867014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="imagenFondo img2"
      ></img>
      <div className="textoSuperpuesto">
        <h1 className="titulo"><span className="titulo" style={{color:'#f15a25'}}>E</span>lemen<span className="titulo" style={{color:'#f15a25'}}>T</span>ours<span className="titulo" style={{color:'#f15a25'}}>.</span></h1>
        <h2>Donde la Magia de los Elementos Te Lleva a Descubrir Chile"</h2>
        <p>
          Nosotros en Elementours creemos que cada rincón de Chile tiene una
          historia única que contar a través de los elementos naturales que lo
          componen: la solidez de la tierra, la frescura del aire, la vitalidad
          del agua y la pasión del fuego. Nuestra pasión es llevar a nuestros
          viajeros a una experiencia de inmersión total en estos elementos,
          ofreciéndote una variedad de tours y paseos guiados diseñados para
          conectarte con la naturaleza y la cultura de Chile de una manera
          auténtica y significativa. Nuestros guías expertos no solo te
          mostrarán los lugares más impresionantes, sino que también te contarán
          las historias detrás de cada elemento y cómo han influido en la vida y
          la historia de Chile. Ya sea que te sientas atraído por las
          majestuosas montañas de la tierra, la brisa refrescante del aire, las
          aguas serenas que te llaman a explorar o la pasión ardiente de la
          cultura chilena, en Elementours tenemos el tour perfecto para ti.
          Además de nuestros tours temáticos, también ofrecemos tours
          personalizados que te permiten diseñar tu propia aventura basada en
          los elementos que más te atraigan. Nos esforzamos por crear recuerdos
          duraderos y experiencias enriquecedoras para todos nuestros viajeros.
          Únete a nosotros en Elementours y descubre la magia y la diversidad de
          Chile a través de los ojos de los elementos."
        </p>
      </div>
    </div>
  );
}

export default Acerca;
