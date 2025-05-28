import { use } from "react";
import { translationContext } from "../../../context/translationContext";
import style from "../edit-modal/edit.module.css";
const AddModal = ({
  setOpen,
  newWordText,
  setNewWordText,
  translationNewWordText,
  setTranslationNewWordText,
}) => {
  const { language, addWord } = use(translationContext);
  return (
    <>
      <div className={style.box}>
        <div>
          <label> word :</label>{" "}
          <input
            value={newWordText}
            onChange={(e) => setNewWordText(e.target.value)}
          />
        </div>
        <div>
          <label> translation :</label>{" "}
          <input
            value={translationNewWordText}
            onChange={(e) => setTranslationNewWordText(e.target.value)}
          />
        </div>
      </div>
      <button
        className={style.button}
        disabled={!newWordText || !translationNewWordText}
        onClick={() => {
          setNewWordText("");
          setTranslationNewWordText("");
          addWord(newWordText, {
            [language]: translationNewWordText,
          });
          setOpen(false);
        }}
      >
        add
      </button>
    </>
  );
};
export default AddModal;
