import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import {useRef} from 'react';
import {Link , useNavigate} from 'react-router-dom'
import {useParams} from 'react-router';
import './EditProfile.css';
import { PermMedia, Cancel } from '@mui/icons-material';
import { Context } from '../../ContextApi/Context';
import './EditProfile.css';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function EditProfile() {

    
    const options = [
      'Single','In a relationship'
    ];
    const username = useRef(null);
    const bio = useRef(null);
    const city = useRef(null);
    const [relationship,setRelationship] = useState(null);
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
        console.log(relationship);
        const tempUsername = username.current.value;
        const tempBio = bio.current.value;
        const tempCity = city.current.value;
        // const tempRelationship = relationship.current.value;
        // console.log(tempRelationship);
        try{
            const tempUser = {
                userId: user._id,
                username: tempUsername?tempUsername:user.username,
                bio: tempBio?tempBio:user.bio,
                profilePic: user.profilePic,
                coverPic: user.coverPic,
                city: tempCity?tempCity:user.city,
                relationship: relationship?relationship==='Single'?1:2:user.relationship
            };
            const tempUser2 = {
                _id: user._id,
                username: tempUsername?tempUsername:user.username,
                bio: tempBio?tempBio:user.bio,
                profilePic: user.profilePic,
                coverPic: user.coverPic,
                city: tempCity?tempCity:user.city,
                relationship: relationship?relationship==='Single'?1:2:user.relationship
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
                {/* <FormControl fullWidth>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Relationship
                    </InputLabel>
                    <NativeSelect
                        defaultValue={1}
                        inputProps={{
                        name: 'relationship',
                        id: 'uncontrolled-native',
                        }}
                    >
                        <option value={1} ref={relationship}>Single</option>
                        <option value={2} ref={relationship}>In a relationship</option>
                    </NativeSelect>
                </FormControl> */}

                <Dropdown options={options} value={relationship} onChange={ (e) => setRelationship(e.target.value)} placeholder="Select your relationship status" />;
                {/* <input type='number' placeholder='Relationship( Type 1 for single, 2 for in a relationship )' ref={relationship} className='EditFormRelationship'></input> */}
                <label className='EditFormText' htmlFor='file' >
                    <PermMedia style={{ color: "green" }} className='EditFormPostIcon'/>
                    <span className='EditFormProfileText'>Change Profile Pic</span>
                    <input style={{display:"none"}} type="file" accept=".png,.jpeg,.jpg" id="file" onChange={handleUploadProfilePic}/>
                </label>
                {file ? 
                    <div className='UploadProfileImage'>
                        <img src={URL.createObjectURL(file)} className='UploadProfile'></img>
                        <Cancel className="UploadProfileCancel" onClick={()=>setFile(null)}/>
                    </div>
                    : 
                <></>}
                <label className='EditFormText' htmlFor='file2' >
                    <PermMedia style={{ color: "green" }} className='EditFormPostIcon'/>
                    <span className='EditFormProfileText'>Change Cover Pic</span>
                    <input style={{display:"none"}} type="file" accept=".png,.jpeg,.jpg" id="file2" onChange={handleUploadCoverPic}/>
                </label>
                {file2 ? 
                    <div className='UploadCoverImage'>
                        <img src={URL.createObjectURL(file2)} className='UploadCover'></img>
                        <Cancel className="UploadCoverCancel" onClick={()=>setFile2(null)}/>
                    </div>
                    : 
                <></>}
                <button className='EditFormSubmit'>Edit Profile!</button>
            </form>
        </div>
    </div>
  )
}