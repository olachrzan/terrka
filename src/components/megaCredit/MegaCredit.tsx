import { useState } from 'react';
import { AmountField } from '../amountField/AmountField';
import megaCredit from '../../images/megaCreditLogo.png';
import { Icon } from '../icon/Icon';
import { SectionWrapper } from '../wrapper/SectionWrapper';

export const MegaCredit = () => {
  const [production, setProduction] = useState(0);
  const [stock, setStock] = useState(20);

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