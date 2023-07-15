import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbPigMoney } from 'react-icons/tb';
import SideMenu from './SideMenu';


const Navbar = ({user}:any) => {


  return (
    <header className="header">
        <div className="header__logo-container">
           <TbPigMoney size="3rem"/>
        </div>

        <div>
          {user?.firstName[0].toUpperCase()}
          {user?.lastName[0].toUpperCase()}
        </div>

        
      
        <SideMenu />
       
       
    </header>
  )
}

export default Navbar