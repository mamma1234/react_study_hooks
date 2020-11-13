import React, { useState, useEffect, useRef } from "react";
// import "./styles.css";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = (evnet) => {
    console.log("y", window.scrollY, " x", window.scrollX);
    setState({ y: window.scrollY, x: window.scrollX });
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  return state;
};

export default function UserScroll() {
  // const [item, setItem] = useState(5);
  const { y } = useScroll();
  console.log("y", y);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h5
        style={{ top: 250, position: "fixed", color: y > 100 ? "red" : "blue" }}
      >
        User Scroll
      </h5>
    </div>
  );
}
