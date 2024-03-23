import { useContext } from 'react';
import { StockValueContext } from '../../providers/StockValue';
import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../../components/wrapper/SectionWrapper';
import { ResourceValue } from '../../components/resourceValue/ResourceValue';
import spaceIcon from './spaceIcon.png';
import icon from './icon.png';

export const Titanium = () => {
  const { setStockAmount, stockValue } = useContext(StockValueContext);

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <ResourceValue dividentSrc={spaceIcon} divisorSrc={icon} />
      <AmountField />
      <AmountField
        monetizableResources={{ stockValue, updateStockAmount: setStockAmount }}
        isStock
      />
    </SectionWrapper>
  )
};