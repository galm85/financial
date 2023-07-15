import { Navbar} from "./components";
import { Routes,Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./types/Redux";
import { useEffect, useState } from "react";
import { getFiexdExpences, getOccasionalExpences } from "./store/actions/expences";

//functions




function App() {

  const dispatch:any = useDispatch();
  const user = useSelector((state:State)=>state.usersReducers.user);
  

  return (
    <div className="App">
        <Navbar user={user} />
       <main>
          {user  ? 
            <Routes>
                <Route path="/" element={<Home user={user}/>}/>
            {/* <Route path="/profile/:userId" element={user ? <Profile user={user}/> : <Signin/>} /> */}
            </Routes>
          :
            <Signin/>
          }
       
       </main>
    </div>
  );
}

export default App;
