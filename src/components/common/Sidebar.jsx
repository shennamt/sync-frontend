// `useSelector` hook for React components to access and subscribe to a
// specific slice of the Redux store
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useNavigate } from "react-router-dom";
import assets from "../../assets/index";

const Sidebar = () => {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();

  const sidebarWidth = 250;

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // variant=`permanent` sets drawer as always visible on the screen
  // open=`true` sets the initial state of the drawer to open
  // & > div selector targets all immediate child div elements of the
  // current element and sets their border-right property to none.
  // `div` element is a direct child of the Drawer component.
  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{
        width: sidebarWidth,
        height: "100%",
        "& > div": { borderRight: "none" }
      }}
    >
      <List
        disablePadding
        sx={{
          width: sidebarWidth,
          height: "100vh",
          backgroundColor: assets.colors.secondary
        }}
      >
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography variant="body2" fontWeight="700">
              {user.username}
            </Typography>
            <IconButton onClick={logout}>
              <LogoutOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
        <Box sx={{ paddingTop: "10px" }} />
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography variant="body2" fontWeight="700">
              Favourites
            </Typography>
          </Box>
        </ListItem>
        <Box sx={{ paddingTop: "10px" }} />
        <ListItem>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <Typography variant="body2" fontWeight="700">
              Private
            </Typography>
            <IconButton>
              <AddBoxOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
