import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";

const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const users = [
    { username: "Ivan", password: "Ivan123" },
    { username: "admin", password: "admin" },
  ];

  const login = (credentials) => {
    const foundUser = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!foundUser) {
      setError("Неверный логин или пароль");
      return false; // Возвращаем false при неверных данных
    }
    setUser(credentials.username);
    setError(""); // Сбрасываем ошибку при успешном входе
    return true; // Возвращаем true при успешном входе
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{ user, login, logout, error }}>
      <Outlet />
    </LoginContext.Provider>
  );
};
