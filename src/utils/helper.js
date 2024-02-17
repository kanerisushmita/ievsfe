let algorithm = import.meta.env.VITE_APP_ALGORITHM;
let password = import.meta.env.VITE_APP_ENC_PASS;

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
  return;
};

const getLocalStorageValue = (key) => {
  return localStorage.getItem(key);
};

const removeLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
const clearLocalStorage = (key) => {
  return localStorage.clear();
};
export { setLocalStorage, getLocalStorageValue, removeLocalStorage, clearLocalStorage };
