import { useContext, useState } from 'react';
import { StockValueContext } from '../../providers/StockValue';
import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../../components/wrapper/SectionWrapper';
import { ResourceValue } from './resourceValue/ResourceValue';
import tools from '../../images/steelLogo.png';
import building from '../../images/building.png';
import star from '../../images/titaniumLogo.png';
import space from '../../images/space.png';

export const MonetizableResources = ({ isSteel = false }) => {
  const { stockAmount, setStockAmount, stockValue } = useContext(StockValueContext);
  const [production, setProduction] = useState(1);

  return (
    <SectionWrapper>
      <Icon src={isSteel ? tools : star} />
      <ResourceValue
        dividentSrc={isSteel ? building : space }
        divisorSrc={isSteel ? tools : star}
      />
      <AmountField
        inputValue={production}
        setInputValue={setProduction}
      />
      <AmountField
        inputValue={stockAmount}
        setInputValue={setStockAmount}
        stockValue={stockValue}
        isStock
      />
    </SectionWrapper>
  )
};