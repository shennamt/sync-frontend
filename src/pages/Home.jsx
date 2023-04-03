import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const Home = () => {
  const createBoard = () => {};
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <LoadingButton variant="outlined" color="success" onClick={createBoard}>
        Click here to SYNC your next collaboration
      </LoadingButton>
    </Box>
  );
};

export default Home;
