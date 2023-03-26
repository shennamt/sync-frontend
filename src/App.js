import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import "./App.scss";

import Dashboard from "./pages/Dashboard";

import Login from "pages/Login";
import Signup from "pages/Signup";
import NavBarApp from "components/NavBarApp";

const App = () => {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        {/* <h1 className="SyncH1">S Y N C</h1> */}
        <NavBarApp />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              // user is true render Dashboard else navigate to login
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
