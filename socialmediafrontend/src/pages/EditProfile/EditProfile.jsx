import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {useRef} from 'react';
import {Link , useNavigate} from 'react-router-dom'
import {useParams} from 'react-router';
import './EditProfile.css';
import { PermMedia } from '@mui/icons-material';
import { Context } from '../../ContextApi/Context';
import './EditProfile.css';

export default function EditProfile() {

    const username = useRef(null);
    const bio = useRef(null);
    const city = useRef(null);
    const relationship = useRef(null);
    const navigate = useNavigate();
    const [file,setFile] = useState(null);
    const [file2,setFile2] = useState(null);
    const user = useContext(Context).user;
    const dispatch = useContext(Context).dispatch;

    const handleUploadProfilePic = (e) => {
        setFile(e.target.files[0])
    }

    const handleUploadCoverPic = (e) => {
        setFile2(e.target.files[0]);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();
        const tempUsername = username.current.value;
        const tempBio = bio.current.value;
        const tempCity = city.current.value;
        const tempRelationship = relationship.current.value;
        try{
            const tempUser = {
                userId: user._id,
                username: tempUsername?tempUsername:user.username,
                bio: tempBio?tempBio:user.bio,
                profilePic: user.profilePic,
                coverPic: user.coverPic,
                city: tempCity?tempCity:user.city,
                relationship: tempRelationship?tempRelationship:user.relationship
            };
            const tempUser2 = {
                _id: user._id,
                username: tempUsername?tempUsername:user.username,
                bio: tempBio?tempBio:user.bio,
                profilePic: user.profilePic,
                coverPic: user.coverPic,
                city: tempCity?tempCity:user.city,
                relationship: tempRelationship?tempRelationship:user.relationship
            };
            if(file){

                let data = new FormData();
                const filename = Date.now()+file.name;
                data.append("name",filename);
                data.append("file",file);
                tempUser.profilePic = filename;
                tempUser2.profilePic = filename;
                // console.log(tempUser);
                try{
                    const res = await axios.post("/uploadProfilePic",data);
                }catch(err){
                console.log(err);
                }
            }

            if(file2){

                let data = new FormData();
                const filename = Date.now()+file2.name;
                data.append("name",filename);
                data.append("file",file2);
                tempUser.coverPic = filename;
                tempUser2.coverPic = filename;
                // console.log(tempUser);
                try{
                    const res = await axios.post("/uploadCoverPic",data);
                }catch(err){
                console.log(err);
                }
            }
            console.log(tempUser);
            const response = await axios.put(`/users/${user._id}`,tempUser);
            window.location.reload(false);
        }catch(err){
            alert(err.response.data);
        }
    }

  return (
    <div className='EditForm'>
        <div className='EditFormWrap'>
            <form className='EditFormContainer' onSubmit={handleSubmit }>
                <input type='text' placeholder='Username' ref={username} className='EditFormUsername' ></input>
                <input type='text' placeholder='Bio' ref={bio} className='EditFormBio'></input>
                <input type='text' placeholder='City' ref={city} className='EditFormCity' ></input>
                <label for="cars">Choose a car:</label>
                <input type='number' placeholder='Relationship( Type 1 for single, 2 for in a relationship )' ref={relationship} className='EditFormRelationship'></input>
                <label className='EditFormText' htmlFor='file' >
                    <PermMedia style={{ color: "green" }} className='EditFormPostIcon'/>
                    <span className='EditFormProfileText'>Change Profile Pic</span>
                    <input style={{display:"none"}} type="file" accept=".png,.jpeg,.jpg" id="file" onChange={handleUploadProfilePic}/>
                </label>
                <label className='EditFormText' htmlFor='file2' >
                    <PermMedia style={{ color: "green" }} className='EditFormPostIcon'/>
                    <span className='EditFormProfileText'>Change Cover Pic</span>
                    <input style={{display:"none"}} type="file" accept=".png,.jpeg,.jpg" id="file2" onChange={handleUploadCoverPic}/>
                </label>
                <button className='EditFormSubmit'>Edit Profile!</button>
            </form>
        </div>
    </div>
  )
}