import React, { createContext, useContext } from "react";

const ThemeContext = createContext("red");
const CreateContextSample = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: "24px",
    height: "24px",
    background: theme
  };
  return <div style={style}>......Context......</div>;
};

export default CreateContextSample;
