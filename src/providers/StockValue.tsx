import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

interface StockValueProviderType {
  initialValuePerItem: number;
  children: ReactNode;
}

interface StockValueContextType {
  setStockAmount: Dispatch<SetStateAction<number>>;
  setValuePerItem: Dispatch<SetStateAction<number>>;
  minValuePerItem: number;
  valuePerItem: number;
  stockAmount: number;
  stockValue: number;
}

const defaultContextValue = {
  setValuePerItem: () => {},
  setStockAmount: () => {},
  minValuePerItem: 0,
  valuePerItem: 0,
  stockAmount: 0,
  stockValue: 0,
}

export const StockValueContext = createContext<StockValueContextType>(defaultContextValue);

export const StockValueProvider = ({ children, initialValuePerItem }: StockValueProviderType) => {
  const [stockAmount, setStockAmount] = useState(1);
  const [valuePerItem, setValuePerItem] = useState(initialValuePerItem);
  const [stockValue, setStockValue] = useState(multiply());

  useEffect(() => {
    setStockValue(multiply());
  }, [stockAmount, valuePerItem]);

  function multiply() {
    return stockAmount * valuePerItem
  }

  return (
    <StockValueContext.Provider value={{
      minValuePerItem: initialValuePerItem,
      setValuePerItem,
      setStockAmount,
      valuePerItem,
      stockAmount,
      stockValue,
    }}>
      {children}
    </StockValueContext.Provider>
  );
};