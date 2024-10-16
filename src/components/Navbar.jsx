import { Logo } from "./Logo";
import { Button } from "./Button";
import { Conditional } from "./Conditional";
import { useLogin } from "../hooks/LoginProvider";
import { useNavigate } from "react-router-dom";
import { LinkButton } from "./LinkButton";

export const Navbar = () => {
  const { user, logout } = useLogin();
  const navigate = useNavigate();

  const handleLogout = (event) => {
    event.preventDefault();
    logout();

    navigate("/");
  };

  const handleRegister = (event) => {
    navigate("/register");
  };

  return (
    <div className="font-trello fixed top-0 p-4 w-full border-b shadow-sm bg-white">
      <div className="flex justify-between">
        <Logo />
        <Conditional condition={!user}>
          <div className="flex space-x-4">
            <LinkButton to="/login">Login</LinkButton>
            <Button onClick={handleRegister}>Get Taskify for free</Button>
          </div>
        </Conditional>
        <Conditional condition={user}>
          <Button onClick={handleLogout}>Logout</Button>
        </Conditional>
      </div>
    </div>
  );
};
