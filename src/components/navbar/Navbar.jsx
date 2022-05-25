import React from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import reTech from '../../assets/reTech.png'

// BEM -> Block Element Modifier
const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={reTech} alt="reTech" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wreTech">What is reTech?</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#feature">Case Studies</a></p>
          <p><a href="#pricing">Pricing</a></p>
          <p><a href="#contact">Contact</a></p>
        </div>

      </div>
    </div> 
  )
}

export default Navbar