import React from 'react'
import './LeftSideBar.css';
import {Feed,Chat,Work,Event,Favorite,Bookmarks} from '@mui/icons-material';


export default function LeftSideBar() {
  return (
    <div className='LeftSideBar'>
        <div className='Wrap'>
            <ul className='ItemsList'>
                <li className='Item'>
                    <Feed className='Feed'/>
                    <span className='Text'>
                        Feed
                    </span>
                </li>
                <li className='Item'>
                    <Chat className='Chat'/>
                    <span className='Text'>
                        Chat
                    </span>
                </li>
                <li className='Item'>
                    <Work className='Work'/>
                    <span className='Text'>
                        Work
                    </span>
                </li>
                <li className='Item'>
                    <Event className='Event'/>
                    <span className='Text'>
                        Event
                    </span>
                </li>
                <li className='Item'>
                    <Favorite className='Favorites'/>
                    <span className='Text'>
                        Favorites
                    </span>
                </li>
                <li className='Item'>
                    <Bookmarks className='Bookmarks'/>
                    <span className='Text'>
                        Bookmarks
                    </span>
                </li>
            </ul>
            <button className='Button'>More  </button>
            <hr className='Line'/>
            <ul className='Friends'>
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
