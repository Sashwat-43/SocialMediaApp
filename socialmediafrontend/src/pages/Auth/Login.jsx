import React from 'react'
import './Login.css';

export default function Login() {
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
                <div className='LoginContainer'>
                    <input type='text' placeholder='Email' className='LoginEmail'></input>
                    <input type='text' placeholder='Password' className='LoginPassword'></input>
                    <button className='LoginSubmit'>Sign In</button>
                    <span className='ForgotPassword'>Forgot Password?</span>
                    <hr></hr>
                    <button className='RegisterSubmit'>New here? Create New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
