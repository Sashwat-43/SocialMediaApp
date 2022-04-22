import axios from 'axios';

export const LoginCheck = async(userdata,dispatch) =>{
    dispatch({type:"LOGIN_START"});
    const response = await axios.post("auth/login",userdata);
    try{
        // console.log(userdata);
        // const response = await axios.post("auth/login",userdata);
        // console.log(response);
        if(response.status==200)
            dispatch({type:"LOGIN_SUCCESS",payload: response.data});
        else
            dispatch({type:"LOGIN_ERROR",payload:"No such user exists!"})
    }catch(err){
        dispatch({type:"LOGIN_ERROR",payload: err});
    }
}