import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
  };

  const contextValue = {
    isLoggedIn: userIsLoggedIn,
    token: token,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
