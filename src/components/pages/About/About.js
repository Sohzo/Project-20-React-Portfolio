import React from 'react';
import "./About.css";

export default function About() {
  return (
    <div className="About-page">
      <h1 className="About-title">About Me</h1>
      <p className="About-text">
        Welcome to my page! My name is Jonathan. I've been studying web development at the University of Utah for 6 months now. 
        I began coding after hearing that some of my friends had decided to give it a try, after some time I grew to enjoy it.
        After a couple weeks into the bootcamp, I decided to stick with it due to the satisfaction of building successful code.
        I believe that my strength in logical thinking will allow me to continue learning and honing my skill at the craft.
      </p>
      <p className="About-text2">
        Outside of web development, I enjoy physical activities such as competitive power-lifting and MMA fighting, though I can find fun in most sports.
        If you need a new junior web dev, feel free to contact me!  
      </p>
    </div>
  );
}
