import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../../components/wrapper/SectionWrapper';
import icon from './icon.png';

export const Energy = () => {

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <AmountField />
      <AmountField isStock />
    </SectionWrapper>
  )
};