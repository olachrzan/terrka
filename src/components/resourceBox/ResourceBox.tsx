import { RefObject, useContext, useState } from 'react';
import { RefsContext } from '../../providers/Refs';
import { useEventListener } from '../../hooks/useEventListener';
import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../../components/wrapper/SectionWrapper';

interface ResourceBoxType {
  stockRef?: RefObject<HTMLInputElement>;
  type: 'plants' | 'energy'| 'heat';
  hasAdditionalButton?: boolean;
  icon: string;
}

export const ResourceBox = ({ icon, type, stockRef, hasAdditionalButton }: ResourceBoxType) => {
  const { nextGenButtonRef, energyStockRef } = useContext(RefsContext);
  const [production, setProduction] = useState(1);
  const [stock, setStock] = useState(1);

  const triggerNextGeneration = () => {
    const energyStock = Number(energyStockRef.current?.value);

    if (type === 'heat') {
      setStock(prev => prev + production + energyStock);
    } else if (type === 'energy') {
      setStock(production);
    } else {
    setStock(prev => prev + production);
    }
  };

  useEventListener(nextGenButtonRef, 'nextGeneration', triggerNextGeneration, [production]); 

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <AmountField
        inputValue={production}
        setInputValue={setProduction}
      />
      <AmountField
        inputValue={stock}
        setInputValue={setStock}
        inputRef={stockRef}
        hasAdditionalButton={hasAdditionalButton}
        isStock
      />
    </SectionWrapper>
  )
};