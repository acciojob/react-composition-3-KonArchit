import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "100px" }}>
      
      <Tooltip text="This is a tooltip">
        <h1>Hover over me</h1>
      </Tooltip>

      <hr />

      <Tooltip text="This is another tooltip">
        <p>Hover over me to see another tooltip</p>
      </Tooltip>

      <hr />

    </div>
  );
}

export default App;