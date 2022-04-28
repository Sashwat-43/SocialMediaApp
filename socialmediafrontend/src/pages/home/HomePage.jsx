import React from 'react';
import CenterFeed from '../../components/CenterFeed/CenterFeed';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';
import TopNavBar from '../../components/TopNavBar/TopNavBar';
import './HomePage.css'

export default function HomePage() {
  return (
    <>
      <TopNavBar/>
      <div className='HomePage'>
        {/* <LeftSideBar/> */}
        <CenterFeed/>
        <RightSideBar/>
      </div>
    </>
    
  )
}
