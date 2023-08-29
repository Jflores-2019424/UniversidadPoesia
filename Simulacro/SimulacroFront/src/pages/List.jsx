import React from 'react'
import { UserCard } from './userCard'
import { useNavigate } from 'react-router-dom'


export const List = () => {
    const navigate = useNavigate();

    const onBack = () => {
        navigate('/inscription',{
            replace: true
        })
    }

  return (
    <>
    <div className='container'>
        <h1>Lista de participantes</h1>
        <br />
        <button
        className='btn btn-primary'
        onClick={onBack}
        >
            Participar
        </button>
        <hr />
        <UserCard/>
    </div>
    </>
  )
}
