let hooks = [],
  currentHook = 0,
  _deps = [];

// 렌더링을 하고 컴포넌트를 다시 반환해주는 함수
const MyReact = {
  render(Component) {
    const Comp = Component();
    Comp.render();
    currentHook = 0;
    return Comp;
  },
};

export const useState = (init) => {
  hooks[currentHook] = hooks[currentHook] || init;
  const hookIdx = currentHook;
  const setState = (newState) => {
    hooks[hookIdx] = newState;
  };
  return [hooks[currentHook++], setState];
};

export const useEffect = (callback, depArray) => {
  const hasNoDeps = !depArray;
  const hasChangedDeps = _deps
    ? !depArray.every((el, i) => el === _deps[i])
    : true;
  if (hasNoDeps || hasChangedDeps) {
    callback();
    _deps = depArray;
  }
};

export default MyReact;
