import React from 'react'
import './SharePost.css';
import {PermMedia,EmojiEmotions,Label,Room} from "@mui/icons-material"

export default function SharePost() {
  return (
    <div className='SharePost'>
      <div className='SharePostWrap'>
        <div className='SharePostTop'>
          <img src='/assets/ProfilePics/pic1.png' alt='Image1' className='ShareTopProfile'></img>
            <input className='SharePostInput' placeholder='What to write?'></input>
        </div>
        <hr className='SharePostLine'></hr>
        <div className='SharePostBottom'>
          <div className='SharePostOptions'>
            <div className='Option'>
              <PermMedia style={{ color: "red" }} className='SharePostIcon'/>
                <span className='ShareText'>Media</span>
            </div>
            <div className='Option'>
              <Room style={{ color: "green" }} className='SharePostIcon'/>
                <span className='ShareText'>Location</span>
            </div>
            <div className='Option'>
              <Label style={{ color: "blue" }} className='SharePostIcon'/>
                <span className='ShareText'>Tag</span>
            </div>
            <div className='Option'>
              <EmojiEmotions style={{ color: '#8B8000' }} className='SharePostIcon'/>
                <span className='ShareText'>Emotions</span>
            </div>
          </div>
        </div>
        <button className='SharePostButton'>
            Share
        </button>
      </div>
    </div>
  )
}
