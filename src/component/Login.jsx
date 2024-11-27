
import React, { useState } from 'react'

const Login = () => {

    let [show,setShow]=useState(false);
    console.log(show);
  return (
    
    <form className="card-body w-[400px]">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type={ show?'text':'password'} placeholder="password" className="input input-bordered" required />
      <button onClick={()=>setShow(prev => !prev)} >show</button>
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-blue-500">Login</button>
    </div>
  </form>
  )
}

export default Login;