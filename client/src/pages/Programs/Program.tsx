import React from 'react'
import ProgramHeader from './ProgramHeader'
import './Program.css'
import ProgramPortal from './ProgramPortal'
import ProgramCountries from './ProgramCountries'
const Program:React.FC = () => {
  return (
    <div>
      <ProgramHeader />
      <ProgramPortal />
      <ProgramCountries />
    </div>
  )
}

export default Program
