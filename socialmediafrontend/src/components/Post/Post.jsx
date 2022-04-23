import React, { useState , useEffect, useContext } from 'react'
import axios from 'axios'
import './Post.css';
import {Link} from 'react-router-dom';
import {MoreVert} from '@mui/icons-material';
// import {Users} from '../../CheckData';
import TimeAgo from 'timeago-react';
import { Context } from '../../ContextApi/Context';


export default function Post({post}) {

  const [likes,setLikes] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [user,setUser] = useState({});
  const CurrentUser = useContext(Context).user;
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;


  useEffect(() =>{
    setIsLiked(post.likes.includes(CurrentUser._id));
  },[post.likes,CurrentUser._id]);

  useEffect(()=>{

    const fetchuser = async () =>{
      const response = await axios.get(`/users?userId=${post.userId}`);
      setUser(response.data);
    }
    fetchuser();

  },[post.userId]);


  const HandleLikes = () =>{
    try{
      axios.put(`/posts/${post._id}/likeunlike`,{userId:CurrentUser._id});

    }catch(err){
      console.log(err);
    }
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
          <Link to={`/MyProfile/${user.username}`}>
            <img src={user.profilePic?publicFolder+`ProfilePics/${user.profilePic}`:publicFolder+'Usecase/profile.png'}  className='PostTopLeftImage'></img>
          </Link> 
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
          {/* <div className='PostBottomRight'>
            <span className='PostComments'>{comments} comments</span>
          </div> */}
        </div>
      </div>
    </div>
  )
}
