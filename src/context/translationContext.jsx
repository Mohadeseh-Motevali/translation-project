import { createContext, useEffect, useState } from "react";
import wordData from "../data/wordData";
import {
  addLocalStrorage,
  getDataFromLocalStrorage,
} from "../utils/localStorageFunction";
export const translationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [language, setLanguage] = useState("fa");
  const [trigger, setTrigger] = useState(false);
  let data = getDataFromLocalStrorage();

  const UpdateData = (newWords) => {
    addLocalStrorage(newWords);
    setTrigger(!trigger);
  };

  const deleteWord = (id) => {
    const newWords = words.filter((item) => item.id !== id);
    UpdateData(newWords);
  };

  const addWord = (word, translations) => {
    let newWord = {
      id: Date.now(),
      word: word,
      translations: translations,
    };
    const newWords = [...words, newWord];
    UpdateData(newWords);
  };

  const editWord = (id, updatedWord, updatedTranslations) => {
    const newWords = words.map((item) =>
      item.id === id
        ? { ...item, word: updatedWord, translations: updatedTranslations }
        : item
    );
    UpdateData(newWords);
  };

  useEffect(() => {
    if (data) {
      setWords(data);
    } else {
      addLocalStrorage(wordData);
      setWords(wordData);
    }
  }, [trigger]);

  return (
    <translationContext.Provider
      value={{
        words,
        setWords,
        language,
        setLanguage,
        addWord,
        deleteWord,
        editWord,
        setTrigger,
        trigger
      }}
    >
      {children}
    </translationContext.Provider>
  );
};
