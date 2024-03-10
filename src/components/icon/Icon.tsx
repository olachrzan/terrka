import styles from './icon.module.scss';

interface IconType {
  isSmall?: boolean;
  src: string;
}

export const Icon = ({ src, isSmall }: IconType) => (
  <img className={styles.icon} src={src} alt={''} data-css-is-small={isSmall} />
);