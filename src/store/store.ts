import { combineReducers,createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { State } from "../types/Redux";


//reducers
import { usersReducers } from "./reducers/usersReducer";



const middleware = [thunk];
const initialState ={};


const rootReducer = combineReducers({
    usersReducers,

})



const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    composeWithDevTools(),
))



export default store; 