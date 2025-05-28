import CustomWordComponent from "../../components/custom-word-component";
import SelectBox from "../../../components/select-box";
import style from "./home.module.css";
import { ArrowPathIcon, PlusIcon } from "@heroicons/react/24/outline";
import Modal from "../../../components/modal";
import { use, useEffect, useRef, useState } from "react";
import { translationContext } from "../../../context/translationContext";
import DeleteModal from "../../components/delete-modal";
import EditModal from "../../components/edit-modal";
import AddModal from "../../components/add-modal";
import {
  addLocalStrorage,
  deleteDataInLocalStrorage,
} from "../../../utils/localStorageFunction";

const ManagementDashboard = () => {
  const [open, setOpen] = useState(false);
  const { words, setWords, language, setTrigger, trigger } = use(translationContext);
  const [item, setItem] = useState({});
  const [type, setType] = useState("add");
  const [editWordText, setEditWordText] = useState("");
  const [editTranslationText, setEditTranslationText] = useState();
  const [newWordText, setNewWordText] = useState("");
  const [translationNewWordText, setTranslationNewWordText] = useState("");
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleSort = () => {
    let newItems = [...words];
    const draggedItemContent = newItems.splice(dragItem.current, 1)[0];
    newItems.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setWords(newItems);
    addLocalStrorage(newItems);
  };
  const onClose = () => {
    setOpen(!open);
    setNewWordText("");
    setTranslationNewWordText("");
  };
  useEffect(() => {
    setEditWordText(item.word);
    setEditTranslationText(
      item?.translations && (item?.translations[language] ?? "")
    );
  }, [item, language]);

  return (
    <div className={style.parent_div}>
      <Modal isOpen={open} onClose={onClose}>
        {type === "add" ? (
          <AddModal
            setOpen={setOpen}
            newWordText={newWordText}
            setNewWordText={setNewWordText}
            translationNewWordText={translationNewWordText}
            setTranslationNewWordText={setTranslationNewWordText}
          />
        ) : type === "edit" ? (
          <EditModal
            setOpen={setOpen}
            editWordText={editWordText}
            setEditWordText={setEditWordText}
            editTranslationText={editTranslationText}
            setEditTranslationText={setEditTranslationText}
            item={item}
          />
        ) : (
          type === "delete" && <DeleteModal setOpen={setOpen} item={item} />
        )}
      </Modal>
      <div className={style.header}>
        <h2> Translation Management</h2>
        <button
          className={style.refresh_button}
          onClick={() => {
            deleteDataInLocalStrorage();
            setTrigger(!trigger);
          }}
        >
          <ArrowPathIcon />
        </button>
        <SelectBox />
      </div>
      <div className={style.white_box}>
        <div>
          {words.map((item, index) => (
            <div
              className={style.custom_word_component_parent}
              draggable
              onDragStart={() => {
                dragItem.current = index;
              }}
              onDragEnter={() => {
                dragOverItem.current = index;
              }}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              key={item.id}
            >
              <CustomWordComponent
                item={item}
                setItem={setItem}
                setType={setType}
                setOpen={setOpen}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={style.button}
        onClick={() => {
          setType("add");
          setOpen(true);
        }}
      >
        <PlusIcon /> Add Keyword
      </button>
    </div>
  );
};
export default ManagementDashboard;
