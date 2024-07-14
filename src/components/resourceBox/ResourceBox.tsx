import { RefObject, useContext } from 'react';
import { RefsContext } from '../../providers/Refs';
import { useNextGeneration } from '../../hooks/useNextGeneration';
import { useLsState } from '../../hooks/useLsState';
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
  const { energyStockRef } = useContext(RefsContext);
  const [production, setProduction] = useLsState(`${type}Production`, 1);
  const [stock, setStock] = useLsState(`${type}Stock`, 1);

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

  useNextGeneration({ callback: triggerNextGeneration, deps: [production]}); 

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