import "./Login.css";
import { Link } from "react-router-dom";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("email"));
  return (
    <form className="mainLogin" onSubmit={handleSubmit(onSubmit)}>
      <div className="image">
        <img src="../../../public/images/rectangle-5.png" alt="" id="img1" />
        <div src="../../../public/images/rectangle-6.png" id="img2" />
      </div>
      <div className="formLogin">
        <div className="headLogin">
          <p>Log In As Business</p>
        </div>
        <div className="text">Log in to access our Ski Services</div>

        <div className="inputsLogin">
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}
          />
          {errors.email && <span>This field is required</span>}
          <br />
          <input
            type="
              password"
            name="password"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
          <br />
        </div>
        <div className="buttonLogin">
          <button type="submit">
            <Link to="/design">Create Account</Link>
          </button>
        </div>
        <div className="Forgotlink">
          <Link to="/forgot">
            <span>Forgot PassWord</span>
          </Link>
        </div>
        <div className="already">
          Already Have An Account?
          <Link to="/signup">
            <span>Sign In</span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
