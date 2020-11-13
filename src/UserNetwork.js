import React, { useState, useEffect, useRef } from "react";
// import "./styles.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export default function UserNetwork() {
  // const [item, setItem] = useState(5);
  const handleNetworkChange = (online) => {
    console.log(online ? "web online" : "we offine");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h3>* User Network</h3>
      <h5>Hello Ref Hook {onLine ? "onLine" : "offline"} </h5>
    </div>
  );
}
