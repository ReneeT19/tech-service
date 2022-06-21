import React from 'react';
import './article.css';

//to pass different images, pass imgUrl as a prop and import different props into blog component
const Article = ({ imgUrl, date, text, text2, content }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
        <h4>{text2}</h4>
      </div>
      <p>{content}</p>
    </div>
  </div>
);

export default Article;