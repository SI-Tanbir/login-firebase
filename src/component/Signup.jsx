import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import app from "./firebase.config";
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
        sendEmailVerification(auth.currentUser)
  .then(()=>{
    // Email verification sent!
    // ...
    console.log("email varification sent")
  });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  };

  let [show, setShow] = useState(false);
  // console.log(show);
  return (
    <form onSubmit={handleSignup} className="card-b
    ody w-[400px]">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
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
            type={show ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            name="password"
            required
          />
          <button
            type="button"
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
        <div className="flex">
          <input
            className="mr-3"
            type="checkbox"
            name="checked"
            id=""
            required
          />
          <p>Accept term and conditions</p>
        </div>
      </div>
      <div className="form-control mt-6">
        <input className="btn bg-yellow-400  " type="submit" value="Signup" />
      </div>
    </form>
  );
};

export default Signup;
