import React, { createContext, useState, ReactNode } from "react";

interface SignUpUserInfo {
  name: string;
  email: string;
  password: string;
  location: string;
}

interface TPasswordRecoveryUsers {
  email: string;
  newPassword: string;
  passwordRecoveryCode: string;
}

interface TUserProfile {
  name: string;
  phone: string;
  email: string;
}

interface ContextProps {
  signUpUserInfo: SignUpUserInfo;
  setSignUpUserInfo: React.Dispatch<React.SetStateAction<SignUpUserInfo>>;
  passwordRecoveryUser: TPasswordRecoveryUsers;
  setPasswordRecoveryUser: React.Dispatch<
    React.SetStateAction<TPasswordRecoveryUsers>
  >;
  userProfile: TUserProfile;
  setUserProfile: React.Dispatch<React.SetStateAction<TUserProfile>>;
}

const initialUserProfile: TUserProfile = {
  name: "",
  phone: "",
  email: "",
};

const initialUserInfo: SignUpUserInfo = {
  name: "",
  email: "",
  password: "",
  location: "",
};

const initialPasswordRecoveryUser: TPasswordRecoveryUsers = {
  email: "",
  newPassword: "",
  passwordRecoveryCode: "",
};

const initialContextState: ContextProps = {
  signUpUserInfo: initialUserInfo,
  setSignUpUserInfo: () => {},
  passwordRecoveryUser: initialPasswordRecoveryUser,
  setPasswordRecoveryUser: () => {},
  userProfile: initialUserProfile,
  setUserProfile: () => {},
};

export const UserContext = createContext<ContextProps>(initialContextState);

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [signUpUserInfo, setSignUpUserInfo] =
    useState<SignUpUserInfo>(initialUserInfo);
  const [passwordRecoveryUser, setPasswordRecoveryUser] =
    useState<TPasswordRecoveryUsers>(initialPasswordRecoveryUser);
  const [userProfile, setUserProfile] =
    useState<TUserProfile>(initialUserProfile);
  const contextValue: ContextProps = {
    signUpUserInfo,
    setSignUpUserInfo,
    passwordRecoveryUser,
    setPasswordRecoveryUser,
    userProfile,
    setUserProfile,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
