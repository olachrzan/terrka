import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../wrapper/SectionWrapper';
import { ResourceValue } from '../../components/resourceValue/ResourceValue';
import buildingIcon from './buildingIcon.png';
import icon from './icon.png';

export const Steel = () => {

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <ResourceValue multiplier={2} dividentSrc={buildingIcon} divisorSrc={icon} />
      <AmountField />
      <AmountField isStock defaultValue={2} step={2} />
    </SectionWrapper>
  )
};