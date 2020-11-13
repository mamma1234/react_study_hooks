import React, { useState, useEffect, useRef } from "react";
// import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration != "number" || typeof delay != "number") {
    return;
  }
  const element = useRef();
  // console.log("element.current", element.current);
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      console.log("opacity");
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
export default function UserFadeIn() {
  // const [item, setItem] = useState(5);
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div className="App">
      <h3>* User Fade In</h3>
      <h5 {...fadeInH1}>Hello Ref Hook</h5>
      <p {...fadeInP}>lorem ipsum adsaf</p>
    </div>
  );
}
