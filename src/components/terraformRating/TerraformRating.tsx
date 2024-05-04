import { ChangeEvent, useState } from 'react';
import styles from './terraformRating.module.scss';

export const TerraformRating = () => {
  const [inputValue, setInputValue] = useState(20);
  const minValue = 0;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    setInputValue(currentValue < minValue ? minValue : currentValue);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>TR = </span>
      <input
        className={styles.input}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        min={minValue}
        type={'number'}
        value={inputValue.toString()}
      />
    </div>
  );
};