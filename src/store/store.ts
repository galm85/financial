import { combineReducers,createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


//reducers
import { usersReducers } from "./reducers/usersReducer";
import { expencesReducers } from "./reducers/expencesReducer";



const middleware = [thunk];
const initialState ={};


const rootReducer = combineReducers({
    usersReducers,
    expencesReducers,

})



const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    composeWithDevTools(),
))



export default store; 