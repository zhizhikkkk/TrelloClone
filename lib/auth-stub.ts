import { deleteCookie, setCookie } from "cookies-next";

export const signInStub = (email: string, password: string): boolean => {
  if (email === "a" && password === "b") {
    setCookie("currentUser", email);
    return true;
  }
  return false;
};

export const signOutStub = (): boolean => {
  deleteCookie("currentUser");
  deleteCookie("currentOrg");
  return true;
}