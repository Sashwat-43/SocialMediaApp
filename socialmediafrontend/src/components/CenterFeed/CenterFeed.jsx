import React, { useContext, useEffect, useState } from 'react'
import './CenterFeed.css'
import SharePost from '../SharePost/SharePost.jsx';
import Post from '../Post/Post.jsx';
import { LineAxisOutlined } from '@mui/icons-material';
import {Posts} from '../../CheckData';
import axios from 'axios';
import { Context } from '../../ContextApi/Context';


export default function CenterFeed({username}) {

  const [posts,setPosts] = useState([]);
  const {user} = useContext(Context);

  useEffect(()=>{

    const fetch = async () =>{
      // console.log(username);
      if(username){
        const response = await axios.get(`/posts/MyProfile/${username}`);
        // console.log(response.data);
        setPosts(response.data);
      }else{
        const response = await axios.get(`/posts/allposts/${user._id}`);
        // console.log(response.data);
        setPosts(response.data);
      }
    }
    fetch();

  },[username,user._id]);

  return (
    <div className='CenterFeed'>
      <div className='CenterWrap'>
        <SharePost/>
        {posts.map((eachPost)=>{
          return <Post post={eachPost} key={eachPost._id}/>
        })}
      </div>
    </div>
  )
}
