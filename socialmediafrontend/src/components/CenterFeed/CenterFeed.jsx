import React, { useEffect, useState } from 'react'
import './CenterFeed.css'
import SharePost from '../SharePost/SharePost.jsx';
import Post from '../Post/Post.jsx';
import { LineAxisOutlined } from '@mui/icons-material';
import {Posts} from '../../CheckData';
import axios from 'axios';


export default function CenterFeed() {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    const fetch = async () =>{
      const response = await axios.get('posts/allposts/624d42fdda533f20e72b4b9e');
      console.log(response);
    }
    fetch();

  },[])
  return (
    <div className='CenterFeed'>
      <div className='CenterWrap'>
        <SharePost/>
        {/* {Posts.map((eachPost)=>{
          return <Post post={eachPost} key={eachPost.id}/>
        })} */}
      </div>
    </div>
  )
}
