import {useEffect,useState} from 'react';
import { Expenses,Balance,Navbar} from "./components";
import { Expense } from './types/Expense';
import axios from 'axios';


//functions




function App() {
  
    const [fixedExpenses, setFixedExpenses] = useState<Expense[]>([]);
    const [occasionalExpenses, setOccasionalExpenses] = useState<Expense[]>([]);
    const [paycheck, setPaycheck] = useState<number>(10000);
    const [outcome,setOutcome] = useState<number>(0)

 

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
    <div className="App">
       <Navbar/>
       <Balance paycheck={paycheck} outcome={outcome}/>
       <Expenses  occasionalExpenses={occasionalExpenses} fixedExpenses={fixedExpenses}/>
    </div>
  );
}

export default App;
