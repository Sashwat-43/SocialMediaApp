import React from 'react'
import './RightSideBar.css';
import {Users} from '../../CheckData';
import OnlineFriend from '../OnlineFriend/OnlineFriend';

export default function RightSideBar() {
  return (
    <div className='RightSideBar'>
      <div className='RightSideBarWrap'>
        <div className='Birthday'>
          <img src='/assets/UseCase/birthday.png' alt='Hapy Birthday' className='BirthdayImage'></img>
          <span className='BirthdayText'><b>Komal's</b> birthday today</span>
          
        </div>
        <a href='http://www.nitkkr.ac.in/' target='_blank'>
          <img src='/assets/UseCase/advertisement.png' alt='Advertisement' className='AdvertisementImage'></img>
        </a>
        <span className='RigthSideBarTitle'>Online Friends</span>
        <ul className='OnlineFriends'>
          {Users.map(user => {
            return <OnlineFriend user={user} key={user.id} />
          })}
        </ul>
      </div>
    </div>
  )
}
