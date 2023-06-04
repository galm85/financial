import { Navbar} from "./components";
import { Routes,Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from "./pages/Home";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";


//functions




function App() {
  
const getUserData = ()=>{
  
    const token = localStorage.getItem('finance');
    if(token){
      return jwt_decode(token); 
    }
    return null
  
}
const user = getUserData();
console.log(user);

  return (
    <div className="App">
       <Navbar user={user}/>
       <main>
        <Routes>
          <Route path='/signin' element={<Signin/>} />
          <Route path="/" element={<Home/>}/>
        </Routes>
       
       </main>
    </div>
  );
}

export default App;
