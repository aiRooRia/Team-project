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

type TContextProps = {
  badgeContent: number;
  setBadgeContent: Dispatch<SetStateAction<number>>;
  newOrderInfo: TNewOrderInfo;
  setNewOrderInfo: Dispatch<SetStateAction<TNewOrderInfo>>;
};
const initialOrderInfo: TNewOrderInfo = {
  userId: "",
  foods: [],
  totalPrice: 322,
};
const initialContextState: TContextProps = {
  badgeContent: 0,
  setBadgeContent: () => {},
  newOrderInfo: initialOrderInfo,
  setNewOrderInfo: () => {},
};

export const OrderContext = createContext<TContextProps>(initialContextState);

export const OrderContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [badgeContent, setBadgeContent] = useState<number>(0);
  const [newOrderInfo, setNewOrderInfo] =
    useState<TNewOrderInfo>(initialOrderInfo);
  const contextValue: TContextProps = {
    badgeContent,
    setBadgeContent,
    newOrderInfo,
    setNewOrderInfo,
  };

  return (
    <OrderContext.Provider value={contextValue}>
      {children}
    </OrderContext.Provider>
  );
};
