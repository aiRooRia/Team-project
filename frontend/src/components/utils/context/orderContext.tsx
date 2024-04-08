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
    selectedCategory: string;
  setSelectedcategory: Dispatch<SetStateAction<string>>;
  newFoodInfo: TNewFoodInfo;
  setNewFoodInfo: Dispatch<SetStateAction<TNewFoodInfo>>;
  deletedFoodId: string;
  setDeletedFoodId: Dispatch<SetStateAction<string>>;
  editedFoodInfo: TNewFoodInfo;
  setEditedFoodInfo: Dispatch<SetStateAction<TNewFoodInfo>>;
};

const initialContextState: TContextProps = {
    selectedCategory: "",
  setSelectedcategory: () => {},
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

export const OrderContext = createContext<TContextProps>(initialContextState);

export const OrderContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedcategory] = useState<string>("");
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
    selectedCategory,
    setSelectedcategory,
    newFoodInfo,
    setNewFoodInfo,
    deletedFoodId,
    setDeletedFoodId,
    editedFoodInfo,
    setEditedFoodInfo,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
