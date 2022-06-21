import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
// import '../../components/navbar/navbar.css'

import { Brand } from '../../components';
import { Features, Possibility } from '../../containers';

const Menu = () => (
  <>
    <p><a href="#possibility">Services</a></p>
    <p><a href="#features">Features</a></p>
  </>
)

const Header = () => (<>
  <div className="gpt3__navbar-home">
      <div className="gpt3__navbar-links_home">
        <div className="gpt3__navbar-links_container-home">
        <Menu />
        </div>
      </div>
    </div>
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Build Somthing Amazing with reTech</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  <Brand />
  <Features />
  <Possibility />
  </>
);

export default Header;