import React from 'react'
import './CenterFeed.css'
import SharePost from '../SharePost/SharePost.jsx';

export default function CenterFeed() {
  return (
    <div className='CenterFeed'>
      <div className='CenterWrap'>
        <SharePost/>
      </div>
    </div>
  )
}
