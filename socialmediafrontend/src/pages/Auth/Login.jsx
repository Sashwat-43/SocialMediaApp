import React from 'react'
import { useRef } from 'react';
import {Link} from 'react-router-dom'
import './Login.css';

export default function Login() {

    const email = useRef(null);
    const password =useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempEmail = email.current.value;
        const tempPassword = password.current.value;
        const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regEx.test(tempEmail)){
            if(tempPassword.length<6){
                alert("Enter password of length atleast 6!");
            }
        }else{
            alert("Invalid email! Use valid email");
        }
    }

  return (
    <div className='Login'>
        <div className='LoginWrap'>
            <div className='LoginLeft'>
                <h2 className='LoginIcon'>Socialgram</h2>
                <span className='LoginBio'>
                    Socialgram helps you connect and share with the people in your life.
                </span>
            </div>
            <div className='LoginRight'>
                <form className='LoginContainer' onSubmit={handleSubmit}>
                    <input type='text' ref={email} required placeholder='Email' className='LoginEmail'></input>
                    <input type='password' ref={password} required placeholder='Password' className='LoginPassword'></input>
                    <button className='LoginSubmit'>Sign In</button>
                    <span className='ForgotPassword'>Forgot Password?</span>
                    <hr ></hr>
                    <Link  to='/register' className='LinkRegister'>
                        <button className='RegisterRedirect'>New here? Create New Account</button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}