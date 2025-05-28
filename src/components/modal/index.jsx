import { XMarkIcon } from "@heroicons/react/20/solid";
import style from "./modal.module.css";
const Modal = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={style.modal} onClick={handleOverlayClick}>
          <div>
            <button onClick={onClose} className={style["button-svg"]}>
              <XMarkIcon />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
