import React from 'react'
import "./Forgot.css";


const Forgot = () => {
  return (
    <div className='mainforgot'>
       <div className="image">
            <div src="../../../public/images/rectangle-5.png" alt="" id='img1'/>
            <div src="../../../public/images/rectangle-6.png" alt="" className='image2' />
          </div>
          <div className="formforgot">
            <div className="headforgot">
              <p>Forgot Password</p>
            </div>
            <div className="text">Forgot Password Change!</div>
            
            <div className="inputsforgot">
             
              <input type="email" placeholder='Email Address' /><br />
        
            </div>
            <div className="buttonforgot">
              <button type='submit' >Forgot</button>
            </div>
            <div className="alreadyforgot">
            Remember Password?<span>LogIn</span>
            </div>
          </div>
      
       
    </div>
  )
}

export default Forgot;
