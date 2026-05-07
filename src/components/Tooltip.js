import React, { useState } from "react";

function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={()=>setIsVisible(true)}
      onMouseLeave={()=>setIsVisible(false)}
      style={{ position: "relative", display: "inline-block" }}
    >

      {isVisible && (
        <div
          className="tooltiptext"
          style={{
            position: "absolute",
            bottom: "125%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#e91c1c",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "5px",
            whiteSpace: "nowrap",
          }}
        >
          {text}
        </div>
      )}
      
      {children}
    </div>
  )
}

export default Tooltip;