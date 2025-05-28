import { use, useState } from "react";
import style from "./select.module.css";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { translationContext } from "../../context/translationContext";

const SelectBox = ({ type }) => {
  const { language, setLanguage } = use(translationContext);
  const [open, setOpen] = useState(false);
  const listItem = [
    ["fa", "Persian"],
    ["fr", "French"],
    ["de", "German"],
  ];
  return (
    <>
      <button className={style.button} onClick={() => setOpen(!open)}>
        {listItem.find(([key]) => key === language)[1]}
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {open && (
        <div
          className={`${style.select_items} ${
            type === "public-view" && style.right_position
          }`}
        >
          <ul className={style.ul}>
            {listItem.map((item, index) => (
              <LiCustom
                setOpen={setOpen}
                setLanguage={setLanguage}
                key={index}
                item={item}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
const LiCustom = ({ item, setLanguage, setOpen }) => {
  const [key, value] = item;
  return (
    <li
      onClick={() => {
        setLanguage(key);
        setOpen(!open);
      }}
    >
      {value}
    </li>
  );
};
export default SelectBox;
