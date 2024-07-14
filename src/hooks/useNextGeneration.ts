import { useContext, useEffect } from 'react';
import { RefsContext } from '../providers/Refs';

interface NextGenerationType {
  callback: () => void;
  deps: number[];
}

export const useNextGeneration = ({ callback, deps }: NextGenerationType) => {
  const { nextGenButtonRef } = useContext(RefsContext);

  useEffect(() => {
    const button = nextGenButtonRef.current;
    button?.addEventListener('nextGeneration', callback);

    return () => button?.removeEventListener('nextGeneration', callback);
  }, [...deps]);
};