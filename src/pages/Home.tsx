import { useDispatch, useSelector } from "react-redux";
import { Expenses,Balance} from "../components";
import { User } from '../types/User';
import { State } from "../types/Redux";
import { useEffect, useState } from "react";
import { getFiexdExpences, getOccasionalExpences, getOutcome } from "../store/actions/expences";


const Home:React.FC<{ user: User}> = ({user}) => {

    const fixedExpenses = useSelector((state:State)=>state.expencesReducers.fixedExpences);
    const occasionalExpenses = useSelector((state:State)=>state.expencesReducers.occasionalExpences);
    const outcome = useSelector((state:State)=>state.expencesReducers.outcome);
    const dispatch:any = useDispatch();
    const [ready,setReady] = useState<boolean>(false);

    useEffect(()=>{

        dispatch(getFiexdExpences(user._id))
        dispatch(getOccasionalExpences(user._id));  
        dispatch(getOutcome(user._id));  
        setReady(true);
      

      
      
    },[])
  
  
    if(!ready){
      return <div>Loading</div>
    }

    const paycheck = user?.paycheck || 0;
  
  return (
    <div>
       <Balance paycheck={paycheck} outcome={outcome}/>
       <Expenses fixedExpenses={fixedExpenses} occasionalExpenses={occasionalExpenses} />
    </div>
  )
}

export default Home

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
