import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import { store } from "./redux/store"
import { Provider } from 'react-redux'
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);

// using Redux for state management (via Provider)
// AuthContextProvider for managing authentication-related state
// Wrapping AuthContextProvider inside the Provider component to make sure that both store and AuthContext are available throughout your component hierarchy.
// Provider should wrap AuthContextProvider because the Redux store is more fundamental to the application than the authentication context.
