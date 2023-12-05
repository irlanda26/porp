import React, { useState } from 'react';
import '../css/TestimonioFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TestimonioFormulario(props){
    const [input, setInput]=useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }
    const manejarEnvio = e =>{
        e.preventDefault();

        const testimonioNuevo={
            id: uuidv4(),
            texto:input,
        }

        props.onSubmit(testimonioNuevo)
    }
    return(
        <form
        className="testimonio-formulario"
        onSubmit={manejarEnvio}>
            <h3 className='ashe-testimonio'>Nombre</h3>
            <input
                className="nombre-input"
                type="text"
                placeholder="Ingresa tu nombre"
                name="Texto"
                onChange={manejarCambio}/>
           
            <h3 className='ashe-testimonio'>Cargo</h3>
            <input
                className="cargo-input"
                type="text"
                placeholder="Ingresa tu cargo"
                name="Texto"
                onChange={manejarCambio}/>
           
            <h3 className='ashe-testimonio'>Empresa</h3>
            <input
                className="empresa-input"
                type="text"
                placeholder="Ingresa tu empresa"
                name="Texto"
                onChange={manejarCambio}/>
            <h3 className='ashe-testimonio'>Testimonio</h3>
            <input
                className="testimonio-input"
                type="text"
                placeholder="Ingresa tu testimonio"
                name="Texto"
                onChange={manejarCambio}/>
            <button className="testimonio-boton">
                Agregar testimonio
            </button>
            
            
        </form>
    );
}
export default TestimonioFormulario;