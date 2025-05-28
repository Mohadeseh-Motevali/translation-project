import { use } from "react";
import { translationContext } from "../../../context/translationContext";
import styles from "./custom.module.css";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
const CustomWordComponent = ({ item, setItem, setType, setOpen }) => {
  const { language } = use(translationContext);
  const handleClick = (type) => {
    setType(type);
    setOpen(true);
    setItem(item);
  };
  return (
    <div className={styles.box}>
      <span className={styles.text}>{item.word}</span>
      <PencilSquareIcon onClick={() => handleClick("edit")} />
      <TrashIcon onClick={() => handleClick("delete")} />
      <span className={styles.text_translation}>
        {item.translations[language] ?? "...."}
      </span>
    </div>
  );
};
export default CustomWordComponent;
