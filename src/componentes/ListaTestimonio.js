import React, { useState } from "react";
import '../css/ListaTestimonio.css';
import Testimonio from './Testimonios';
import TestimonioFormulario from "./TestimonioFormulario";

function ListaTestimonios(){
    const [testimonios, setTestimonios]=useState([]);

    const agregarTestimonio = testimonio => {
        if(testimonio.texto.trim()){
            testimonio.texto=testimonio.texto.trim();
            const testimoniosActualizadas = [testimonio, ...testimonios];
            setTestimonios(testimoniosActualizadas);
            console.log(testimonios);
        }  
    }
    
    return(
        <>
        <TestimonioFormulario onSubmit={agregarTestimonio}/>
        <div className="testimonios-lista-contenedor">
          {
            testimonios.map((testimonio) =>
              <Testimonio 
              key={testimonio.id}
              id={testimonio.id}
              texto={testimonio.texto}
              />
            )
          } 
        </div>
        </>
    );
}
export default ListaTestimonios;