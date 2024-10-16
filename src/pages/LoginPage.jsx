import { Button } from "../components/Button";
import React, { useState } from "react";
import { useLogin } from "../hooks/LoginProvider";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo"; // Импортируем компонент логотипа

const LoginPage = () => {
  const { login, error } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setLoginError(""); // Сбрасываем ошибку при изменении имени
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setLoginError(""); // Сбрасываем ошибку при изменении пароля
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const credentials = { username, password };
    
    // Пытаемся залогиниться
    const success = login(credentials);

    // Проверяем результат входа
    if (success) {
      navigate("/boards"); // Перенаправляем на BoardPage
    } else {
      setLoginError("Неверный логин или пароль"); // Устанавливаем ошибку
      setUsername(""); // Очищаем поля ввода
      setPassword("");
    }
  };

  return (
    <div className="font-trello h-screen w-screen bg-slate-100 flex flex-col items-center justify-center">
      <Logo /> {/* Добавляем логотип, который ведет на MarketingPage */}
      <div className="w-96 mb-14">
        <div className="text-3xl mb-4 text-center">Taskify</div>
        <div className="mb-4">
          <div className="text-sm mb-2">Username</div>
          <input
            type="text"
            className="w-full py-2 px-3 rounded-md border"
            placeholder="user"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-8">
          <div className="text-sm mb-2">Password</div>
          <input
            type="password"
            className="w-full py-2 px-3 rounded-md border"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {loginError && <div className="text-red-500 mb-4">{loginError}</div>} {/* Выводим сообщение об ошибке */}
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
