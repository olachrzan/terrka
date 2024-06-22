import { ChangeEvent, useContext } from 'react';
import styles from './terraformRating.module.scss';
import { useInput } from '../../hooks/useInput';
import { RefsContext } from '../../providers/Refs';

export const TerraformRating = () => {
  const { terraformRatingRef } = useContext(RefsContext);
  const { inputValue, setInputValue, handleInputChange } = useInput(20);
  const minValue = 0;

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    setInputValue(currentValue < minValue ? minValue : currentValue);
  };

  const increaseInputValue = () => {
    setInputValue(prev => prev + 1);
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
        ref={terraformRatingRef}
      />
      <button className={styles.changeValueButton} onClick={increaseInputValue}>
        {'+1'}
      </button>
    </div>
  );
};