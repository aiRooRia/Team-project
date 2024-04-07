import React, { createContext, useState, ReactNode } from "react";
import { Dispatch, SetStateAction, FC } from "react";

type TNewFoodInfo = {
  _id: string;
  name: string;
  category: string;
  ingredients: string;
  price: number;
  discountRate: number;
  image: string;
};

type TContextProps = {
  newCategoryInfo: string;
  setNewCategoryInfo: Dispatch<SetStateAction<string>>;
  newFoodInfo: TNewFoodInfo;
  setNewFoodInfo: Dispatch<SetStateAction<TNewFoodInfo>>;
  deletedFoodId: string;
  setDeletedFoodId: Dispatch<SetStateAction<string>>;
  editedFoodInfo: TNewFoodInfo;
  setEditedFoodInfo: Dispatch<SetStateAction<TNewFoodInfo>>;
};

const initialContextState: TContextProps = {
  newCategoryInfo: "",
  setNewCategoryInfo: () => {},
  newFoodInfo: {
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: 0,
    discountRate: 0,
    category: "",
  },
  setNewFoodInfo: () => {},
  deletedFoodId: "",
  setDeletedFoodId: () => {},
  editedFoodInfo: {
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: 0,
    discountRate: 0,
    category: "",
  },
  setEditedFoodInfo: () => {},
};

export const AdminContext = createContext<TContextProps>(initialContextState);

export const AdminContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [newCategoryInfo, setNewCategoryInfo] = useState<string>("");
  const [deletedFoodId, setDeletedFoodId] = useState<string>("");
  const [newFoodInfo, setNewFoodInfo] = useState<TNewFoodInfo>({
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: 0,
    discountRate: 0,
    category: "",
  });
  const [editedFoodInfo, setEditedFoodInfo] = useState<TNewFoodInfo>({
    _id: "",
    name: "",
    image: "",
    ingredients: "",
    price: 0,
    discountRate: 0,
    category: "",
  });

  const contextValue: TContextProps = {
    newCategoryInfo,
    setNewCategoryInfo,
    newFoodInfo,
    setNewFoodInfo,
    deletedFoodId,
    setDeletedFoodId,
    editedFoodInfo,
    setEditedFoodInfo,
  };

  return (
    <AdminContext.Provider value={contextValue}>
      {children}
    </AdminContext.Provider>
  );
};
