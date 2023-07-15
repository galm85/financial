import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { TbPigMoney } from 'react-icons/tb';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import { signInUser } from '../store/actions/users';


 type SigninUser = {
  email:string;
  password:string;
}

const Signin =() => {
  
  const dispatch:any = useDispatch();
  const [user,setUser] = useState<SigninUser>({} as SigninUser);
  const [error,setError] = useState<SigninUser>({} as SigninUser);
  const [loginError,setLoginError] = useState<string>('');


  const handleSubmit = async()=>{
    let errors:SigninUser = {} as SigninUser;
    let valid:boolean = true;
    setLoginError("");

    if(!user.email || user.email === ''){
      errors.email = "Please insert Email";
      valid = false;
    }
    if(!user.password || user.password === ''){
      errors.password = "Please insert Password";
      valid = false;
    }
    setError(errors);
    if(!valid){
     
      return;
    }

    dispatch(signInUser(user));



    // try{
    //   const res = await axios.post(`${process.env.REACT_APP_SERVER_API}/users/sign-in`,user);
    //   localStorage.setItem('finance',res.data.token);
    // }catch(e:any){
    //   setLoginError(e.response.data.message);
    // }

    // window.location.href =  './';
    

    
  }

  return (
    <div className="signin">
      
      <div className="signin-logo">
        <TbPigMoney/>
      </div>
     
     <h2 className='signin-title'>Sign in</h2>

     <div className='signin-form'>

        <div className="input-group">
          <TextField id="outlined-basic" 
                     label="Email" 
                     variant="outlined" 
                     onChange={(e)=>setUser({...user,email:e.target.value})}  
                     fullWidth 
                     error={error.email ? true : false}
                     helperText={error.email}
                />
        </div>

        <div className="input-group">
          <TextField id="outlined-basic" 
                     label="Password" 
                     variant="outlined" 
                     type='password' 
                     onChange={(e)=>setUser({...user,password:e.target.value})} 
                     fullWidth 
                     error={error.password ? true : false}
                     helperText = {error.password}
                     />
        </div>


        {loginError && <div className="login-error">{loginError}</div>}

        <button onClick={handleSubmit}>Sign In</button>
        
        <small>GWD</small>

     </div>

    </div>
  )
}

export default Signin