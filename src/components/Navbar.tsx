import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbPigMoney } from 'react-icons/tb';

const Navbar = () => {

  const [displaySidenav,setDisplaySidenav] = useState<Boolean>(false);

  

  return (
    <header className="header">
        <div className="header__logo-container">
           <TbPigMoney size="3rem"/>
        </div>
        <div className="header__menu">
            <GiHamburgerMenu onClick={()=>setDisplaySidenav(!displaySidenav)}/>
            
        </div>
        <div className={displaySidenav?'header__sidenav header__sidenav--open':'header__sidenav header__sidenav--close'}>
            <ul>
              <li>History</li>
              <li>Paycheck</li>
              <li>History</li>
              <li>History</li>
            </ul>
        </div>
       
    </header>
  )
}

export default Navbar