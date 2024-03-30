import React, { createContext, useState, ReactNode, useContext } from "react";

interface SignUpUserInfo {
  name: string;
  email: string;
  password: string;
  location: string;
}
interface ContextProps {
  signUpUserInfo: SignUpUserInfo;
  setSignUpUserInfo: (userInfo: SignUpUserInfo) => void;
}

const initialUserInfo: SignUpUserInfo = {
  name: "",
  email: "",
  password: "",
  location: "",
};

const initialContextState: ContextProps = {
  signUpUserInfo: initialUserInfo,
  setSignUpUserInfo: () => {},
};

export const UserContext = createContext<ContextProps>(initialContextState);
export const useCustomContext = () => useContext(UserContext);
export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [signUpUserInfo, setSignUpUserInfo] =
    useState<SignUpUserInfo>(initialUserInfo);

  const contextValue: ContextProps = {
    signUpUserInfo,
    setSignUpUserInfo,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
