import React, { useContext, useState , useRef } from 'react'
import axios from 'axios';
import './SharePost.css';
import {PermMedia,EmojiEmotions,Label,Room, LineAxisOutlined, Cancel} from "@mui/icons-material"
import { Context } from '../../ContextApi/Context';
import { useNavigate } from 'react-router-dom';

export default function SharePost() {

  const {user} = useContext(Context);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;
  const bio = useRef();
  const [file,setFile] = useState(null);
  const navigate = useNavigate();

  const handleMedia = (e) => {
    setFile(e.target.files[0])
  }

  const handleShareSubmit = async (e) =>{
    e.preventDefault();
    if(!user){
      navigate('/');
    }
    const tempPost = {
      userId: user._id,
      bio: bio.current.value
    };

    // console.log(file);

    if(file){
      let data = new FormData();
      const filename = Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      tempPost.image = filename;
      // console.log(data.get('name'),tempPost);
      try{
        const res = await axios.post("/uploadMedia",data);
      }catch(err){
        console.log(err);
      }
    }
    try{

      const response = await axios.post('/posts',tempPost);
      // console.log(response);
    }catch(err){
      console.log(err);
    }
    navigate(`/MyProfile/${user.username}`);

  }

  return (
    <div className='SharePost'>
      <div className='SharePostWrap'>
        <div className='SharePostTop'>
          <img src={user.profilePic ? publicFolder+`/ProfilePics/${user.profilePic}`: publicFolder+'/UseCase/profile.png' } alt='Image1' className='ShareTopProfile'></img>
            <input className='SharePostInput' ref={bio} placeholder='What to write?'></input>
        </div>
        <hr className='SharePostLine'></hr>
        {file ? 
          <div className='SharePostImage'>
            <img src={URL.createObjectURL(file)} className='SharePost'></img>
            <Cancel className="ShareCancel" onClick={()=>setFile(null)}/>
          </div>
         : 
        <></>}
        <form className='SharePostBottom' onSubmit={ handleShareSubmit}>
          <div className='Container'>
            <label htmlFor='file' className='Option'>
                <PermMedia style={{ color: "red" }} className='SharePostIcon'/>
                <span className='ShareText'>Upload Image</span>
                <input style={{display:"none"}} type="file" accept=".png,.jpeg,.jpg" id="file" onChange={handleMedia}/>
              </label> 
            <button className='SharePostButton' type='submit'>
              Share
            </button>
            </div>
        </form>
      </div>
    </div>
  )
}
