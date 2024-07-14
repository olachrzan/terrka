import { ChangeEvent, useContext } from 'react';
import { StockValueContext } from '../../../providers/StockValue';
import styles from './resourceValue.module.scss';
import { Icon } from '../../../components/icon/Icon';

interface ResourceValueType {
  dividentSrc: string;
  divisorSrc: string;
}

export const ResourceValue = ({ dividentSrc, divisorSrc}: ResourceValueType) => {
  const { valuePerItem, setValuePerItem, minValuePerItem } = useContext(StockValueContext);
  const maxValue = 20;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValuePerItem(Number(e.target.value));
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    if (currentValue <= minValuePerItem) {
      setValuePerItem(minValuePerItem);
    } else if (currentValue >= maxValue) {
      setValuePerItem(maxValue);
    } else {
      setValuePerItem(currentValue);
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
        value={valuePerItem.toString()}
        type={'number'}
        min={minValuePerItem}
        max={maxValue}
      />
      <span className={styles.currency}>M€</span>
    </div>
  );
};