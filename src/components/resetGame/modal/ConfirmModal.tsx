import { useEffect } from 'react';
import styles from './confirmModal.module.scss';

interface ConfirmModalType {
  closeHandler: () => void;
  saveHandler: () => void;
}

export const ConfirmModal = ({ closeHandler, saveHandler }: ConfirmModalType) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <p>Are you sure you want to reset the game?</p>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={closeHandler}>No</button>
          <button className={`${styles.button} ${styles.redButton}`} onClick={saveHandler}>Yes</button>
        </div>
      </div>
    </div>
  )
};