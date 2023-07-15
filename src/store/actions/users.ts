import axios from 'axios';
import jwtDecode from "jwt-decode";
const url = process.env.REACT_APP_SERVER_API;


// export const getAllUsers = ()=>async(dispatch)=>{
//     const users = await axios.get(`${url}/users`);
//     dispatch({
//         type:'getAllUsers',
//         payload:users.data
//     })
// }


// export const registerUser = (user,admin=null)=>async(dispatch)=>{
//     try{
//         const res = await axios.post(`${url}/users`,user);
//         dispatch({
//             type:'registerUser',
//             payload:user
//         })
//         // toast.info(res.data);
//         if(admin){
//             window.location = './admin-panel/users';
//         }else{
//             window.location = './signin';

//         }
//     }catch(error){
//         if(error.response && error.response.data){
//             toast.dark(error.response.data,{progressClassName:'Toastify__progress-bar--error',})
//         }
//     }
// }

export const signInUser = (user:{email:string,password:string})=>async(dispatch:any)=>{
    try{
        const res = await axios.post(`${url}/users/sign-in`,user);
        const signInUser = jwtDecode(res.data.token);
        localStorage.setItem('finance',res.data.token);
        dispatch({
            type:'sign-in',
            payload:signInUser
        });
        
         window.location.href = './';
    }catch(error:any){
        if(error.response && error.response.data){
            console.log(error.response.data);
        }
    }
}

// export const updateUser = (user,userId)=>async(dispatch)=>{
//     try{
//         const res = await axios.patch(`${url}/users/update-user/${userId}`,user);
        
//     }catch(error){

//     }
// }


// export const getUserData = (userId) =>async(dispatch)=>{
//     try {
//         const {data} = await axios.get(`${url}/users/profile/${userId}`);
//         dispatch({
//             type:'getUserData',
//             payload:data
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }


// export const deleteUser = (userId)=>async(dispatch)=>{
    
//     if(window.confirm('Delete This User?')){

//         try {
//             const {data} = await axios.delete(`${url}/users/delete-user/${userId}`);
//             dispatch({
//                 type:"deleteUser",
//                 payload:userId
//             })
//             // toast.error(`${data.firstName} deleted`);
//             toast.dark(`${data.firstName} deleted`,{progressClassName:'Toastify__progress-bar--error',})
//         } catch (error) {
//             toast.error(error.response.data,{progressClassName:'Toastify__progress-bar--error',})

//         }
//     }
// }





