import { Navbar} from "./components";
import { Routes,Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Home from "./pages/Home";


//functions




function App() {
  


  return (
    <div className="App">
       <Navbar/>
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
