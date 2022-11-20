import React from "react";
const AuthContext = React.createContext<any>(null);
const tokenFake = "123123213dasdasd";
const fakeAuth = () =>
  new Promise<String>((resolve) => {
    setTimeout(() => resolve(tokenFake), 250);
  });

const AuthProvider = ({ children }: any) => {
  const [token, setToken] = React.useState<String>("");

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
  };

  const handleLogout = () => {
    setToken("");
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
