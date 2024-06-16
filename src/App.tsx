import styles from './app.module.scss';
import { StockValueProvider } from './providers/StockValue';
import { TerraformRating } from './components/terraformRating/TerraformRating';
import { NextGeneration } from './components/nextGeneration/NextGeneration';
import { MegaCredit } from './components/megaCredit/MegaCredit';
import { MonetizableResources } from './components/monetizableResources/MonetizableResources';
import { ResourceBox } from './components/resourceBox/ResourceBox';
import plantsLogo from './images/plantsLogo.png';
import energyLogo from './images/energyLogo.png';
import heatLogo from './images/heatLogo.png';

const App = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>TFM - resources manager</h1>
    <TerraformRating />
    <NextGeneration />
    <MegaCredit />
    <ResourceBox icon={plantsLogo} hasAdditionalButton />
    <StockValueProvider initialValuePerItem={2}>
      <MonetizableResources isSteel />
    </StockValueProvider>
    <StockValueProvider initialValuePerItem={3}>
      <MonetizableResources />
    </StockValueProvider>
    <ResourceBox icon={energyLogo} />
    <ResourceBox icon={heatLogo} hasAdditionalButton/>
  </div>
);

export default App;
