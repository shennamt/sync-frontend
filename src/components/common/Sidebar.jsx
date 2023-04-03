import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  Typography
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import assets from "../../assets/index";
import { setBoards } from "../../redux/features/boardSlice"
import { useEffect, useState } from "react";
import boardApi from "../../api/boardApi"

const Sidebar = () => {
  const user = useSelector((state) => state.user.value); // react-redux hook for components to select and retrieve data from store
  const boards = useSelector((state) => state.board.value);
  const navigate = useNavigate();
  const dispatch = useDispatch(); // dispatch actions to update state
  const { boardId } = useParams()
  const [activeIndex, setActiveIndex] = useState(0) // arr destructuring to create 2 new vars
  const sidebarWidth = 250;

  useEffect(() => { // fetch data from API and update redux store state
    const getBoards = async () => {
      try {
        const res = await boardApi.getAll()
        dispatch(setBoards(res)) // res is payload, send to redux store
      } catch (err) {
        alert (err)
      }
    }
    getBoards()
  }, [dispatch])

  useEffect(() => {
    const activeItem = boards.findIndex(e => e._id === boardId) // looks for board
    if (boards.length > 0 && boardId === undefined) {
      navigate(`/boards/${boards[0]._id}`) // nav to the board id clicked or first board depending on arr
    }
    setActiveIndex(activeItem) // update state of active board
  }, [boards, boardId, navigate])

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const onDragEnd = () => {

  }

  return (
    <Drawer
      container={window.document.body}
      variant="permanent"
      open={true}
      sx={{
        width: sidebarWidth,
        height: "100%",
        "& > div": { borderRight: "none" }
      }}>
      <List
        disablePadding
        sx={{
          width: sidebarWidth,
          height: "100vh",
          backgroundColor: assets.colors.secondary
        }}>
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
            }}>
            <Typography variant="body2" fontWeight="700" color="white">
              Private
            </Typography>
            <IconButton>
              <AddBoxOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </ListItem>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable key={'list-board-droppable'} droppableId={'list-board-droppable'}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {
                  boards.map((item, index) => (
                    <Draggable key={item._id} draggableId={item._id} index={index}>
                      {(provided, snapshot) => (
                        <ListItemButton
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          selected={index === activeIndex}
                          component={Link}
                          to={`/boards/${item._id}`}
                          sx={{
                            pl: '20px',
                            cursor:snapshot.isDragging ? 'grab' : 'pointer!important'
                          }}
                          >
                            <Typography
                              variant='body2'
                              fontWeight='700'
                              color='white'
                              sx={{ whitespace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}

                            >
                              {item.title}
                            </Typography>
                        </ListItemButton>
                      )}
                    </Draggable>
                  ))
                }
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </List>
    </Drawer>
  );
};

export default Sidebar;
