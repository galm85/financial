import {useEffect,useState} from 'react';
import { Expenses,Balance,Navbar} from "../components";
import { Expense } from '../types/Expense';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import { User } from '../types/User';



//functions
const Home:React.FC<{ user: User}> = ({user}) => {


    const [fixedExpenses, setFixedExpenses] = useState<Expense[]>([]);
    const [occasionalExpenses, setOccasionalExpenses] = useState<Expense[]>([]);
    const [outcome,setOutcome] = useState<number>(0)
    console.log(user);
    const paycheck = user?.paycheck || 0;

    useEffect(()=>{
       
        const getData = async()=>{
  
          let fixed:Expense[] = [];
          let occasional:Expense[] = [];
          let totalFixed:number = 0;
          let totalOccasional:number = 0;
        
          const {data} = await axios.get(`${process.env.REACT_APP_SERVER_API}/expences/6471e6843eedbda246a967eb`);
         
          data.forEach((expence:Expense)=>{
            if(expence.type === 'fixed'){
              fixed.push(expence);
              totalFixed += expence.sum;
            }else{
              occasional.push(expence);
              totalOccasional += expence.sum;
            }
          });
  
  
          setFixedExpenses(fixed);
          setOccasionalExpenses(occasional);
          setOutcome(totalFixed + totalOccasional);
        
        
        
        }
  
        getData();
  
      },[])
  
   
  return (
    <div>
       <Balance paycheck={paycheck} outcome={outcome}/>
       <Expenses  occasionalExpenses={occasionalExpenses} fixedExpenses={fixedExpenses}/>
    </div>
  )
}

export default Home