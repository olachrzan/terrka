import styles from './app.module.scss';
import { RefsProvider } from './providers/Refs';
import { TerraformRating } from './components/terraformRating/TerraformRating';
import { NextGeneration } from './components/nextGeneration/NextGeneration';
import { Boxes } from './components/boxes/Boxes';

const App = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>TFM - resources manager</h1>
    <RefsProvider>
      <TerraformRating />
      <NextGeneration />
      <Boxes />
    </RefsProvider>
  </div>
);

export default App;
