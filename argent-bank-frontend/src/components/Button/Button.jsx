import React from "react";
import "./Button.css";

function Button({ content, width, height, onClick, style }) {
  // Combine les styles width et height avec les styles passés via la prop style
  const buttonStyle = {
    width: width,
    height: height,
    ...style
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {content}
    </button>
  );
}

export default Button;
