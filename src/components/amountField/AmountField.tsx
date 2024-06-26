import { ChangeEvent, Dispatch, RefObject, SetStateAction } from 'react';
import styles from './amountField.module.scss';

interface AmountFieldType {
  setInputValue: Dispatch<SetStateAction<number>>,
  inputRef?: RefObject<HTMLInputElement>;
  hasAdditionalButton?: boolean;
  stockValue?: number;
  inputValue: number,
  isStock?: boolean;
  minValue?: number;
}

export const AmountField = ({
  hasAdditionalButton = false,
  isStock = false,
  setInputValue,
  minValue = 0,
  inputValue,
  stockValue,
  inputRef,
}: AmountFieldType) => {
  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    setInputValue(currentValue < minValue ? minValue : currentValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const increaseInputValue = () => {
    setInputValue(prev => prev + 1);
  };

  const decreaseInputValue = (step: number) => {
    if (inputValue - step < minValue) {
      setInputValue(minValue);
    } else {
      setInputValue(prev => prev - step);
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
        ref={inputRef}
      />
      <button className={styles.changeValueButton} onClick={increaseInputValue}>
        {'+1'}
      </button>
      {stockValue != null && (
        <span className={styles.info}>
          Stock value: <b>{stockValue}</b>M€
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