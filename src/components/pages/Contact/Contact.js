import React from 'react';
import "./Contact.css"

export default function Contact() {
  return (
    <div className='page'>
      <h1 className='title'>Contact Me</h1>

      <form className='container'>
        <h3>Get in touch</h3>
        <input type="text" id="name" placeholder='Your Name' required></input>
        <input type="email" id="email" placeholder='Email' required></input>
        <textarea id="message" rows="5" placeholder="Message"></textarea>
        <button type="submit">Submit</button>

      </form>
      
      <ul>
        <li className="text">Email: jonpw2004@outlook.com</li>
        <li className="text">Phone#: 801-935-0042</li>
        <li className="text">Github: https://github.com/Sohzo</li>
        <li className="text">LinkedIn: https://www.linkedin.com/in/jonathan-winter-b843a0266/</li>
      </ul>
    </div>
  );
}
