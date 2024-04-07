import React, { createContext, useState, ReactNode } from "react";

// type TNewCategoryInfo = {
//   name: string;
// };

type TContextProps = {
  newCategoryInfo: string;
  setNewCategoryInfo: React.Dispatch<React.SetStateAction<string>>;
};

const initialContextState: TContextProps = {
  newCategoryInfo: "",
  setNewCategoryInfo: () => {},
};

export const AdminContext = createContext<TContextProps>(initialContextState);

export const AdminContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [newCategoryInfo, setNewCategoryInfo] = useState<string>("");

  console.log("this is new", newCategoryInfo);

  const contextValue: TContextProps = {
    newCategoryInfo,
    setNewCategoryInfo,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};
