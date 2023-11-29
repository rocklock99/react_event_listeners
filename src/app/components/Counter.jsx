import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function buttonClickHandler(e) {
    console.log(e.target.id);
    if (e.target.id === "decrease-button") {
      setCount((count) => count - 1);
    } else if (e.target.id === "increase-button") {
      setCount((count) => count + 1);
    }
  }

  return (
    <div id="counter-section" className="sections">
      <h2 className="section-headers">Counter</h2>
      <div id="counter">
        <button
          id="decrease-button"
          className="counter-buttons decrease"
          onClick={buttonClickHandler}
        >
          -
        </button>
        <p id="count-display">{count}</p>
        <button
          id="increase-button"
          className="counter-buttons"
          onClick={buttonClickHandler}
        >
          +
        </button>
      </div>
      <hr className="section-dividers" />
    </div>
  );
}
