import React from 'react'
import './RightSideBar.css';
import {Users} from '../../CheckData';
import OnlineFriend from '../OnlineFriend/OnlineFriend';

export default function RightSideBar({User}) {

  // console.log(User);
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
          {Users.map(tempUser => {
            return <OnlineFriend user={tempUser} key={tempUser.id} />
          })}
        </ul>
      </>
    )
  }

  const MyProfileRightSideBar = () =>{

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;
    // console.log(User.username);
    // console.log(User);
    if(!User||Object.keys(User).length==0)
      return <></>;
    return (
        <>
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
            {/* {User.followings.map(following => {
              const tempUser = Users.findById(following._id);
              console.log(tempUser);
              return (
                <div className='following'>
                  <img src={publicFolder+tempUser.profilePic} alt='' className='followingImage'></img>
                  <span className='followingName'>{tempUser.username}</span>
                </div>)
            })} */}
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
