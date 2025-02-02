let hooks = [],
  currentHook = 0;

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
  return [hooks[currentHook++], useState];
};

export default MyReact;
