import styles from './app.module.scss';
import { MegaCredit } from './sections/megaCredit/MegaCredit';

const App = () => (
  <>
    <h1 className={styles.header}>TFM - resources manager</h1>
    <MegaCredit />
  </>
);

export default App;
