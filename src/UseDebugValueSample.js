import React, { useEffect, useState } from "react";
const useDelayedMessage = (msg, delay) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMessage(msg);
    }, delay);
  });
  React.useDebugValue(message ? "Message Set" : "Message not set");
  return message;
};
function UseDebugValueSample() {
  const delayedMessage = useDelayedMessage("foo", 5000);
  return (
    <div>
      <h4>useDebug</h4>
      <h6>React DevTools hooks display</h6>
      {delayedMessage}
    </div>
  );
}
export default UseDebugValueSample;
