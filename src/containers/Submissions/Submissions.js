import React, { useState } from "react";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import StepD from "./StepD";
import "../../assets/style/submission.css";

function Submissions() {
  const [component, updateComponent] = useState(<StepA />);

  return (
    <div className="submissions" style={{ color: "white" }}>
      <div className="heading">
        <h1 className="gradient__text">SUBMISSION</h1>
        <p>
          1st International Conference on Advanced Computational Intelligence in
          Data Futurology (ICACIDF-2023)
        </p>
      </div>
      <div>
        <ul>
          <li>
            <button type="button" onClick={() => updateComponent(<StepA />)}>
              StepA
            </button>
          </li>
          <li>
            <button type="button" onClick={() => updateComponent(<StepB />)}>
              StepB
            </button>
          </li>
          <li>
            <button type="button" onClick={() => updateComponent(<StepC />)}>
              StepC
            </button>
          </li>
          <li>
            <button type="button" onClick={() => updateComponent(<StepD />)}>
              StepD
            </button>
          </li>
        </ul>
      </div>
      <div>{component}</div>
    </div>
  );
}

export default Submissions;
