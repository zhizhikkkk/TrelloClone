import { setCookie } from "cookies-next";

export const createOrgStub = (orgTitle: string): boolean => {
  setCookie("currentOrg", orgTitle);
  return true;
};
