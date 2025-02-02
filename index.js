const MyReact = {
  render(Component) {
    const Comp = Component();
    Comp.render();
    return Comp;
  },
};
