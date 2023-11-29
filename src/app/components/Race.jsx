import { useState } from "react";

export default function Race() {
  const [carMargin, setCarMargin] = useState(0);

  function onKeyDownHandler(e) {
    if (e.key === "ArrowRight") {
      setCarMargin((carMargin) => carMargin + 10);
    } else if (e.key === "ArrowLeft") {
      setCarMargin((carMargin) => carMargin - 10);
    }
  }

  return (
    <div id="race-section" className="sections">
      <h2 className="section-headers">Race</h2>
      <div
        id="racecar"
        tabIndex={0}
        onKeyDown={onKeyDownHandler}
        style={{ marginLeft: carMargin }}
      >
        🏎️
      </div>
      <hr className="section-dividers" />
    </div>
  );
}
