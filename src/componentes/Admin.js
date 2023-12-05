import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/Formulario.css';
import { useState } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';

function Admin() {
  const [id, setId]=useState();
  const [rutina, setRutina]=useState('');
  const [ejercicios, setEjercicios]=useState('');
  const [duracion, setDuracion]=useState([]);
  const [bdd, setBdd]=useState([]);
  const [editar, setEditar]=useState(false);

  const add = (e) =>{
    e.preventDefault();
    Axios.post('http://localhost:3001/create', {
      rutina:rutina,
      ejercicios:ejercicios,
      duracion:duracion
    }) .then (()=>{
      alert('rutina registrada');
    });
  }
  const update = (e) => {
    e.preventDefault();
    Axios.put('http://localhost:3001/update',
    { id:id,
      rutina:rutina,
      ejercicios:ejercicios,
      duracion:duracion
    }).then((response)=>{
    getBdd();
    alert(response.data);
})
}
const deleteRutina=(id)=>{
  let confirmacion=window.confirm("segurx que desea eliminar la rutina seleccionada?");
  if(confirmacion){
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      alert(response.data);
      getBdd();
      limpiar();
    })
  }
}
  const editarRutina= (val) => {
    setEditar(true);
    setRutina(val.rutina);
    setEjercicios(val.ejercicios);
    setDuracion(val.duracion);
    setId(val.id);
  }
  const limpiar = () => {
    setEditar (false);
    setRutina('');
    setEjercicios('');
    setDuracion('');
    setId('');
  }
  const getBdd = () => {
    Axios.get('http://localhost:3001/muscleup').then((response)=> {
      setBdd(response.data);
    })
  }
  
  return (
    <>
    <center>
    <div className='formulario-contenedor'>
      <h3 className='tit'>Admin</h3><hr></hr>
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
        setDuracion(event.target.value)
      }}/><br></br>
      {
        editar?
      <div>
      <Button type='submit' className='boton' onClick={update}>
        Actualizar
      </Button>
      <Button type='submit' className='boton-rojo' onClick={limpiar}>
        Cancelar
      </Button>
      </div>
      :
      <Button type="submit" className='boton' onClick={add}>
        Guardar
      </Button>
      }
      </form>
      </div>
      </center>
      <Button type="submit" className='boton' onClick={getBdd}>
        mostrar
      </Button>
      <Table >
      <thead>
        <tr>
          <th>Rutina</th>
          <th>Ejercicios</th>
          <th>Duracion</th>
          <th>Editar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
      {
        bdd.map((val,key)=> {
          return <>
        <tr key={val.id}>
          <td>{val.rutina}</td>
          <td>{val.ejercicios}</td>
          <td>{val.duracion}</td>
          <td><Button type='button' className='boton'
          onClick={() =>{
          editarRutina(val);}}>Editar</Button></td>
          <td><Button className='boton-rojo' type='button' onClick={()=>{deleteRutina(val.id)}}>Eliminar</Button></td>
        </tr>
       </>
        })
      }
      </tbody>
    </Table>
    </>
  );
}export default Admin;