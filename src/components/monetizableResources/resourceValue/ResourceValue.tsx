import { useContext } from 'react';
import { StockValueContext } from '../../../providers/StockValue';
import styles from './resourceValue.module.scss';
import { Icon } from '../../../components/icon/Icon';
import { useInput } from '../../../hooks/useInput';

interface ResourceValueType {
  dividentSrc: string;
  divisorSrc: string;
}

export const ResourceValue = ({ dividentSrc, divisorSrc}: ResourceValueType) => {
  const { valuePerItem, setValuePerItem, minValuePerItem } = useContext(StockValueContext);
  const maxValuePerItem = 20;
  const { handleInputChange, handleOnBlur } = useInput({
    setInputValue: setValuePerItem,
    minValue: minValuePerItem,
    maxValue: maxValuePerItem,
    inputValue: valuePerItem,
  });

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
        max={maxValuePerItem}
      />
      <span className={styles.currency}>M€</span>
    </div>
  );
};