import { RefObject, useEffect } from 'react';

export const useEventListener = (
  ref: RefObject<HTMLButtonElement>,
  event: string,
  callback: () => void,
  deps: number[]
) => {
  useEffect(() => {
    const element = ref.current;
    element?.addEventListener(event, callback);

    return () => element?.removeEventListener(event, callback);
  }, [...deps]);
};