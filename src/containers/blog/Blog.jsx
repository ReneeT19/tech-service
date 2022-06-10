import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'; //create an imports.js under blog 
//just like what we did for brand component

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jun 10, 2022" text="This is a placeholder. This is a placeholder. This is a placeholder." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jun 10, 2022" text="This is a placeholder. This is a placeholder. This is a placeholder." />
        <Article imgUrl={blog03} date="Jun 10, 2022" text="This is a placeholder. This is a placeholder. This is a placeholder." />
        <Article imgUrl={blog04} date="Jun 10, 2022" text="This is a placeholder. This is a placeholder. This is a placeholder." />
        <Article imgUrl={blog05} date="Jun 10, 2022" text="This is a placeholder. This is a placeholder. This is a placeholder." />
      </div>
    </div>
  </div>
);

export default Blog;