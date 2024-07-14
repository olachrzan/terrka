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
    const currentDate = new Date();
    const dayInMiliseconds = 24 * 60 * 60 * 1000;
    const item = {
        value,
        expiry: currentDate.getTime() + dayInMiliseconds,
    };

    localStorage.setItem(key, JSON.stringify(item));
  }

  function setDefaultValue() {
    setItemToLS(defaultValue);
      
    return defaultValue;
  }
  
  function getInitialValue() {
    const value = localStorage.getItem(key);

    if (!value) {
      return setDefaultValue();
    }

    const item = JSON.parse(value);
    const currentDate = new Date();

    if (currentDate.getTime() > item.expiry) {
      localStorage.removeItem(key);
      
      return setDefaultValue();
    }

    return item.value;
  }

  return [itemValue, setItemValue];
};