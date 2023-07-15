import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SideMenu() {
  const [state, setState] = React.useState<boolean>(false);

  const toggleDrawer = ()=>{setState(prev => !prev);}

  return (
    <div>
     
        <React.Fragment>
          <Button onClick={toggleDrawer}><GiHamburgerMenu/> </Button>
          <Drawer
            anchor={'right'}
            open={state}
            onClose={toggleDrawer}
          >
            <div className='side-menu' onClick={toggleDrawer}>
                <div className="side-menu-top">
                    GM
                </div>

                <Divider/>
                <div className="side-menu-item">
                    <InboxIcon/>
                    <NavLink to={'/'}>Home</NavLink>
                </div>
                <div className="side-menu-item">
                    <InboxIcon/>
                    <NavLink to={'/signin'}>signin</NavLink>
                </div>
                <div className="side-menu-item">
                    <InboxIcon/>
                    <NavLink to={'/history'}>signin</NavLink>
                </div>
                <div className="side-menu-item">
                    <InboxIcon/>
                    <NavLink to={'/profile'}>signin</NavLink>
                </div>
            </div>
            
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}
