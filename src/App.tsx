import styles from './app.module.scss';
import { StockValueProvider } from './providers/StockValue';
import { MegaCredit } from './sections/megaCredit/MegaCredit';
import { Plants } from './sections/plants/Plants';
import { MonetizableResources } from './sections/monetizableResources/MonetizableResources';
import { Energy } from './sections/energy/Energy';
import { Heat } from './sections/heat/Heat';

const App = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>TFM - resources manager</h1>
    <MegaCredit />
    <Plants />
    <StockValueProvider initialValuePerItem={2}>
      <MonetizableResources isSteel />
    </StockValueProvider>
    <StockValueProvider initialValuePerItem={3}>
      <MonetizableResources />
    </StockValueProvider>
    <Energy />
    <Heat />
  </div>
);

export default App;
