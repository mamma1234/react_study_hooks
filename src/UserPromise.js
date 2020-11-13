import React, { useState, useEffect } from "react";
// import usePromise from './usePromise';

const usePromise = (promiseCreator, deps) => {
  const [resolved, setResolved] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const process = async () => {
    setLoading(true);
    try {
      const result = await promiseCreator();
      setResolved(result);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    process();
  }, deps);

  return [loading, resolved, error];
};

const wait = () => {
  // 3초 후에 끝나는 프로미스를 반환
  return new Promise((resolve) =>
    setTimeout(() => resolve("Hello hooks!"), 3000)
  );
};
const UserPromise = () => {
  const [loading, resolved, error] = usePromise(wait, []);

  if (loading)
    return (
      <>
        <h3>* User Promise</h3>
        <div>로딩중..!</div>
      </>
    );
  if (error)
    return (
      <>
        <h3>* User Promise</h3>
        <div>에러 발생!</div>
      </>
    );
  if (!resolved) return null;

  return (
    <>
      <h3>* User Promise</h3>
      <div>{resolved}</div>
    </>
  );
};

export default UserPromise;
