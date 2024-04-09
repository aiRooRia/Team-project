import React, { createContext, useState, ReactNode, useEffect } from "react";
import { Dispatch, SetStateAction, FC } from "react";

type TFoodArrayInfo = {
  foodId: string;
  quantity: number;
};
type TNewOrderInfo = {
  userId: string;
  foods: TFoodArrayInfo[];
  totalPrice: number;
};

type TOrderContextProps = {
  badgeContent: number;
  setBadgeContent: Dispatch<SetStateAction<number>>;
  newOrderInfo: TNewOrderInfo;
  setNewOrderInfo: Dispatch<SetStateAction<TNewOrderInfo>>;
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};
const initialOrderInfo: TNewOrderInfo = {
  userId: "",
  foods: [],
  totalPrice: 0,
};
const initialContextState: TOrderContextProps = {
  badgeContent: 0,
  setBadgeContent: () => {},
  selectedCategory: "",
  setSelectedCategory: () => {},
  newOrderInfo: initialOrderInfo,
  setNewOrderInfo: () => {},
};

export const OrderContext = createContext<TOrderContextProps>(initialContextState);

export const OrderContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [badgeContent, setBadgeContent] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] =useState<string>("");
  const [newOrderInfo, setNewOrderInfo] =
    useState<TNewOrderInfo>(initialOrderInfo);
  const contextValue: TOrderContextProps = {
    badgeContent,
    setBadgeContent,
    newOrderInfo,
    setNewOrderInfo,
    selectedCategory,
    setSelectedCategory,
  };
  console.log(newOrderInfo, "context");
  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
