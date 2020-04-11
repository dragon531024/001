import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
    return(
        <div>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
        <section id="projects" class="projects-section bg-light">
            
       <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div class="col-lg-6">
        <img src={process.env.PUBLIC_URL+'/1.jpg'} class="img-fluid" alt="..."/>
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">Perawit Khasak 610610603</h4>
                <p class="mb-0 text-white-50">Manager FC</p>
                <hr class="d-none d-lg-block mb-0 ml-0"/>
              </div>
            </div>
          </div>
        </div>
      </div>


<div class="row justify-content-center no-gutters">
<div class="col-lg-6">
<img src={process.env.PUBLIC_URL+'/2.jpg'} class="img-fluid" alt="..."/>
</div>
<div class="col-lg-6 order-lg-first">
  <div class="bg-black text-center h-100 project">
    <div class="d-flex h-100">
      <div class="project-text w-100 my-auto text-center text-lg-right">
        <h4 class="text-white">Siwakorn Sae-ooi 610610616</h4>
        <p class="mb-0 text-white-50">King</p>
        <hr class="d-none d-lg-block mb-0 mr-0"/>
      </div>
    </div>
  </div>
</div>
</div>

<div class="row justify-content-center no-gutters mb-5 mb-lg-0">
<div class="col-lg-6">
<img src={process.env.PUBLIC_URL+'/3.png'} class="img-fluid"  alt="..."/>
</div>
<div class="col-lg-6">
  <div class="bg-black text-center h-100 project">
    <div class="d-flex h-100">
      <div class="project-text w-100 my-auto text-center text-lg-left">
        <h4 class="text-white">Pacharapol Nakwisut 610610701</h4>
        <p class="mb-0 text-white-50">Goal Keeper</p>
        <hr class="d-none d-lg-block mb-0 ml-0"/>
      </div>
    </div>
  </div>
</div>
</div>

</section>
</div>
    )
    
}