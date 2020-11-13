import React, { useEffect, useLayoutEffect } from "react";
function UseLayoutEffectSample() {
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  useEffect(() => {
    console.log("useEffect");
  });
  console.log("render");
  return (
    <>
      <h4>UseLayoutEffectSample</h4>
    </>
  );
}
export default UseLayoutEffectSample;
