import axios from 'axios';
import React from 'react'
import {useRef} from 'react';
import {Link , useNavigate} from 'react-router-dom'
import './Register.css';

export default function Register() {

    const username = useRef(null);
    const email = useRef(null);
    const password =useRef(null);
    const confirmpassword = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        // console.log(username,email,password,confirmpassword);

        const tempUsername = username.current.value;
        const tempEmail = email.current.value;
        const tempPassword = password.current.value;
        const tempConfirmPassword = confirmpassword.current.value;

        // console.log(tempUsername,tempEmail,tempPassword,tempConfirmPassword);

        const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regEx.test(tempEmail)){
            if(tempPassword.length<6){
                alert("Enter password of length atleast 6");
                return ;
            }
            if(tempPassword!=tempConfirmPassword){
                alert("Paassword and confirm password do not match!");
                return ;
            }
            const user = {
                username: tempUsername,
                email: tempEmail,
                password: tempPassword
            }
            try{
                const response = await axios.post('/auth/register',user);
                navigate('/login');
            }catch(err){
                alert(err.response.data);
            }
        }else{
            alert("Invalid email! Use valid email");
        }
    }

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
                <form className='RegisterContainer' onSubmit={handleSubmit }>
                    <input type='text' required placeholder='username' ref={username} className='RegisterUsername'></input>
                    <input type='text' required placeholder='Email' ref={email} className='RegisterEmail'></input>
                    <input type='password' required placeholder='Password' ref={password} className='RegisterPassword'></input>
                    <input type='password' required placeholder='ConfirmPassword' ref={confirmpassword} className='RegisterConfirmPassword'></input>
                    <button className='RegisterSubmit'>Sign Up</button>
                    <hr ></hr>
                    <Link to='/login' className='LinkLogin'>
                        <button className='LoginRedirect'>Already have an account? Sign In here</button>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}