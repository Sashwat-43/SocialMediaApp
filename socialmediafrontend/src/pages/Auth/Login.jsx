import React from 'react'
import { useRef, useContext } from 'react';
import {Link} from 'react-router-dom'
import './Login.css';
import { CircularProgress } from '@mui/material';
import { LoginCheck } from '../../ApiCalls';
import { Context } from '../../ContextApi/Context';


export default function Login() {

    const email = useRef(null);
    const password =useRef(null);
    const {user,isFetching,error,dispatch} = useContext(Context);


    const handleSubmit =async  (e) => {
        e.preventDefault();
        const tempEmail = email.current.value;
        const tempPassword = password.current.value;
        // console.log(tempEmail,tempPassword);
        const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regEx.test(tempEmail)){
            if(tempPassword.length<6){
                alert("Enter password of length > 6 !")
            }else{
                LoginCheck({email:tempEmail,password:tempPassword},dispatch);
            }
        }else{
                alert("Enter valid email !")
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
                    <button className='LoginSubmit'>
                        {isFetching?
                            <CircularProgress className="loading" color="secondary" size="25px" />
                        :
                            "Sign In"}
                    </button>
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