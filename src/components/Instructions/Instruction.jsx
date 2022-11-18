import React from "react";
import "./Instruction.css";

const Instruction = () => {
  return (
    <div className="instruct_container">
      <h3 className="sys_head">System Instruction</h3>
      <div className="instruct">
        Please make sure you are in center of camera
      </div>
      <div className="instruct">Make sure you have good lighting</div>
      <div className="instruct">Use professional dress while recording</div>
      <div className="instruct">
        Avoid glaze and light directly to the recording camera
      </div>
      <div className="instruct">
        Not ready for video yet? Toggle video off to record responses as audio
      </div>
      <div className="instruct">
        You will have a preview of video before you finilize
      </div>
      <div className="instruct">
        Limit your answers to two minutes, timer will guide you
      </div>
      <div className="instruct">
        And lastly smile more, smile often. Good Luck!
      </div>
    </div>
  );
};

export default Instruction;
