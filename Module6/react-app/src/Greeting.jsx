import React from "react";

function GreetingComp(props) {
  return (
    <div className="Greeting">
      <h3>Hello {props.name || "World"}!</h3>
      {props.children}
    </div>
  );
}

export default GreetingComp;
