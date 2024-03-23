import { ChangeEvent, useState } from 'react';
import styles from './resourceValue.module.scss';
import { Icon } from '../icon/Icon';

interface ResourceValueType {
  dividentSrc: string;
  divisorSrc: string;
  minValue: number;
}

export const ResourceValue = ({ dividentSrc, divisorSrc, minValue }: ResourceValueType) => {
  const [value, setValue] = useState(minValue);
  const maxValue = 20;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    if (currentValue <= minValue) {
      setValue(minValue);
    } else if (currentValue >= maxValue) {
      setValue(maxValue);
    } else {
      setValue(currentValue);
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
        value={value}
        type={'number'}
        min={minValue}
        max={maxValue}
      />
      <span className={styles.currency}>M€</span>
    </div>
  );
};