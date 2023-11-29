import { useState } from "react";

export default function Mirror() {
  const [mirror, setMirror] = useState("");

  function onChangeHandler(e) {
    console.log(e.target.value);
    setMirror(e.target.value);
  }

  return (
    <div id="mirror-section" className="sections">
      <h2 className="section-headers">Mirror</h2>
      <input id="mirror-input" onChange={onChangeHandler}></input>
      <p id="mirror-reflection">{mirror}</p>
      <hr className="section-dividers" />
    </div>
  );
}
