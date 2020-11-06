import React, { useState, useEffect } from "react";

const UseEffectSample = (pros) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [parentname, setParentname] = useState(pros.parentname);

  useEffect(() => {
    console.log("렌더링 될 때마다 수행");
    console.log({
      name,
      nickname
    });
  });

  useEffect(() => {
    console.log("마운트 될 때만 실행됩니다.");
  }, []);

  useEffect(() => {
    console.log("name stats가 변환될때만 수행 ", name);
  }, [name]);

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });

  useEffect(() => {
    return () => {
      console.log("언마운트 될 때만 실행됩니다.");
    };
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        UseEffect:
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
        <div>
          <button onClick={() => setParentname(pros.parentname)}>
            {" "}
            부모이름가져오기
          </button>
          <b>부모이름: </b>
          {parentname}
        </div>
      </div>
    </div>
  );
};

export default UseEffectSample;
