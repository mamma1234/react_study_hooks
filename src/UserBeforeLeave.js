import React, { useState, useEffect, useRef } from "react";
// import "./styles.css";

const useBeforeLeave = (onBefore) => {
  if (!onBefore && typeof onBefore !== "function") {
    return;
  }

  const handle = (event) => {
    console.log("leave");
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function BeforeLeave() {
  const [item, setItem] = useState(4);
  const beforeLife = () => console.log("pls don't leave");
  useBeforeLeave(beforeLife);

  return (
    <div className="App">
      <h3>* User BeforeLeave</h3>
      <h5>client 영역 체크</h5>
    </div>
  );
}
