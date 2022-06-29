import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '20th June 2022',
    text: 'Submission of Full Manuscript',
  },
  {
    title: '20th August 2022 ',
    text: 'Notification of Acceptance',
  },
  {
    title: '20th September 2022',
    text: 'submission deadline for revised papers',
  },
  {
    title: '20th October 2022',
    text: 'Registration deadline',
  },
  {
    title: '16-17 December, 2022',
    text: 'Conference Dates',
  },
];

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Important Dates</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
}

export default Features;
