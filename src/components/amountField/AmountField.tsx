import { ChangeEvent, SetStateAction, useState } from 'react';
import styles from './amountField.module.scss';

interface AmountFieldType {
  defaultValue?: number;
  minValue?: number;
  isStock?: boolean;
  monetizableResources?: {
    updateStockAmount: (value: SetStateAction<number>) => void;
    stockValue: number;
  };
}

export const AmountField = ({
  monetizableResources,
  defaultValue = 1,
  isStock = false,
  minValue = 0,
}: AmountFieldType) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  const updateStates = (newValue: SetStateAction<number>) => {
    setInputValue(newValue);
    monetizableResources && monetizableResources.updateStockAmount(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    updateStates(currentValue < minValue ? minValue : currentValue);
  };

  const increaseInputValue = () => {
    updateStates(prev => prev + 1);
  };

  const decreaseInputValue = () => {
    if (inputValue - 1 < minValue) {
      updateStates(minValue);
    } else {
      updateStates(prev => prev - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{isStock ? 'stock:' : 'production:' }</span>
      <button className={styles.changeValueButton} onClick={decreaseInputValue}>
        {'-1'}
      </button>
      <input
        className={styles.input}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        min={minValue}
        type={'number'}
        value={inputValue}
      />
      <button className={styles.changeValueButton} onClick={increaseInputValue}>
        {'+1'}
      </button>
      {monetizableResources && (
        <span className={styles.info}>
          Stock value: <b>{monetizableResources.stockValue}</b>M€
        </span>
      )}
    </div>
  );
};