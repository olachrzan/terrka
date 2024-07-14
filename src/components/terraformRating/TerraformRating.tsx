import { useContext } from 'react';
import styles from './terraformRating.module.scss';
import { RefsContext } from '../../providers/Refs';
import { useLsState } from '../../hooks/useLsState';
import { useInput } from '../../hooks/useInput';

export const TerraformRating = () => {
  const { terraformRatingRef } = useContext(RefsContext);
  const [inputValue, setInputValue] = useLsState('terraformRating', 20);
  const minValue = 0;
  const maxValue = 999;
  const {
    increaseInputValue,
    handleInputChange,
    handleOnBlur
  } = useInput({ inputValue, maxValue, minValue, setInputValue });
  
  return (
    <div className={styles.wrapper}>
      <span className={styles.text}>TR = </span>
      <input
        className={styles.input}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        min={minValue}
        max={maxValue}
        type={'number'}
        value={inputValue.toString()}
        ref={terraformRatingRef}
      />
      <button
        className={styles.changeValueButton}
        onClick={increaseInputValue}
        disabled={inputValue >= maxValue}
      >
        {'+1'}
      </button>
    </div>
  );
};