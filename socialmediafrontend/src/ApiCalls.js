import axios from 'axios';


export const LoginCheck = async(userdata,dispatch) =>{
        
    dispatch({type:"LOGIN_START"});
    try{
        // console.log(userdata);
        const response = await axios.post("/auth/login",userdata);
        // console.log(response);
        dispatch({type:"LOGIN_SUCCESS",payload: response.data});
    }catch(err){
        alert(err.response.data);
        dispatch({type:"LOGIN_ERROR",payload: err});
    }
}