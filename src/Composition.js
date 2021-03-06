import React from "react";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function Composition() {
  return (
    <FancyBorder color="blue">
      <h3 className="Dialog-title">합성 Composition</h3>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

export default Composition;
