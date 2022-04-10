import React from 'react'
import './CenterFeed.css'
import SharePost from '../SharePost/SharePost.jsx';
import Post from '../Post/Post.jsx';
import {Posts} from '../../CheckData';

export default function CenterFeed() {
  return (
    <div className='CenterFeed'>
      <div className='CenterWrap'>
        <SharePost/>
        {Posts.map((eachPost)=>{
          return <Post post={eachPost} key={eachPost.id}/>
        })}
      </div>
    </div>
  )
}
