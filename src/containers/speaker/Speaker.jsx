import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03 } from './imports';
import './speaker.css';

function Speaker() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog02} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog03} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  );
}
export default Speaker;

