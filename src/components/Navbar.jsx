import React from 'react'
import { Link } from 'react-router-dom';

import '../App.css';

import 'bootstrap';
export default function Header() {


 
  return (
 
    <nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
    <div class="container">
    <i class="fas fa-drumstick-bite fa-5x blackiconcolor" ></i><a class="navbar-brand js-scroll-trigger upsizefont"  href="#page-top">Cal cal</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to="/about">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </Link>
          </li>
          <li class="nav-item">
          <Link to="#Addcal">
            <a class="nav-link js-scroll-trigger" href="#projects">CalcalApp</a>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#signup">Sign in</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  )
}
