import { ChangeEvent, useState } from 'react';

export const useInput = (defaultValue: number) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  return {
    inputValue,
    setInputValue,
    handleInputChange
  }
};