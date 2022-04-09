import React from 'react'
import './Post.css';
import {MoreVert} from '@mui/icons-material';

export default function Post() {
  return (
    <div className='Post'>
      <div className='PostWrap'>
        <div className='PostTop'>
          <div className='PostTopLeft'>
            <img src='/assets/ProfilePics/pic2.png' alt='Post1' className='PostTopLeftImage'></img>
            <span className='PostTopName'>Sashwat Mishra</span>
            <span className='PostTopDate'>5 mins ago</span>
          </div>
          <div className='PostTopRight'>
            <MoreVert className='Vertical'/>
          </div>
        </div>
        <div className='PostMiddle'>
          <span className='PostMiddleText'>Sashwat's post</span>
          <img src='/assets/Posts/pic2.png' alt='Post' className='PostMiddleImage'></img>
        </div>
        <div className='PostBottom'>
          <div className='PostBottomLeft'>
            <img src='/assets/Usecase/like.png' alt='like' className='PostBottomLike'></img>
            <img src='/assets/Usecase/love.png' alt='love' className='PostBottomLove'></img>
            <span className='PostLikes'>20 people reacted</span>
          </div>
          <div className='PostBottomRight'>
            <span className='PostComments'>6 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
