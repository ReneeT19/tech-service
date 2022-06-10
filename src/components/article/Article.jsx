import React from 'react';
import './article.css';

//to pass different images, pass imgUrl as a prop and import different props into blog component
const Article = ( {imgUrl, date, title }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'> 
        <img src={imgUrl} alt="blog" />
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Get Full Access</p>
      </div>
    </div>
  )
}

export default Article