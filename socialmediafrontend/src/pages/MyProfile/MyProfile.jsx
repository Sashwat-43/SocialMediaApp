import React from 'react'
import CenterFeed from '../../components/CenterFeed/CenterFeed';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import './MyProfile.css';

export default function MyProfile() {
  return (
    <>
      <TopNavBar/>
      <div className='MyProfile'>
        <LeftSideBar/>
        <div className='MyProfileRight'>
            <div className='MyProfileRightTop'>
                <div className='MyProfileCover'>
                    <img className='MyProfileCoverPic' alt='CoverPic' src='/assets/Posts/pic1.png'></img>
                    <img className='MyProfileImage' alt='ProfileImage' src='/assets/ProfilePics/pic1.png'></img>
                </div>
                <div className='MyProfileInfo'>
                    <h2 className='MyProfileName'>Sashwat Mishra</h2>
                    <span className='MyProfileBio'>Hey friends</span>
                </div>
            </div>
            <div className='MyProfileRightBottom'>
                <CenterFeed />
                <RightSideBar MyProfile/>
            </div>
        </div>
      </div>
    </>
  )
}
