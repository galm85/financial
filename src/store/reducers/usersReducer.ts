import jwtDecode from "jwt-decode";

const initialState = {
   
    user:localStorage.getItem('finance')?jwtDecode(String(localStorage.getItem('finance'))): null,
    
}


export const usersReducers = (state=initialState,action:any)=>{
    switch(action.type){
        case 'sign-in':
            return{
                ...state,
                user:action.payload
            }
   


 
        default: return state
    }
}