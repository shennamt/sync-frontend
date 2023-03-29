import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Drawer, List } from '@mui/material'

const SideNav = () => {
  const user = useSelector((state) => state.user.value)
  const sidebarWidth = 250

  return (
    <Drawer
    container={window.document.body}
    variant='permanent'
    open={true}
    sx={{
      width: sidebarWidth,
      height: '100vh',
      '& > div': { borderRight: 'none' }
    }}
    >
      <List
      disablePadding
      sx={{
        width: sidebarWidth,
        height: '100vh',
        backgroundColor: '#1976d2',
      }}
      >

      </List>
    </Drawer>
  )
}

export default SideNav
