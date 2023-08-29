import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../api/createApi';
import Swal from 'sweetalert2';

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
    
    const result = createUser(carnet, name, direction, gender, phone, birthDate, course, poetryType, inscriptionDate, contestDay);
    if (result) {
      Swal.fire({
        icon: 'success',
        title: 'Genial',
        text: 'Se ha inscrito correctamente',
        confirmButtonText: 'Ok',
      }).then((r) => {
        if (r.isConfirmed) {
          navigate('/list');
        } else {
          navigate('/inscription');
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
          <input className='form-control' type="text"
          onChange={(e) => setCarnet(e.target.value)}/>

          <label>Nombre completo</label>
          <input className='form-control' type="text" 
          onChange={(e) => setName(e.target.value)}/>

          <label>Direccion</label>
          <input className='form-control' type="text" 
          onChange={(e) => setDirection(e.target.value)}/>

          <label htmlFor="gender">Genero</label>
          <select id="gender" name='gender' className='form-control' placeholder='Seleccione una opcion' 
          onChange={(e) => setGender(e.target.value)}>
            <option value="">Seleccione una opcion</option>
            <option value="Male">Masculino</option>
            <option value="Female">Femenino</option>
          </select>
          

          <label>Telefono</label>
          <input className='form-control' type="text" 
          onChange={(e) => setPhone(e.target.value)}/>

          <label>Fecha de Nacimiento</label>
          <input className='form-control' type="date" 
          onChange={(e) => setBirthDate(e.target.value)}/>

          <label>Carrera que cursa</label>
          <input className='form-control' type="text" 
          onChange={(e) => setCourse(e.target.value)}/>
 
          <label htmlFor='poetryType'>Tipo de poesía</label>
          <select id="poetryType" name='poetryType' className='form-control' placeholder='Seleccione una opcion' 
          onChange={(e) => setPoetryType(e.target.value)}>
            <option value="">Seleccione una opcion</option>
            <option value="Lírica">Lírica</option>
            <option value="Épica">Épica</option>
            <option value="Dramática">Dramática</option>
          </select>

          <br />
          <button
          onClick={imprimir}
          className='btn btn-primary'
          >
            Inscribirse
          </button>
      </div>
  )
}
