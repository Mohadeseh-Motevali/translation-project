import { use } from "react";
import { translationContext } from "../../../context/translationContext";
import style from "./custom.module.css";
const CustomWordComponent = ({ item }) => {
  const { language } = use(translationContext);
  return (
    <div className={style.box}>
      <span className={style.text}>{item.word}</span>
      <span>{item.translations[language] ?? "No translation yet"}</span>
    </div>
  );
};
export default CustomWordComponent;
