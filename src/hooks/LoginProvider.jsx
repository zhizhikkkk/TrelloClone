import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = () => {
  const [user, setUser] = useState(null);

  const users = [
    { username: "user", password: "password" },
    { username: "admin", password: "admin" },
  ];

  const login = (credentials) => {
    const user = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    setUser(credentials.username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      <Outlet />
    </LoginContext.Provider>
  );
};
