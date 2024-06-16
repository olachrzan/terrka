import { AmountField } from '../amountField/AmountField';
import megaCredit from '../../images/megaCreditLogo.png';
import { Icon } from '../icon/Icon';
import { SectionWrapper } from '../wrapper/SectionWrapper';

export const MegaCredit = () => {

  return (
    <SectionWrapper>
      <Icon src={megaCredit} />
      <AmountField defaultValue={0} minValue={-5} />
      <AmountField defaultValue={20} isStock />
    </SectionWrapper>
  )
};