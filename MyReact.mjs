// 렌더링을 하고 컴포넌트를 다시 반환해주는 함수
const MyReact = {
  render(Component) {
    const Comp = Component();
    Comp.render();
    return Comp;
  },
};

export default MyReact;
