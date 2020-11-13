import defaultAxios from "axios";
// import { useState, useEffect } from "react";
import React, { useState, useEffect, useRef, useCallback } from "react";
// import "./styles.css";
// import useAxios from "./useAxios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        console.log(data);
        setState({ ...state, loading: false, data });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state, refetch };
};

export default function UserAxios() {
  const { loading, data, error, refetch } = useAxios({
    // url: "https://cors-anywhere.herokuapp.com"
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  // console.log(
  //   `Loading:${loading}\nError:${error}\nData:${JSON.stringify(data)}`
  // );
  return (
    <div className="App">
      <h3>* User Axios</h3>
      <h5>{data && data.status}</h5>
      <h5>{loading && "Loading"} </h5>
      <h5>{error} </h5>
      {/* <h5>{String(data.data)}</h5> */}
      {/* <h5>{JSON.stringify(data)}</h5> */}
      <button onClick={refetch}>refetch</button>
    </div>
  );
}
