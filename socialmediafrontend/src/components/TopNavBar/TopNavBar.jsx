import React, { useContext, useRef } from 'react'
import './TopNavBar.css'
import {Person,Search ,Notifications,Chat} from '@mui/icons-material';
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {Context, Context_Recommend} from '../../ContextApi/Context';
import Register from '../../pages/Auth/Register';
import axios from 'axios';

export default function TopNavBar() {

    const setting = useContext(Context_Recommend).isActive;
    const dispatch = useContext(Context_Recommend).dispatch;

    // console.log(setting);

    const {user} = useContext(Context);
    const searchUser = useRef();
    const navigate = useNavigate();
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;

    const handleSearch = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.get(`/users?username=${searchUser.current.value}`);
            navigate(`/MyProfile/${response.data.username}`)
        }catch(err){
            alert("No user exists with this username!");
            console.log(err);
        }

    }

    const StopRecommend = () =>{
        dispatch({type:"DISABLE"});
    }

    const StartRecommend = () =>{
        dispatch({type:"ENABLE",payload:3});
    }

  return (
    user?
    <div className='TopNavBarContainer'>
        <div className='TopNavBarLeft'>
            <Link to='/' className='IconLink'>
                <span className='icon'>Socialgram</span>
            </Link>
        </div>
        <div className='TopNavBarCenter'>
            <div className= 'TopNavBarSearch' >
                <form className='SearchUser' onSubmit={handleSearch}>
                    <Search className='SearchLogo' type='submit'/>
                    <input className='SearchInput' required ref={searchUser} placeholder='Search for friend'></input>
                </form>
            </div>
        </div>
        <div className='TopNavBarRight'>
            {setting
            ?
                <button onClick={StopRecommend}>Don't Recommend Posts</button>
            :
                <button onClick={StartRecommend}>Recommend Posts</button>
            }
            <Link to={`/MyProfile/${user.username}`}>
                <img className='TopNavBarImage' src={user.profilePic ? publicFolder+`ProfilePics/${user.profilePic}` : publicFolder+'/UseCase/profile.png'} alt="image1"></img>
            </Link>
        </div>
    </div>
    :
    <Register />
  )
}
