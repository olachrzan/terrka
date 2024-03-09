import { ProductionField } from '../../components/productionField/ProductionField';
import icon from './icon.png';
import { Icon } from '../../components/icon/Icon';
import { SectionWrapper } from '../wrapper/SectionWrapper';

export const MegaCredit = () => {

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <ProductionField defaultValue={0} />
    </SectionWrapper>
  )
};