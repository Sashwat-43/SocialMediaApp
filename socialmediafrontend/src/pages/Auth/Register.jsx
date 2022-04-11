import React from 'react'
import './Register.css';

export default function Register() {
  return (
    <div className='Register'>
        <div className='RegisterWrap'>
            <div className='RegisterLeft'>
                <h2 className='RegisterIcon'>Socialgram</h2>
                <span className='RegisterBio'>
                    Socialgram helps you connect and share with the people in your life.
                </span>
            </div>
            <div className='RegisterRight'>
                <div className='RegisterContainer'>
                    <input type='text' placeholder='username' className='RegisterUsername'></input>
                    <input type='text' placeholder='Email' className='RegisterEmail'></input>
                    <input type='text' placeholder='Password' className='RegisterPassword'></input>
                    <input type='text' placeholder='ConfirmPassword' className='RegisterConfirmPassword'></input>
                    <button className='RegisterSubmit'>Sign Up</button>
                    <hr ></hr>
                    <button className='LoginSubmit'>Already have an account? Sign In here</button>
                </div>
            </div>
        </div>
    </div>
  )
}
