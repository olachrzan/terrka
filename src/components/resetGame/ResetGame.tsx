import { useState } from 'react';
import styles from './resetGame.module.scss';
import { ConfirmModal } from './modal/ConfirmModal';

export const ResetGame = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetGame = () => {
    const event = new Event('resetGame');

    window.dispatchEvent(event);
    setIsModalOpen(false);
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className={styles.button} onClick={openModal}>reset game</button>
      {isModalOpen && (
        <ConfirmModal closeHandler={closeModal} saveHandler={resetGame} />
      )}
    </>
  )
};