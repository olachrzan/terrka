import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useLsState = (key: string, defaultValue: number): [number, Dispatch<SetStateAction<number>>] => {
  const [itemValue, setItemValue] = useState(getInitialValue);

  useEffect(() => {
    const callback = () => {
      setItemValue(defaultValue);
      setItemToLS(defaultValue);
    }

    window.addEventListener('resetGame', callback);

    return () => window.removeEventListener('resetGame', callback);
  }, []);

  useEffect(() => {
    setItemToLS(itemValue);
  }, [itemValue]);

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

  return [itemValue, setItemValue];
};