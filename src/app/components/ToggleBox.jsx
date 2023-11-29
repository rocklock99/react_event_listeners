import { useState } from "react";

export default function ToggleBox() {
  const [isBlue, setIsBlue] = useState(false);

  function toggleClickHandler() {
    setIsBlue(!isBlue);
  }

  return (
    <div id="section-2" className="sections">
      <h2 className="section-headers">Toggle the Box</h2>
      <div
        id="toggle-box"
        className={isBlue ? "blue" : "white"}
        onClick={toggleClickHandler}
      ></div>
      <hr className="section-dividers" />
    </div>
  );
}
