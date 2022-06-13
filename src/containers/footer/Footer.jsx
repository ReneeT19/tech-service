import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => (
    <div className="gpt3__footer section__padding">
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>This is a footer. This is a footer. This is a footer.</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>All rights reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>External Resources</p>
          <p>Social Media</p>
          <p>External Resources</p>
          <p>Social Media</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>External Resources</p>
          <p>Social Media</p>
          <p>External Resources</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Address</p>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>@2022 reTech. All rights reservce.</p>
      </div>
    </div>
  );

export default Footer;