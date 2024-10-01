import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const handlenav=()=>{
    setIsOpen(!isOpen)
  }
  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <>
    <nav className="navbar-header">
        <div className="logo"><a href="/">Kishor G S</a></div>
        <ul className={`navlinks ${isOpen ? "active":""}`}>
            <li><Link to='/'  onClick={closeNav}>Home</Link></li>
            <li><Link to='/about'  onClick={closeNav}>About Me</Link></li>
            <li><Link to='/project'  onClick={closeNav}>My Projects</Link></li>
            <li><Link to='/gallery'  onClick={closeNav}>Gallery</Link></li>
            <li><Link to='/contact'  onClick={closeNav}>Contact me</Link></li>
        </ul>
        <i class="fa-solid fa-bars fa-xl" onClick={handlenav}></i>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navbar
