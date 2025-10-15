import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { auth } from '../../firebase/firebase.config';

const Login = () => {
    const[error,setError]=useState('');
    const handleOnSubmit=(event)=>{
        event.preventDefault();

        const email=event.target.email.value;
        const password=event.target.password.value;
        setError('');
        signInWithEmailAndPassword(auth,email,password)
           .then((result)=>{
                console.log(result.user);
           })
           .catch((error)=>{
             setError(error.message);
           })
    }
    return (    
    <div className="card bg-base-100 w-full mx-auto top-20 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
         <form onSubmit={handleOnSubmit}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          {
              error && <p className='bg-red-500'>{error}</p>
          }
        </fieldset>
         </form>
         <p>New to Our Websites Please <Link className='text-blue-400 underline' to={'/register'}>Register</Link></p>
      </div>
    </div>
    );
};

export default Login;