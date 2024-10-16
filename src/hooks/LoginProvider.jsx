import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

const LoginContext = createContext();

export const useLogin = () => {
  return useContext(LoginContext);
};

export const LoginProvider = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([
    { username: "Ivan", password: "Ivan123" },
    { username: "alina", password: "alina" },
    { username: "admin", password: "admin" },
  ]);

const login = useCallback(
    (credentials) => {
      const foundUser = users.find(
        (u) =>
          u.username === credentials.username &&
          u.password === credentials.password
      );
      if (!foundUser) {
        setError("Wrong credentials");
        return false; // Возвращаем false при неверных данных
      }
      setUser(credentials.username);
      setError(""); // Сбрасываем ошибку при успешном входе
      return true; // Возвращаем true при успешном входе
  },
  [users]
);

// const register = useCallback(
//   (newUser) => {
//     const userExists = users.some((u) => u.username === newUser.username);
//     if (userExists) {
//       setError("User already exists");
//       return false;
//     }
//     setUsers([...users, newUser]);
//     setUser(newUser.username);
//     setError("");
//     return true;
//   },
//   [users]
// );

  const logout = () => {
    setUser(null);
  };

  return (
    <LoginContext.Provider value={{ user, login, logout, error }}>
      <Outlet />
    </LoginContext.Provider>
  );
};
