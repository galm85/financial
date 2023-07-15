import axios from 'axios';
const url = process.env.REACT_APP_SERVER_API;


export const getFiexdExpences = (userId:string)=>async(dispatch:any)=>{
    
    const res = await axios.get(`${url}/expences/fixed/${userId}`);
    dispatch({
        type:'getFiexdExpences',
        payload:res.data
    })
}

export const getOccasionalExpences = (userId:string)=>async(dispatch:any)=>{
    
    const res = await axios.get(`${url}/expences/occasional/${userId}`);
    dispatch({
        type:'getOccasionalExpences',
        payload:res.data
    })
}


export const getOutcome = (userId:string)=>async(dispatch:any)=>{
    
    const res = await axios.get(`${url}/expences/outcome/${userId}`);
    dispatch({
        type:'getOutcome',
        payload:res.data
    })
}




