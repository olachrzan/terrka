import { StockValueProvider } from '../../providers/StockValue';
import { MegaCredit } from '../megaCredit/MegaCredit';
import { MonetizableResources } from '../monetizableResources/MonetizableResources';
import { ResourceBox } from '../resourceBox/ResourceBox';
import plantsLogo from '../../images/plantsLogo.png';
import energyLogo from '../../images/energyLogo.png';
import heatLogo from '../../images/heatLogo.png';

export const Boxes = () => {
  return (
    <>
      <MegaCredit />
      <ResourceBox
        icon={plantsLogo}
        hasAdditionalButton
      />
      <StockValueProvider initialValuePerItem={2}>
        <MonetizableResources isSteel />
      </StockValueProvider>
      <StockValueProvider initialValuePerItem={3}>
        <MonetizableResources />
      </StockValueProvider>
      <ResourceBox
        icon={energyLogo}
      />
      <ResourceBox
        icon={heatLogo}
        hasAdditionalButton
      />
    </>
  );
};