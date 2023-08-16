import { createContext, useEffect, useState } from "react";
import { getUserService } from "../service";

export const AuthContext = createContext({} as any);

export const AuthProviderComponent = ({ children }: any) => {
  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
  );

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  const login = (token: string) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getUserService({ token });
        setUser(data);
      } catch (error) {
        setToken("");
        setUser(null);
      }
    };
    if (token) getUserData();
  }, [token, setToken]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
