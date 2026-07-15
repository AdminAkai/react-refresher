import { useNavigate } from 'react-router-dom';

import styles from './Modal.module.css'

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      navigate('/');
    }
  }

  return ( 
    <dialog open className={styles.backdrop} onClick={closeModal}>
      <div className={styles.modal}>
        {children}
      </div>
    </dialog>
  )
}

export default Modal