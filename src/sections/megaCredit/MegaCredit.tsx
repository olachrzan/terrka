import { AmountField } from '../../components/amountField/AmountField';
import icon from './icon.png';
import { Icon } from '../../components/icon/Icon';
import { SectionWrapper } from '../../components/wrapper/SectionWrapper';

export const MegaCredit = () => {

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <AmountField defaultValue={0} minValue={-5} />
      <AmountField defaultValue={20} isStock />
    </SectionWrapper>
  )
};