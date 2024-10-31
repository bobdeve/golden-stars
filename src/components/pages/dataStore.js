// dataStore.js
let fetchedData = [];

export const setData = (data) => {
  fetchedData = data;
};

export const getData = () => {
  return fetchedData;
};
