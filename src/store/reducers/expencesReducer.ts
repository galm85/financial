import jwtDecode from "jwt-decode";
import { Action, ExpencesReducer } from "../../types/Redux";

const initialState:ExpencesReducer = {
    fixedExpences:[],
    occasionalExpences:[],
    outcome:0
    
}


export const expencesReducers = (state=initialState,action:Action)=>{
    switch(action.type){
        case 'getFiexdExpences':
            return{
                ...state,
                fixedExpences:action.payload
            }

        case 'getOccasionalExpences':
            return{
                ...state,
                occasionalExpences:action.payload
            }
        
        case 'getOutcome':
            return{
                ...state,
                outcome:action.payload
            }
   
        


 
        default: return state
    }
}