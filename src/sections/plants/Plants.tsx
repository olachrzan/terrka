import { Icon } from '../../components/icon/Icon';
import { ProductionField } from '../../components/productionField/ProductionField';
import { SectionWrapper } from '../wrapper/SectionWrapper';
import icon from './icon.png';

export const Plants = () => {

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <ProductionField />
    </SectionWrapper>
  )
};