import React from 'react'
import './OnlineFriend.css'

export default function OnlineFriend({user}) {
  return (
    <li className='OnlineFriend'>
        <div className='OnlineFriendContainer'>
          <img className='OnlineFriendImage' src={user.profilePic} alt="Friend1"></img>
          <span className='Online'></span>
        </div>
        <div className='OnlineFriendName'>{user.username}</div>
    </li>
  )
}
