import React, { useState } from 'react'
import './Post.css';
import {MoreVert} from '@mui/icons-material';
import {Users} from '../../CheckData';

export default function Post({post}) {

  const [likes,setLikes] = useState(post.likes);
  const [isLiked,setIsLiked] = useState(false);
  const [comments,setComments] = useState(post.comments);

  const user =Users.filter(checkUser =>{
    if(checkUser.id === post.userId)
      return checkUser;
  })

  const HandleLikes = () =>{
    if(isLiked){
      setLikes(likes-1);
      setIsLiked(false);
    }else{
      setLikes(likes+1);
      setIsLiked(true);
    }
    
  }

  return (
    <div className='Post'>
      <div className='PostWrap'>
        <div className='PostTop'>
          <div className='PostTopLeft'>
            <img src={user[0].profilePic} alt='Post1' className='PostTopLeftImage'></img>
            <span className='PostTopName'>{user[0].username}</span>
            <span className='PostTopDate'>{post.datePosted}</span>
          </div>
          <div className='PostTopRight'>
            <MoreVert className='Vertical'/>
          </div>
        </div>
        <div className='PostMiddle'>
          <span className='PostMiddleText'>{post?.bio}</span>
          <img src={post.image} alt='Post' className='PostMiddleImage'></img>
        </div>
        <div className='PostBottom'>
          <div className='PostBottomLeft'>
            <img src='/assets/Usecase/like.png' alt='like' className='PostBottomLike' onClick={HandleLikes}></img>
            <img src='/assets/Usecase/love.png' alt='love' className='PostBottomLove' onClick={HandleLikes}></img>
            <span className='PostLikes'>{likes} people reacted to it</span>
          </div>
          <div className='PostBottomRight'>
            <span className='PostComments'>{comments} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
