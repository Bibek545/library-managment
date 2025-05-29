import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'

function App() {

  return (
    <>
      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
      </Routes>
    </>
  )
}

export default App
