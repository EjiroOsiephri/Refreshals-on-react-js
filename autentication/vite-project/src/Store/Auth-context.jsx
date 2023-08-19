import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: "",
  login: (token) => {},
  logout: () => {},
});

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const login = (token) => {
    setToken(token);
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
