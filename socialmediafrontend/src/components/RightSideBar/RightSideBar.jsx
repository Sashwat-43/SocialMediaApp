import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import './RightSideBar.css';
import {Users} from '../../CheckData';
import OnlineFriend from '../OnlineFriend/OnlineFriend';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { Context } from '../../ContextApi/Context';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function RightSideBar({User}) {

  const [followings,setFollowings] = useState([]);
  const user = useContext(Context).user;
  const dispatch = useContext(Context).dispatch;
  
  useEffect(()=>{

    const fetchuser = async () =>{
      if(!User||Object.keys(User).length==0)
      {
          setFollowings([]);
      }else{
        const response = await axios.get(`/users/followings/${User._id}`);
        setFollowings(response.data);
      }
    }
    fetchuser();

  },[User]);

  const HomePageRightSideBar = () =>{

    return(
      <>
        <a href='http://www.nitkkr.ac.in/' target='_blank'>
          <img src='/assets/UseCase/advertisement.png' alt='Advertisement' className='AdvertisementImage'></img>
        </a>
        <span className='RigthSideBarTitle'>Online Friends</span>
        <ul className='OnlineFriends'>
          {Users.map(tempUser => {
            return <OnlineFriend user={tempUser} key={tempUser.id} />
          })}
        </ul>
      </>
    )
  }

  const MyProfileRightSideBar = () =>{

    const navigate = useNavigate();
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;
    const [isFollowing,setIsFollowing] = useState();

    useEffect(() => {
      // console.log(user.followings,User);
      setIsFollowing(user.followings.includes(User?._id))
    },[user,User]);


    // console.log(User.username);
    // console.log(User);

    // console.log(User.username,user.username);

    const handleFollowUnfollow = async (e) =>{
      try{

        if(isFollowing){
          await axios.put(`/users/${User._id}/unfollow`,{userId:user._id});
          dispatch({type:"UNFOLLOW",payload:User._id})
        }else{
          await axios.put(`/users/${User._id}/follow`,{userId:user._id});
          dispatch({type:"FOLLOW",payload:User._id})
        }


      }catch(err){
        console.log(err);
      }
      navigate('/');
    }

    const handleLogout = () =>{
      window.location.reload(false);
    }


    return (
        <>
          {user.username===User.username? <button className='Logout' onClick={handleLogout}>SignOut</button> : <></>}
          {user.username!=User.username ? <button className={isFollowing?"UnfollowingUser":"FollowingUser"} onClick={handleFollowUnfollow}> {isFollowing ? <> <span className='message'>Unfollow</span><PersonRemoveIcon/> </> : <> <span className='message'>Follow</span><PersonAddIcon/> </>} </button> : <></> }
          <h2 className='MyProfileRightSideBarTitle'>Profile Info</h2>
          <div className='MyProfileRightSideBarInfo'>
            <span className='MyProfileRightSideBarkey'>City: </span>
            <span className='MyProfileRightSideBarValue'>{User.city?User.city:'N/A'}</span>
          </div>
          <div className='MyProfileRightSideBarInfo'>
            <span className='MyProfileRightSideBarkey'>Relationship: </span>
            <span className='MyProfileRightSideBarValue'>{User.relationship?(User.relationship==1?'Single':'In a relationship'):'N/A'}</span>
          </div>
          <h2 className='MyProfileRightSideBarFollowings'>Followings</h2>
          <div className='followings'>
            {followings.map(following => {
              return (
                <div className='following' key={following._id}>
                  <Link to={`/MyProfile/${following.username}`} >
                    <img src={following.profilePic?publicFolder+`/ProfilePics/${following.profilePic}`:publicFolder+'/UseCase/profile.png'} alt='' className='followingImage'></img>
                  </Link>  
                  <span className='followingName'>{following.username}</span>
                </div>)
            })}
          </div>
        </>
      )

  }
  return (
    <div className='RightSideBar'>
      <div className='RightSideBarWrap'>
        {User?<MyProfileRightSideBar/>:<HomePageRightSideBar/>}
      </div>
    </div>
  )
}
