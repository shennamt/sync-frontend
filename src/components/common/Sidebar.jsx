// `useSelector` hook for React components to access and subscribe to a
// specific slice of the Redux store
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { Link, useNavigate, useParams } from "react-router-dom";
import assets from "../../assets/index";
import { useEffect, useState } from "react";
import boardApi from "../../api/boardApi";
import { setBoards } from "../../redux/features/boardSlice";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const Sidebar = () => {
  // `useSelector` hook by the `react-redux` library to select a specific value from the Redux store state
  // select `value` property of the user object
  // select `value` property of the board object
  const user = useSelector((state) => state.user.value);
  const boards = useSelector((state) => state.board.value);
  // `useNavgate` hook to navigate to a different page or route
  // new constant variable `navigate` assigned the result of calling `useNavigate` hook
  // `useDispatch()` hook give access to `dispatch` function of the Redux store
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarWidth = 250;

  useEffect(() => {
    const getBoards = async () => {
      try {
        // wait for response and if successful
        // `setBoards` function is dispatched with the returned
        // result `res` to updat the state of the component with the data
        const res = await boardApi.getAll();
        console.log("Sidebar.jsx/useEffect: res\n", res);
        // `setBoards(res)` - expect a single board `res` object
        dispatch(setBoards(res));
      } catch (err) {
        console.log("Sidebar.jsx/useEffect: err\n", err);
        alert(err);
      }
    };
    // call `getBoards()` function to trigger API call
    // and update the component state with the data
    getBoards();
    // empty array is passed to useEffect as the function is run once
    // when the component mounts, there are no dependencies to cause
    // the function to re-run
  }, [dispatch]);

  useEffect(() => {
    const activeItem = boards.findIndex((e) => e.id === boardId);
    if (boards.length > 0 && boardId === undefined) {
      navigate(`/boards/${boards[0].id}`);
    }
    setActiveIndex(activeItem);
    console.log("Sidebar.jsx/useEffect: updateActive(boards)\n", boards);
  }, [boards, boardId, navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const onDragEnd = async ({ source, destination }) => {
    const newList = [...boards];
    const [removed] = newList.splice(source.index, 1);
    newList.splice(destination.index, 0, removed);

    const activeItem = newList.findIndex((e) => e.id === boardId);
    setActiveIndex(activeItem);
    dispatch(setBoards(newList));

    try {
      await boardApi.updatePosition({ boards: newList });
    } catch (err) {
      console.log("Sidebar.js/onDragEnd: err\n", err);
      alert(err);
    }
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
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            key={"list-board-droppable"}
            droppableId={"list-board-droppable"}
          >
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {boards.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItemButton
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        selected={index === activeIndex}
                        component={Link}
                        to={`/boards/${item.id}`}
                        sx={{
                          pl: "20px",
                          cursor: snapshot.isDragging
                            ? "grab"
                            : "pointer!important"
                        }}
                      >
                        <Typography
                          variant="body2"
                          fontWeight="700"
                          sex={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                          }}
                        >
                          {item.icon} {item.title}
                        </Typography>
                      </ListItemButton>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </List>
    </Drawer>
  );
};

export default Sidebar;
