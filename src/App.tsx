import {useEffect,useState} from 'react';
import { Expenses,Balance,Navbar} from "./components";
import { Expense } from './types/Expense';
import axios from 'axios';

function App() {
  
    const [expenses, setExpenses] = useState<Expense[]>([]);
    const [paycheck, setPaycheck] = useState<number>(0);
    const [outcome,setOutcome] = useState<number>(209)

    const getData = async()=>{
        const expensesJson = await axios.get('http://localhost:4000/expenses');
        setExpenses(expensesJson.data);
        const paycheckJson = await axios.get('http://localhost:4000/paycheck');
        setPaycheck(paycheckJson.data.paycheck);


        let totalOutcome = 0;
        expensesJson.data.forEach((ex:Expense) => totalOutcome += ex.sum);
        setOutcome(totalOutcome);

    }

    useEffect(()=>{
        getData();

    },[])

 



  return (
    <div className="App">
       <Navbar/>
       <Balance paycheck={paycheck} outcome={outcome}/>
       <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
