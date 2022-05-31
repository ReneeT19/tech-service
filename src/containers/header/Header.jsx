import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/IT-support.png';


const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Good tech solutions lead to good business
        </h1>
        <p>We provide technological services to help companies with their operations and goals. Work with us today and let's start building something together! Send an inquiry below by typing your email.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>16,000 people requested services in the past month.</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header