import React from 'react';
import "./Portfolio.css";
import apiimg from "./images/api_318-699563.webp"
import mernimg from "./images/1_FVtCyRdJ6KOr4YswTtwMeA.webp"
import ecomimg from "./images/depositphotos_30436145-stock-photo-e-commerce-shopping-online.webp"
import socialimg from "./images/sociall-networking.webp";
import jateimg from "./images/10-Best-Text-Editors-For-Mac-You-Can-Use.webp";
import emptrack from "./images/employees-community-image_csp22496979.jpg";

export default function Portfolio() {
  return (
    <div className='page'>
      <h1 className='title'>Portfolio</h1>
      <div className='workcolumns'>
        <ul className='columns'>
          <li className='coltitles'>
            Group work
          </li>
          <a href="https://github.com/13Blackmagic/Mixpedia">
            <img src={mernimg} className='imgs'></img>
          </a>
          <a href="https://github.com/ericklea/main-course-home-page-project">
            <img src={apiimg} className='imgs'></img>
          </a>
          <a href="https://github.com/Sohzo/Ecommerce-Website-CodeCrusaders">
            <img src={ecomimg} className='imgs'></img>
          </a>
        </ul>
        <ul className='columns'>
          <li className='coltitles'>
            Solo Work
          </li>
          <a href="https://github.com/Sohzo/Social-Network-API">
            <img src={socialimg} className='imgs'></img>
          </a>
          <a href="https://github.com/Sohzo/Project-19-Text-Editor">
            <img src={jateimg} className='imgs'></img>
          </a>
          <a href="https://github.com/Sohzo/Employee-Tracker">
            <img src={emptrack} className='imgs'></img>
          </a>
        </ul>
      </div>





    </div>
  );
}
