import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect
} from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseRefSample = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);
  const inputEl2 = useRef(null);
  const inputEl3 = useRef(null);
  const inputEl4 = useRef(null);
  const inputEl5 = useRef(null);
  const [focus, setFocus] = useState();

  const onKeydown = (key) => {
    console.log("focus:", focus);
    if (key === "Enter") {
      if (focus === 1) {
        setFocus(2);
        inputEl2.current.focus();
      } else if (focus === 2) {
        setFocus(3);
        inputEl3.current.focus();
      } else if (focus === 3) {
        setFocus(4);
        inputEl4.current.focus();
      } else if (focus === 4) {
        setFocus(5);
        inputEl5.current.focus();
      } else if (focus === 5) {
        setFocus(1);
        inputEl.current.focus();
      } else {
        setFocus(1);
        inputEl.current.focus();
      }
    }
  };

  useEffect(() => {
    console.log("start useEffect");

    // const arr = [
    //   "react-select-3-input",
    //   "react-select-4-input",
    //   "react-select-6-input",
    //   "react-select-7-input",
    //   "react-select-8-input",
    //   "react-select-9-input",
    //   "react-select-10-input",
    //   "react-select-11-input"
    // ];

    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    }; // 컴포넌트가 제거 (WillUnmount)될때 실행됨

    /*
    window.addEventListener("keydown", (event) => {
      console.log(focus);
      if (event.key === "Enter") {
        // setFocus(1);
        if (focus === 1) {
          setFocus(2);
          inputEl2.current.focus();
        } else if (focus === 2) {
          setFocus(3);
          inputEl3.current.focus();
        } else if (focus === 3) {
          setFocus(4);
          inputEl4.current.focus();
        } else if (focus === 4) {
          setFocus(5);
          inputEl5.current.focus();
        } else if (focus === 5) {
          setFocus(1);
          inputEl.current.focus();
        } else {
          setFocus(1);
          inputEl.current.focus();
        }
        // console.log(event.target);

        // if (arr.indexOf(event.target.id) === arr.length-1) console.log(arr[0]);
        // else if (arr.indexOf(event.target.id)>-1) console.log(arr[arr.indexOf(event.target.id)+1]);
        // else console.log(arr[0]);

        // console.log('arr.indexOf(event.target.id):', arr.indexOf(event.target.id));
        // var isExist = (arr.indexOf(event.target.id)!== -1)

        // console.log("isExist", isExist);
      }
    });
    */
  }, []);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링 될 때만 함수 생성
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  ); // number 혹은 list 가 바뀌었을 때만 함수 생성

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <h4>useRef</h4>
      <input value={number} onChange={onChange} ref={inputEl} />
      <input value={number} onChange={onChange} ref={inputEl2} />
      <input value={number} onChange={onChange} ref={inputEl3} />
      <input value={number} onChange={onChange} ref={inputEl4} />
      <input value={number} onChange={onChange} ref={inputEl5} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default UseRefSample;
