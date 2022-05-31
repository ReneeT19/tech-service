import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import reTech from '../../assets/reTech-logo.png';


const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wreTech">What is reTech?</a></p>
    <p><a href="#possibility">Services</a></p>
    <p><a href="#feature">Case Studies</a></p>
    <p><a href="#pricing">Pricing</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)
// BEM -> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (<>
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={reTech} alt="reTech" />
        </div>
        <div className="gpt3__navbar-links_container">
         <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">Sign in</button>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu 
          ? <RiCloseLine color="white" size={27} onClick={() => setToggleMenu (false)} />
          : <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu (true)} />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div> 
    <div class='light x1'></div>
    <div class='light x2'></div>
    <div class='light x3'></div>
    <div class='light x4'></div>
    <div class='light x5'></div>
    <div class='light x6'></div>
    <div class='light x7'></div>
    <div class='light x8'></div>
    <div class='light x9'></div>
    </>
  )
}

export default Navbar