import {createContext, useReducer} from 'react';
import Reducer from './Reducer';

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
};

const INITIAL_STATE_RECOMMEND = {
    isActive: false,
    val: null,
};

export const Context = createContext(INITIAL_STATE);

export const Context_Recommend = createContext(INITIAL_STATE_RECOMMEND);

export const ContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,INITIAL_STATE);
    return (
        <Context.Provider value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch}}>
            {children}
        </Context.Provider>
        
    );
};

export const ContextRecommendProvider = ({children})=>{
    const [stateRecommend,dispatch] = useReducer(Reducer,INITIAL_STATE_RECOMMEND);
    return (
        <Context_Recommend.Provider value={{isActive:stateRecommend.isActive,val:stateRecommend.val,dispatch}}>
            {children}
        </Context_Recommend.Provider>
        
    );
};