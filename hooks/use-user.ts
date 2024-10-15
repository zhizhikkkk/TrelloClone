import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const value = getCookie("currentUser") as string;
    setUser(value);
  }, []);

  return user;
};

export default useUser;
