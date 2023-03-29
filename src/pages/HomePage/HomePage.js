import React from "react"
import SideNav from "components/CommonUse/SideNav"
import { Box } from "@mui/material"
import LoadingButton from '@mui/lab/LoadingButton';

const HomePage = () => {
  return (
    <div className="HomePage">
      <SideNav />
      <Box sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <LoadingButton
          variant='outlined'
        >
          Click here to Start Your Next Collaboration
        </LoadingButton>
      </Box>
    </div>
  );
};

export default HomePage;