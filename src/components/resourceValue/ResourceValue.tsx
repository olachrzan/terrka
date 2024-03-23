import { ChangeEvent, SetStateAction, useContext, useState } from 'react';
import { StockValueContext } from '../../providers/StockValue';
import styles from './resourceValue.module.scss';
import { Icon } from '../icon/Icon';

interface ResourceValueType {
  dividentSrc: string;
  divisorSrc: string;
}

export const ResourceValue = ({ dividentSrc, divisorSrc}: ResourceValueType) => {
  const { valuePerItem, setValuePerItem, minValuePerItem } = useContext(StockValueContext);
  const [inputValue, setInputValue] = useState(valuePerItem);
  const maxValue = 20;

  const updateStates = (newValue: SetStateAction<number>) => {
    setInputValue(newValue);
    setValuePerItem(newValue);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    if (currentValue <= minValuePerItem) {
      updateStates(minValuePerItem);
    } else if (currentValue >= maxValue) {
      updateStates(maxValue);
    } else {
      updateStates(currentValue);
    }
  };
  
  return (
    <div className={styles.wrapper}>
      <Icon src={dividentSrc} isSmall/>
      {':'}
      <Icon src={divisorSrc} isSmall/>
      {'='}
      <input
        className={styles.input}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        value={inputValue}
        type={'number'}
        min={minValuePerItem}
        max={maxValue}
      />
      <span className={styles.currency}>M€</span>
    </div>
  );
};