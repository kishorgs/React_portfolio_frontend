import { Outlet, Link } from "react-router-dom";
import {useRef} from 'react';
import { FaBars,FaTimes } from "react-icons/fa";
import * as React from 'react'

const Navbar = () => {

  const navRef = useRef();

  function shownavbar(){
    console.log("hi");
    let navbar = document.getElementById('Navbar');
    navbar.classList.toggle('active');
    let closebtn = document.getElementById('close-btn');
    closebtn.classList.toggle('active');
    let navbtn = document.getElementById('nav-btn');
    navbtn.classList.toggle('active');
  }

  function hidenavbar(){
    let navbar = document.getElementById('Navbar');
    navbar.classList.toggle('active');
    let closebtn = document.getElementById('close-btn');
    closebtn.classList.toggle('active');
    let navbtn = document.getElementById('nav-btn');
    navbtn.classList.toggle('active');
  }
  
  function link(){
    let navbar = document.getElementById('Navbar');
    navbar.classList.toggle('active');
    let closebtn = document.getElementById('close-btn');
    closebtn.classList.toggle('active');
    let navbtn = document.getElementById('nav-btn');
    navbtn.classList.toggle('active');
  }

  return (
    <>
    <header>
    <div className="logo"><h3>Kishor g s</h3></div>
      <nav ref={navRef} className="Navbar" id="Navbar">
        <ul>
            <li><Link className="link" onClick={link} to="/">Home</Link></li>
            <li><Link className="link" onClick={link} to="/About">About</Link></li>
            <li><Link className="link" onClick={link} to="/Myworks">My works</Link></li>
            <li><Link className="link" onClick={link} to="/Galary">Galary</Link></li>
            <li><Link className="link" onClick={link} to="/Contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="menu-toggle" id="menu-toggle">
            <button className="nav-btn" id="nav-btn" onClick={shownavbar}>
                    <FaBars/>
            </button>
            <button className="nav-close-btn" id="close-btn"  onClick={hidenavbar}>
                    <FaTimes/>
            </button>
      </div>
    </header>

      <Outlet />
    </>
  )
};

export default Navbar;