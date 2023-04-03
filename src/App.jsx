import '@fontsource/work-sans/300.css'
import '@fontsource/work-sans/400.css'
import '@fontsource/work-sans/500.css'
import '@fontsource/work-sans/700.css'
import CssBaseLine from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import AuthLayout from './components/layout/AuthLayout'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

function App() {
  const theme = createTheme({
    palette: { mode: 'light' }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/>}>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='signup' element={<SignupPage/>}/>
          </Route>
          <Route path='/' element={<AppLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='projects' element={<HomePage/>}/>
            <Route path='projects/:projectId' element={<ProjectPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
