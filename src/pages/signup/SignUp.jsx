import React from 'react'
import "./SignUp.css";


const SignUp = () => {
  return (
    <div className='mainSign'>
       <div className="imageSign">
            <div src="../../../public/images/rectangle-5.png" alt="" id='img1'/>
            <div src="../../../public/images/rectangle-6.png" alt="" className='image2' />
          </div>
          <div className="formSign">
            <div className="headSign">
              <p>Create an Account</p>
            </div>
            <div className="text">Create an account to enjoy all the services!</div>
            
            <div className="inputSign">
              <input type="text" name='names' placeholder='Full Name' /><br />
              <input type="email" placeholder='Email Address' /><br />
              <input type="
              password" name='password' placeholder='password' /><br />
              <input type="text" name='' />
            </div>
            <div className="buttonSign">
              <button type='submit' >Create Account</button>
            </div>
            <div className="alreadySign">
            Already Have An Account?<span>Log In</span>
            </div>
          </div>
      
       
    </div>
  )
}

export default SignUp;
