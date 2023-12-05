import React from "react";
import '../css/Rutinas.css';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Toast } from "bootstrap";

function Rutinas(props){
    const [bdd, setBdd]=useState([]);
    const getBdd = () => {
        Axios.get('http://localhost:3001/muscleup').then((response)=> {
          setBdd(response.data);
        })
      }
    
    return(
       <>
       <center>
        <Button type="submit" className='botone' onClick={getBdd}>
        Es hora de entrenar
      </Button>
      </center>
     
      <center>
      <div className="contenedor-rutinas">
       <Table>
       <thead>
        
       </thead>
       <center>
       <tbody >
       {
         bdd.map((val,key)=> {
           return <>
         <tr className="contenedor" key={val.id}>
           <containter className="contenedor-texto">
            <td className="nombre-testimonio">{val.rutina}</td><br/>
            <td className="texto-testimonio">{val.ejercicios}</td><br/>
            <td className="cargo-testimonio">{val.duracion}</td><br/>
           </containter>
         </tr>
         
        </>
         })
       }
       </tbody>
       </center>
     </Table>
     </div>
     </center>
     

     </>
    )
}

export default Rutinas;