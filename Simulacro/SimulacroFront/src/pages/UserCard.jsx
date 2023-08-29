import React, { useEffect, useState } from 'react'
import { listUsers } from '../api/listApi';

export const UserCard = () => {
    const [user, setUser] = useState([])

    useEffect(() =>{
        const fetchData = async() => {
            const result = await listUsers();
            setUser(result)
        };
        fetchData();
    }, [])

  return (
    <>
    <div className='container'>
        {user.map((userActual, index) =>{
            const id = userActual._id;
            return(
                <div key={id} className='container m-2 p-2 border border-dark card'>
                    <h5>Nombre: {userActual.name}</h5>
                    <h5>Curso: {userActual.course}</h5>
                    <h5>Poesía: {userActual.poetryType}</h5>
                    <h6>Participacion: {userActual.contestDay}</h6>
                </div>
            )
        })}
    </div>
    </>
)}
