import { ChangeEvent, useState } from 'react';
import styles from './amountField.module.scss';

interface AmountFieldType {
  defaultValue?: number;
  minValue?: number;
  isStock?: boolean;
}

export const AmountField = ({
  defaultValue = 1,
  isStock = false,
  minValue = 0,
}: AmountFieldType) => {
  const [value, setValue] = useState(defaultValue);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const increaseInputValue = () => {
    setValue(prev => prev + 1);
  };

  const decreaseInputValue = () => {
    if (value - 1 < minValue) {
        setValue(minValue);
    } else {
      setValue(prev => prev - 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{isStock ? 'stock:' : 'production:' }</span>
      <button className={styles.changeValueButton} onClick={decreaseInputValue} >
        {'-1'}
      </button>
      <input
        className={styles.input}
        onChange={handleInputChange}
        min={minValue}
        type={'number'}
        value={value}
      />
      <button className={styles.changeValueButton} onClick={increaseInputValue}>
        {'+1'}
      </button>
    </div>
  );
};