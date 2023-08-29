import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Inscription = () => {
    const navigate = useNavigate();

    const onList = () =>{
        navigate('/list',{
            replace: true
        })
    }

    const [carnet, setCarnet] = useState("");
    const [name, setName] = useState("");
    const [direction, setDirection] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [course, setCourse] = useState("");
    const [poetryType, setPoetryType] = useState("");
    const [inscriptionDate, setInscriptionDate] = useState("");
    const [contestDay, setContestDay] = useState("");

    const imprimir = async(e) =>{
        e.preventDefault();
    
    const result = await createUser(carnet, name, direction, gender, phone, birthDate, course, poetryType, inscriptionDate, contestDay);
    if (result) {
      Swal.fire({
        icon: 'success',
        title: 'Genial',
        text: 'Se ha inscrito correctamente',
        confirmButtonText: 'Ok',
      }).then((r) => {
        if (r.isConfirmed) {
          navigate('/banco');
        } else {
          navigate('/banco');
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo inscribir',
        confirmButtonText: 'Ok',
      });
    }
  };
  

  return (
    <div className='container p-3'>
          <h1 className='h1'>Poesia</h1>
          <br />
          <button 
          onClick={onList}
          className='btn btn-primary'
          >
            Lista de participantes
            </button>
            <hr />

          <label>Carnet</label>
          <input className='form-control' type="text" />

          <label>Nombre completo</label>
          <input className='form-control' type="text" />

          <label>Direccion</label>
          <input className='form-control' type="text" />

          <label>Genero</label>
          <input className='form-control' type="text" />    

          <label>Telefono</label>
          <input className='form-control' type="number" />

          <label>Fecha de Nacimiento</label>
          <input className='form-control' type="date" />

          <label>Carrera que cursa</label>
          <input className='form-control' type="text" />

          <label>Tipo de poesía</label>
          <input className='form-control' type="text" />          

          <label>Fecha de inscripcion</label>
          <input className='form-control' type="date" />

          <label>Fecha de participacion</label>
          <input className='form-control' type="date" />
      </div>
  )
}
