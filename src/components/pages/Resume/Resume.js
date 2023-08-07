import React from 'react';
import './Resume.css'

export default function Resume() {
  return (
    <div className='page'>
      <h1 className='title'>Resume</h1>
      <p className='text'>
        Link Coming Soon!
      </p>
      <ul className='profs'>Proficiencies</ul>
        <li className='profslist'>HTML</li>
        <li className='profslist'>CSS</li>
        <li className='profslist'>JavaScript</li>
        <li className='profslist'>Mongoose & Mongodb</li>
        <li className='profslist'>React</li>
        <li className='profslist'>Express</li>
        <li className='profslist'>API Usage</li>
        <li className='profslist'>Handlebars</li>
        <a className="contlink" href="https://github.com/Sohzo">Github</a>
        <a className="contlink" href="https://www.linkedin.com/in/jonathan-winter-b843a0266/">LinkedIn</a>
    </div>
  );
}
