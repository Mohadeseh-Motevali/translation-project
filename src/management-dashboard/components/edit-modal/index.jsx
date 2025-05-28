import { use } from "react";
import { translationContext } from "../../../context/translationContext";
import style from "./edit.module.css";
const EditModal = ({
  setOpen,
  item,
  editWordText,
  editTranslationText,
  setEditWordText,
  setEditTranslationText,
}) => {
  const { language, editWord } = use(translationContext);
  return (
    <>
      <div className={style.box}>
        <div>
          <label> word :</label>{" "}
          <input
            value={editWordText}
            onChange={(e) => setEditWordText(e.target.value)}
          />
        </div>
        <div>
          <label> translation :</label>{" "}
          <input
            value={editTranslationText}
            onChange={(e) => setEditTranslationText(e.target.value)}
          />
        </div>
      </div>
      <button
        className={style.button}
        onClick={() => {
          setEditWordText("");
          setEditTranslationText("");
          editWord(item.id, editWordText, {
            ...item.translations,
            [language]: editTranslationText,
          });
          setOpen(false);
        }}
      >
        edit
      </button>
    </>
  );
};
export default EditModal;
