import React, { useState } from "react";
import "./ToggleStyles.css";
// //stateless
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// //stateful
// function Toggle2() {
//   return <div className="toggle"></div>;
// }

function Toggle() {
  //1. enaling state : useState (initialize value)
  //2. initialize state: useState(false)
  //3.reading state:
  //4. update state:
  //   const a = useState(false);
  //   console.log(a);
  //   console.log(a[0]);
  //   console.log(a[1]);
  const [on, setOn] = useState(false);
  console.log(on);
  const handleToggle = () => {
    setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
