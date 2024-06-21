import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../../components/wrapper/SectionWrapper';
import { useState } from 'react';

interface ResourceBoxType {
  hasAdditionalButton?: boolean;
  icon: string;
}

export const ResourceBox = ({ icon, hasAdditionalButton }: ResourceBoxType) => {
  const [production, setProduction] = useState(1);
  const [stock, setStock] = useState(1);

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
        hasAdditionalButton={hasAdditionalButton}
        isStock
      />
    </SectionWrapper>
  )
};