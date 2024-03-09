import { ChangeEvent, useState } from 'react';
import styles from './amountField.module.scss';

interface AmountFieldType {
  defaultValue?: number;
  minValue?: number;
  step?: number;
}

export const AmountField = ({
  defaultValue = 1,
  minValue = 0,
  step = 1
}: AmountFieldType) => {
  const [value, setValue] = useState(defaultValue);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const increaseInputValue = () => {
    setValue(prev => prev + step);
  };

  const decreaseInputValue = () => {
    if (value - step < minValue) {
        setValue(minValue);
    } else {
      setValue(prev => prev - step);
    }
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.changeValueButton} onClick={decreaseInputValue} >
        {`-${step}`}
      </button>
      <input
        className={styles.input}
        onChange={handleInputChange}
        min={minValue}
        type={'number'}
        value={value}
      />
      <button className={styles.changeValueButton} onClick={increaseInputValue}>
        {`+${step}`}
      </button>
    </div>
  );
};