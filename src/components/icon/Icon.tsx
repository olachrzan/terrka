import styles from './icon.module.scss';

export const Icon = ({ src }: { src: string }) => (
  <img className={styles.icon} src={src} alt={''} />
)