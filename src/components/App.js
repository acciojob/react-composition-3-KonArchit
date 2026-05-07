import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "100px" }}>
      
      <h2 className="tooltip">
      <Tooltip text="This is a tooltip">
        <h1>Hover over me</h1>
      </Tooltip>
      </h2>
      
      <p className="tooltip">
      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>
      </p>

    </div>
  );
}

export default App;