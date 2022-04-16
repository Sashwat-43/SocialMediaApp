import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './Post.css';
import {MoreVert} from '@mui/icons-material';
// import {Users} from '../../CheckData';
import TimeAgo from 'timeago-react';

export default function Post({post}) {

  const [likes,setLikes] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [comments,setComments] = useState(post.comments);
  const [user,setUser] = useState({});
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;

  useEffect(()=>{

    const fetchuser = async () =>{
      const response = await axios.get(`users/${post.userId}`);
      setUser(response.data);
    }
    fetchuser();

  },[post.userId]);

  // const user =Users.filter(checkUser =>{
  //   if(checkUser.id === post.userId)
  //     return checkUser;
  // })

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
            <img src={user.profilePic?user.profilePic:publicFolder+'Usecase/profile.png'}  className='PostTopLeftImage'></img>
            <span className='PostTopName'>{user.username}</span>
            <span className='PostTopDate'>
              <TimeAgo datetime = {post.createdAt}/>
            </span>
          </div>
          <div className='PostTopRight'>
            <MoreVert className='Vertical'/>
          </div>
        </div>
        <div className='PostMiddle'>
          <span className='PostMiddleText'>{post?.bio}</span>
          <img src={publicFolder+post.image} alt='' className='PostMiddleImage'></img>
        </div>
        <div className='PostBottom'>
          <div className='PostBottomLeft'>
            <img src={publicFolder+'Usecase/like.png'} alt='like' className='PostBottomLike' onClick={HandleLikes}></img>
            <img src={publicFolder+'Usecase/love.png'} alt='love' className='PostBottomLove' onClick={HandleLikes}></img>
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
