import React from 'react';
import './pricing.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'; //create an imports.js under blog 
//just like what we did for brand component

const Pricing = () => (
  <div className="gpt3__blog section__padding" id="pricing">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Take a look at our packages</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jun 10, 2022"text="$24.99/month" text2="This is a placeholder." content="30% off" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jun 10, 2022" text="$29.99/month" content="10% off" />
        <Article imgUrl={blog03} date="Jun 10, 2022" text="This is a placeholder. This is a placeholder. This is a placeholder." />
        <Article imgUrl={blog04} date="Jun 10, 2022" text="This is a placeholder. This is a placeholder. This is a placeholder." />
        <Article imgUrl={blog05} date="Jun 10, 2022" text="This is a placeholder. This is a placeholder. This is a placeholder." />
      </div>
    </div>
  </div>
);

export default Pricing;