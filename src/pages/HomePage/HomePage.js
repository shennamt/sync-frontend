import React from "react"
import SideNav from "components/CommonUse/SideNav"
import { Box } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';


const HomePage = () => {
  const createProject = () => {
    
  }
  return (
    <div className="HomePage" style={{ display: 'flex', alignItems: 'center' }}>
      <Box>
        <SideNav />
      </Box>
      <Box sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      }}>
        <LoadingButton variant="outlined" onClick={createProject}>
          Click here to Start Your Next Collaboration
        </LoadingButton>
      </Box>
    </div>
  );
};

export default HomePage;