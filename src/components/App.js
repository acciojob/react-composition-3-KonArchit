import React from "react";
import Tooltip from "./Tooltip";

function App() {
  return (
    <div style={{ padding: "100px" }}>
      
      <h2 className="tooltip">
      <Tooltip text="This is a tooltip">
        This is a tooltip
      </Tooltip>
      </h2>
      
      <p className="tooltip">
      <Tooltip text="This is another tooltip">
        This is another tooltip
      </Tooltip>
      </p>

    </div>
  );
}

export default App;