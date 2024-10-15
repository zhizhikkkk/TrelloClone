import { getCookie } from "cookies-next";
import { useState, useEffect } from "react";

const useOrganization = () => {
  const [organization, setOrganization] = useState<string>("");

  useEffect(() => {
    const value = getCookie("currentOrg") as string;
    setOrganization(value);
  }, []);

  return organization;
};

export default useOrganization;
