import React from 'react'
import './TopNavBar.css'
import {Person,Search,Notifications,Chat} from '@mui/icons-material';


export default function TopNavBar() {
  return (
    <div className='TopNavBarContainer'>
        <div className='TopNavBarLeft'>
            <span className='icon'>Socialgram</span>
        </div>
        <div className='TopNavBarCenter'>
            <div className= 'Search'>
                <Search className='SearchLogo'/>
                <input className='SearchInput' placeholder='Search for post/video/friend'></input>
            </div>
        </div>
        <div className='TopNavBarRight'>
            <div className='TopNavBarLinks'>
                <span className='Link1'>Home</span>
                <span className='Link2'>Posts</span>
            </div>
            <div className='TopNavBarIcons'>
                <div className='TopNavBarIcon'>
                    <Person />
                    <span className='TopNavBarIconCount'>2</span>
                </div>
                <div className='TopNavBarIcon'>
                    <Chat />
                    <span className='TopNavBarIconCount'>2</span>
                </div>
                <div className='TopNavBarIcon'>
                    <Notifications /> 
                    <span className='TopNavBarIconCount'>2</span>
                </div>
            </div>
            <img className='TopNavBarImage' src='/assets/profilePics/pic1.png' alt="image1"></img>
        </div>
    </div>
  )
}
