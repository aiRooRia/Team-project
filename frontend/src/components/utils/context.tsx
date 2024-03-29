import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useContext,
} from "react";

interface SignUpUserInfo {
  name: string;
  email: string;
  password: string;
  location: string;
}
interface ContextProps {
  isLoading: boolean;
  startLoading: () => void;
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
  isLoading: false,
  startLoading: () => {},
  signUpUserInfo: initialUserInfo,
  setSignUpUserInfo: () => {},
};

export const UserContext = createContext<ContextProps>(initialContextState);

export const useCustomContext = () => useContext(UserContext);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [signUpUserInfo, setSignUpUserInfo] =
    useState<SignUpUserInfo>(initialUserInfo);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const contextValue: ContextProps = {
    isLoading,
    startLoading,
    signUpUserInfo,
    setSignUpUserInfo,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
