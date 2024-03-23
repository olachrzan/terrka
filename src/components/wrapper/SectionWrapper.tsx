import { ReactNode } from 'react';
import styles from './sectionWrapper.module.scss';

export const SectionWrapper = ({ children }: { children: ReactNode }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);