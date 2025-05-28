import { use } from "react";
import CustomWordComponent from "../../components/custom-word-component";
import SelectBox from "../../../components/select-box";
import style from "./home.module.css";
import { translationContext } from "../../../context/translationContext";
const PublicView = () => {
  const { words } = use(translationContext);
  return (
    <div className={style.background}>
      <div className={style.header}>
        <h2>Word Translations</h2>
        <SelectBox type={"public-view"} />
      </div>
      {words.map((item) => (
        <CustomWordComponent key={item.id} item={item} />
      ))}
    </div>
  );
};
export default PublicView;
