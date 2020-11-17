import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("getAverage 평균값 ? 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const getAverage2 = (numbers) => {
  console.log("getAverage2 평균값 O 계산중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const UseMemoSample = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    console.log("onChange 함수");
    setNumber(e.target.value);
  };
  const onInsert = (e) => {
    console.log("onInsert 함수");
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);
  const avg2 = () => {
    return getAverage(list);
  };
  return (
    <div>
      <h4>useMemo</h4>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <p>
          <b>평균 값(useMemo):</b> {avg}
        </p>
        <p>{avg2()}</p>
        <p>
          <b>평균 값(렌더링 될때 마다 실행):</b> {getAverage2(list)}
        </p>
      </div>
    </div>
  );
};

export default UseMemoSample;
