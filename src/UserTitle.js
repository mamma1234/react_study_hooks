import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function UserTitle() {
  const sayHello = () => console.log("hello");

  // useEffect(() => {
  //   sayHello();
  // });

  useEffect(sayHello, []);

  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);

  return (
    <div className="App">
      <h3>* User Title</h3>
      <h5>{document.querySelector("title").innerText}</h5>
    </div>
  );
}
