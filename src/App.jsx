import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import ResponsibleGambling from './components/ResponsibleGambling'
import Nav from './components/Nav'

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/responsible-gambling" element={<ResponsibleGambling />} />
      </Routes>

    </>
  )
}

export default App
