import { ChangeEvent, useState } from 'react';
import styles from './productionField.module.scss';

interface ProductionFieldType {
  defaultValue?: number;
  minValue?: number;
}

export const ProductionField = ({ defaultValue = 1, minValue = 0 }: ProductionFieldType) => {
  const [value, setValue] = useState(defaultValue);
  
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const increaseInputValue = () => {
    setValue(prev => prev + 1);
  };

  const decreaseInputValue = () => {
    setValue(prev => prev - 1);
  };

  return (
    <div className={styles.wrapper}>
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