import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import logo from '../assets/logo.avif'
const Navbar:React.FC = () => {
    

    type LinkProps = {
        id:number;
        url:string;
        title:string;
    }
    const links:LinkProps[] = [
        {id:-1,url:"/",title:"Ana Səhifə"},
        {id:0,url:"/products",title:"Məhsul və Proqramlar"},
        {id:1,url:"/momentum",title:"7 Gündə Momentum Qoçluq"},
        {id:2,url:"/podcast",title:"Podcast"},
    ]
    const [selectedColor,setSelectedColor] = useState<string>("")
    const [open,setOpen] = useState<boolean>(false)
    
    useEffect(() => {
  const fetchSelectedLink = async () => {
            const savedLink = localStorage.getItem("selectedLink");
            if (savedLink) {
                setSelectedColor(savedLink);
            } else {
                setSelectedColor(links[0].url);
            }
        };

        fetchSelectedLink(); 
    },[links])

    const handleClickLink = (url:string) => {
      setSelectedColor(url)
      localStorage.setItem("selectedLink",url)
    }
  return (
    <>
   
  {
    open && (
          <div className={`overlay ${open ? 'open' :""}`}>
            <button onClick={() =>setOpen(false)}>X</button>
<div className="overlay__navbar">
    {
            links.map(link => (
                <Link
                style={{
                    color:selectedColor === link.url ? "#FF64BA" :""
                }}
                onClick={() =>handleClickLink(link.url)}
                to={`${link.url}`}>{link.title}</Link>
            ))
          }
</div>
<div className='overlay__login'>
  <i className="fa-solid fa-user"></i>
<span>Giriş</span>
</div>
  </div>
    )
  }

     <div className="header__navbar">
         <div className="header">
            <div className="left">
<img src={logo} style={{
  width:"70px",
  height:"70px"
}} alt="" />
         </div>
          <div className="bars">
            <FaBarsStaggered style={{
                display: open ? "none":"flex"
            }} onClick={() =>setOpen(!open)} className='barIcon' />
         </div>
         <div className="right">
             
<i className="fa-solid fa-user"></i>
<span>Giriş</span>
         </div>
       
         </div>
         <div className="navbar">
          {
            links.map(link => (
                <Link
                style={{
                    color:selectedColor === link.url ? "#FF64BA" :""
                }}
               onClick={() =>handleClickLink(link.url)}
                to={`${link.url}`}>{link.title}</Link>
            ))
          }
          
         </div>
    </div>
       </>
  )
}

export default Navbar
