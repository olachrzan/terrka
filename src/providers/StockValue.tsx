import { Dispatch, ReactNode, SetStateAction, createContext } from 'react';
import { useLsState } from '../hooks/useLsState';

interface StockValueProviderType {
  children: ReactNode;
  isSteel?: boolean;
}

interface StockValueContextType {
  setStockAmount: Dispatch<SetStateAction<number>>;
  setValuePerItem: Dispatch<SetStateAction<number>>;
  minValuePerItem: number;
  valuePerItem: number;
  stockAmount: number;
  stockValue: number;
  isSteel?: boolean;
}

const defaultContextValue = {
  setValuePerItem: () => {},
  setStockAmount: () => {},
  minValuePerItem: 0,
  valuePerItem: 0,
  isSteel: false,
  stockAmount: 0,
  stockValue: 0,
}

export const StockValueContext = createContext<StockValueContextType>(defaultContextValue);

export const StockValueProvider = ({ children, isSteel }: StockValueProviderType) => {
  const initialValuePerItem = isSteel ? 2 : 3;
  const [stockAmount, setStockAmount] = useLsState(`${isSteel ? 'steel' : 'titan'}Stock`, 1);
  const [valuePerItem, setValuePerItem] = useLsState(`${isSteel ? 'steel' : 'titan'}ValuePerItem`, initialValuePerItem);
  const stockValue = stockAmount * valuePerItem;
  const value = {
    minValuePerItem: initialValuePerItem,
    setValuePerItem,
    setStockAmount,
    valuePerItem,
    stockAmount,
    stockValue,
    isSteel
  }

  return (
    <StockValueContext.Provider value={value}>
      {children}
    </StockValueContext.Provider>
  );
};