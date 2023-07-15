import jwtDecode from "jwt-decode";
import { Action, ExpencesReducer } from "../../types/Redux";

const initialState:ExpencesReducer = {
    fiexdExpences:[],
    occasionalExpences:[]

    
}


export const expencesReducers = (state=initialState,action:Action)=>{
    switch(action.type){
        case 'getFiexdExpences':
            return{
                ...state,
                fiexdExpences:action.payload
            }

        case 'getOccasionalExpences':
            return{
                ...state,
                occasionalExpences:action.payload
            }
   


 
        default: return state
    }
}