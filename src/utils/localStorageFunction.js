export const addLocalStrorage = (newWords) => {
  localStorage.setItem("words", JSON.stringify(newWords));
};

export const getDataFromLocalStrorage = () => {
  let data = JSON.parse(localStorage.getItem("words"));
  return data;
};
export const deleteDataInLocalStrorage = () => {
  localStorage.removeItem("words");
};
