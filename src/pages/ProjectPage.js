import React from 'react'
import SideNav from "components/CommonUse/SideNav"
import { Box } from "@mui/material"

const ProjectPage = () => {
  return (
    <div className="ProjectPage" style={{ display: 'flex', alignItems: 'center' }}>
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
        Projects
      </Box>
    </div>
  );
}

export default ProjectPage
