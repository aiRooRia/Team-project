import React, { createContext, useState, ReactNode } from "react";

interface NewCategoryInfo {
 name: string;
}

interface ContextProps {
 newCategoryInfo: NewCategoryInfo;
 setNewCategoryInfo: (info: NewCategoryInfo) => void;
}

// Correct the initial context state to match the ContextProps interface
const initialContextState: ContextProps = {
 newCategoryInfo: { name: '' }, // Initialize with an empty object matching NewCategoryInfo
 setNewCategoryInfo: () => {},
};

export const AdminContext = createContext<ContextProps>(initialContextState);

export const AdminContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
 const [newCategoryInfo, setNewCategoryInfo] = useState<NewCategoryInfo>({ name: '' });

 const contextValue: ContextProps = {
    newCategoryInfo,
    setNewCategoryInfo,
 };

 return (
    <AdminContext.Provider value={contextValue}>{children}</AdminContext.Provider>
 );
};
