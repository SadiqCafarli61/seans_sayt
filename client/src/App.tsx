import React from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Footer from './components/Footer'
import Program from './pages/Programs/Program'
import Momentum from './pages/Momentum/Momentum'

const App:React.FC = () => {


  return (
    <>
    <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/products' element={<Program />} />
      <Route path='/momentum' element={<Momentum />} />
      </Routes>
      <Footer />
      </BrowserRouter>
   
    </>
  )
}

export default App
