import { useContext } from 'react';
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
  const { setStockAmount, stockValue } = useContext(StockValueContext);

  return (
    <SectionWrapper>
      <Icon src={isSteel ? tools : star} />
      <ResourceValue
        dividentSrc={isSteel ? building : space }
        divisorSrc={isSteel ? tools : star}
      />
      <AmountField />
      <AmountField
        monetizableResources={{ stockValue, updateStockAmount: setStockAmount }}
        isStock
      />
    </SectionWrapper>
  )
};