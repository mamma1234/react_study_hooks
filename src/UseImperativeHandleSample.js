import React, { useImperativeHandle, useRef } from "react";

const FormControl = React.forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(
    ref,
    () => ({
      getValue() {
        return inputRef.current.value;
      }
    }),
    [inputRef]
  ); // deps도 추가가능하다.
  return (
    <div className="form-control">
      <input type="text" ref={inputRef} />
    </div>
  );
});

const UseImperativeHandleSample = () => {
  const inputRef = React.useRef();
  return (
    <div className="App">
      <h4>UseImperativeHandle</h4>
      <FormControl ref={inputRef} />
      <button
        onClick={() => {
          console.log(inputRef.current.getValue());
        }}
      >
        focus
      </button>
    </div>
  );
};
export default UseImperativeHandleSample;
