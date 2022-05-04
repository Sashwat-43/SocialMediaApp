export const LoginStart = (userdata)=>({
    type:"LOGIN_START",
});

export const LoginSuccess = (user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
});

export const LoginError = (err)=>({
    type:"LOGIN_ERROR",
    payload:err
});

export const Follow =  (userId)=>({
    type:"FOLLOW",
    payload:userId
});

export const Unfollow = (userId)=>({
    type:"UNFOLLOW",
    payload:userId
})

export const ENABLE = (value)=>({
    type:"ENABLE",
    payload:value
})

export const DISABLE = ()=>({
    type:"DISABLE",
})