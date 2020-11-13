import React, { useState } from "react";
import UseStateSample from "./UseStateSample";
import UseEffectSample from "./UseEffectSample";
import CreateContextSample from "./CreateContextSample";
import UseReducerSample from "./UseReducerSample";
import UseReducer2Sample from "./UseReducer2Sample";
import UseMemoSample from "./UseMemoSample";
import UseCallbackSample from "./UseCallbackSample";
import UseRefSample from "./UseRefSample";
import UseInputsSample from "./UseInputsSample";
import UsePromiseSample from "./UsePromiseSample";
import UseContextSample from "./UseContextSample";
import Composition from "./Composition";
import RefSample from "./RefSample";
import UseImperativeHandleSample from "./UseImperativeHandleSample";
import UseLayoutEffectSample from "./UseLayoutEffectSample";
import UseDebugValueSample from "./UseDebugValueSample";
const App = () => {
  const [visible, setVisible] = useState(false);
  const [myname, setMyname] = useState("father");
  // return <Counter />;
  const onChangeName = (e) => {
    setMyname(e.target.value);
  };

  return (
    <>
      <UseStateSample />
      <div>------------------------------------------</div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "UseEffect 숨기지" : "UseEffect 보이기"}
      </button>
      {visible && <input value={myname} onChange={onChangeName} />}

      {visible && (
        <div>
          <b>부모이름: </b>
          {myname}
        </div>
      )}
      {visible && <UseEffectSample parentname={myname} />}
      <div>------------------------------------------</div>
      <UseContextSample />
      <CreateContextSample />
      <Composition />
      <div>------------------------------------------</div>
      <UseReducerSample />
      <UseReducer2Sample />
      <div>------------------------------------------</div>
      <UseCallbackSample />
      <div>------------------------------------------</div>
      <UseMemoSample />
      <div>------------------------------------------</div>
      <UseRefSample />
      <RefSample />
      <div>------------------------------------------</div>
      <UseImperativeHandleSample />
      <div>------------------------------------------</div>
      <UseLayoutEffectSample />
      <div>------------------------------------------</div>
      <UseDebugValueSample />
      <div>------------------------------------------</div>
      <UseInputsSample />
      <UsePromiseSample />
    </>
  );
};
export default App;
