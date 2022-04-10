import React from 'react'
import './RightSideBar.css';

export default function RightSideBar() {
  return (
    <div className='RightSideBar'>
      <div className='RightSideBarWrap'>
        <div className='Birthday'>
          <img src='/assets/UseCase/birthday.png' alt='Hapy Birthday' className='BirthdayImage'></img>
          <span className='BirthdayText'><b>Komal's</b> birthday today</span>
          
        </div>
        <img src='/assets/UseCase/advertisement.png' alt='Advertisement' className='AdvertisementImage'></img>
        <span className='RigthSideBarTitle'>Online Friends</span>
        <ul className='OnlineFriends'>
          <li className='OnlineFriend'>
            <div className='OnlineFriendContainer'>
              <img className='OnlineFriendImage' src='/assets/ProfilePics/pic1.png' alt="Friend1"></img>
              <span className='Online'></span>
            </div>
            <div className='OnlineFriendName'>Sashwat</div>
          </li>
          <li className='OnlineFriend'>
            <div className='OnlineFriendContainer'>
              <img className='OnlineFriendImage' src='/assets/ProfilePics/pic1.png' alt="Friend1"></img>
              <span className='Online'></span>
            </div>
            <div className='OnlineFriendName'>Sashwat</div>
          </li>
          <li className='OnlineFriend'>
            <div className='OnlineFriendContainer'>
              <img className='OnlineFriendImage' src='/assets/ProfilePics/pic1.png' alt="Friend1"></img>
              <span className='Online'></span>
            </div>
            <div className='OnlineFriendName'>Sashwat</div>
          </li>
          <li className='OnlineFriend'>
            <div className='OnlineFriendContainer'>
              <img className='OnlineFriendImage' src='/assets/ProfilePics/pic1.png' alt="Friend1"></img>
              <span className='Online'></span>
            </div>
            <div className='OnlineFriendName'>Sashwat</div>
          </li>
        </ul>
      </div>
    </div>
  )
}
