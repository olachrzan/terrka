import { ReactNode, RefObject, createContext, createRef, useRef } from 'react';

interface RefsContextType {
  terraformRatingRef: RefObject<HTMLInputElement | null>;
  nextGenButtonRef: RefObject<HTMLButtonElement | null>;
  energyStockRef: RefObject<HTMLInputElement | null>;
}

const defaultContextValue = {
  terraformRatingRef: createRef<HTMLInputElement>(),
  nextGenButtonRef: createRef<HTMLButtonElement>(),
  energyStockRef: createRef<HTMLInputElement>(),
}

export const RefsContext = createContext<RefsContextType>(defaultContextValue);

export const RefsProvider = ({ children }: { children: ReactNode }) => {
  const terraformRatingRef = useRef<HTMLInputElement>(null);
  const nextGenButtonRef = useRef<HTMLButtonElement>(null);
  const energyStockRef = useRef<HTMLInputElement>(null);


  const value = {
    terraformRatingRef,
    nextGenButtonRef,
    energyStockRef,
  };

  return (
    <RefsContext.Provider value={value}>
      {children}
    </RefsContext.Provider>
  );
}