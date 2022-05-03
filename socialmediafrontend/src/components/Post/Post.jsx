import React, { useState , useEffect, useContext } from 'react'
import axios from 'axios'
import './Post.css';
import {Link} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {MoreVert} from '@mui/icons-material';
import TimeAgo from 'timeago-react';
import { Context } from '../../ContextApi/Context';

const options = [
  'None',
  'Edit',
  'Remove'
];

const ITEM_HEIGHT = 48;


export default function Post({post}) {

  const [likes,setLikes] = useState(post.likes.length);
  const [isLiked,setIsLiked] = useState(false);
  const [user,setUser] = useState({});
  const CurrentUser = useContext(Context).user;
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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


  // post.likes -> ["" , ""]

  const handleRemovePost = () =>{

  }

  const HandleLikes = () =>{

    if(isLiked){
      try{
        axios.put(`/posts/${post._id}/unlike`,{userId:CurrentUser._id});
  
      }catch(err){
        console.log(err);
      }
      setLikes(likes-1);
      setIsLiked(false);
    }else{
      try{
        axios.put(`/posts/${post._id}/like`,{userId:CurrentUser._id});
  
      }catch(err){
        console.log(err);
      }
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
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVert />
          </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        > 
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'None'} onClick={handleClose}>
              {option==='Edit'?<Link to={`/EditPost/${post._id}`}>{option}</Link>:<></>}
              {option==='Remove'?<button onClick={handleRemovePost}>{option}</button>:<></>}
              {option==='None'?<span>{option}</span>:<></>}
            </MenuItem>
          ))}
        </Menu>
          {/* <MoreVert className='Vertical'/> */}
          </div>
        </div>
        <div className='PostMiddle'>
          <span className='PostMiddleText'>{post?.bio}</span>
          <img src={post.image? publicFolder+`Posts/${post.image}`:publicFolder+'Usecase/post.png'} className='PostMiddleImage'></img>
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
