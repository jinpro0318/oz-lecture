const setItem = function (key, val) {
  sessionStorage.setItem(key, val);
};

const getItem = function (key) {
  return sessionStorage.getItem(key);
};

export default {
  getItem,
  setItem,
};
