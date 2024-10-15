import { deleteCookie, setCookie } from "cookies-next";

const credentials = [
  {email: "admin", password: "admin"},
  {email: "a", password: "a"},
];

export const signInStub = (email: string, password: string): boolean => {
  const user = credentials.find((credential) => 
    (credential.email === email && credential.password === password));
  if (user) {
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