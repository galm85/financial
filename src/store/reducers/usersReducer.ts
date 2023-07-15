import jwtDecode from "jwt-decode";
import { Action, UserReducer } from "../../types/Redux";

const initialState:UserReducer = {
   
    user:localStorage.getItem('finance') ? jwtDecode(String(localStorage.getItem('finance'))) : null,
    
}


export const usersReducers = (state=initialState,action:Action)=>{
    switch(action.type){
        case 'sign-in':
            return{
                ...state,
                user:action.payload
            }
   


 
        default: return state
    }
}