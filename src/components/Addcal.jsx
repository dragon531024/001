import React, { Component } from 'react'
import '../App.css';
import 'bootstrap';
export default class Addcal extends Component {

    render() {
            return(

                

                <section id="signup" class="signup-section">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto text-center">
         <i class="fas fa-book fa-2x mb-2 text-white"></i>     
          
          <h2 class="text-white mb-5">Diary of date ..</h2>

          <form class="form-inline d-flex">
            <input type="text" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Your meal.."/>
            <input type="number" class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Calories.."/>
            <button type="submit" class="btn btn-primary mx-auto">Save</button>
            <div class="col-md-10 col-lg-8 mx-auto text-center pt-5">
            <i class="fas fa-utensil-spoon fa-3x text-white"></i><h4 class="text-white">Today Calories left</h4>

            </div>
          </form>
         
        </div>
      </div>
    </div>
    </section>
    
 
            )

    }

}