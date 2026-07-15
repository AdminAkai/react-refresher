import styles from './Modal.module.css'

const Modal = ({ toggleModal, showModal, children }) => (
  <dialog open={showModal} className={styles.backdrop} onClick={toggleModal}>
    <div className={styles.modal}>
      {children}
    </div>
  </dialog>
)

export default Modal