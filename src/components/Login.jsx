import React, { Component } from 'react'
import '../App.css';
import 'bootstrap';
export default class Addcal extends Component {

    render() {
            return(

                

                <section id="signup" class="signup-section">
    <div class="container">
        <div class="row">
			<div class="col-md-5 mx-auto">
			<div id="first">
				<div class="myform form ">
					 <div class="logo mb-3">
						 <div class="col-md-12 text-center">
							<h1>Login</h1>
						 </div>
					</div>
                   <form action="" method="post" name="login">
                           <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label> <i class="fas fa-envelope-square"></i>
                              <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Password</label> <i class="fas fa-unlock-alt"></i>
                              <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"></input>
                           </div>
                           <div class="form-group">
                              <p class="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div class="col-md-12 text-center ">
                              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                           </div>
                           {/* <div class="col-md-12 ">
                              <div class="login-or">
                                 
                                 <span class="span-or">or</span>
                                
                              </div>
                           </div> */}
                           {/* <div class="col-md-12 mb-3">
                              <p class="text-center">
                                 <a href="javascript:void();" class="google btn mybtn"><i class="fab-fa-google"></i> Signup using Google
                                 </a>
                              </p>
                           </div> */}
                           <div class="form-group">
                              <p class="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
                           </div>
                        </form>
                 
				</div>
			</div>
			  <div id="second">
			      <div class="myform form ">
                        <div class="logo mb-3">
                           <div class="col-md-12 text-center">
                              <h1 >Signup</h1>
                           </div>
                        </div>
                        <form action="#" name="registration">
                           <div class="form-group">
                              <label for="exampleInputEmail1">First Name</label> <i class="fas fa-users" ></i>
                              <input type="text"  name="firstname" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname"></input>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Last Name</label> <i class="fas fa-users"></i>
                              <input type="text"  name="lastname" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname"></input>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label> <i class="fas fa-envelope-square"></i>
                              <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Password</label> <i class="fas fa-unlock-alt"></i>
                              <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"></input>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Weight</label> <i class="fas fa-weight-hanging"></i>
                              <input type="number" name="uweight" id="uweight"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Weight"></input>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Height</label> <i class="fas fa-arrows-alt-v fa-fw"></i>
                              <input type="number" name="uheight" id="uheight"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Height"></input>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Case</label> <i class="fas fa-dumbbell"></i>
                              <select id="ucase" name="ucase" placeholder="Enter Case">
                                  <option value="1.2">นั่งทำงานอยู่กับที่ และไม่ได้ออกกำลังกายเลย</option>
                                  <option value="1.375">ออกกำลังกายหรือเล่นกีฬาเล็กน้อย ประมาณอาทิตย์ละ 1-3 วัน</option>
                                  <option value="1.55">ออกกำลังกายหรือเล่นกีฬาหานกลาง ประมาณอาทิตย์ละ 3-5 วัน</option>
                                  <option value="1.725">ออกกำลังกายหรือเล่นกีฬาอย่างหนัก ประมาณอาทิตย์ละ 6-7 วัน</option>
                                  <option value="1.9">ออกกำลังกายหรือเล่นกีฬาอย่างหนักทุกวันเช้า-เย็น</option>
                              </select>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Age</label> <i class="fas fa-clock"></i>
                              <input type="number" name="uage" id="uage"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Age"></input>
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Gender</label> <i class="fas fa-venus-mars"></i>
                              <input type="radio" name="gender" id="male" placeholder="Enter Gender"></input>
                              <label for="male">Male</label>
                              <input type="radio" name="gender" id="female" placeholder="Enter Gender"></input>
                              <label for="female">Female</label>
                              <input type="radio" name="gender" id="other" placeholder="EnterGender"></input>
                              <label for="other">Other</label>
                           </div>
                           <div class="col-md-12 text-center mb-3">
                              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="form-group">
                                 <p class="text-center"><a href="#" id="signin">Already have an account?</a></p>
                              </div>
                           </div>
                        </form>
                     </div>
			</div>
		</div>
      </div>
    </div>
    </section>
    
 
            )

    }

}