let _val;
export const useState = (initialValue) => {
  if (!_val) {
    _val = initialValue;
  }

  function setState(newVal) {
    _val = newVal;
  }
  return [_val, setState];
};
