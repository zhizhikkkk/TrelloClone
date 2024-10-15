import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg"; // Adjust the path based on the file structure

export const Logo = () => {
  return (
    <div className="font-trello">
      <Link to="/">
        <div className="hover:opacity-75 transition items-center gap-x-4 hidden md:flex">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <p className="text-lg text-neutral-700 -ml-2 ">Taskify</p>
        </div>
      </Link>
    </div>
  );
};
