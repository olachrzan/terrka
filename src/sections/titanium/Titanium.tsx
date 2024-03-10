import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../wrapper/SectionWrapper';
import { ResourceValue } from '../../components/resourceValue/ResourceValue';
import spaceIcon from './spaceIcon.png';
import icon from './icon.png';

export const Titanium = () => {

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <ResourceValue multiplier={3} dividentSrc={spaceIcon} divisorSrc={icon} />
      <AmountField />
      <AmountField isStock defaultValue={3} step={3} />
    </SectionWrapper>
  )
};