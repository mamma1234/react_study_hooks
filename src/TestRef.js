import React, { useState, useRef, useEffect } from "react";

const useEnter = () => {
  const [foc, setFoc] = useState();
  const onKeydown = (event) => {
    // setFoc("2");
    console.log("onKeydown focus:", foc);
    // console.log("key:", event.key);
    if (event.key === "Enter") {
      if (foc < 5) {
        setFoc(foc + 1);
      } else if (foc > 4) {
        setFoc(1);
      } else {
        setFoc(1);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  });

  console.log("return:", foc);
  return foc;
};

const TestRef = () => {
  const inputEl = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);
  const inputEl5 = useRef(null);
  // const [foc, setFoc] = useState("");
  const enter = useEnter();

  // setFoc("2");
  console.log("enter:", enter);

  useEffect(() => {
    console.log("start useEffect");
    console.log("useEffect focus:", enter);
    if (enter === 1) {
      inputEl.current.focus();
    } else if (enter === 2) {
      inputEl2.current.focus();
    } else if (enter === 3) {
      inputEl3.current.focus();
    } else if (enter === 4) {
      inputEl4.current.focus();
    } else if (enter === 5) {
      inputEl5.current.focus();
    } else {
      inputEl.current.focus();
    }
  }, [enter]);

  return (
    <div>
      <h4>TestRef</h4>
      {/* <h3>{foc}</h3> */}
      <h3>?{enter}</h3>
      <input ref={inputEl} />
      <input ref={inputEl2} />
      <input ref={inputEl3} />
      <input ref={inputEl4} />
      <input ref={inputEl5} />
    </div>
  );
};

export default TestRef;
