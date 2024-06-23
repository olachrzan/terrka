import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useLsState = (key: string, defaultValue: number): [number, Dispatch<SetStateAction<number>>] => {
  const [itemValue, setItemValue] = useState(getInitialValue);

  function setItemToLS(value: number) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  function getInitialValue() {
    const value = localStorage.getItem(key);

    if (!value) {
      setItemToLS(defaultValue);
      
      return defaultValue;
    }

    return JSON.parse(value);
  }

  useEffect(() => {
    setItemToLS(itemValue);
  }, [itemValue]);

  return [itemValue, setItemValue];
};