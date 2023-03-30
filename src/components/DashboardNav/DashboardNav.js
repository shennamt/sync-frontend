import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "hooks/useLogout";
import { useAuthContext } from "hooks/useAuthContext";

import "./DashboardNav.css";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";

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
          <Typography className="sync__logo">SYNC</Typography>
          {user && (
            <Tabs sx={{ marginLeft: "auto" }} textColor="inherit">
              <Link to="/" className="dashboard__link">
                <Tab label="Dashboard" />
              </Link>
              <Tab label="Logout" onClick={handleClick} />
            </Tabs>
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
  );
};

export default DashboardNav;
