const Reducer = (state,action) =>{

    switch(action.type){

        case "LOGIN_START":
            return {
                user: null,
                isFetching:true,
                error:false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_ERROR":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            };
        case "FOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    followings:[...state.user.followings,action.payload]
                }
            };
        case "UNFOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    followings: state.user.followings.filter(following => following !== action.payload)
                }
            };
        case "EDIT":
            return {
                ...state,
                user: action.payload
            };
        case "ENABLE":
            return {
                ...state,
                isActive:true,
                val:action.payload
            };
        case "DISABLE":
            return {
                ...state,
                isActive:false,
                val:null
            };
        default:
            return state;
        
    }
};

export default Reducer;
