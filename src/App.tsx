import styles from './app.module.scss';
import { StockValueProvider } from './providers/StockValue';
import { Energy } from './sections/energy/Energy';
import { Heat } from './sections/heat/Heat';
import { MegaCredit } from './sections/megaCredit/MegaCredit';
import { Plants } from './sections/plants/Plants';
import { Steel } from './sections/steel/Steel';
import { Titanium } from './sections/titanium/Titanium';

const App = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>TFM - resources manager</h1>
    <MegaCredit />
    <Plants />
    <StockValueProvider initialValuePerItem={2}>
      <Steel />
    </StockValueProvider>
    <StockValueProvider initialValuePerItem={3}>
      <Titanium />
    </StockValueProvider>
    <Energy />
    <Heat />
  </div>
);

export default App;
