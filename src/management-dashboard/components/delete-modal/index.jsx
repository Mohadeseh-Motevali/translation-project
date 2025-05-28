import { use } from "react";
import { translationContext } from "../../../context/translationContext";
import style from "../edit-modal/edit.module.css"
const DeleteModal = ({ setOpen, item }) => {
  const { deleteWord } = use(translationContext);
  return (
    <>
      <h4>Are you sure you want to delete this?</h4>
      <div
      className={style.box}
      >
        <button
          className={style.button}
          style={{ backgroundColor: "red" }}
          onClick={() => {
            deleteWord(item.id);
            setOpen(false);
          }}
        >
          yes
        </button>
        <button
          className={style.button}
          onClick={() => {
            setOpen(false);
          }}
        >
          no
        </button>
      </div>
    </>
  );
};
export default DeleteModal;
