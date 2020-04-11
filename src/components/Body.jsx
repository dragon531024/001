import React, { Component } from 'react'
import '../App.css';
import 'bootstrap';
import Meal from '../img/Bottom.png';

export default function Body() {
return(
    <div class="container mt-8">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          
        </div>
      
     
    </div>
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
          <img class ="mealsize"src={Meal} />
          </div>
          <div class="col-xl-4 col-lg-5">
          
            <div class="featured-text text-center text-lg-left  ">
              <h4>What is calorie</h4>
              <p class="text-black-50 mb-0">The calorie is a pre-SI unit of energy, most common in heat.
              It is the amount of energy required to increase the temperature of one gram of water by one Kelvin.</p>
            </div>
          </div>
        </div>
        </div>
)

}