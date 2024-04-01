import React, { createContext, useState, ReactNode, useContext } from "react";

interface SignUpUserInfo {
  name: string;
  email: string;
  password: string;
  location: string;
}

interface TPasswordRecoveryUsers {
  email: string;
  password: string;
  passwordRecoveryCode: string;
}

interface ContextProps {
  signUpUserInfo: SignUpUserInfo;
  setSignUpUserInfo: (userInfo: SignUpUserInfo) => void;
  passwordRecoveryUsers: TPasswordRecoveryUsers;
  setPasswordRecoveryUsers: (userInfo: TPasswordRecoveryUsers) => void;
}

const initialUserInfo: SignUpUserInfo = {
  name: "",
  email: "",
  password: "",
  location: "",
};

const initialPasswordRecoveryUsers: TPasswordRecoveryUsers = {
  email: "",
  password: "",
  passwordRecoveryCode: "123456",
};

const initialContextState: ContextProps = {
  signUpUserInfo: initialUserInfo,
  setSignUpUserInfo: () => {},
  passwordRecoveryUsers: initialPasswordRecoveryUsers,
  setPasswordRecoveryUsers: () => {},
};

export const UserContext = createContext<ContextProps>(initialContextState);

export const useCustomContext = () => useContext(UserContext);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [signUpUserInfo, setSignUpUserInfo] =
    useState<SignUpUserInfo>(initialUserInfo);
  const [passwordRecoveryUsers, setPasswordRecoveryUsers] =
    useState<TPasswordRecoveryUsers>(initialPasswordRecoveryUsers);

  const contextValue: ContextProps = {
    signUpUserInfo,
    setSignUpUserInfo,
    passwordRecoveryUsers,
    setPasswordRecoveryUsers,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
