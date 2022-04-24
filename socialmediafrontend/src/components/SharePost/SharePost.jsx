import React, { useContext, useState , useRef } from 'react'
import axios from 'axios';
import './SharePost.css';
import {PermMedia,EmojiEmotions,Label,Room, LineAxisOutlined} from "@mui/icons-material"
import { Context } from '../../ContextApi/Context';

export default function SharePost() {

  const {user} = useContext(Context);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;
  const bio = useRef(null);
  const [file,setFile] = useState(null);

  const handleMedia = (e) => {
    setFile(e.target.files[0])
  }

  const handleShareSubmit = async (e) =>{
    e.preventDefault();
    const tempPost = {
      userId: user._id,
      bio: bio.current.value
    }
    try{

      const response = await axios.post('/posts',tempPost);
      console.log(response);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className='SharePost'>
      <div className='SharePostWrap'>
        <div className='SharePostTop'>
          <img src={user.profilePic ? publicFolder+`/ProfilePics/${user.profilePic}`: publicFolder+'/UseCase/profile.png' } alt='Image1' className='ShareTopProfile'></img>
            <input className='SharePostInput' placeholder='What to write?'></input>
        </div>
        <hr className='SharePostLine'></hr>
        <form className='SharePostBottom' onSubmit={ handleShareSubmit}>
          <div className='Container'>
            <div className='SharePostOptions'>
              <label htmlFor='file' className='Option'>
                <PermMedia style={{ color: "red" }} className='SharePostIcon'/>
                  <span className='ShareText'>Media</span>
                  <input style={{display:"none"}}type="file" accept=".png .jpeg .jpg" id="file" onChange={handleMedia}/>
              </label>
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
            <button className='SharePostButton' type='submit'>
              Share
            </button>
            </div>
        </form>
      </div>
    </div>
  )
}
