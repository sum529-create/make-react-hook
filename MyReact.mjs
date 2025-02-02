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

// useState 훅 구현
export const useState = (init) => {
  // 현재 훅 인덱스에 저장된 값이 없으면 초기값을 설정
  hooks[currentHook] = hooks[currentHook] || init;
  const hookIdx = currentHook; // 현재 훅 인덱스 저장

  // 상태를 변경하는 함수
  const setState = (newState) => {
    hooks[hookIdx] = newState; // 새로운 상태 저장
  };

  return [hooks[currentHook++], setState]; // 현재 상태와 setState 반환
};

// useEffect 훅 구현
export const useEffect = (callback, depArray) => {
  const hasNoDeps = !depArray;
  const prevDeps = hooks[currentHook] ? hooks[currentHook].deps : undefined;

  const prevCleanup = hooks[currentHook]
    ? hooks[currentHook].cleanup
    : undefined;

  // 의존성이 변경되었는지 체크
  const hasChangedDeps = prevDeps
    ? !depArray.every((el, i) => el === prevDeps[i]) // 이전 값과 비교하여 변경 여부 체크
    : true; // 이전 의존성이 없으면 무조건 true

  if (hasNoDeps || hasChangedDeps) {
    if (prevCleanup) prevCleanup(); // 이전 클린업 함수 실행 (언마운트 효과)
    const cleanup = callback();
    hooks[currentHook] = { deps: depArray, cleanup };
  }
  currentHook++; // 다음 훅을 위해 인덱스 증가
};

export default MyReact;
