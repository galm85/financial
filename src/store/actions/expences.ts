import axios from 'axios';
const url = process.env.REACT_APP_SERVER_API;


export const getFiexdExpences = (userId:string)=>async(dispatch:any)=>{
    
    const fiexdExpences = await axios.get(`${url}/expences/fixed/${userId}`);
    dispatch({
        type:'getFiexdExpences',
        payload:fiexdExpences.data
    })
}

export const getOccasionalExpences = (userId:string)=>async(dispatch:any)=>{
    
    const fiexdExpences = await axios.get(`${url}/expences/occasional/${userId}`);
    dispatch({
        type:'getOccasionalExpences',
        payload:fiexdExpences.data
    })
}





