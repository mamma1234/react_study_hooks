import React, { useState } from "react";
import UseStateSample from "./UseStateSample";
import UseEffectSample from "./UseEffectSample";
import CreateContextSample from "./CreateContextSample";
import UseReducerSample from "./UseReducerSample";
import UseReducer2Sample from "./UseReducer2Sample";
import UseMemoSample from "./UseMemoSample";
import UseCallbackSample from "./UseCallbackSample";
import UseRefSample from "./UseRefSample";
// import UseInputsSample from "./UseInputsSample";
// import UsePromiseSample from "./UsePromiseSample";
import UseContextSample from "./UseContextSample";
import Composition from "./Composition";
import RefSample from "./RefSample";
import UseImperativeHandleSample from "./UseImperativeHandleSample";
import UseLayoutEffectSample from "./UseLayoutEffectSample";
import UseDebugValueSample from "./UseDebugValueSample";

import UserInput from "./UserInput";
import UserPromise from "./UserPromise";
import UserTabs from "./UserTabs";
import UserTitle from "./UserTitle";
import UserClick from "./UserClick";
import UserConfirm from "./UserConfirm";
import UserBeforeLeave from "./UserBeforeLeave";
import UserFadeIn from "./UserFadeIn";
import UserNetwork from "./UserNetwork";
import UserScroll from "./UserScroll";
import UserFullscreen from "./UserFullscreen";
import UserNotification from "./UserNotification";
import UserAxios from "./UserAxios";
import TestRef from "./TestRef";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [myname, setMyname] = useState("father");
  // return <Counter />;
  const onChangeName = (e) => {
    setMyname(e.target.value);
  };

  return (
    <>
      <h1>Hooks</h1>
      {/* <UseStateSample />
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
      <div>------------------------------------------</div> */}
      {/* <UseContextSample />
      <CreateContextSample />
      <Composition /> */}
      {/* <div>------------------------------------------</div> */}
      {/* <UseReducerSample />
      <UseReducer2Sample />
      <div>------------------------------------------</div>
      <UseCallbackSample />
      <div>------------------------------------------</div>
      <UseMemoSample />
      <div>------------------------------------------</div> */}
      {/* <UseRefSample />
      <RefSample />
      <div>------------------------------------------</div>
      <UseImperativeHandleSample />
      <div>------------------------------------------</div>
      <UseLayoutEffectSample />
      <div>------------------------------------------</div>
      <UseDebugValueSample />
      <div>------------------------------------------</div> */}

      <h1>User Hooks</h1>
      {/* <UserInput /> */}
      {/* <UserPromise /> */}
      {/* <UserTabs /> */}
      {/* <UserTitle /> */}
      {/* <UserClick /> */}
      {/* <UserConfirm /> */}
      {/* <UserBeforeLeave /> */}
      {/* <UserFadeIn /> */}
      {/* <UserNetwork /> */}
      {/* <UserScroll /> */}
      {/* <UserFullscreen /> */}
      {/* <UserNotification /> */}
      {/* <UserAxios /> */}
      <TestRef />
    </>
  );
};
export default App;
