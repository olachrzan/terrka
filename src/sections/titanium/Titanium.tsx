import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../wrapper/SectionWrapper';
import icon from './icon.png';

export const Titanium = () => {

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <AmountField />
      <AmountField isStock defaultValue={3} step={3} />
    </SectionWrapper>
  )
};