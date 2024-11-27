import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase.config";

const Login = () => {
  let handleLogIn = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        console.log('user login')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  };

  let [show, setShow] = useState(false);
  // console.log(show);
  return (
    <form onSubmit={handleLogIn} className="card-body w-[400px]">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <div className="relative">
          <input
            name="password"
            type={show ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            className="absolute top-3 right-2"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? <IoMdEyeOff /> : <IoMdEye />}
          </button>
        </div>

        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-blue-500">Login</button>
      </div>
    </form>
  );
};

export default Login;
