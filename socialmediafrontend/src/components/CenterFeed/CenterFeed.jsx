import React from 'react'
import './CenterFeed.css'
import SharePost from '../SharePost/SharePost.jsx';
import Post from '../Post/Post.jsx';

export default function CenterFeed() {
  return (
    <div className='CenterFeed'>
      <div className='CenterWrap'>
        <SharePost/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
