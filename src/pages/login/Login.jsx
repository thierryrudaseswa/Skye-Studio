import React from 'react'
import "./Login.css";


const Login = () => {
  return (
    <div className='mainLogin'>
       <div className="image">
            <img src="../../../public/images/rectangle-5.png" alt="" id='img1'/>
            <div src="../../../public/images/rectangle-6.png"  id='img2' />
          </div>
          <div className="formLogin">
            <div className="headLogin">
              <p>Log In</p>
            </div>
            <div className="text">Log in to access our Ski Services</div>
            
            <div className="inputsLogin">
             
              <input type="email" placeholder='Email Address' /><br />
              <input type="
              password" name='password' placeholder='password' /><br />
        
            </div>
            <div className="buttonLogin">
              <button type='submit' >Create Account</button>
            </div>
            <div className="already">
            Already Have An Account?<span>Sign In</span>
            </div>
          </div>
      
       
    </div>
  )
}

export default Login;
