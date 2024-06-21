import styles from './app.module.scss';
import { TerraformRating } from './components/terraformRating/TerraformRating';
import { NextGeneration } from './components/nextGeneration/NextGeneration';
import { Boxes } from './components/boxes/Boxes';

const App = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.header}>TFM - resources manager</h1>
      <TerraformRating />
      <NextGeneration />
      <Boxes />
  </div>
);

export default App;
