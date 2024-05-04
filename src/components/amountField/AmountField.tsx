import { ChangeEvent, SetStateAction, useState } from 'react';
import styles from './amountField.module.scss';

interface AmountFieldType {
  hasAdditionalButton?: boolean;
  defaultValue?: number;
  minValue?: number;
  isStock?: boolean;
  monetizableResources?: {
    updateStockAmount: (value: SetStateAction<number>) => void;
    stockValue: number;
  };
}

export const AmountField = ({
  hasAdditionalButton = false,
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

  const decreaseInputValue = (step: number) => {
    if (inputValue - step < minValue) {
      updateStates(minValue);
    } else {
      updateStates(prev => prev - step);
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{isStock ? 'stock:' : 'production:' }</span>
      <button
        className={styles.changeValueButton}
        onClick={() => decreaseInputValue(1)}
        disabled={inputValue <= minValue}
      >
        {'-1'}
      </button>
      <input
        className={styles.input}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        min={minValue}
        type={'number'}
        value={inputValue.toString()}
      />
      <button className={styles.changeValueButton} onClick={increaseInputValue}>
        {'+1'}
      </button>
      {monetizableResources && (
        <span className={styles.info}>
          Stock value: <b>{monetizableResources.stockValue}</b>M€
        </span>
      )}
      {hasAdditionalButton && (
        <button
          className={`${styles.changeValueButton} ${styles.centeredButton}`}
          onClick={() => decreaseInputValue(8)}
          disabled={inputValue < 8}
        >
          {'-8'}
        </button>
      )}
    </div>
  );
};