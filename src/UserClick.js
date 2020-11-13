import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
      //   element.current.addEventListener("mouseenter", onClick); //useHover
    }
    return () => {
      if (element.current) {
        console.log("remove event");
        element.current.removeEventListener("click", onClick);
        // element.current.removeEventListener("mouseenter", onClick); //useHover
      }
    };
  }, []);
  return element;
};

export default function UserClick() {
  const [item, setItem] = useState(2);
  const sayHello = () => console.log("hello");

  const potato = useRef();
  setTimeout(() => potato.current.focus(), 5000);

  // const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h3>* User Click & Hover</h3>
      <input ref={potato} placeholder="la" />
      <h4 ref={title}>Hi</h4>
    </div>
  );
}
