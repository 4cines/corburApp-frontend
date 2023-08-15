import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({} as any);

export const AuthProviderComponent = ({ children }: any) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // useEffect(() => {
  //     localStorage.setItem("token", token: string);
  // },  [token]);
};
