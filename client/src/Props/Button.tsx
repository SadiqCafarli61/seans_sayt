import React from 'react'

interface ButtonProps {
    title:string;
    onClick?:() =>void
}
const Button:React.FC<ButtonProps> = ({title,onClick}) => {
  return (
   <button className='props' onClick={onClick}>{title}</button>
  )
}

export default Button
