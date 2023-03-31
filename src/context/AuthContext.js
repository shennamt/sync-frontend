import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();
//The authReducer function is a reducer function used to manage the authentication state. It takes two arguments, the state object, and an action object that describes how the state should be updated. The reducer function returns a new state object based on the action type and payload.
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    case "SET_OCCUPATION":
      return { ...state, occupation: action.payload };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  //usereducer hook take 2 argument:a reducer function(authReducer) and initial state function { user: null }
  //return array of two value ,, current state and dispaltch function to update the state
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  //the Provider component is provided by the createContext() function and it allows child components to access the state that is stored in the context. The value prop of the Provider is an object that contains the current state and the dispatch function that can be used to update the state.
  //The children prop is a special prop that is automatically passed to components that wrap other components. It represents the child components that are wrapped by the AuthContextProvider. In this case, the child components will have access to the AuthContext and can use the authentication state and dispatch function that is stored in the context.
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
