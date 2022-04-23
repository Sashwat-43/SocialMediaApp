import React, { useContext } from 'react'
import './TopNavBar.css'
import {Person,Search,Notifications,Chat} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import {Context} from '../../ContextApi/Context';
import Register from '../../pages/Auth/Register';

export default function TopNavBar() {

    const {user} = useContext(Context);
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER_IMAGES;

  return (
    user?
    <div className='TopNavBarContainer'>
        <div className='TopNavBarLeft'>
            <Link to='/' className='IconLink'>
                <span className='icon'>Socialgram</span>
            </Link>
        </div>
        <div className='TopNavBarCenter'>
            <div className= 'TopNavBarSearch'>
                <Search className='SearchLogo'/>
                <input className='SearchInput' placeholder='Search for post/video/friend'></input>
            </div>
        </div>
        <div className='TopNavBarRight'>
            <div className='TopNavBarLinks'>
                <span className='Link1'>Home</span>
                <span className='Link2'>Posts</span>
            </div>
            <div className='TopNavBarIcons'>
            </div>
            <Link to={`/MyProfile/${user.username}`}>
                <img className='TopNavBarImage' src={user.profilePic ? publicFolder+`ProfilePics/${user.profilePic}` : publicFolder+'/UseCase/profile.png'} alt="image1"></img>
            </Link>
        </div>
    </div>
    :
    <Register />
  )
}
