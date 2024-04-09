import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
  useEffect,
} from "react";

type TSignUpUserInfo = {
  name: string;
  email: string;
  password: string;
  location: string;
};

type TPasswordRecoveryUsers = {
  email: string;
  newPassword: string;
  passwordRecoveryCode: string;
};

type TUserProfile = {
  name: string | null;
  phone: string | null;
  email: string | null;
};

export type TContextProps = {
  signUpUserInfo: TSignUpUserInfo;
  setSignUpUserInfo: Dispatch<SetStateAction<TSignUpUserInfo>>;
  passwordRecoveryUser: TPasswordRecoveryUsers;
  setPasswordRecoveryUser: Dispatch<SetStateAction<TPasswordRecoveryUsers>>;
  userProfile: TUserProfile;
  setUserProfile: Dispatch<SetStateAction<TUserProfile>>;
  loginOrUserOrAdmin: string;
  setLoginOrUserOrAdmin: Dispatch<SetStateAction<string>>;
};

const initialUserProfile: TUserProfile = {
  name: "",
  phone: "",
  email: "",
};

const initialUserInfo: TSignUpUserInfo = {
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

const initialContextState: TContextProps = {
  signUpUserInfo: initialUserInfo,
  setSignUpUserInfo: () => {},
  passwordRecoveryUser: initialPasswordRecoveryUser,
  setPasswordRecoveryUser: () => {},
  userProfile: initialUserProfile,
  setUserProfile: () => {},
  loginOrUserOrAdmin: "Нэвтрэх",
  setLoginOrUserOrAdmin: () => {},
};

export const UserContext = createContext<TContextProps>(initialContextState);

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const ENDPOINT_URL = process.env.NEXT_PUBLIC_ENDPOINT;

  const [loginOrUserOrAdmin, setLoginOrUserOrAdmin] =
    useState<string>("Нэвтрэх");
  const [signUpUserInfo, setSignUpUserInfo] =
    useState<TSignUpUserInfo>(initialUserInfo);
  const [loggedInUserInfo, setLoggedInUserInfo] =
    useState<TSignUpUserInfo>(initialUserInfo);
  const [passwordRecoveryUser, setPasswordRecoveryUser] =
    useState<TPasswordRecoveryUsers>(initialPasswordRecoveryUser);
  const [userProfile, setUserProfile] =
    useState<TUserProfile>(initialUserProfile);
  const contextValue: TContextProps = {
    signUpUserInfo,
    setSignUpUserInfo,
    passwordRecoveryUser,
    setPasswordRecoveryUser,
    userProfile,
    setUserProfile,
    loginOrUserOrAdmin,
    setLoginOrUserOrAdmin,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
