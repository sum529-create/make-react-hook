import MyReact, { useEffect, useState } from "./MyReact.mjs";
// import { useState } from "./useState.mjs";

// 1️. 컴포넌트 정의 (일반 함수)
function MyComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("foo");

  useEffect(() => {
    console.log("Effect function is called.");

    return () => {
      console.log("Cleanup function is called.");
    };
  }, [count]);

  return {
    render: () => {
      console.log("화면에 MyComponent 렌더링됨!", { count, text });
    },
    type: (txt) => setText(txt),
    click: () => setCount(count + 1),
  };
}

// 2️. MyReact의 render 실행
let App = MyReact.render(MyComponent);
App.click();
App = MyReact.render(MyComponent);
App.type("hello!");
App = MyReact.render(MyComponent);
App.click();
App = MyReact.render(MyComponent);
