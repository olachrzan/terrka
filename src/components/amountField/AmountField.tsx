import { Dispatch, RefObject, SetStateAction } from 'react';
import styles from './amountField.module.scss';
import { useInput } from '../../hooks/useInput';

interface AmountFieldType {
  setInputValue: Dispatch<SetStateAction<number>>;
  inputRef?: RefObject<HTMLInputElement | null>;
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
  const maxValue = 999;
  const {
    increaseInputValue,
    decreaseInputValue,
    handleInputChange,
    handleOnBlur
  } = useInput({ inputValue, maxValue, minValue, setInputValue });

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
        max={maxValue}
        type={'number'}
        value={inputValue.toString()}
        ref={inputRef}
      />
      <button
        className={styles.changeValueButton}
        onClick={increaseInputValue}
        disabled={inputValue >= maxValue}
      >
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