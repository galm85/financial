import { TbPigMoney } from 'react-icons/tb';
import SideMenu from './SideMenu';
import { User } from '../types/User';
import { useSelector } from 'react-redux';
import { State } from '../types/Redux';

const Navbar:React.FC<{ user: User | null }> = ({user}) => {
  
  
  // const user = useSelector((state:State)=>state.usersReducers.user);
  // console.log(user);

  return (
    <header className="header">
        <div className="header__logo-container">
           <TbPigMoney size="3rem"/>
        </div>

        {user !== null &&
        <div>
          {user?.firstName[0].toUpperCase()}
          {user?.lastName[0].toUpperCase()}
        </div>
        }
        
      
        <SideMenu />
       
       
    </header>
  )
}

export default Navbar