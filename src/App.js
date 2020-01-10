import React, { useState } from 'react';
import UseStateSample from './UseStateSample';
import UseEffectSample from './UseEffectSample';
import CreateContextSample from './CreateContextSample';
import UseReducerSample from './UseReducerSample';
import UseReducer2Sample from './UseReducer2Sample';
import UseMemoSample from './UseMemoSample';
import UseCallbackSample from './UseCallbackSample';
import UseRefSample from './UseRefSample';
import UseInputsSample from './UseInputsSample';
import UsePromiseSample from './UsePromiseSample';


const App = () => {
  const [visible, setVisible] = useState(false);

  // return <Counter />;
  return (
    <>
      <button onClick={() => { setVisible(!visible); }}>{visible ? '숨기지':'보이기'}</button>
      <UseStateSample />
      <UseReducerSample />
      {visible && <UseEffectSample />}
      <UseReducer2Sample/>
      <CreateContextSample />
      <UseMemoSample/>
      <UseCallbackSample/>
      <UseRefSample/>
      <UseInputsSample/>
      <UsePromiseSample/>
    </>
  );
}
export default App;