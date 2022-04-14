import React from 'react'
import './RightSideBar.css';
import {Users} from '../../CheckData';
import OnlineFriend from '../OnlineFriend/OnlineFriend';

export default function RightSideBar({MyProfile}) {

  const HomePageRightSideBar = () =>{
    return(
      <>
        <div className='Birthday'>
          <img src='/assets/UseCase/birthday.png' alt='Hapy Birthday' className='BirthdayImage'></img>
          <span className='BirthdayText'><b>Komal's</b> birthday today</span>
          
        </div>
        <a href='http://www.nitkkr.ac.in/' target='_blank'>
          <img src='/assets/UseCase/advertisement.png' alt='Advertisement' className='AdvertisementImage'></img>
        </a>
        <span className='RigthSideBarTitle'>Online Friends</span>
        <ul className='OnlineFriends'>
          {Users.map(user => {
            return <OnlineFriend user={user} key={user.id} />
          })}
        </ul>
      </>
    )
  }

  const MyProfileRightSideBar = () =>{

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;

    return (
      <>
        <h2 className='MyProfileRightSideBarTitle'>Profile Info</h2>
        <div className='MyProfileRightSideBarInfo'>
          <span className='MyProfileRightSideBarkey'>City: </span>
          <span className='MyProfileRightSideBarValue'>Lucknow</span>
        </div>
        <div className='MyProfileRightSideBarInfo'>
          <span className='MyProfileRightSideBarkey'>Relationship: </span>
          <span className='MyProfileRightSideBarValue'>Single</span>
        </div>
        <h2 className='MyProfileRightSideBarFollowings'>Followings</h2>
        <div className='followings'>
          
          {Users.map(user => {
            return (
              <div className='following'>
                <img src={publicFolder+user.profilePic} alt='' className='followingImage'></img>
                <span className='followingName'>{user.username}</span>
              </div>)
          })}
        </div>
      </>
    )

  }
  return (
    <div className='RightSideBar'>
      <div className='RightSideBarWrap'>
        {MyProfile?<MyProfileRightSideBar/>:<HomePageRightSideBar/>}
      </div>
    </div>
  )
}
