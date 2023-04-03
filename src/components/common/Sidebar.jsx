import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import assets from "../../assets/index";
import setBoards from "../../redux/features/boardSlice"

const Sidebar = () => {
  const user = useSelector((state) => state.user.value); // react-redux hook for components to select and retrieve data from store
  const boards = useSelector((state) => state.board.value);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // dispatch actions to update state
  const sidebarWidth = 250;

  useEffect(() => { // fetch data from API and update redux store state
    const getBoards = async () => {
      try {
        const res = await boardApi.getAll()
        console.log(res)
        dispatch(setBoards(res)) // res is payload, send to redux store
      } catch (err) {
        alert (err)
      }
    }
    getBoards()
  }, []) // empty array passed as second argument means function will only be called once aft component has rendered

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
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" fontWeight="700" color="white">
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
            <Typography variant="body2" fontWeight="700" color="white">
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
            <Typography variant="body2" fontWeight="700" color="white">
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
