import { Button } from "../components/Button";
import React, { useState } from "react";
import { useLogin } from "../hooks/LoginProvider";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const RegisterPage = () => {
  const { register, error } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setRegisterError(""); // Clear error when updating username
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setRegisterError(""); // Clear error when updating password
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const newUser = { username, password };

    const success = register(newUser);

    if (success) {
      navigate("/boards"); // Redirect to boards page
    } else {
      setRegisterError(error || "Failed to register");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="font-trello h-screen w-screen bg-slate-100 flex flex-col items-center justify-center">
      <Logo />
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
        {registerError && <div className="text-red-500 mb-4">{registerError}</div>}
        <Button className="w-full" onClick={handleRegister}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
