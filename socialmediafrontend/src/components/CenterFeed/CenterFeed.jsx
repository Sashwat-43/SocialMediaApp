import React, { useContext, useEffect, useState } from 'react'
import './CenterFeed.css'
import SharePost from '../SharePost/SharePost.jsx';
import Post from '../Post/Post.jsx';
import { LineAxisOutlined } from '@mui/icons-material';
import {Posts} from '../../CheckData';
import axios from 'axios';
import { Context, Context_Recommend } from '../../ContextApi/Context';


export default function CenterFeed({username}) {

  const [posts,setPosts] = useState([]);
  const {user} = useContext(Context);

  const setting = useContext(Context_Recommend).isActive;
  const val = useContext(Context_Recommend).val;

  useEffect(()=>{

    const fetch = async () =>{
      // console.log(username,user.username);
      if(username){
        const response = await axios.get(`/posts/MyProfile/${username}`);
        // console.log(response.data);
        const tempPosts = response.data;
        // console.log(tempPosts);
        tempPosts.sort(function(a, b){return new Date(b.createdAt) - new Date(a.createdAt)});
        setPosts(tempPosts);
      }else{
        const response = await axios.get(`/posts/allposts/${user._id}`);
        // console.log(response.data);
        const tempPosts = response.data;
        // console.log(setting);
        // console.log(tempPosts);
        // for(let v of tempPosts){
        //   console.log(v);
        // }
        if(setting){
          const arr1=[],arr2=[];
          const map = new Map();
          for(let tempPost of tempPosts){
            if(map.has(tempPost.genre)){

              map.set(tempPost.genre,1+map.get(tempPost.genre));

            }else{

              map.set(tempPost.genre,1);

            }
          }

          for(let tempPost of tempPosts){
            if(map.get(tempPost.genre)>=val){
              arr1.push(tempPost);
            }
            else{
              arr2.push(tempPost);
            }
          }

          arr1.sort(function(a, b){return new Date(b.createdAt) - new Date(a.createdAt)});
          arr2.sort(function(a, b){return new Date(b.createdAt) - new Date(a.createdAt)});

          const arr = arr1.concat(arr2);
          tempPosts.length = 0;
          for(let tempPost of arr){
            tempPosts.push(tempPost);
          }

        }else{

          tempPosts.sort(function(a, b){return new Date(b.createdAt) - new Date(a.createdAt)});

        }
        console.log(tempPosts);
        
        setPosts(tempPosts);
      }
    }
    fetch();

  },[username]);

  return (
    <div className='CenterFeed'>
      <div className='CenterWrap'>
        {username &&username!=user.username?<></>:<SharePost/>}
        {posts.map((eachPost)=>{
          return <Post post={eachPost} key={eachPost._id}/>
        })}
      </div>
    </div>
  )
}
