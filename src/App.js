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
      <div>------------------------------------------</div>
      <UseReducerSample />
      <UseReducer2Sample />

      <UseMemoSample />
      <UseCallbackSample />
      <UseRefSample />
      <UseInputsSample />
      <UsePromiseSample />
    </>
  );
};
export default App;
