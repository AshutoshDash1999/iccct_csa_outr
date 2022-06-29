import React from 'react';
import gpt3Logo from '../../assets/ICCT.png';
import './footer.css';
import Article from '../../components/article/Article';
// import { blog01, blog02, blog03 } from '../speaker/imports';

function Footer() {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
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
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <Article date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="gpt3_logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
