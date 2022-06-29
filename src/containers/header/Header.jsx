import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">About the Conference</h1>
        <p><b>1st  International Conference on Communication and Computational Techniques (ICCCT-2022)</b><br /><br />Department of CSA, OUTR Bhubaneswar (An Autonomous Institute of Govt. of ODISHA) is going to organize  1st  International Conference on Communication and Computational Techniques on 16th and 17th December 2022. The extended effort version of selected papers will be published in SCOPUS, Indexed, Google Scholar, and Springer Link</p>
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
  );
}
export default Header;
