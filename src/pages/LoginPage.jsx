import { Button } from "../components/Button";
import React, { useState } from "react";
import { useLogin } from "../hooks/LoginProvider";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { login } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const credentials = { username, password };
    login(credentials);

    navigate("/boards");
  };

  return (
    <div className="font-trello h-screen w-screen bg-slate-100 flex items-center justify-center">
      <div className="w-96 mb-14">
        <div className="text-3xl mb-4 text-center">Taskify</div>
        <div className="mb-4">
          <div className="text-sm mb-2">Username</div>
          <input
            type="text"
            className="w-full py-2 px-3 rounded-md border"
            placeholder="user"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-8">
          <div className="text-sm mb-2">Password</div>
          <input
            type="password"
            className="w-full py-2 px-3 rounded-md border"
            placeholder="********"
            onChange={handlePasswordChange}
          />
        </div>
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
