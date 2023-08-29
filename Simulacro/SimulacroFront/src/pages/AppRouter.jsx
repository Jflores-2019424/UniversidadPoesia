import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { List } from './list'
import { Inscription } from './Inscription'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='list' element={<List/>}/>

            <Route path='inscription' element={<Inscription/>}/>

            <Route path='/' element={<Navigate to='inscription'/>}/>
        </Routes>
    </>
  )
}
