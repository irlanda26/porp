import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Formulario.css';
import { useState } from 'react';
import Axios from 'axios';

function Rutina() {
  const [id, setId]=useState();
  const [rutina, setRutina]=useState('');
  const [ejercicios, setEjercicios]=useState('');
  const [duracion, setDuración]=useState('');
  
  const add = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:3001/create', {
      rutina:rutina,
      ejercicios:ejercicios,
      duracion:duracion
    }) .then (()=>{
      alert('Rutina registrada');
    });
  }

  return (
    <>
    <center>
    <div className='formulario-contenedor'>
      <h3 className='tit'>Rutina</h3><hr></hr>
    <form className='form'>
      <Form.Label className='respuesta'>Especifique para que area está dedicada la rutina</Form.Label>
      <Form.Control 
      value={rutina}
      onChange={(event)=>{
        setRutina(event.target.value)
      }} />
      <Form.Label className='respuesta'>Ejercicios(series y repeticiones)</Form.Label>
      <Form.Control  
      value={ejercicios}
      onChange={(event)=>{
        setEjercicios(event.target.value)
      }} />
      <Form.Label className='respuesta'>Duración</Form.Label>
      <Form.Control 
      value={duracion}
      onChange={(event)=>{
        setDuración(event.target.value)
      }}/><br></br>
      
      <Button type="submit" className='boton' onClick={add}>
        Guardar
      </Button>
      
      </form>
      </div>
      </center>
    </>
  );
}export default Rutina;