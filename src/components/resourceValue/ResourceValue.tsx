import { ChangeEvent, useState } from 'react';
import styles from './resourceValue.module.scss';
import { Icon } from '../icon/Icon';

interface ResourceValueType {
  multiplier: number;
  dividentSrc: string;
  divisorSrc: string;
}

export const ResourceValue = ({ multiplier, dividentSrc, divisorSrc }: ResourceValueType) => {
  const [value, setValue] = useState(multiplier);
  const maxValue = 20;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);

    if (currentValue <= multiplier) {
      setValue(multiplier);
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
        value={Number(value)}
        type={'number'}
        min={multiplier}
        max={maxValue}
      />
    </div>
  );
};