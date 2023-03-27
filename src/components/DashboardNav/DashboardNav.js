import React from 'react'
import { Link } from "react-router-dom";
import { useLogout } from 'hooks/useLogout';
import { useAuthContext } from "hooks/useAuthContext";

import './DashboardNav.css'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const DashboardNav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography className='sync__logo'>
            <Link to="/" style={{textDecoration:'none'}}> SYNC </Link>
          </Typography>
            {user && (
              <Button sx={{ marginLeft: 'auto' } }color="inherit" onClick={handleClick}>Logout</Button>
            )}
            {!user && (
              <div>
                <Link to="/">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

export default DashboardNav;
