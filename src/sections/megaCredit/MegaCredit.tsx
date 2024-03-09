import { ProductionField } from '../../components/productionField/ProductionField';
import styles from './megaCredit.module.scss';
import icon from './icon.png';

export const MegaCredit = () => {


  return (
    <div className={styles.wrapper}>
      <img className={styles.icon} src={icon} alt={''} />
      <ProductionField defaultValue={0} />
    </div>
  )
};