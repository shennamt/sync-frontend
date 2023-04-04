import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useDispatch } from "react-redux";
import { useState } from "react";
import boardApi from "../api/boardApi";
import { setBoards } from "../redux/features/boardSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const createBoard = async () => {
    setLoading(true);
    try {
      const res = await boardApi.create();
      // expect `res` an array of board objects, wrap the array inside another array
      // before setting it in the Redux store
      dispatch(setBoards([res]));
      navigate(`/boards/${res.id}`);
    } catch (err) {
      console.log("Home.jsx/try catch: err\n", err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <LoadingButton
        variant="outlined"
        color="success"
        onClick={createBoard}
        loading={loading}
      >
        Click here to create your first board
      </LoadingButton>
    </Box>
  );
};

export default Home;
