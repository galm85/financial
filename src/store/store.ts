import { combineReducers,createStore,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


//reducers
import { usersReducers } from "./reducers/usersReducer";



const middleware = [thunk];
const initialState={};


const rootReducer = combineReducers({
    users:usersReducers,

})



const store = createStore(rootReducer,initialState,compose(
    applyMiddleware(...middleware),
    composeWithDevTools(),
))



export default store; 