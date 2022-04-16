import React from 'react'
import './LeftSideBar.css';
import {Feed,Chat,Work,Event,Favorite,Bookmarks} from '@mui/icons-material';
import {Users} from '../../CheckData';

export default function LeftSideBar() {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;

  return (
    <div className='LeftSideBar'>
        <div className='LeftSideBarWrap'>
            <ul className='LeftSideBarItemsList'>
                <li className='LeftSideBarItem'>
                    <Feed className='LeftSideBarFeed'/>
                    <span className='LeftSideBarText'>
                        Feed
                    </span>
                </li>
                <li className='LeftSideBarItem'>
                    <Chat className='Chat'/>
                    <span className='LeftSideBarText'>
                        Chat
                    </span>
                </li>
                <li className='LeftSideBarItem'>
                    <Work className='Work'/>
                    <span className='LeftSideBarText'>
                        Work
                    </span>
                </li>
                <li className='LeftSideBarItem'>
                    <Event className='Event'/>
                    <span className='LeftSideBarText'>
                        Event
                    </span>
                </li>
                <li className='LeftSideBarItem'>
                    <Favorite className='Favorites'/>
                    <span className='LeftSideBarText'>
                        Favorites
                    </span>
                </li>
                <li className='LeftSideBarItem'>
                    <Bookmarks className='Bookmarks'/>
                    <span className='LeftSideBarText'>
                        Bookmarks
                    </span>
                </li>
            </ul>
            <button className='LeftSideBarButton'>More  </button>
            <hr className='LeftSideBarLine'/>
            <ul className='LeftSideBarFriends'>
                {Users.map((user)=>{
                    return(
                        <li key={user.id} className='Friend'>
                            <img className='FriendImage' src={publicFolder+user.profilePic} alt="Friend's Pic"/>
                            <span className='FriendName'>{user.username}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  ) 
}
