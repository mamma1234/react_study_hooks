import React, { useState, useEffect, useRef, useCallback } from "react";
// import "./styles.css";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScrren) {
        element.current.mozRequestFullScrren();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestfullscreen) {
        element.current.msRequestfullscreen();
      }
      runCb(true);
      // if (callback && typeof callback === "function") {
      //   callback(true);
      // }
    }
  };
  const exitFull = () => {
    // document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    // if (callback && typeof callback === "function") {
    //   callback(false);
    // }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

export default function UserFullscreen() {
  // const [item, setItem] = useState(5);
  const onFullS = (isFull) => {
    console.log(isFull ? "we are full" : "web are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h3>* User Fullscreen</h3>
      <div ref={element}>
        <img src="http://cafefiles.naver.net/data34/2008/10/4/275/%C6%F7%B8%CB%BA%AF%C8%AF_%B6%F3%B8%E9_0asy0.jpg" />
        <button onClick={exitFull}>Make exit screen</button>
      </div>
      <button onClick={triggerFull}>Make full screen</button>
    </div>
  );
}
