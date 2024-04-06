import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  FC,
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
  name: string;
  phone: string;
  email: string;
};

type TContextProps = {
  signUpUserInfo: TSignUpUserInfo;
  setSignUpUserInfo: Dispatch<SetStateAction<TSignUpUserInfo>>;
  passwordRecoveryUser: TPasswordRecoveryUsers;
  setPasswordRecoveryUser: Dispatch<SetStateAction<TPasswordRecoveryUsers>>;
  userProfile: TUserProfile;
  setUserProfile: Dispatch<SetStateAction<TUserProfile>>;
};

const initialUserProfile: TUserProfile = {
  name: "Ariguun",
  phone: "88818657",
  email: "ariguun10@gmail.com",
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
};

export const UserContext = createContext<TContextProps>(initialContextState);

export const UserContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [signUpUserInfo, setSignUpUserInfo] =
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
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
