import React, { useState, useReducer } from "react";
import useInput3 from "./useInputs";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    // console.log(event.target);
    // console.log(event.target.value);
    setValue(value);
  };
  return { value, onChange };
};

const useInput2 = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

// function reducer(state, action) {
//   return {
//     ...state,
//     [action.name]: action.value
//   };
// }

// const useInput3 = (initialForm) => {
//   const [state, dispatch] = useReducer(reducer, initialForm);
//   const onChange = (e) => {
//     dispatch(e.target);
//   };
//   return [state, onChange];
// };

export default function UserInput() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  const name = useInput("Mr:");
  const maxLen = (value) => value.length < 10;
  const name2 = useInput2("Mr:", maxLen);

  const [state, onChange] = useInput3({
    name3: "",
    nickname3: ""
  });
  const { name3, nickname3 } = state;

  return (
    <div className="App">
      <h3>* User Input</h3>
      <h5>Hello State Hook {item}</h5>
      <div>
        <button onClick={incrementItem}>Increment</button>
        <button onClick={decrementItem}>Decrement</button>
      </div>
      <input placeholder="Name" {...name} />
      <input placeholder="Name" {...name2} />
      <div>
        <input name="name3" value={name3} onChange={onChange} />
        <b>이름:</b> {name3}
        <input name="nickname3" value={nickname3} onChange={onChange} />
        <b>이름:</b> {nickname3}
      </div>
    </div>
  );
}
