/* eslint-disable no-unused-vars */
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext)
 
  const handleRegister = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, name, password);
    // create a user
    createUser(email, password)
    .then(result => {
      console.log(result.user)
      
    })
    .catch(error => {
      console.log(error.message)
      
    })
  }
  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-4xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" name="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" name="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">Already have account? Please<Link to="/login">
            <button className="btn btn-link font-bold">Login</button>
            </Link></p>
         
        </div>
      </div>
    </div>
  )
}

Register.propTypes = {}

export default Register