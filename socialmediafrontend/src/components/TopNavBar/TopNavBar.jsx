import React from 'react'
import './TopNavBar.css'
import {Person,Search} from '@mui/icons-material';


export default function TopNavBar() {
  return (
    <div className='TopNavBarContainer'>
        <div className='TopNavBarLeft'>
            <span className='icon'>Social</span>
        </div>
        <div className='TopNavBarCenter'>
            <div className= 'Search'>
                <Search/>
                <input className='SearchInput' placeholder='Search for post/video/friend'></input>
            </div>
        </div>
        <div className='TopNavBarRight'>
            <div className='TopNavBarLinks'>
                <span className='Link1'>HomePage</span>
                <span className='Link2'>All Posts</span>
            </div>
            <div className='TopNavBarIcons'>
                <div className='TopNavBarIcon'>
                    <Person />
                    <span className='TopNavBarIconCount'>2</span>
                </div>
            </div>
        </div>
    </div>
  )
}
