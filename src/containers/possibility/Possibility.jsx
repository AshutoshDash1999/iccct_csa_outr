import React from 'react';
// import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      {/* <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div> */}
      <div className="gpt3__possibility-content">
        {/* <h4>Request Early Access to Get Started</h4> */}
        <h1 className="gradient__text">About - Odisha University of Technology and Research (OUTR) </h1>
        <h4>(Formerly College of Engineering and Technology)</h4>
        <p>The Odisha University of Technology and Research, (Formerly CET), Bhubaneswar was established by the Government of Odisha in 1981 to meet the growing technical man power need in the State. It was a Constituent College of the Odisha University of Agriculture & Technology, Bhubaneswar since inception. After creation of a Technical University for Odisha State, the College has become a Constituent College of Biju Patnaik University of Technology (BPUT), Odisha with effect from 09th July, 2002 as per section-37(1) of BPUT Act, 2002.</p>
        {/* <h4>Request Early Access to Get Started</h4> */}
      </div>
    </div>
  );
}
export default Possibility;
