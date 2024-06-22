import { useContext } from 'react';
import styles from './nextGeneration.module.scss';
import { RefsContext } from '../../providers/Refs';

export const NextGeneration = () => {
const { nextGenButtonRef } = useContext(RefsContext);

  const onButtonClick = () => {
    if (!nextGenButtonRef.current) return;

    const event = new Event("nextGeneration");

    nextGenButtonRef.current.dispatchEvent(event);
  };

  return (
    <button className={styles.button} onClick={onButtonClick} ref={nextGenButtonRef}>
      next generation
    </button>
  );
};