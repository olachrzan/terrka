import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface useInputType {
  setInputValue: Dispatch<SetStateAction<number>>;
  inputValue: number;
  minValue: number;
  maxValue: number;
}

export const useInput = ({ minValue, maxValue, inputValue, setInputValue }: useInputType) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    if (currentValue >= maxValue) {
      setInputValue(maxValue);
    } else {
      setInputValue(currentValue);
    }
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    if (currentValue <= minValue) {
      setInputValue(minValue);
    } else if (currentValue >= maxValue) {
      setInputValue(maxValue);
    } else {
      setInputValue(currentValue);
    }
  };

  const increaseInputValue = () => {
    if (inputValue + 1 > maxValue) {
      setInputValue(maxValue);
    } else {
      setInputValue(prev => prev + 1);
    }
  };

  const decreaseInputValue = (step: number) => {
    if (inputValue - step < minValue) {
      setInputValue(minValue);
    } else {
      setInputValue(prev => prev - step);
    }
  };

  return {
    increaseInputValue,
    decreaseInputValue,
    handleInputChange,
    handleOnBlur,
  };
};