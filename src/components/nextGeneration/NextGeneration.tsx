import { useContext, useEffect, useRef, useState } from 'react';
import styles from './nextGeneration.module.scss';
import { RefsContext } from '../../providers/Refs';

export const NextGeneration = () => {
  const { nextGenButtonRef } = useContext(RefsContext);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const onButtonClick = () => {
    if (!nextGenButtonRef.current) return;

    const event = new Event('nextGeneration');
    
    setIsLoading(true);

    timerRef.current = setTimeout(() => {
      setIsLoading(false);
      nextGenButtonRef.current?.dispatchEvent(event);
    }, 700);
  };

  return (
    <button
      className={styles.button}
      disabled={isLoading}
      onClick={onButtonClick}
      ref={nextGenButtonRef}
    >
      next generation
    </button>
  );
};