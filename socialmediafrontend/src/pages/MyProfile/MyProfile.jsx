import React from 'react'
import { useState, useEffect , useContext } from 'react';
import axios from 'axios';
import CenterFeed from '../../components/CenterFeed/CenterFeed';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import './MyProfile.css';
import {useParams , useNavigate} from 'react-router';
import { Context } from '../../ContextApi/Context';

export default function MyProfile() {

  const navigate = useNavigate();
  const sessionUser = useContext(Context).user;
  // const CurrentUser = useContext(Context);
  const [user,setUser] = useState({});
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;
  const params = useParams();

  useEffect(()=>{

    const fetchuser = async () =>{
      const response = await axios.get(`/users?username=${params.username}`);
        // console.log(response);
      setUser(response.data);
    }
    fetchuser();
  },[params.username]);

  return (
    <>
      <TopNavBar/>
      <div className='MyProfile'>
        <LeftSideBar/>
        <div className='MyProfileRight'>
            <div className='MyProfileRightTop'>
                <div className='MyProfileCover'>
                    <img className='MyProfileCoverPic' alt='CoverPic' src={user.coverPic?publicFolder+`CoverPics/${user.coverPic}`:publicFolder+'Usecase/cover.png'}></img>
                    <img className='MyProfileImage' alt='ProfileImage' src={user.profilePic?publicFolder+`ProfilePics/${user.profilePic}`:publicFolder+'Usecase/profile.png'}></img>
                </div>
                <div className='MyProfileInfo'>
                    <h2 className='MyProfileName'>{user.username}</h2>
                    <span className='MyProfileBio'>{user.bio}</span>
                </div>
            </div>
            <div className='MyProfileRightBottom'>
                <CenterFeed  username={user.username}/>
                <RightSideBar User={user}/>
            </div>
        </div>
      </div>
    </>
  )
}
