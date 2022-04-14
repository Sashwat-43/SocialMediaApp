import React from 'react'
import './OnlineFriend.css'

export default function OnlineFriend({user}) {

  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;
  return (
    <li className='OnlineFriend'>
        <div className='OnlineFriendContainer'>
          <img className='OnlineFriendImage' src={publicFolder+user.profilePic} alt="Friend1"></img>
          <span className='Online'></span>
        </div>
        <div className='OnlineFriendName'>{user.username}</div>
    </li>
  )
}
