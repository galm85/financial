import { Expenses,Balance} from "../components";
import { User } from '../types/User';


const Home:React.FC<{ user: User}> = ({user}) => {


    const paycheck = user?.paycheck || 0;
    const outcome = 2000;
  
  return (
    <div>
       <Balance paycheck={paycheck} outcome={outcome}/>
       <Expenses />
    </div>
  )
}

export default Home

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
