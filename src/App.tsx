import { Navbar} from "./components";
import { Routes,Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useSelector } from "react-redux";
import { State } from "./types/Redux";

//functions




function App() {

  const user = useSelector((state:State)=>state.userReducer?.user);

  




  return (
    <div className="App">
       <Navbar user={user}/>
       <main>
        <Routes>
          <Route path='/signin' element={<Signin/>} />
          <Route path="/" element={<Home/>}/>
          <Route path="/profile/:userId" element={user ? <Profile user={user}/> : <Signin/>} />
        </Routes>
       
       </main>
    </div>
  );
}

export default App;
