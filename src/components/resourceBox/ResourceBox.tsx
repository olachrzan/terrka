import { Icon } from '../../components/icon/Icon';
import { AmountField } from '../../components/amountField/AmountField';
import { SectionWrapper } from '../../components/wrapper/SectionWrapper';

interface ResourceBoxType {
  hasAdditionalButton?: boolean;
  icon: string;
}

export const ResourceBox = ({ icon, hasAdditionalButton }: ResourceBoxType) => {

  return (
    <SectionWrapper>
      <Icon src={icon} />
      <AmountField />
      <AmountField isStock hasAdditionalButton={hasAdditionalButton} />
    </SectionWrapper>
  )
};