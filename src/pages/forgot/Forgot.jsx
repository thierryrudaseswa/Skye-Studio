import React from 'react'
import "./Forgot.css";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';



const Forgot = () => {
  const {register,handleSubmit,watch,formState: {errors}} = useForm();
  const onSubmit = (data) =>console.log(data);
  return (
    <form className='mainforgot' onSubmit={handleSubmit(onSubmit)}>
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
             
              <input type="Email" placeholder='Email Address' 
               {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}/><br />
              {errors.email && <span>
                This field of Email is required</span>}
        
            </div>
            <div className="buttonforgot">
              <button type='submit' >Forgot</button>
            </div>
            <div className="alreadyforgot">
            Remember Password?<span><Link to="/login">Log In</Link></span>
            </div>
          </div>
      
       
    </form>
  )
}

export default Forgot;
