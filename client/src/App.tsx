import React from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Footer from './components/Footer'
import Program from './pages/Programs/Program'
import Momentum from './pages/Momentum/Momentum'
import Profile from './pages/Profile/Profile'
import EditProfileForm from './pages/Profile/EditProfileForm'

const App:React.FC = () => {


  return (
    <>
    <BrowserRouter>
     <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/products' element={<Program />} />
      <Route path='/momentum' element={<Momentum />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/edit-profile' element={<EditProfileForm />} />
      </Routes>
      <Footer />
      </BrowserRouter>
   
    </>
  )
}

export default App
