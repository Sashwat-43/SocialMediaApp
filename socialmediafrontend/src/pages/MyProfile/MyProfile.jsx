import React from 'react'
import { useState, useEffect , useContext } from 'react';
import axios from 'axios';
import CenterFeed from '../../components/CenterFeed/CenterFeed';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import './MyProfile.css';
import { Link } from 'react-router-dom';
import {useParams , useNavigate} from 'react-router';
import { Context } from '../../ContextApi/Context';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
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
        {/* <LeftSideBar/> */}
        <div className='MyProfileRight'>
            <div className='MyProfileRightTop'>
                <div className='MyProfileCover'>
                    <img className='MyProfileCoverPic' alt='CoverPic' src={user.coverPic?publicFolder+`CoverPics/${user.coverPic}`:publicFolder+'Usecase/cover.png'}></img>
                    <img className='MyProfileImage' alt='ProfileImage' src={user.profilePic?publicFolder+`ProfilePics/${user.profilePic}`:publicFolder+'Usecase/profile.png'}></img>
                </div>
                <div className='MyProfileInfo'>
                    <div className='Edit'>
                      <span className='MyProfileName'>{user.username}</span>
                      {user.username===sessionUser.username?
                      <Link to='/EditProfile'>
                        <Fab size='small' className='edit' color="secondary" aria-label="edit">
                          <EditIcon fontSize='small' />
                        </Fab>
                      </Link>:<></>}
                    </div>
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
