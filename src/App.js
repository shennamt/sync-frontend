import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import CssBaseLine from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import LoginPage from "pages/LoginPage/LoginPage";
import RegisterPage from "pages/RegisterPage/RegisterPage";
import HomePage from "pages/HomePage";
import ProjectPage from 'pages/ProjectPage';

const App = () => {
  const { user } = useAuthContext();

  const theme = createTheme({
    palette: { mode: 'light'}
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />}/>
          <Route path="/signup" element={!user ? <RegisterPage /> : <Navigate to="/" />}/>
          <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />}/>
          <Route path="/projects" element={user ? <HomePage /> : <Navigate to="/login" />}/>
          <Route path="/projects/:projectId" element={user ? <ProjectPage /> : <Navigate to="/login" />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;