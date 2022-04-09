import React from 'react'
import './LeftSideBar.css';
import {Feed,Chat,Work,Event,Favorite,Bookmarks} from '@mui/icons-material';


export default function LeftSideBar() {
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
                <li className='Friend'>
                    <img className='FriendImage' src='/assets/profilePics/pic2.png' alt="Friend's Pic"/>
                    <span className='FriendName'>Sashwat</span>
                </li>
                <li className='Friend'>
                    <img className='FriendImage' src='/assets/profilePics/pic2.png' alt="Friend's Pic"/>
                    <span className='FriendName'>Komal</span>
                </li>
                <li className='Friend'>
                    <img className='FriendImage' src='/assets/profilePics/pic1.png' alt="Friend's Pic"/>
                    <span className='FriendName'>Sahil</span>
                </li>
                <li className='Friend'>
                    <img className='FriendImage' src='/assets/profilePics/pic1.png' alt="Friend's Pic"/>
                    <span className='FriendName'>Sahil</span>
                </li>
                <li className='Friend'>
                    <img className='FriendImage' src='/assets/profilePics/pic1.png' alt="Friend's Pic"/>
                    <span className='FriendName'>Sahil</span>
                </li>
                <li className='Friend'>
                    <img className='FriendImage' src='/assets/profilePics/pic1.png' alt="Friend's Pic"/>
                    <span className='FriendName'>Sahil</span>
                </li>
                
            </ul>
        </div>
    </div>
  ) 
}
