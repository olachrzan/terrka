import { useContext } from 'react';
import { RefsContext } from '../../providers/Refs';
import { useEventListener } from '../../hooks/useEventListener';
import { useLsState } from '../../hooks/useLsState';
import { AmountField } from '../amountField/AmountField';
import megaCredit from '../../images/megaCreditLogo.png';
import { Icon } from '../icon/Icon';
import { SectionWrapper } from '../wrapper/SectionWrapper';

export const MegaCredit = () => {
  const { nextGenButtonRef, terraformRatingRef } = useContext(RefsContext);
  const [production, setProduction] = useLsState('megaCreditProduction', 0);
  const [stock, setStock] = useLsState('megaCreditStock', 20);

  const triggerNextGeneration = () => {
    setStock(prev => prev + production + Number(terraformRatingRef.current?.value))
  };

  useEventListener(nextGenButtonRef, 'nextGeneration', triggerNextGeneration, [production]); 

  return (
    <SectionWrapper>
      <Icon src={megaCredit} />
      <AmountField
        inputValue={production}
        setInputValue={setProduction}
        minValue={-5}
        />
      <AmountField
        inputValue={stock}
        setInputValue={setStock}
        isStock
        />
    </SectionWrapper>
  )
};