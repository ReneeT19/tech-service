import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Reduce the cost',
    text: 'This is a placeholder. This is a placeholder. This is a. This is a placeholder. This is a placeholder.'
  },
  {
    title: 'Reduce the cost',
    text: 'This is a placeholder. This is a placeholder. This is a. This is a placeholder. This is a placeholder.'
  },
  {
    title: 'Reduce the cost',
    text: 'This is a placeholder. This is a placeholder. This is a. This is a placeholder. This is a placeholder.'
  },
  {
    title: 'Reduce the cost',
    text: 'This is a placeholder. This is a placeholder. This is a. This is a placeholder. This is a placeholder.'
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">This is a placeholder. This is a placeholder. This is a placeholder. This is a placeholder.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features