import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';

const Register = () => {
  const [error,setError]=useState('');// default no error 
  const [success,setSuccess]=useState(false);
  const [showPassword,setShowPassword]=useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        const terms = event.target.terms.checked;
        const passwordPattern = /^.{6,}$/;
        const casePasswordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        const specialCharPattern = /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;
        if(!passwordPattern.test(password)){
          setError("Password Should Be More Than 6 Character Or Longer");
          return ;
        }else if(!casePasswordPattern.test(password)){
           setError("Wrong password: must have uppercase, lowercase, and at least 6 characters");
           return;
        }else if(!specialCharPattern.test(password)){
            setError('Wrong password: must include at least one special symbol');
            return;
        }
        if(!terms){
          setError('Please Accept Our Terms and Conditions');
           return;
        }
        setError('');
        setSuccess(false);
        console.log("register clicked",email,password);       
            createUserWithEmailAndPassword(auth,email,password)
          .then((result)=>{
            console.log(result);
            setSuccess(true);
            event.target.reset();
          })
          .catch((error)=>{
           // console.log(error);
           event.target.reset();
            setError(error.message);
          })

    }
    const handleTogglePassword=(event)=>{
      event.preventDefault();
      setShowPassword(!showPassword);
    }
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-7xl font-bold">Register now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
           <div className='relative'>
               <input type={showPassword?"text":"password"}
                name="password"
                 className="input" placeholder="Password" />
               <button onClick={handleTogglePassword} className="btn btn-xs absolute top-2 right-5">{showPassword?<EyeOff></EyeOff>:<Eye></Eye>}</button>
           </div>
            <label class="label">
           <input type="checkbox"
             name="terms"
            class="checkbox" />
              Accept Our Terms and Conditions
              </label>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        {
           success && <p className='text-green-500'>Account created Successfully!</p>

        }
         {
            error && <p className='text-red-500'><small>{error}</small></p>
         }
         <p>Already have a account. Please <Link className='text-blue-500 underline' to={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;