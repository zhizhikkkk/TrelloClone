import { Logo } from "./Logo";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { Conditional } from "./Conditional";

export const Navbar = () => {
  var isAuth = false;

  return (
    <div className="font-trello fixed top-0 p-4 w-full border-b shadow-sm bg-white">
      <div className="flex justify-between">
        <Logo />
        <Conditional condition={!isAuth}>
          <div className="flex space-x-4">
            <Link to="/sign-in">
              <Button>Login</Button>
            </Link>
            <Button>Get Taskify for free</Button>
          </div>
        </Conditional>
        <Conditional condition={isAuth}>
          <Button>Logout</Button>
        </Conditional>
      </div>
    </div>
  );
};
