import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import Category from "../../components/Category/Category";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("email"));
  return (
    <form className="mainSign" onSubmit={handleSubmit(onSubmit)}>
      <div className="imageSign">
        <div src="../../../public/images/rectangle-5.png" alt="" id="img1" />
        <div
          src="../../../public/images/rectangle-6.png"
          alt=""
          className="image2"
        />
      </div>
      <div className="formSign">
        <div className="headSign">
          <p>Create an Account</p>
        </div>
        <div className="text">Create an account to enjoy all the services!</div>

        <div className="inputSign">
          <input type="text" name="names" placeholder="Full Name" />
          <br />
          

          <input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            })}
          />
          <br />
          {errors.email && <span>This field is required</span>}
          <input
            type="
              password"
            name="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && <span>This field is required</span>}
        </div>
        <div className="buttonSign">
          <button type="submit">Create Account</button>
        </div>
        <div className="alreadySign">
          Already Have An Account?
          <span>
            <Link to="/login">Log In</Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
